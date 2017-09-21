import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../../home/home.component';

@Component({
  selector: 'page-end-screen',
  templateUrl: 'endScreen.component.html'
})
export class EndScreenComponent {

  process;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.process = navParams.get('process');
  }

  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }
}
