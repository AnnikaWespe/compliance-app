import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormComponent} from '../get/questionScreen/confirmSendInquiry/form/form.component';
import {Globals} from '../../app/globals';
import {SaveTemplatesService} from '../../services/saveTemplates.service';

@Component({
  selector: 'page-saved-templates',
  templateUrl: 'savedTemplates.component.html'
})
export class SavedTemplatesComponent {

  templatesReceive = [];
  templatesGive = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private saveTemplatesService: SaveTemplatesService,
              private globals: Globals) {
    this.templatesReceive = saveTemplatesService.getTemplates(globals.SAVED_RECEIVE_TEMPLATES);
    this.templatesGive = saveTemplatesService.getTemplates(globals.SAVED_GIVE_TEMPLATES);
  }

  loadProcess(process) {
    this.navCtrl.push(FormComponent,
      {
        procedure: process.procedure,
        info: process.info,
        title: process.category,
        supplementaryData: process.supplementaryData,
        timeStamp: null
      });
  }

  deleteTemplateReceive(event, process) {
    event.stopPropagation();
    this.saveTemplatesService.deleteTemplate(process.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteTemplateGive(event, process) {
    event.stopPropagation();
    this.saveTemplatesService.deleteTemplate(process.timeStamp, this.globals.SAVED_GIVE_PROCESSES);
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
