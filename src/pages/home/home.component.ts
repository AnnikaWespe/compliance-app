import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../getDonation/questionScreen/questionScreen.component';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';
import {GlossaryService} from '../../services/glossary/glossary.service';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent {

  decisionTreeData;
  translatedText;

  constructor(public navCtrl: NavController,
              decisionTreeService: DecisionTreeService,
              private glossaryService: GlossaryService,
              private translateService: TranslateService,
              private domSanitizer: DomSanitizer) {
    this.decisionTreeData = decisionTreeService.getDecisionTreeData();
    this.getTranslation();
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  getTranslation() {
    this.translateService.get('test-div').subscribe(
      (value) => {
        this.translatedText = this.domSanitizer.bypassSecurityTrustHtml(value);
      }
    );
  }

}
