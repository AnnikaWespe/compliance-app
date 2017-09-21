import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {InfoScreenComponent} from './infoScreen/infoScreen.component';
import {GlossaryService} from '../../../services/glossary/glossary.service';
import {ConfirmSendInquiryComponent} from './confirmSendInquiry/confirmSendInquiry.component';
import {DecisionTreeService} from '../../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../../services/process.model';

@Component({
  selector: 'page-question-screen',
  templateUrl: 'questionScreen.component.html'
})
export class QuestionScreenComponent {

  option;
  title: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private glossaryService: GlossaryService,
              private decisionTreeService: DecisionTreeService) {
    this.option = navParams.get('option');
    this.title = this.option.title || this.navParams.get('title') || '';
  }

  loadNext(option) {
    if (option.terminalPoint) {
      let procedure = this.decisionTreeService.getProcedure(option);
      let process = new Process(option.proceed.info, procedure, this.title);
      if (procedure.continueWith === 'email') {
        this.navCtrl.push(ConfirmSendInquiryComponent, {
          process: process
        });
      }
      else if (procedure.continueWith === 'info') {
        this.navCtrl.push(InfoScreenComponent, {
          process: process
        });
      }
    }
    else {
      this.navCtrl.push(QuestionScreenComponent, {option: option, title: this.title});
    }
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }
}
