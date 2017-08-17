import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserService} from '../../services/user.service';
import {ConfirmSendEmailComponent} from './confirmSendEmail/confirmSendEmail.component';
import {InfoScreenComponent} from './infoScreen/infoScreen.component';
import {GlossaryService} from '../../services/glossary.service';

@Component({
  selector: 'page-question-screen',
  templateUrl: 'questionScreen.component.html'
})
export class QuestionScreenComponent {

  option;
  result: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UserService,
              private glossaryService: GlossaryService) {
    this.option = navParams.get('option');
    this.result = navParams.get('result');
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
        this.navCtrl.push(ConfirmSendEmailComponent, {procedure: procedure, result: res});
      }
      else if (procedure.continueWith === 'info') {
        this.navCtrl.push(InfoScreenComponent, {procedure: procedure, result: res});
      }
    }
    else {
      this.navCtrl.push(QuestionScreenComponent, {option: option, result: res});
    }
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }


}
