import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../home/home.component';
import {FormComponent} from './form/form.component';

@Component({
  selector: 'page-confirm-send-inquiry',
  templateUrl: 'confirmSendInquiry.component.html'
})
export class ConfirmSendInquiryComponent {
  procedure;
  result;
  title;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    this.title = this.navParams.get('title');
    console.log(this.procedure.note);
    console.log(this.procedure);
  }

  continue(){
    this.navCtrl.push(FormComponent, {procedure: this.procedure, result: this.result, title: this.title});
  }

  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }

}
