import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePageComponent} from '../pages/home/home.component';
import {UserService} from '../services/user.service';
import {DisclaimerComponent} from '../pages/disclaimer/disclaimer.component';
import {TranslateService} from '@ngx-translate/core';
import {SavedProcessesComponent} from '../pages/savedProcesses/savedProcesses.component';

// import {AppInsightsService} from '../app-insights/appinsights.service';

@Component({
  templateUrl: 'app.html'
})
export class MyAppComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePageComponent;
  pages;
  user;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              userService: UserService,
              private translate: TranslateService
              /*, appinsightsService: AppInsightsService*/) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.user = userService.getUser();
    this.setMenu();
    this.setTranslateParams();
    /*appinsightsService.Init({
      instrumentationKey: AppConfig.applicationsInsightsKey,
      url: '../assets/js/ai.1.0.9.min.js'
    });*/
  }

  openPage(page) {
    this.nav.setRoot(page.component, page.parameters);
  }

  setMenu() {
    this.pages = [
      {title: 'Home', component: HomePageComponent, parameters: {}},
      {title: 'Disclaimer', component: DisclaimerComponent, parameters: {}},
      {title: 'Gespeicherte Vorgänge', component: SavedProcessesComponent, parameters: {}}
      ];
  }

  setTranslateParams() {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
