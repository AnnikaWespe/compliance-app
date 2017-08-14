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
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  goToIntroductionScreen() {
    this.navCtrl.push(IntroductionComponent);
  }

}
