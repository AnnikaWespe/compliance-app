import {Component} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {OpenDocumentService} from '../../services/open-document.service';


@Component({
  selector: 'page-documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

  language: string;
  closeButtonText: string;

  constructor(userService: UserService,
              private openDocumentService: OpenDocumentService) {
    this.language = userService.getLanguage();
  }

  openDocument(document) {
    this.openDocumentService.openDocument(document);
  }

}
