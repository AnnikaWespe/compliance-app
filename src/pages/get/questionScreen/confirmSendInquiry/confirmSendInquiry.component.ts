import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../../home/home.component';
import {FormComponent} from './form/form.component';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../services/glossary.service';

@Component({
  selector: 'page-confirm-send-inquiry',
  templateUrl: 'confirmSendInquiry.component.html'
})
export class ConfirmSendInquiryComponent {
  procedure;
  info;
  title;
  alertTitle;
  alertMessage;
  alertButton1Text;
  alertButton2Text;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private translateService: TranslateService,
              private glossaryService: GlossaryService) {
    this.procedure = navParams.get('procedure');
    this.info = navParams.get('info');
    this.title = this.navParams.get('title');
    this.getAlertTranslation();
    console.log(this.procedure.note);
    console.log(this.procedure);
  }

  continue() {
    this.navCtrl.push(FormComponent, {procedure: this.procedure, info: this.info, title: this.title});
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
