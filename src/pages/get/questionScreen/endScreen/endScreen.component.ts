import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../../home/home.component';

@Component({
  selector: 'page-end-screen',
  templateUrl: 'endScreen.component.html'
})
export class EndScreenComponent {

  procedure;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procedure = navParams.get('procedure');
  }

  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }
}
