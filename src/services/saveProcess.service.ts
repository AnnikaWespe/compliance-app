import {Injectable} from '@angular/core';

@Injectable()
export class SaveProcessService {

  saveProcess(data) {
    let savedProcesses = JSON.parse(localStorage.getItem('savedProcesses')) || [];
    savedProcesses.push(data.timeStamp);
    console.log('timeStamp', data.timeStamp);
    localStorage.setItem(data.timeStamp, JSON.stringify(data));
    localStorage.setItem('savedProcesses', JSON.stringify(savedProcesses));
  }

  deleteProcess(timeStamp) {
    let savedProcesses = JSON.parse(localStorage.getItem('savedProcesses')) || [];
    let index = savedProcesses.indexOf(timeStamp);
    if (index > -1) {
      savedProcesses.splice(index, 1);
    }
    localStorage.setItem('savedProcesses', JSON.stringify(savedProcesses));
    localStorage.removeItem(timeStamp);
  }

  getOpenProcesses() {
    let savedProcessesTimeStamps = JSON.parse(localStorage.getItem('savedProcesses')) || [];
    let processesForDisplay = [];
    for (let timeStamp of savedProcessesTimeStamps) {
      let process = JSON.parse(localStorage.getItem(timeStamp));
      processesForDisplay.push(process);
    }
    return processesForDisplay;
  }
}
