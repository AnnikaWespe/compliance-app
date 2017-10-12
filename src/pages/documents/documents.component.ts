import {Component} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'page-documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

  language: string;
  closeButtonText: string;

  constructor(userService: UserService,
              private inAppBrowser: InAppBrowser,
              private translateService: TranslateService) {
    this.language = userService.getLanguage();
    this.getTranslation();
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
