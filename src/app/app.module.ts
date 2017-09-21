import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyAppComponent} from './app.component';

import {HomePageComponent} from '../pages/home/home.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QuestionScreenComponent} from '../pages/getDonation/questionScreen/questionScreen.component';
import {UserService} from '../services/user/user.service';
import {InfoScreenComponent} from '../pages/getDonation/questionScreen/infoScreen/infoScreen.component';
import {EndScreenComponent} from '../pages/getDonation/questionScreen/endScreen/endScreen.component';
import {AppInsightsModule} from '../services/app-insights/appinsights.module';
import {DisclaimerComponent} from '../pages/disclaimer/disclaimer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../services/TranslateLoader';
import {Http, HttpModule} from '@angular/http';
import {DecisionTreeService} from '../services/decisionTree/decisionTreeData.service';
import {GlossaryService} from '../services/glossary/glossary.service';
import {FormComponent} from '../pages/getDonation/questionScreen/confirmSendInquiry/form/form.component';
import {ConfirmSendInquiryComponent} from '../pages/getDonation/questionScreen/confirmSendInquiry/confirmSendInquiry.component';
import {SavedProcessesComponent} from '../pages/savedProcesses/savedProcesses.component';
import {ProcessStorageService} from '../services/Template+ProcessStorage/processStorage.Service';
import {TemplatesStorageService} from '../services/Template+ProcessStorage/templatesStorage.service';
import {Globals} from '../services/globals';
import {SavedTemplatesComponent} from '../pages/savedTemplates/savedTemplates.component';

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendInquiryComponent,
    InfoScreenComponent,
    EndScreenComponent,
    DisclaimerComponent,
    FormComponent,
    SavedProcessesComponent,
    SavedTemplatesComponent
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
    DisclaimerComponent,
    FormComponent,
    SavedProcessesComponent,
    SavedTemplatesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    DecisionTreeService,
    GlossaryService,
    ProcessStorageService,
    TemplatesStorageService,
    Globals,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
