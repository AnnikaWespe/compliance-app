import {Component} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

  language: string;
  constructor(userService: UserService,
              private inAppBrowser: InAppBrowser) {
    this.language = userService.getLanguage();
  }

  openDocument(document){
    console.log(document);
    this.inAppBrowser.create('assets/pdfs/faq_de.pdf');
  }

}
