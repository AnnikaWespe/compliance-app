import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormComponent} from '../questionScreen/confirmSendInquiry/form/form.component';
import {ProcessStorageService} from '../../services/Template+ProcessStorage/processStorage.Service';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../services/process.model';

@Component({
  selector: 'page-saved-processes',
  templateUrl: 'savedProcesses.component.html'
})
export class SavedProcessesComponent {

  processesReceive = [];
  processesGive = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private processStorageService: ProcessStorageService,
              private decisionTreeService: DecisionTreeService) {
    this.processesReceive = processStorageService.getOpenProcesses('get-donation');
    this.processesGive = processStorageService.getOpenProcesses('give-donation');
  }

  loadProcess(process: Process) {
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
