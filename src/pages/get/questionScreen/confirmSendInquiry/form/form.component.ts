import {Component, HostListener} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {HomePageComponent} from '../../../../home/home.component';
import {SaveProcessesService} from '../../../../../services/saveProcesses.Service';
import {Globals} from '../../../../../app/globals';
import {SaveTemplatesService} from '../../../../../services/saveTemplates.service';
import {EndScreenComponent} from '../../endScreen/endScreen.component';

@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent {


  procedure;
  result;
  title;
  supplementaryData;
  supplementaryDataForm;
  timeStamp;
  saveButtonActive = false;
  saveTemplateBoolean = false;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent() {
    this.saveButtonActive = true;
  }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              formBuilder: FormBuilder,
              private saveProcessesService: SaveProcessesService,
              private saveTemplatesService: SaveTemplatesService,
              private globals: Globals) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    this.title = navParams.get('title');
    this.timeStamp = navParams.get('timeStamp');
    this.supplementaryData = navParams.get('supplementaryData') || {};
    this.supplementaryDataForm = formBuilder.group({
      time: [this.supplementaryData.time || '', Validators.required],
      description: [this.supplementaryData.description || '', Validators.required],
      reason: [this.supplementaryData.reason || '', Validators.required],
      value: [this.supplementaryData.value || '', Validators.required],
      company: [this.supplementaryData.company || '', Validators.required],
      name: [this.supplementaryData.name || '', Validators.required],
      occasion: [this.supplementaryData.occasion || '', Validators.required],
      tax: [this.supplementaryData.tax || '', Validators.required],
      taxReceiptWhere: [this.supplementaryData.taxReceiptWhere || '']
    });
  }

  saveProcess() {
    let data = this.createDataObject();
    let timeStamp = data.timeStamp;
    if (this.timeStamp) {
      this.saveProcessesService.deleteProcess(this.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    }
    this.timeStamp = timeStamp;
    this.saveProcessesService.saveProcess(data, this.globals.SAVED_RECEIVE_PROCESSES);
    this.saveButtonActive = false;
  }

  send() {
    let data = this.createDataObject();
    let timeStamp = data.timeStamp;
    if (this.timeStamp) {
      this.saveProcessesService.deleteProcess(this.timeStamp, this.globals.SAVED_RECEIVE_PROCESSES);
    }
    if (this.saveTemplateBoolean) {
      this.saveTemplatesService.saveTemplate(timeStamp, this.globals.SAVED_RECEIVE_TEMPLATES);
    }
    this.navCtrl.setRoot(EndScreenComponent);
  }


  goToStartPage() {
    this.navCtrl.setRoot(HomePageComponent);
  }

  createDataObject() {
    let timeStamp = Date.now().toString();
    let data = {
      result: this.result,
      procedure: this.procedure,
      timeStamp: timeStamp,
      category: this.title,
      supplementaryData: this.supplementaryDataForm.value,
    };
    return data;
  }
}
