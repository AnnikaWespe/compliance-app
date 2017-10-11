import {Component} from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {

  language: string
  constructor(userService: UserService) {
    this.language = userService.getLanguage();
  }

  openDocument(document){
    console.log(document);
  }

}
