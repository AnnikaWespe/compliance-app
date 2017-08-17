import {Injectable} from '@angular/core';
import {GLOSSARY} from './glossary.data';
import {AlertController} from 'ionic-angular';


@Injectable()
export class GlossaryService {
  constructor(public alertCtrl: AlertController) {}
  createPopUp(term) {
    let glossary = GLOSSARY;
    console.log(glossary);
      let alert = this.alertCtrl.create({
        title: term,
        message: glossary[term],
        buttons: [
          {
            text: 'Ok',
            role: 'cancel'
          },
        ]
      });
      alert.present();
  }
}
