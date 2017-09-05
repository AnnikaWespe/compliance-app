import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../get/questionScreen/questionScreen.component';
import {DecisionTreeDataService} from '../../services/decisionTreeData.service';
import {GlossaryService} from '../../services/glossary.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent {

  decisionTreeData;

  constructor(public navCtrl: NavController,
              decisionTreeDataService: DecisionTreeDataService,
              private glossaryService: GlossaryService) {
    this.decisionTreeData = decisionTreeDataService.getDecisionTreeData();
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

}
