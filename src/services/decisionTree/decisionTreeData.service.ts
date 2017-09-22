import {Injectable} from '@angular/core';
import {DECISIONTREE_DATA} from './decisionTree.data';
import {UserService} from '../user/user.service';

@Injectable()
export class DecisionTreeService {


  constructor(private userService: UserService) {
  }

  getDecisionTreeData() {
    return DECISIONTREE_DATA;
  }

  setGetOrReceive(){

  }
  getGetOrReceive(){

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

  getQuestionAndInfo(){

  }


}
