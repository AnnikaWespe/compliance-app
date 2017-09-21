import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormComponent} from '../getDonation/questionScreen/confirmSendInquiry/form/form.component';
import {Globals} from '../../services/globals';
import {TemplatesStorageService} from '../../services/Template+ProcessStorage/templatesStorage.service';

@Component({
  selector: 'page-saved-templates',
  templateUrl: 'savedTemplates.component.html'
})
export class SavedTemplatesComponent {

  templatesReceive = [];
  templatesGive = [];

  constructor(public navCtrl: NavController,
              private templatesStorageService: TemplatesStorageService,
              private globals: Globals) {
    this.templatesReceive = templatesStorageService.getTemplates(globals.SAVED_RECEIVE_TEMPLATES);
    this.templatesGive = templatesStorageService.getTemplates(globals.SAVED_GIVE_TEMPLATES);
  }

  loadProcess(process) {
    this.navCtrl.push(FormComponent,
      {
        process: process,
        savedProcess: false
      })
    ;
  }

  deleteTemplateReceive(event, process) {
    event.stopPropagation();
    this.templatesStorageService.deleteTemplate(process.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteTemplateGive(event, process) {
    event.stopPropagation();
    this.templatesStorageService.deleteTemplate(process.timeStamp, this.globals.SAVED_GIVE_PROCESSES);
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
