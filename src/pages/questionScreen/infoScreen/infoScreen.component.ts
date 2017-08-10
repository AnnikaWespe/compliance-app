import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../home/home.component';

@Component({
  selector: 'page-info-screen',
  templateUrl: 'infoScreen.component.html'
})
export class InfoScreenComponent {

  result;
  procedure;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
  }


  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }

}
