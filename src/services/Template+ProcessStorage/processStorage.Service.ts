import {Injectable} from '@angular/core';
import {Process} from '../process.model';

@Injectable()
export class ProcessStorageService {

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
    let processes: Process[] = [];
    for (let timeStamp of savedProcessesTimeStamps) {
      let process: Process = JSON.parse(localStorage.getItem(timeStamp));
      processes.push(process);
    }
    return processes;
  }
}
