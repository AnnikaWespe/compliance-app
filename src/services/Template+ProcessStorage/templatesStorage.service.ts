import {Injectable} from '@angular/core';
import {Process} from '../process.model';

@Injectable()
export class TemplatesStorageService {

  saveTemplate(data, branch) {
    let templates = JSON.parse(localStorage.getItem(branch + '_templates')) || [];
    templates.push(data.timeStamp);
    console.log('timeStamp', data.timeStamp);
    localStorage.setItem(data.timeStamp, JSON.stringify(data));
    localStorage.setItem(branch + '_templates', JSON.stringify(templates));
  }

  deleteTemplate(timeStamp, branch) {
    let templates = JSON.parse(localStorage.getItem(branch + '_templates')) || [];
    let index = templates.indexOf(timeStamp);
    if (index > -1) {
      templates.splice(index, 1);
    }
    localStorage.setItem(branch + '_templates', JSON.stringify(templates));
    localStorage.removeItem(timeStamp);
  }

  getTemplates(branch) {
    let templatesTimeStamps = JSON.parse(localStorage.getItem(branch + '_templates')) || [];
    let templates: Process[] = [];
    for (let timeStamp of templatesTimeStamps) {
      let template: Process = JSON.parse(localStorage.getItem(timeStamp));
      templates.push(template);
    }
    return templates;
  }

}
