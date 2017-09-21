import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormComponent} from '../getDonation/questionScreen/confirmSendInquiry/form/form.component';
import {ProcessStorageService} from '../../services/Template+ProcessStorage/processStorage.Service';
import {Globals} from '../../services/globals';

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
              private globals: Globals) {
    this.processesReceive = processStorageService.getOpenProcesses(globals.SAVED_RECEIVE_PROCESSES);
    this.processesGive = processStorageService.getOpenProcesses(globals.SAVED_GIVE_PROCESSES);
  }

  loadProcess(process) {
    this.navCtrl.push(FormComponent,
      {
        process: process,
        savedProcess: true
      });
  }

  deleteProcessReceive(event, process) {
    event.stopPropagation();
    this.processStorageService.deleteProcess(process.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    this.processesReceive = this.processesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteProcessGive(event, process) {
    event.stopPropagation();
    this.processStorageService.deleteProcess(process.timeStamp, this.globals.SAVED_GIVE_PROCESSES);
    this.processesGive = this.processesGive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
