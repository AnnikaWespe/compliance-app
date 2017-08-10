import { NgModule, ErrorHandler } from '@angular/core';

import { AppInsightsLibraryService } from './lib/appinsightslibrary.service';

import { AppInsightsService } from './appinsights.service';
import { AppInsightsErrorHandler } from './appinsights.errorhandler';

@NgModule({
    providers: [
        AppInsightsLibraryService,
        AppInsightsService,
        {
            provide: ErrorHandler,
            useClass: AppInsightsErrorHandler
        }
    ]
})
export class AppInsightsModule {

}