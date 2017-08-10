import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePageComponent} from '../pages/home/home.component';
import {UserService} from '../services/user.service';
// import {AppInsightsService} from '../app-insights/appinsights.service';

@Component({
  templateUrl: 'app.html'
})
export class MyAppComponent {
  rootPage: any = HomePageComponent;
  user;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              userService: UserService/*, appinsightsService: AppInsightsService*/) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.user = userService.getUser();
    /*appinsightsService.Init({
      instrumentationKey: AppConfig.applicationsInsightsKey,
      url: '../assets/js/ai.1.0.9.min.js'
    });*/
  }
}
