import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormComponent} from '../questions/confirmSendInquiry/form/form.component';
import {ProcessStorageService} from '../../services/Template+ProcessStorage/processStorage.Service';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../services/process.model';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'page-saved-processes',
  templateUrl: 'savedProcesses.component.html'
})


export class SavedProcessesComponent {

  processesReceive = [];
  processesGive = [];
  dateFormat: string;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private processStorageService: ProcessStorageService,
              private decisionTreeService: DecisionTreeService,
              userService: UserService) {
    this.processesReceive = processStorageService.getOpenProcesses('get-donation');
    this.processesGive = processStorageService.getOpenProcesses('give-donation');
    this.dateFormat = userService.getDateFormat()[1];
  }

  loadProcess(process: Process) {
    this.decisionTreeService.setBranch(process.info.branch);
    this.decisionTreeService.setTitle(process.info.what).subscribe(() => {
        this.navCtrl.push(FormComponent,
          {
            process: process,
            savedProcess: true
          });
      }
    );
  }

  deleteProcessReceive(event, process) {
    event.stopPropagation();
    this.processStorageService.deleteProcess(process.timeStamp, 'get-donation');
    this.processesReceive = this.processesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteProcessGive(event, process) {
    event.stopPropagation();
    this.processStorageService.deleteProcess(process.timeStamp, 'give-donation');
    this.processesGive = this.processesGive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
