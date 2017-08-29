import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../services/glossary.service';
import {HomePageComponent} from '../../../home/home.component';

@Component({
  selector: 'page-info-screen',
  templateUrl: 'infoScreen.component.html'
})
export class InfoScreenComponent {

  info;
  procedure;
  title: string;
  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private translateService: TranslateService,
              private glossaryService: GlossaryService,
              private alertCtrl: AlertController) {
    this.procedure = navParams.get('procedure');
    this.info = navParams.get('info');
    this.title = this.navParams.get('title') || '';
    this.getTranslation();
  }


  goToStartPage() {
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
  }

  openInfo(term) {
    this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }

  getTranslation() {
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

}
