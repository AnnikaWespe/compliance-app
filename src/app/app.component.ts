import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {HomePageComponent} from '../pages/home/home.component';
import {UserService} from '../services/user/user.service';
import {TranslateService} from '@ngx-translate/core';
import {SavedProcessesComponent} from '../pages/savedProcesses/savedProcesses.component';
// import {SavedTemplatesComponent} from '../pages/savedTemplates/savedTemplates.component';
import {DocumentsComponent} from '../pages/documents/documents.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import {AppInsightsService} from '../app-insights/appinsights.service';

@Component({
  templateUrl: 'app.html'
})
export class MyAppComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePageComponent;
  pages;
  user;

  constructor(
              private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private userService: UserService,
              private translate: TranslateService
              /*, appinsightsService: AppInsightsService*/) {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.setTranslateParams();
    this.user = userService.getUser();
    this.setMenu();
    /*appinsightsService.Init({
      instrumentationKey: AppConfig.applicationsInsightsKey,
      url: '../assets/js/ai.1.0.9.min.js'
    });*/
  }

  openPage(page) {
    this.nav.setRoot(page.component, page.parameters);
  }

  setMenu() {
    this.pages = {
      home: {component: HomePageComponent, parameters: {}},
      documents: {component: DocumentsComponent, parameters: {}},
      savedProcesses: {component: SavedProcessesComponent, parameters: {}},
     // templates: {component: SavedTemplatesComponent, parameters: {}}
    };
  }


  setTranslateParams() {
    let language = this.userService.getLanguage();
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  switchUser() {
    let currentUserCarreerLevel = this.user.careerLevel;
    if (currentUserCarreerLevel === 'standard') {
      this.user = this.userService.setUser('FE1');
    }
    else if (currentUserCarreerLevel === 'FE1') {
      this.user = this.userService.setUser('FE2');
    }
    else {
      this.user = this.userService.setUser('standard');
    }
  }

}
