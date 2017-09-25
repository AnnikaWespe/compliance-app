export class Process {
  info: {
    what: string;
    who: string;
    howMuch: string;
  };
  procedure: {
    continueWith: string;
    emailTo: string;
    note?: string;
    infoText?: string;
    continueButtonType?: string;
    documentationRequired: boolean;
    sendFormToHumanResources: boolean;
  };
  pageTitle: string;
  timeStamp: string;
  supplementaryData: {
    time?: string;
    description?: string;
    reason?: string;
    value?: number;
    person?: string;
    tax?: string;
    taxReceiptWhere?: string;
  };
  constructor(info, procedure, pageTitle, timeStamp = '', supplementaryData = {}){
    this.info = info;
    this.procedure = procedure;
    this.pageTitle = pageTitle;
    this.timeStamp = timeStamp;
    this.supplementaryData = supplementaryData;
  }
}

