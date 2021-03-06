import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../services/glossary/glossary.service';
import {HomePageComponent} from '../../home/home.component';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {DecisionTreeService} from '../../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../../services/process.model';
import {EndScreenComponent} from '../endScreen/endScreen.component';

@Component({
  selector: 'page-info-screen',
  templateUrl: 'infoScreen.component.html'
})
export class InfoScreenComponent implements AfterViewChecked {

  process: Process;
  infoText: SafeHtml;
  clickHandlersAdded = false;
  title;
  branch;

  alertTitle;
  alertMessage;
  alertButtonNo;
  alertButtonYes;

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


  openDialogue() {
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
            this.goToStartPage();
          }
        }
      ]
    });
    alert.present();
  }
  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }
  goToEndScreen(){
    this.navCtrl.setRoot(EndScreenComponent, {process: this.process});
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  getAlertTranslation() {
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
    this.translateService.get( 'generics.no').subscribe(
      value => {
        this.alertButtonNo = value;
      }
    );
  }

  createPageText(string) {
    let stringWithSpanTags = this.glossaryService.injectSpanTags(string);
    this.infoText = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
  }
}
