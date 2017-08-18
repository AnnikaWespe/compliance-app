import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'page-form',
  templateUrl: 'form.component.html'
})
export class FormComponent {
  procedure;
  result;
  title;
  supplementaryData;


  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder: FormBuilder) {
    this.procedure = navParams.get('procedure');
    this.result = navParams.get('result');
    this.title = this.navParams.get('title');
    console.log(this.procedure.note);
    console.log(this.procedure);
    this.supplementaryData = formBuilder.group({
      time: ['', Validators.required],
      description: ['', Validators.required],
      reason: ['', Validators.required],
      value: ['', Validators.required],
      company: ['', Validators.required],
      name: ['', Validators.required],
      occasion: ['', Validators.required],
    });
  }


}
