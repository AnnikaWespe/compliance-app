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
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    this.title = this.navParams.get('title') || '';
  }


  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }

}
