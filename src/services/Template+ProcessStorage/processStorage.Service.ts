import {Injectable} from '@angular/core';
import {Process} from '../process.model';

@Injectable()
export class ProcessStorageService {

  saveProcess(data, branch) {
    let savedProcesses = JSON.parse(localStorage.getItem(branch + '_processes')) || [];
    savedProcesses.push(data.timeStamp);
    console.log('timeStamp', data.timeStamp);
    localStorage.setItem(data.timeStamp, JSON.stringify(data));
    localStorage.setItem(branch + '_processes', JSON.stringify(savedProcesses));
  }

  deleteProcess(timeStamp, branch) {
    let savedProcesses = JSON.parse(localStorage.getItem(branch + '_processes')) || [];
    let index = savedProcesses.indexOf(timeStamp);
    if (index > -1) {
      savedProcesses.splice(index, 1);
    }
    localStorage.setItem(branch + '_processes', JSON.stringify(savedProcesses));
    localStorage.removeItem(timeStamp);
  }

  getOpenProcesses(branch) {
    let savedProcessesTimeStamps = JSON.parse(localStorage.getItem(branch + '_processes')) || [];
    let processes: Process[] = [];
    for (let timeStamp of savedProcessesTimeStamps) {
      let process: Process = JSON.parse(localStorage.getItem(timeStamp));
      processes.push(process);
    }
    return processes;
  }
}
