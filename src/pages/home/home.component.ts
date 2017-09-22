import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../getDonation/questionScreen/questionScreen.component';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';
import {GlossaryService} from '../../services/glossary/glossary.service';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePageComponent implements AfterViewChecked {

  decisionTreeData;
  title: SafeHtml;
  info: SafeHtml;

  clickHandlersAdded: boolean;

  constructor(public navCtrl: NavController,
              decisionTreeService: DecisionTreeService,
              private glossaryService: GlossaryService,
              private translateService: TranslateService,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private domSanitizer: DomSanitizer) {
    this.decisionTreeData = decisionTreeService.getDecisionTreeData();
    this.getTranslation();
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
  }

  startProcess(option) {
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  getTranslation() {
    this.translateService.get('home.title').subscribe(
      (value) => {
        let stringWithSpanTags = this.glossaryService.injectSpanTags(value);
        this.title = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
      }
    );
    this.translateService.get('home.info').subscribe(
      (value) => {
        let stringWithSpanTags = this.glossaryService.injectSpanTags(value);
        this.info = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
      }
    );
  }

}
