import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormComponent} from '../questionScreen/confirmSendInquiry/form/form.component';
import {TemplatesStorageService} from '../../services/Template+ProcessStorage/templatesStorage.service';
import {Process} from '../../services/process.model';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';

@Component({
  selector: 'page-saved-templates',
  templateUrl: 'savedTemplates.component.html'
})
export class SavedTemplatesComponent {

  templatesReceive = [];
  templatesGive = [];

  constructor(public navCtrl: NavController,
              private templatesStorageService: TemplatesStorageService,
              private decisionTreeService: DecisionTreeService) {
    this.templatesReceive = templatesStorageService.getTemplates('get-donation');
    this.templatesGive = templatesStorageService.getTemplates('give-donation');
  }

  loadProcess(process: Process) {
    this.decisionTreeService.setTitle(process.info.what).subscribe(() => {
        this.navCtrl.push(FormComponent,
          {
            process: process,
            savedProcess: false
          });
      }
    );
  }

  deleteTemplateReceive(event, process) {
    event.stopPropagation();
    this.templatesStorageService.deleteTemplate(process.timeStamp, 'get-donation');
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }

  deleteTemplateGive(event, process) {
    event.stopPropagation();
    this.templatesStorageService.deleteTemplate(process.timeStamp, 'give-donation');
    this.templatesReceive = this.templatesReceive.filter((obj) => {
      return obj.timeStamp !== process.timeStamp;
    });
  }
}
