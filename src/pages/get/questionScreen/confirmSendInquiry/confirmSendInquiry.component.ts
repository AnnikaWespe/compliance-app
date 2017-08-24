import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../../home/home.component';
import {FormComponent} from './form/form.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-confirm-send-inquiry',
  templateUrl: 'confirmSendInquiry.component.html'
})
export class ConfirmSendInquiryComponent {
  procedure;
  result;
  title;
  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private translateService: TranslateService) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    this.title = this.navParams.get('title');
    this.getAlertTranslation();
    console.log(this.procedure.note);
    console.log(this.procedure);
  }

  continue() {
    this.navCtrl.push(FormComponent, {procedure: this.procedure, result: this.result, title: this.title});
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

  getAlertTranslation() {
    this.translateService.get('confirmSendInquiry_alert_0').subscribe(
      value => {
        this.alertTitle = value;
      }
    );
    this.translateService.get('confirmSendInquiry_alert_1').subscribe(
      value => {
        this.alertMessage = value;
      }
    );
    this.translateService.get('confirmSendInquiry_alert_2').subscribe(
      value => {
        this.alertButton1Text = value;
      }
    );
    this.translateService.get('confirmSendInquiry_alert_3').subscribe(
      value => {
        this.alertButton2Text = value;
      }
    );
  }
}
