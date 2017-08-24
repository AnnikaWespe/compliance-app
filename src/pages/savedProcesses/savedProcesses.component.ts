import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormComponent} from '../get/questionScreen/confirmSendInquiry/form/form.component';
import {SaveProcessesService} from '../../services/saveProcesses.Service';
import {Globals} from '../../app/globals';

@Component({
  selector: 'page-saved-processes',
  templateUrl: 'savedProcesses.component.html'
})
export class SavedProcessesComponent {

  processesReceive = [];
  processesGive = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private saveProcessesService: SaveProcessesService,
              private globals: Globals) {
    this.processesReceive = saveProcessesService.getOpenProcesses(globals.SAVED_RECEIVE_PROCESSES);
    this.processesGive = saveProcessesService.getOpenProcesses(globals.SAVED_GIVE_PROCESSES);
  }

  loadProcess(process) {
    this.navCtrl.push(FormComponent,
      {
        procedure: process.procedure,
        result: process.result,
        title: process.category,
        supplementaryData: process.supplementaryData,
        timeStamp: process.timeStamp
      });
  }

  deleteProcessReceive(event, process) {
    event.stopPropagation();
    this.saveProcessesService.deleteProcess(process.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    this.processesReceive = this.processesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteProcessGive(event, process) {
    event.stopPropagation();
    this.saveProcessesService.deleteProcess(process.timeStamp, this.globals.SAVED_GIVE_PROCESSES);
    this.processesReceive = this.processesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
