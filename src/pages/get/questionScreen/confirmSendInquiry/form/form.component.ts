import {Component, HostListener} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {HomePageComponent} from '../../../../home/home.component';
import {SaveProcessesService} from '../../../../../services/saveProcesses.Service';
import {Globals} from '../../../../../app/globals';
import {SaveTemplatesService} from '../../../../../services/saveTemplates.service';
import {EndScreenComponent} from '../../endScreen/endScreen.component';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../../services/glossary.service';

@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent {


  procedure;
  info;
  title;
  supplementaryData;
  supplementaryDataForm;
  timeStamp;
  saveButtonActive = false;
  saveTemplateBoolean = false;
  label_time;
  label_description;
  label_reason;
  label_value;
  label_person;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent() {
    this.saveButtonActive = true;
  }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              formBuilder: FormBuilder,
              private saveProcessesService: SaveProcessesService,
              private saveTemplatesService: SaveTemplatesService,
              private globals: Globals,
              private translateService: TranslateService,
              private glossaryService: GlossaryService) {
    let timeProposition = new Date().toISOString();
    this.procedure = navParams.get('procedure');
    this.info = navParams.get('info');
    this.title = navParams.get('title');
    this.timeStamp = navParams.get('timeStamp');
    this.supplementaryData = navParams.get('supplementaryData') || {};
    this.setLabels();
    this.supplementaryDataForm = formBuilder.group({
      time: [this.supplementaryData.time || timeProposition, Validators.required],
      description: [this.supplementaryData.description || '', Validators.required],
      reason: [this.supplementaryData.reason || '', Validators.required],
      value: [this.supplementaryData.value || '', Validators.required],
      person: [this.supplementaryData.person || '', Validators.required],
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
      info: this.info,
      procedure: this.procedure,
      timeStamp: timeStamp,
      category: this.title,
      supplementaryData: this.supplementaryDataForm.value,
    };
    return data;
  }

  setLabels() {
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_time').subscribe(
      value => this.label_time = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_description').subscribe(
      value => this.label_description = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_reason').subscribe(
      value => this.label_reason = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_value').subscribe(
      value => this.label_value = value
    );
    this.translateService.get('receive.formScreen.' + this.info.what + '.label_person').subscribe(
      value => this.label_person = value
    );
  }
  openInfo(term) {
    term = this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }
}
