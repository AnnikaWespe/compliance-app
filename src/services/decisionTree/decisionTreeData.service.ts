import {Injectable} from '@angular/core';
import {DECISIONTREE_DATA} from './decisionTree.data';
import {UserService} from '../user/user.service';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Rx';

export type Branch = 'get-donation' | 'give-donation' ;

@Injectable()
export class DecisionTreeService {

  private branch: Branch;
  private title = 'Compliance App';

  constructor(private userService: UserService,
              private translateService: TranslateService) {
  }

  getDecisionTreeData() {
    return DECISIONTREE_DATA;
  }

  setBranch(branch: Branch) {
    this.branch = branch;
  }

  getBranch() {
    return this.branch;
  }

  setTitle(what) {
    return this.translateService.get('titles.' + what).map((title) => {
      this.title = title;
    });
  }

  getTitle() {
    return this.title;
  }

  resetTitle() {
    this.title = 'Compliance App';
  }

  getProcedure(option) {
    let procedure;
    if (option.getUserCareerLevel) {
      let userCareerLevel = this.userService.getUser().careerLevel;
      procedure = option.proceed[userCareerLevel];
    }
    else {
      procedure = option.proceed.all;
    }
    return procedure;
  }

  getQuestionscreenText(string) {
    let questionObservable = this.translateService.get(this.branch + '.questionScreen.question.' + string);
    let infoObservable = this.translateService.get(this.branch + '.questionScreen.info.' + string);
    return Observable.forkJoin([questionObservable, infoObservable]);
  }

  getInfoScreenText(string) {
    let infoObservable = this.translateService.get(this.branch + '.infoScreen.' + string);
    return infoObservable;
  }

  getConfirmInquiryPageContent(note, continueButtonType) {
    let confirmInquiryTextObservable = this.translateService.get(this.branch + '.confirmSendInquiry.' + note);
    let confirmInquiryButtonObservable = this.translateService
      .get('buttons.' + continueButtonType);
    return Observable.forkJoin([confirmInquiryTextObservable, confirmInquiryButtonObservable]);
  }

}
