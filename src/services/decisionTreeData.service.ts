import {Injectable} from '@angular/core';
import {DECISIONTREE_DATA} from './decisionTree.data';

@Injectable()
export class DecisionTreeDataService {
  getDecisionTreeData(){
    return DECISIONTREE_DATA;
  }
}
