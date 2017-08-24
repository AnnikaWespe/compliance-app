import {Injectable} from '@angular/core';

@Injectable()
export class SaveTemplatesService {

  saveTemplate(data, category) {
    let templates = JSON.parse(localStorage.getItem(category)) || [];
    templates.push(data.timeStamp);
    console.log('timeStamp', data.timeStamp);
    localStorage.setItem(data.timeStamp, JSON.stringify(data));
    localStorage.setItem(category, JSON.stringify(templates));
  }

  deleteTemplate(timeStamp, category) {
    let templates = JSON.parse(localStorage.getItem(category)) || [];
    let index = templates.indexOf(timeStamp);
    if (index > -1) {
      templates.splice(index, 1);
    }
    localStorage.setItem(category, JSON.stringify(templates));
    localStorage.removeItem(timeStamp);
  }

  getTemplates(category) {
    let templatesTimeStamps = JSON.parse(localStorage.getItem(category)) || [];
    let templates = [];
    for (let timeStamp of templatesTimeStamps) {
      let template = JSON.parse(localStorage.getItem(timeStamp));
      templates.push(template);
    }
    return templates;
  }

}
