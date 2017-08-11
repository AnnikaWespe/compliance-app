import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../../questionScreen/questionScreen.component';
import {DecisionTreeDataService} from '../../../services/decisionTreeData.service';

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.component.html'
})
export class IntroductionComponent {

  decisionTreeData;

  constructor(public navCtrl: NavController, decisionTreeDataService: DecisionTreeDataService) {
    this.decisionTreeData = decisionTreeDataService.getDecisionTreeData();
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

}
