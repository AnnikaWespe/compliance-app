import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../home/home.component';
import {EndScreenComponent} from '../endScreen/endScreen.component';

@Component({
  selector: 'page-confirm-send-email',
  templateUrl: 'confirmSendEmail.component.html'
})
export class ConfirmSendEmailComponent {
  procedure;
  result;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    console.log(this.procedure.note);
    console.log(this.procedure);
  }

  sendEmail() {
    let emailAddress = 'email@munich-re.com';
    let emailCC = 'CC';
    let emailSub = 'Subject';
    let emailBody = this.result;
    window.open('mailto:' + emailAddress + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody);
    this.navCtrl.push(EndScreenComponent, {procedure: this.procedure});
  }

  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }

}
