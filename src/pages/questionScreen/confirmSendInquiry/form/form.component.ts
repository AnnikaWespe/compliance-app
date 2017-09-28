import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HomePageComponent} from '../../../home/home.component';
import {ProcessStorageService} from '../../../../services/Template+ProcessStorage/processStorage.Service';
import {TemplatesStorageService} from '../../../../services/Template+ProcessStorage/templatesStorage.service';
import {EndScreenComponent} from '../../endScreen/endScreen.component';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../services/glossary/glossary.service';
import {Process} from '../../../../services/process.model';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DecisionTreeService} from '../../../../services/decisionTree/decisionTreeData.service';

@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent implements AfterViewChecked{
  supplementaryDataForm: FormGroup;
  process: Process;
  saveButtonActive = true;
  saveTemplateBoolean = false;
  savedProcess: boolean;
  clickHandlersAdded = false;
  title;

  // strings that need translate service
  label_time;
  label_description;
  label_reason;
  label_value;
  label_person;
  label_tax: SafeHtml;
  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;
  alertRequiredFieldMessage;
  alertRequiredFieldTitle;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              formBuilder: FormBuilder,
              private processStorageService: ProcessStorageService,
              private templatesStorageService: TemplatesStorageService,
              private translateService: TranslateService,
              private glossaryService: GlossaryService,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private domSanitizer: DomSanitizer,
              private decisionTreeService: DecisionTreeService) {
    let timeProposition = new Date().toISOString();
    this.title = decisionTreeService.getTitle();
    this.process = this.navParams.get('process');
    this.savedProcess = this.navParams.get('savedProcess');
    this.getTranslation();
    this.supplementaryDataForm = formBuilder.group({
      time: [this.process.supplementaryData.time || timeProposition, Validators.required],
      description: [this.process.supplementaryData.description || '', Validators.required],
      reason: [this.process.supplementaryData.reason || '', Validators.required],
      value: [this.process.supplementaryData.value || '', Validators.required],
      person: [this.process.supplementaryData.person || '', Validators.required],
      tax: [this.process.supplementaryData.tax || '', Validators.required],
      taxReceiptWhere: [this.process.supplementaryData.taxReceiptWhere || '']
    }, /*{
      validator: (group) => {
        let taxCtrl = group.controls.tax;
        let taxReceiptWhereCtrl = group.controls.taxReceiptWhere;
        if (taxCtrl.value === 'yes' && !taxReceiptWhereCtrl) {
          return {invalid: true};
        }
      }
    }*/);
    this.supplementaryDataForm.valueChanges.subscribe(
      () => {
        this.saveButtonActive = true;
      }
    );
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
  }

  saveProcess() {
    let timeStamp = Date.now().toString();
    if (this.savedProcess) {
      this.processStorageService.deleteProcess(this.process.timeStamp, this.process.info.branch);
    }
    this.process.timeStamp = timeStamp;
    this.process.supplementaryData = this.supplementaryDataForm.value;
    this.processStorageService.saveProcess(this.process, this.process.info.branch);
    this.saveButtonActive = false;
    this.savedProcess = true;
  }

  checkIfFormValid() {
    if (this.supplementaryDataForm.invalid) {
      Object.keys(this.supplementaryDataForm.controls).forEach(field => {
        const control = this.supplementaryDataForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
      this.requiredFieldAlert();

    } else {
      let timeStamp = Date.now().toString();
      this.process.supplementaryData = this.supplementaryDataForm.value;
      if (this.savedProcess) {
        this.processStorageService.deleteProcess(this.process.timeStamp, this.process.info.branch);
      }
      if (this.saveTemplateBoolean) {
        this.process.timeStamp = timeStamp;
        this.templatesStorageService.saveTemplate(this.process, this.process.info.branch);
      }
      this.navCtrl.setRoot(EndScreenComponent, {process: this.process});
    }
  }

  isFieldValid(field: string) {
    return !this.supplementaryDataForm.get(field).valid && this.supplementaryDataForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    /*if (field = 'taxReceiptWhere') {
      return {
        'has-error': this.supplementaryDataForm.value.taxReceiptWhere !== ''
      };
    }
    else {*/
    return {
      'has-error': this.isFieldValid(field)
    };
  }


  goToStartPage() {
    if (this.saveButtonActive) {
      let alert = this.alertCtrl.create({
        title: this.alertTitle,
        message: this.alertMessage,
        buttons: [
          {
            text: this.alertButton1Text,
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: this.alertButton2Text,
            handler: () => {
              this.navCtrl.setRoot(HomePageComponent);
            }
          }
        ]
      });
      alert.present();
    } else {
      this.navCtrl.setRoot(HomePageComponent);
    }
  }


  requiredFieldAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertRequiredFieldTitle,
      message: this.alertRequiredFieldMessage
    });
    alert.present();
  }


  // Helper Methods


  getTranslation() {
    let branch = this.decisionTreeService.getBranch();
    this.translateService.get(branch + '.formScreen.' + this.process.info.what + '.label_time').subscribe(
      value => this.label_time = value
    );
    this.translateService.get(branch + '.formScreen.' + this.process.info.what + '.label_description').subscribe(
      value => this.label_description = value
    );
    this.translateService.get(branch + '.formScreen.' + this.process.info.what + '.label_reason').subscribe(
      value => this.label_reason = value
    );
    this.translateService.get(branch + '.formScreen.' + this.process.info.what + '.label_value').subscribe(
      value => this.label_value = value
    );
    this.translateService.get(branch + '.formScreen.' + this.process.info.what + '.label_person').subscribe(
      value => this.label_person = value
    );
    this.translateService.get(branch + '.formScreen.label_tax').subscribe(
      value => {
        this.label_tax = this.domSanitizer.bypassSecurityTrustHtml(this.glossaryService.injectSpanTags(value));
      }
    );
    this.translateService.get(branch + '.confirmSendInquiry.alert_0').subscribe(
      value => {
        this.alertTitle = value;
      }
    );
    this.translateService.get(branch + '.confirmSendInquiry.alert_1').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translateService.get(branch + '.confirmSendInquiry.alert_2').subscribe(
      value => {
        this.alertButton1Text = value;
      }
    );
    this.translateService.get(branch + '.confirmSendInquiry.alert_3').subscribe(
      value => {
        this.alertButton2Text = value;
      }
    );
    this.translateService.get(branch + '.formScreen.alert_required-field_message').subscribe(
      value => {
        this.alertRequiredFieldMessage = value;
      }
    );
    this.translateService.get(branch + '.formScreen.alert_required-field_title').subscribe(
      value => {
        this.alertRequiredFieldTitle = value;
      }
    );
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }
}
