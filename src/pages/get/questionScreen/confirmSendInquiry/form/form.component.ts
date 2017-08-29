import {Component, HostListener} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {HomePageComponent} from '../../../../home/home.component';
import {SaveProcessesService} from '../../../../../services/saveProcesses.Service';
import {Globals} from '../../../../../app/globals';
import {SaveTemplatesService} from '../../../../../services/saveTemplates.service';
import {EndScreenComponent} from '../../endScreen/endScreen.component';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../../services/glossary.service';

@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent {


  procedure;
  info;
  title;
  supplementaryData;
  supplementaryDataForm;
  // timeStamp is set when the process already exists in saved processes in localStorage
  timeStamp;
  saveButtonActive = true;
  saveTemplateBoolean = false;
  label_time;
  label_description;
  label_reason;
  label_value;
  label_person;
  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent() {
    this.saveButtonActive = true;
  }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              formBuilder: FormBuilder,
              private saveProcessesService: SaveProcessesService,
              private saveTemplatesService: SaveTemplatesService,
              private globals: Globals,
              private translateService: TranslateService,
              private glossaryService: GlossaryService) {
    let timeProposition = new Date().toISOString();
    this.procedure = navParams.get('procedure');
    this.info = navParams.get('info');
    this.title = navParams.get('title');
    this.timeStamp = navParams.get('timeStamp');
    this.supplementaryData = navParams.get('supplementaryData') || {};
    this.getTranslation();
    this.supplementaryDataForm = formBuilder.group({
      time: [this.supplementaryData.time || timeProposition, Validators.required],
      description: [this.supplementaryData.description || '', Validators.required],
      reason: [this.supplementaryData.reason || '', Validators.required],
      value: [this.supplementaryData.value || '', Validators.required],
      person: [this.supplementaryData.person || '', Validators.required],
      tax: [this.supplementaryData.tax || '', Validators.required],
      taxReceiptWhere: [this.supplementaryData.taxReceiptWhere || '']
    });
  }

  saveProcess() {
    let data = this.createDataObject();
    let timeStamp = data.timeStamp;
    if (this.timeStamp) {
      this.saveProcessesService.deleteProcess(this.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    }
    this.timeStamp = timeStamp;
    this.saveProcessesService.saveProcess(data, this.globals.SAVED_RECEIVE_PROCESSES);
    this.saveButtonActive = false;
  }

  // validation as per https://loiane.com/2017/08/angular-reactive-forms-trigger-validation-on-submit/

  send() {
    if (this.supplementaryDataForm.invalid) {
      Object.keys(this.supplementaryDataForm.controls).forEach(field => {
        const control = this.supplementaryDataForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      let data = this.createDataObject();
      if (this.timeStamp) {
        this.saveProcessesService.deleteProcess(this.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
      }
      if (this.saveTemplateBoolean) {
        this.saveTemplatesService.saveTemplate(data, this.globals.SAVED_RECEIVE_TEMPLATES);
      }
      this.navCtrl.setRoot(EndScreenComponent, {procedure: this.procedure, info: this.info, title: this.title});
    }

  }

  isFieldValid(field: string) {
    return !this.supplementaryDataForm.get(field).valid;
  }

  displayFieldCss(field: string) {
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
    let message;
    let title;
    let alert = this.alertCtrl.create({
      title: title,
      message: message
    });
    alert.present();
  }


  // Helper Methods


  createDataObject() {
    let timeStamp = Date.now().toString();
    let data = {
      info: this.info,
      procedure: this.procedure,
      timeStamp: timeStamp,
      category: this.title,
      supplementaryData: this.supplementaryDataForm.value,
    };
    return data;
  }

  getTranslation() {
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_time').subscribe(
      value => this.label_time = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_description').subscribe(
      value => this.label_description = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_reason').subscribe(
      value => this.label_reason = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_value').subscribe(
      value => this.label_value = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_person').subscribe(
      value => this.label_person = value
    );
    this.translateService.get('receive.confirmSendInquiry.alert_0').subscribe(
      value => {
        this.alertTitle = value;
      }
    );
    this.translateService.get('receive.confirmSendInquiry.alert_1').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translateService.get('receive.confirmSendInquiry.alert_2').subscribe(
      value => {
        this.alertButton1Text = value;
      }
    );
    this.translateService.get('receive.confirmSendInquiry.alert_3').subscribe(
      value => {
        this.alertButton2Text = value;
      }
    );
  }

  openInfo(term) {
    term = this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }
}
