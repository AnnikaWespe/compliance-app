import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyAppComponent} from './app.component';

import {HomePageComponent} from '../pages/home/home.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {UserService} from '../services/user/user.service';
import {EndScreenComponent} from '../pages/questions/endScreen/endScreen.component';
import {AppInsightsModule} from '../services/app-insights/appinsights.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../services/TranslateLoader';
import {Http, HttpModule} from '@angular/http';
import {DecisionTreeService} from '../services/decisionTree/decisionTreeData.service';
import {GlossaryService} from '../services/glossary/glossary.service';
import {FormComponent} from '../pages/questions/confirmSendInquiry/form/form.component';
import {ConfirmSendInquiryComponent} from '../pages/questions/confirmSendInquiry/confirmSendInquiry.component';
import {SavedProcessesComponent} from '../pages/savedProcesses/savedProcesses.component';
import {ProcessStorageService} from '../services/Template+ProcessStorage/processStorage.Service';
import {TemplatesStorageService} from '../services/Template+ProcessStorage/templatesStorage.service';
import {SavedTemplatesComponent} from '../pages/savedTemplates/savedTemplates.component';
import {DocumentsComponent} from '../pages/documents/documents.component';
import {QuestionScreenComponent} from '../pages/questions/questionScreen.component';
import {Camera} from '@ionic-native/camera';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {AttachmentModalComponent}from '../pages/questions/confirmSendInquiry/form/attachment/attachmentModal.component';
import {InfoScreenComponent} from '../pages/questions/infoScreen/infoScreen.component';
import {OpenDocumentService} from '../services/open-document.service';

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendInquiryComponent,
    InfoScreenComponent,
    EndScreenComponent,
    DocumentsComponent,
    FormComponent,
    SavedProcessesComponent,
    SavedTemplatesComponent,
    AttachmentModalComponent,
  ],
  imports: [
    AppInsightsModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      },
    }),
    HttpModule,
    IonicModule.forRoot(MyAppComponent, {
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendInquiryComponent,
    InfoScreenComponent,
    EndScreenComponent,
    DocumentsComponent,
    FormComponent,
    SavedProcessesComponent,
    SavedTemplatesComponent,
    AttachmentModalComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    DecisionTreeService,
    GlossaryService,
    ProcessStorageService,
    TemplatesStorageService,
    OpenDocumentService,
    InAppBrowser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
