import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePageComponent} from '../../home/home.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-end-screen',
  templateUrl: 'endScreen.component.html'
})
export class EndScreenComponent {

  process;
  documentationRequired;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private translateService: TranslateService) {
    this.process = navParams.get('process');
    this.getTranslation();
  }

  goToStartPage(){
    this.navCtrl.setRoot(HomePageComponent);
  }

  getTranslation() {
    this.translateService.get('secondary-pages.endScreen.text_documentation').subscribe(
      value => {
        this.documentationRequired = value;
        console.log(this.documentationRequired);
      }
    );
  }
}
