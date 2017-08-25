import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {GlossaryService} from '../../../../services/glossary.service';
import {HomePageComponent} from '../../../home/home.component';

@Component({
  selector: 'page-info-screen',
  templateUrl: 'infoScreen.component.html'
})
export class InfoScreenComponent {

  info;
  procedure;
  title: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private translateService: TranslateService,
              private glossaryService: GlossaryService) {
    this.procedure = navParams.get('procedure');
    this.info = navParams.get('info');
    this.title = this.navParams.get('title') || '';
  }


  goToStartPage() {
    this.navCtrl.setRoot(HomePageComponent);
  }

  openInfo(term) {
    this.translateService.get(term).subscribe(
      value => {
        this.glossaryService.createPopUp(value);
      }
    );
  }

}
