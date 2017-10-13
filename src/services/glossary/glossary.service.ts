import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {GLOSSARY} from './glossary.data';
import {AlertController} from 'ionic-angular';
import {OpenDocumentService} from "../open-document.service";


@Injectable()
export class GlossaryService {
  glossary = GLOSSARY;

  constructor(public alertCtrl: AlertController,
              private openDocumentService: OpenDocumentService) {
  }

  createPopUp(term) {
    let alert = this.alertCtrl.create({
      title: term,
      message: this.glossary[term],
    });
    alert.present();
  }

  openDocument(document) {
    this.openDocumentService.openDocument(document);
  }

  injectClickEventHandler(elRef: ElementRef, renderer: Renderer2) {
    let foundElements = elRef.nativeElement.querySelectorAll('.open-info');
    if (foundElements.length) {
      foundElements.forEach((element) => {
        let keyWord = element.getAttribute('keyWord');
        let callback;
        element.setAttribute('tappable', '');
        if (keyWord === 'openGuidelines') {
          callback = () => {
            this.openDocument('guideline');
          };
        }
        else {
          callback = () => {
            this.createPopUp(keyWord);
          };
        }
        renderer.listen(element, 'click', callback);

      });
      return true;
    }
    return false;
  }

  injectSpanTags(string) {
    let regExp = /\[(.*?)\]/;
    let match = regExp.exec(string);
    while (match) {
      let stringToBeReplacedInHtml = match[0];
      let content = match[1].split(',');
      if (content[1].charAt(0) === ' ') {
        content[1] = content[1].substr(1);
      }
      let stringToAppearInHtml = content[0];
      let keyWordForClickEvent = (content[1].replace(/ /g, '') === 'same') ?
        stringToAppearInHtml : content[1];
      string = string.replace(stringToBeReplacedInHtml,
        '<span class = "open-info" keyWord = "' + keyWordForClickEvent + '">' + stringToAppearInHtml + '</span>');
      match = regExp.exec(string);
    }
    return string;
  }

}
