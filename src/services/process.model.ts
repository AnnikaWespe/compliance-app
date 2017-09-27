export class Process {
  info: {
    what: string;
    who: string;
    howMuch: string;
    branch: string;
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
  constructor(info, procedure, timeStamp = '', supplementaryData = {}){
    this.info = info;
    this.procedure = procedure;
    this.timeStamp = timeStamp;
    this.supplementaryData = supplementaryData;
  }
}

