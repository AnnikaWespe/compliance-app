import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../services/glossary/glossary.service';
import {HomePageComponent} from '../../home/home.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DecisionTreeService} from '../../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../../services/process.model';

@Component({
  selector: 'page-info-screen-no-approval',
  templateUrl: 'infoScreenNoApproval.component.html'
})
export class InfoScreenNoApprovalComponent implements AfterViewChecked {

  process: Process;
  infoText: SafeHtml;
  clickHandlersAdded = false;
  title;
  branch;

  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private translateService: TranslateService,
              private glossaryService: GlossaryService,
              private alertCtrl: AlertController,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private domSanitizer: DomSanitizer,
              decisionTreeService: DecisionTreeService) {
    this.process = this.navParams.get('process');
    this.title = decisionTreeService.getTitle();
    this.branch = decisionTreeService.getBranch();
    decisionTreeService.getInfoScreenText(this.process.procedure.infoText).subscribe((string) => {
      this.createPageText(string);
    });
    this.getAlertTranslation();
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
  }


  goToStartPage() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      message: this.alertMessage,
      buttons: [
        {
          text: this.alertButton1Text,
          cssClass: 'alertButton',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: this.alertButton2Text,
          cssClass: 'alertButton',
          handler: () => {
            this.navCtrl.setRoot(HomePageComponent);
          }
        }
      ]
    });
    alert.present();
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  getAlertTranslation() {
    this.translateService.get(this.branch + '.confirmSendInquiry.alert_0').subscribe(
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

  createPageText(string) {
    let stringWithSpanTags = this.glossaryService.injectSpanTags(string);
    this.infoText = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
  }
}
