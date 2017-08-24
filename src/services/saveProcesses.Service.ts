import {Injectable} from '@angular/core';

@Injectable()
export class SaveProcessesService {

  saveProcess(data, category) {
    let savedProcesses = JSON.parse(localStorage.getItem(category)) || [];
    savedProcesses.push(data.timeStamp);
    console.log('timeStamp', data.timeStamp);
    localStorage.setItem(data.timeStamp, JSON.stringify(data));
    localStorage.setItem(category, JSON.stringify(savedProcesses));
  }

  deleteProcess(timeStamp, category) {
    let savedProcesses = JSON.parse(localStorage.getItem(category)) || [];
    let index = savedProcesses.indexOf(timeStamp);
    if (index > -1) {
      savedProcesses.splice(index, 1);
    }
    localStorage.setItem(category, JSON.stringify(savedProcesses));
    localStorage.removeItem(timeStamp);
  }

  getOpenProcesses(category) {
    let savedProcessesTimeStamps = JSON.parse(localStorage.getItem(category)) || [];
    let processesForDisplay = [];
    for (let timeStamp of savedProcessesTimeStamps) {
      let process = JSON.parse(localStorage.getItem(timeStamp));
      processesForDisplay.push(process);
    }
    return processesForDisplay;
  }
}
