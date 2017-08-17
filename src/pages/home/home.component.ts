import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../questionScreen/questionScreen.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {DecisionTreeDataService} from '../../services/decisionTreeData.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent {

  decisionTreeData;

  constructor(public navCtrl: NavController,
              decisionTreeDataService: DecisionTreeDataService) {
    this.decisionTreeData = decisionTreeDataService.getDecisionTreeData();
    // this.presentInfo();
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  goToIntroductionScreen() {
    this.navCtrl.push(IntroductionComponent);
  }

  /*presentInfo() {
    let alert = this.alertCtrl.create({
      message: `Was ist wichtig bei Annahme oder Vergabe von Geschenken und Einladungen? Zur Vermeidung von
    Interessenskonflikten bzw. Reputationsschäden, muss der Grundsatz der "Sozialadäquanz" beachtet werden. Hierbei
    gilt:
    <ul>
      <li>immer auf den Empfänger und dessen sozialen Status bezogen.</li>
      <li>Typische Testfrage ist: "Könnte sich der Empfänger das selbst leistet und wäre er auch bereit dafür?</li>
    </ul>`,
      buttons: [
        {
          text: 'Ok, nicht mehr anzeigen!',
          handler: () => {
            console.log('Buy clicked');
          }
        },
        {
          text: 'Ok!',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }*/

}
