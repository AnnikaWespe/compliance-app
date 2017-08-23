import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../questionScreen/questionScreen.component';
import {DecisionTreeDataService} from '../../services/decisionTreeData.service';
import {GlossaryService} from '../../services/glossary.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent {

  decisionTreeData;

  constructor(public navCtrl: NavController,
              decisionTreeDataService: DecisionTreeDataService,
              private glossaryService: GlossaryService,
              private translateService: TranslateService) {
    this.decisionTreeData = decisionTreeDataService.getDecisionTreeData();
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  openInfo(term) {
    this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }

}
