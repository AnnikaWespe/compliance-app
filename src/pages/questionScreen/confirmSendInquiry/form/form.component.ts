import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {SaveProcessService} from '../../../../services/saveProcess.service';
import {HomePageComponent} from '../../../home/home.component';

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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              formBuilder: FormBuilder,
              private saveProcessService: SaveProcessService) {
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
    });
  }

  save() {
    let timeStamp = Date.now().toString();
    let data = {
      result: this.result,
      procedure: this.procedure,
      timeStamp: timeStamp,
      category: this.title,
      supplementaryData: this.supplementaryDataForm.value,
    };
    if (this.timeStamp) {
      this.saveProcessService.deleteProcess(this.timeStamp);
    };
    this.timeStamp = timeStamp;
    this.saveProcessService.saveProcess(data);
  }

  goToStartPage() {
    this.navCtrl.setRoot(HomePageComponent);
  }
}
