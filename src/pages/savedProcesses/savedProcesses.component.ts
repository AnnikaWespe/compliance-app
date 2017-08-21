import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SaveProcessService} from '../../services/saveProcess.service';
import {FormComponent} from '../questionScreen/confirmSendInquiry/form/form.component';

@Component({
  selector: 'page-saved-processes',
  templateUrl: 'savedProcesses.component.html'
})
export class SavedProcessesComponent {

  processes = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private saveProcessService: SaveProcessService) {
    this.processes = saveProcessService.getOpenProcesses();
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

  deleteProcess(event, process) {
    event.stopPropagation();
    this.saveProcessService.deleteProcess(process.timeStamp);
    this.processes = this.processes.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
