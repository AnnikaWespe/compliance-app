import {Injectable, OnDestroy} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './user/user.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

declare let cordova: any;

@Injectable()
export class OpenDocumentService implements OnDestroy{

  closeButtonText: string;
  language: string;
  loadStartSubscription;
  loadEndSubscription;

  constructor(private inAppBrowser: InAppBrowser,
              private translateService: TranslateService,
              private screenOrientation: ScreenOrientation,
              userService: UserService) {
    this.getTranslation();
    this.language = userService.getLanguage();
  }


  ngOnDestroy() {
    if (this.loadStartSubscription) {
      this.loadStartSubscription.unsubscribe();
    }

    if (this.loadEndSubscription) {
      this.loadEndSubscription.unsubscribe();
    }
  }


  openDocument(document) {
    let options = 'location=no,toolbarposition=top,toolbar=yes,enableViewportScale=yes,closebuttoncaption='
      + this.closeButtonText;
    let url = 'assets/pdfs/' + document + '_' + this.language + '.pdf';
    console.log(url);
    let inAppBrowserInstance = this.inAppBrowser.create(url, '_blank', options);
    this.subscribeForOrientationChange(inAppBrowserInstance);

  }

  getTranslation() {
    this.translateService.get('buttons.finished').subscribe(
      value => {
        this.closeButtonText = value;
      }
    );
  }

  subscribeForOrientationChange(inAppBrowserInstance) {
    if (typeof cordova !== 'undefined'){
      this.loadStartSubscription = inAppBrowserInstance.on('loadstart').subscribe(() => {
        this.screenOrientation.unlock();
      })
      ;
      this.loadEndSubscription = inAppBrowserInstance.on('exit').subscribe(() => {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      });
    }

  }

}
