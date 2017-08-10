import { Injectable } from '@angular/core';


@Injectable()
export class AppInsightsLibraryService {

    private _window: any;

    private _appInsightsName: string = 'appInsights';

    constructor(){
        this._window = (<any>window);
    }

    public getAppInsightsInstance(){
        if (!this._window[this._appInsightsName]) {
            this._window[this._appInsightsName] = {
                setup: this._getSetup(),
            };
            this._defineLazyMethods();
        }
        return this._window[this._appInsightsName];
    }

    private _getSetup(){
        const self = this;

        return function(aiConfig: any){
            const aiObject = self._window[self._appInsightsName];
            aiObject.config = aiConfig;
            if (!aiObject.queue) {
                aiObject.queue = [];
            }
            const scriptElement = document.createElement('script');
            scriptElement.src = aiConfig.url;
            document.head.appendChild(scriptElement);

            // collect global errors
            if (!aiConfig.disableExceptionTracking) {
                self._createLazyMethod('_onerror');
                const originalOnError = self._window['_onerror'];

                self._window['_onerror'] = function (message: any, url: any, lineNumber: any, columnNumber: any, error: any) {
                    const handled = originalOnError && originalOnError(message, url, lineNumber, columnNumber, error);
                    if (handled !== true) {
                        aiObject['_onerror'](message, url, lineNumber, columnNumber, error);
                    }
                    return handled;
                };
            }
        }
    }

    private _defineLazyMethods() {
        const aiObject = this._window[this._appInsightsName];
        // capture initial cookie if possible
        try {
            aiObject.cookie = document.cookie;
        }
        catch (e) {
        }
        aiObject.queue = [];
        const method = [
            'clearAuthenticatedUserContext',
            'flush',
            'setAuthenticatedUserContext',
            'startTrackEvent',
            'startTrackPage',
            'stopTrackEvent',
            'stopTrackPage',
            'trackDependency',
            'trackEvent',
            'trackException',
            'trackMetric',
            'trackPageView',
            'trackTrace'
        ];
        while (method.length) {
            this._createLazyMethod(method.pop());
        }
    }

    private _createLazyMethod(name: any) {
        const aiObject = this._window[this._appInsightsName];
        // Define a temporary method that queues-up a the real method call
        aiObject[name] = function () {
            // Capture the original arguments passed to the method
            const originalArguments = arguments;
            // If the queue is available, it means that the function wasn't yet replaced with actual function value
            if (aiObject.queue) {
                aiObject.queue.push(function () {
                    return aiObject[name].apply(aiObject, originalArguments);
                });
            }
            else {
                // otherwise execute the function
                aiObject[name].apply(aiObject, originalArguments);
            }
        };
    }
}