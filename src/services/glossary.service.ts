import {Injectable} from '@angular/core';
import {GLOSSARY} from './glossary.data';
import {AlertController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';


@Injectable()
export class GlossaryService {
  constructor(public alertCtrl: AlertController,
              private translateService: TranslateService) {
  }

  createPopUp(term) {
    this.translateService.get(term).subscribe(
      value => {
        let glossary = GLOSSARY;
        let alert = this.alertCtrl.create({
          title: value,
          message: glossary[value],
        });
        alert.present();
      }
    );
  }
}
