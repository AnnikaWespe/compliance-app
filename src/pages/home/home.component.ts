import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuestionScreenComponent} from '../questionScreen/questionScreen.component';
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
  innerPageHeader: SafeHtml;
  info: SafeHtml;

  clickHandlersAdded: boolean;

  constructor(public navCtrl: NavController,
              private decisionTreeService: DecisionTreeService,
              private glossaryService: GlossaryService,
              private translateService: TranslateService,
              private elRef: ElementRef,
              private renderer: Renderer2,
              private domSanitizer: DomSanitizer) {
    this.decisionTreeData = decisionTreeService.getDecisionTreeData();
    this.createPageText();
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
   this.decisionTreeService.resetTitle();
  }

  startProcess(option, branch) {
    this.decisionTreeService.setBranch(branch);
    this.navCtrl.push(QuestionScreenComponent, {option: option, result: [option.name]});
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }


  createPageText() {
    this.translateService.get('secondary-pages.home.title').subscribe(
      (value) => {
        let stringWithSpanTags = this.glossaryService.injectSpanTags(value);
        this.innerPageHeader = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
      }
    );
    this.translateService.get('secondary-pages.home.info').subscribe(
      (value) => {
        let stringWithSpanTags = this.glossaryService.injectSpanTags(value);
        this.info = this.domSanitizer.bypassSecurityTrustHtml(stringWithSpanTags);
      }
    );
  }

}
