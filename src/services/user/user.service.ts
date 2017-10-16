import {Injectable} from '@angular/core';
import {USER} from './user.data';

@Injectable()
export class UserService {
  // user = USER['standard'];
  user = USER['FE1'];

  getUser() {
    return this.user;
  }

  setUser(string) {
    this.user = USER[string];
    return this.user;
  }

  getLanguage() {
    return 'de';
  }

  getDateFormat() {
    // return ['DD/MM/YYYY', 'dd/MM/yyyy'];
    return ['DD.MM.YYYY', 'MMM dd, yyyy'];
  }

}
