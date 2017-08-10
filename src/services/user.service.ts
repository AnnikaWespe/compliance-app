import {Injectable} from '@angular/core';
import {USER} from './user.data';

@Injectable()
export class UserService {
  getUser(){
    return USER;
  }
}
