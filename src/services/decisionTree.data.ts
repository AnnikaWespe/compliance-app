export const DECISIONTREE_DATA = {
  questionOrComment: 'Wie können wir helfen?',
  options: [
    {
      name: 'Annahme',
      terminalPoint: false,
      questionOrComment: 'Welcher Art ist die Zuwendung?',
      type: 'what',
      options: [
        {
          name: 'Bargeld',
          terminalPoint: false,
          disabled: true,
          options: []
        },
        {
          name: 'Special Events (z.B. Formel 1, VIP Logen, Oktoberfest)',
          terminalPoint: false,
          questionOrComment: 'Von wem kommt die Zuwendung?',
          type: 'who',
          options: [
            {
              name: 'Von Anderen',
              terminalPoint: false,
              disabled: true,
              options: []
            },
            {
              name: 'Von Geschäftspartnern',
              terminalPoint: false,
              questionOrComment: 'Welchen Wert hat die Zuwendung?',
              options: [
                {
                  name: '≤500€',
                  terminalPoint: true,
                  getUserCareerLevel: true,
                  proceed: {
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2,',
                      note: 'normal',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'info',
                      infoText: `Sie können sich ein Geschäftsessen in diesem Preissegment selbst genehmigen.`,
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `Sie können sich ein Geschäftsessen in diesem Preissegment selbst genehmigen.`,
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                  }
                },
                {
                  name: '>500€',
                  terminalPoint: true,
                  getUserCareerLevel: true,
                  proceed: {
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      note: 'normal',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      note: 'normal',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      note: 'normal',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'Einladungen mit überwiegendem Unterhaltungscharakter',
          terminalPoint: false,
          disabled: true,
          options: []
        },
        {
          name: 'Geschäftsessen',
          terminalPoint: false,
          questionOrComment: 'Von wem kommt die Zuwendung?',
          type: 'who',
          options: [
            {
              name: 'Von Anderen',
              terminalPoint: true,
              getUserCareerLevel: false,
              proceed: {
                all: {
                  continueWith: 'email',
                  emailTo: 'gComp',
                  note: 'warning',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            },
            {
              name: 'Von Geschäftspartnern',
              terminalPoint: false,
              questionOrComment: 'Welchen Wert hat die Zuwendung?',
              options: [
                {
                  name: '≤250€',
                  terminalPoint: true,
                  getUserCareerLevel: false,
                  proceed: {
                    all: {
                      continueWith: 'info',
                      infoText: `Ein Geschäftsessen in diesem Preissegment ist grundsätzlich genehmigungsfrei. 
                  Dies setzt voraus, dass es sich um übliche Geschäftspraxis handelt, 
                  und der Grundsatz der Sozialadäquanz erfüllt ist.`,
                      documentationRequired: false,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: '250< x ≤500€',
                  terminalPoint: true,
                  getUserCareerLevel: true,
                  proceed: {
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2',
                      note: 'normal',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'info',
                      infoText: `Sie können sich ein Geschäftsessen in diesem Preissegment selbst genehmigen.`,
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `Sie können sich ein Geschäftsessen in diesem Preissegment selbst genehmigen.`,
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                  }
                },
                {
                  name: '>500€',
                  terminalPoint: true,
                  getUserCareerLevel: true,
                  proceed: {
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      note: 'normal',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      note: 'normal',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      note: 'normal',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'Geschenke',
          terminalPoint: false,
          disabled: true,
          options: []
        }
      ]
    },
    {
      name: 'Vergabe',
      questionOrComment: 'Welcher Art ist die Zuwendung?',
      type: 'what',
      terminalPoint: false,
      disabled: true,
      options: []
    }
  ]

};
