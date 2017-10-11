import {Component} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FileOpener} from '@ionic-native/file-opener';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

  language: string;
  constructor(userService: UserService,
              private fileOpener: FileOpener) {
    this.language = userService.getLanguage();
  }

  openDocument(document){
    console.log(document);
    this.fileOpener.open('assets/pdfs/faq_de.pdf', 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));
  }

}
