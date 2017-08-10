import { Injectable } from '@angular/core';

import { AppInsightsLibraryService } from './lib/appinsightslibrary.service';

import { SeverityLevel } from './severitylevel';
import { Config } from './config';

@Injectable()
export class AppInsightsService {

    constructor(appInsightsLibraryService: AppInsightsLibraryService){
        this.appInsights = appInsightsLibraryService.getAppInsightsInstance();
    }

    private appInsights: any;

    Init(config: Config){
        this.appInsights.setup(config);
    }

    trackPageView(
        name?: string,
        url?: string,
        properties?: any,
        measurements?: any,
        duration?: number
    ): void {
        this.appInsights.trackPageView(name, url, properties, measurements, duration);
    }

    trackEvent(
        name: string,
        properties?: any,
        measurements?: any
    ): void {
        this.appInsights.trackEvent(name, properties, measurements);
    };

    trackMetric(
        name: string,
        average: number,
        sampleCount?: number,
        min?: number,
        max?: number,
        properties?: any
    ): void {
        this.appInsights.trackMetric(name, average, sampleCount, min, max, properties);
    }

    trackException(
        exception: Error,
        handledAt?: string,
        properties?: any,
        measurements?: any,
        severityLevel?: SeverityLevel
    ): void {
        this.appInsights.trackException(exception, handledAt, properties, measurements, severityLevel);
    }

    trackTrace(
        message: string,
        properties?: any,
        measurements?: any
    ): void {
        this.appInsights.trackTrace(message, properties, measurements);
    }

    trackDependency(
        id: string,
        method: string,
        absoluteUrl: string,
        pathName: string,
        totalTime: number,
        success: boolean,
        resultCode: number
    ): void {
        this.appInsights.trackDependency(id, method, absoluteUrl, pathName, totalTime, success, resultCode);
    }

    flush() {
        this.appInsights.flush();
    }

    setAuthenticatedUserContext(
        authenticatedUserId: string,
        accountId?: string
    ): void {
        this.appInsights.setAuthenticatedUserContext(authenticatedUserId, accountId);
    }

    clearAuthenticatedUserContext (): void {
        this.appInsights.clearAuthenticatedUserContext();
    }

    startTrackPage(name?: string) {
        this.appInsights.startTrackPage(name);
    }

    stopTrackPage(
        name?: string,
        url?: string,
        properties?: Object,
        measurements?: Object
    ): void {
        this.appInsights.stopTrackPage(name, url, properties, measurements);
    }
}