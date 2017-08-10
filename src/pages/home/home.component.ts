import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DECISIONTREE_DATA} from '../../services/decisionTree.data';
import {QuestionScreenComponent} from '../questionScreen/questionScreen.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent {

  decisionTreeData;

  constructor(public navCtrl: NavController) {
    this.decisionTreeData = DECISIONTREE_DATA;
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

}
