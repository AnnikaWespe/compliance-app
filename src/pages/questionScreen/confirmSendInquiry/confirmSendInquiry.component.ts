import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../home/home.component';
import {FormComponent} from './form/form.component';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../services/glossary/glossary.service';
import {Process} from '../../../services/process.model';
import {DecisionTreeService} from '../../../services/decisionTree/decisionTreeData.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'page-confirm-send-inquiry',
  templateUrl: 'confirmSendInquiry.component.html'
})
export class ConfirmSendInquiryComponent implements AfterViewChecked{
  process: Process;
  note: SafeHtml;
  clickHandlersAdded = false;
  continueButtonText: string;

  alertTitle;
  alertMessage;
  alertButtonYes;
  alertButtonNo;
  normalText;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private translateService: TranslateService,
              private glossaryService: GlossaryService,
              private domSanitizer: DomSanitizer,
              private elRef: ElementRef,
              private renderer: Renderer2,
              decisionTreeService: DecisionTreeService) {
    this.process = this.navParams.get('process');
    decisionTreeService
      .getConfirmInquiryPageContent(this.process.procedure.note, this.process.procedure.continueButtonType)
      .subscribe((results) => {
      this.createPageText(results[0], results[1]);
      console.log(results);
    });
    this.getTranslation();
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
  }

  continue() {
    this.navCtrl.push(FormComponent, {process: this.process, savedProcess: false});
  }


  goToStartPage() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      message: this.alertMessage,
      buttons: [
        {
          text: this.alertButtonYes,
          handler: () => {
            this.navCtrl.setRoot(HomePageComponent);
          }
        },
        {
          text: this.alertButtonNo,
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  getTranslation() {
    this.translateService.get('receive.confirmSendInquiry.normal',
      {emailTo: this.process.procedure.emailTo}).subscribe(
      value => {
        this.normalText = value;
      }
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
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  createPageText(note, buttonText) {
    let infoStringWithSpanTags = this.glossaryService.injectSpanTags(note);
    this.note = this.domSanitizer.bypassSecurityTrustHtml(infoStringWithSpanTags);
    this.continueButtonText = buttonText;
  }

}

