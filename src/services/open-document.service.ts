import {Injectable} from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './user/user.service';

@Injectable()
export class OpenDocumentService {

  closeButtonText: string;
  language: string;

  constructor(private inAppBrowser: InAppBrowser,
              private translateService: TranslateService,
              userService: UserService) {
    this.getTranslation();
    this.language = userService.getLanguage();
  }

  openDocument(document) {
    let options = 'location=no,toolbarposition=top,toolbar=yes,enableViewportScale=yes,closebuttoncaption='
      + this.closeButtonText;
    let url = 'assets/pdfs/' + document + '_' + this.language + '.pdf';
    console.log(url);
    this.inAppBrowser.create(url, '_blank', options);
  }

  getTranslation() {
    this.translateService.get('buttons.finished').subscribe(
      value => {
        this.closeButtonText = value;
      }
    );
  }
}
