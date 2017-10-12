import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
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
import {Camera, CameraOptions} from '@ionic-native/camera';
import {UserService} from '../../../../services/user/user.service';
import {AttachmentModalComponent} from './attachment/attachmentModal.component';


@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent implements AfterViewChecked {
  supplementaryDataForm: FormGroup;
  process: Process;
  saveButtonActive = true;
  saveTemplateBoolean = false;
  savedProcess: boolean;
  clickHandlersAdded = false;
  title;
  inTwoYears;
  dateFormat;
  optionsCamera: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 1000,
    targetHeight: 1000
  };
  optionsGallery: CameraOptions = {
    sourceType: 0,
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 1000,
    targetHeight: 1000,
  };
  image;

  // strings that need translate service
  label_time;
  label_description;
  label_reason;
  label_value;
  label_person;
  label_tax: SafeHtml;
  warning;
  alertTitle;
  alertMessage;
  alertButtonYes;
  alertButtonNo;
  alertRequiredFieldMessage;
  alertRequiredFieldTitle;
  alertAttachmentTitle;
  alertAttachmentCamera;
  alertAttachmentGallery;
  alertCancel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,
              formBuilder: FormBuilder,
              private processStorageService: ProcessStorageService,
              private templatesStorageService: TemplatesStorageService,
              private translateService: TranslateService,
              private glossaryService: GlossaryService,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private domSanitizer: DomSanitizer,
              private decisionTreeService: DecisionTreeService,
              private camera: Camera,
              userService: UserService) {
    let now = new Date();
    let timeProposition = now.toISOString();
    this.inTwoYears = now.getFullYear() + 2;
    this.dateFormat = userService.getDateFormat()[0];
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
      tax: [this.process.supplementaryData.tax || ''],
      image: [this.process.supplementaryData.image || '']
    });
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


 addAttachment(options) {
    this.camera.getPicture(options).then(
      data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
        this.supplementaryDataForm.controls['image'].setValue(base64Image);
      }
    );
  }
  showAttachment() {
    const attachmentModal = this.modalCtrl
      .create(AttachmentModalComponent, {image: this.supplementaryDataForm.value.image});
    attachmentModal.onDidDismiss(data => {
      if (data.deleteImage) {
        this.deleteAttachment();
      }
    });
    attachmentModal.present();
  }
  deleteAttachment() {
    this.supplementaryDataForm.controls['image'].setValue('');
  }


  isFieldValid(field: string) {
    return !this.supplementaryDataForm.get(field).valid && this.supplementaryDataForm.get(field).touched;
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
            text: this.alertButtonNo,
            cssClass: 'alertButton',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: this.alertButtonYes,
            cssClass: 'alertButton',
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

  alertChooseImageFromCameraOrGallery() {
    let alert = this.alertCtrl.create({
      title: this.alertAttachmentTitle,
      buttons: [
        {
          text: this.alertAttachmentCamera,
          cssClass: 'alertButton',
          handler: () => {
            this.addAttachment(this.optionsCamera);
          }
        },
        {
          text: this.alertAttachmentGallery,
          cssClass: 'alertButton',
          handler: () => {
            this.addAttachment(this.optionsGallery);
          }
        },
        {
          text: this.alertCancel,
          cssClass: 'alertButton',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
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
    this.translateService.get('alerts.question_cancel').subscribe(
      value => {
        this.alertTitle = value;
      }
    );
    this.translateService.get('alerts.warning').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translateService.get('generics.yes').subscribe(
      value => {
        this.alertButtonYes = value;
      }
    );
    this.translateService.get('generics.no').subscribe(
      value => {
        this.alertButtonNo = value;
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
    this.translateService.get(branch + '.formScreen.alert_attachment_title').subscribe(
      value => {
        this.alertAttachmentTitle = value;
      }
    );
    this.translateService.get(branch + '.formScreen.alert_attachment_camera').subscribe(
      value => {
        this.alertAttachmentCamera = value;
      }
    );
    this.translateService.get(branch + '.formScreen.alert_attachment_gallery').subscribe(
      value => {
        this.alertAttachmentGallery = value;
      }
    );
    this.translateService.get('buttons.cancel').subscribe(
      value => {
        this.alertCancel = value;
      }
    );
    this.translateService.get(branch + '.formScreen.warning_' + this.process.procedure.emailTo).subscribe(
      value => {
        this.warning = value;
      }
    );
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }
}
