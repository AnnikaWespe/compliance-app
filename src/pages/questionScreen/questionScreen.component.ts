import {AfterViewChecked, Component, ElementRef, Renderer2} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {InfoScreenComponent} from './infoScreen/infoScreen.component';
import {GlossaryService} from '../../services/glossary/glossary.service';
import {ConfirmSendInquiryComponent} from './confirmSendInquiry/confirmSendInquiry.component';
import {DecisionTreeService} from '../../services/decisionTree/decisionTreeData.service';
import {Process} from '../../services/process.model';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'page-question-screen',
  templateUrl: 'questionScreen.component.html'
})
export class QuestionScreenComponent implements AfterViewChecked {

  option;
  title: string;
  question: SafeHtml;
  info: SafeHtml;
  clickHandlersAdded = false;
  branch;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private glossaryService: GlossaryService,
              private decisionTreeService: DecisionTreeService,
              private domSanitizer: DomSanitizer,
              private elRef: ElementRef,
              private renderer: Renderer2) {
    this.option = navParams.get('option');
    this.title = this.decisionTreeService.getTitle();
    this.decisionTreeService.getQuestionscreenText(this.option.type).subscribe((results) => {
      this.createPageText(results[0], results[1]);
    });
    this.branch = this.decisionTreeService.getBranch();
  }

  ngAfterViewChecked() {
    if (!this.clickHandlersAdded) {
      this.clickHandlersAdded = this.glossaryService.injectClickEventHandler(this.elRef, this.renderer);
    }
  }

  setTitle(option) {
    this.decisionTreeService.setTitle(option.what).subscribe(() => {
        this.loadNext(option);
      }
    );
  }

  loadNext(option) {
    if (!option.options) {
      let procedure = this.decisionTreeService.getProcedure(option);
      let process = new Process(option.proceed.info, procedure);
      if (procedure.continueWith === 'email') {
        this.navCtrl.push(ConfirmSendInquiryComponent, {
          process: process
        });
      }
      else if (procedure.continueWith === 'info') {
        this.navCtrl.push(InfoScreenComponent, {
          process: process
        });
      }
    }
    else {
      this.navCtrl.push(QuestionScreenComponent, {option: option});
    }
  }

  openInfo(term) {
    this.glossaryService.createPopUp(term);
  }

  createPageText(question, info) {
    let infoStringWithSpanTags = this.glossaryService.injectSpanTags(info);
    this.info = this.domSanitizer.bypassSecurityTrustHtml(infoStringWithSpanTags);
    this.question = this.domSanitizer.bypassSecurityTrustHtml(question);
  }

}
