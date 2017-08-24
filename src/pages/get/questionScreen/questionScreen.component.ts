import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserService} from '../../../services/user.service';
import {InfoScreenComponent} from './infoScreen/infoScreen.component';
import {GlossaryService} from '../../../services/glossary.service';
import {ConfirmSendInquiryComponent} from './confirmSendInquiry/confirmSendInquiry.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-question-screen',
  templateUrl: 'questionScreen.component.html'
})
export class QuestionScreenComponent {

  option;
  result: string[];
  title: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService,
              private glossaryService: GlossaryService,
              private translateService: TranslateService) {
    this.option = navParams.get('option');
    this.result = navParams.get('result');
    this.title = this.option.title || this.navParams.get('title') || '';
  }

  loadNext(option) {
    let res = this.result.slice();
    res.push(option.name);
    if (option.terminalPoint) {
      let procedure;
      if (option.getUserCareerLevel) {
        let userCareerLevel = this.userService.getUser().careerLevel;
        console.log(userCareerLevel);
        procedure = option.proceed[userCareerLevel];
      }
      else {
        procedure = option.proceed.all;
      }
      console.log(procedure);
      console.log(option);
      console.log(res);
      if (procedure.continueWith === 'email') {
        this.navCtrl.push(ConfirmSendInquiryComponent, {procedure: procedure, result: res, title: this.title});
      }
      else if (procedure.continueWith === 'info') {
        this.navCtrl.push(InfoScreenComponent, {procedure: procedure, result: res, title: this.title});
      }
    }
    else {
      this.navCtrl.push(QuestionScreenComponent, {option: option, result: res, title: this.title});
    }
  }

  openInfo(term) {
    term = this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }


}
