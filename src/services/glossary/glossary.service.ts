import {ElementRef, Injectable, Renderer2} from '@angular/core';
import {GLOSSARY} from './glossary.data';
import {AlertController} from 'ionic-angular';


@Injectable()
export class GlossaryService {
  glossary = GLOSSARY;

  constructor(public alertCtrl: AlertController) {
  }

  createPopUp(term) {
    let alert = this.alertCtrl.create({
      title: term,
      message: this.glossary[term],
    });
    alert.present();
  }

  injectClickEventHandler(elRef: ElementRef, renderer: Renderer2) {
    let foundElements = elRef.nativeElement.querySelectorAll('.open-info');
    if (foundElements.length) {
      foundElements.forEach((element) => {
        element.setAttribute('tappable', '');
        renderer.listen(element, 'click', () => {
          let glossaryTerm = element.getAttribute('glossary');
          this.createPopUp(glossaryTerm);
        });
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
      let stringToAppearInHtml = content[0];
      let stringToAppearInPopUp = (content[1].replace(/ /g, '') === 'same') ?
        stringToAppearInHtml : content[1];
      string = string.replace(stringToBeReplacedInHtml,
        '<span class = "open-info" glossary = "' + stringToAppearInPopUp + '">' + stringToAppearInHtml + '</span>');
      match = regExp.exec(string);
    }
    return string;
  }

}
