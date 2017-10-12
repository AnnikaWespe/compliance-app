import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-attachment-modal',
  templateUrl: 'attachmentModal.component.html'
})
export class AttachmentModalComponent {
  image: string;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.image = this.navParams.get('image');
  }

  goBack(deleteImage: boolean) {
    this.viewCtrl.dismiss({deleteImage: deleteImage});
  }
}
