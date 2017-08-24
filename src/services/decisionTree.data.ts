export const DECISIONTREE_DATA = {
  options: [
    {
      name: 'Annahme',
      terminalPoint: false,
      questionOrComment: 'Worum handelt es sich?',
      type: 'what',
      options: [
        {
          name: 'Bargeld',
          addition: 'und bargeldähnliche Zuwendungen',
          title: 'Bargeld',
          icon: 'cash',
          terminalPoint: false,
          disabled: true,
          options: []
        },
        {
          name: 'Special Events',
          addition: '(z.B. Formel 1, VIP Logen, Oktoberfest)',
          title: 'Special Event',
          icon: 'specialEvent',
          terminalPoint: false,
          questionOrComment: 'Wer lädt Sie ein?',
          type: 'who',
          options: [
            {
              name: 'Geschäftspartner',
              terminalPoint: false,
              questionOrComment: 'Welchen Geldwert hat die Einladung?',
              type: 'howMuch',
              options: [
                {
                  name: '≤ 500€',
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
                      infoText: `self-approval`,
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `self-approval`,
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                  }
                },
                {
                  name: '> 500€',
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
            },
            {
              name: 'Andere',
              terminalPoint: false,
              disabled: true,
              options: []
            }
          ]
        },
        {
          name: 'Einladungen',
          addition: 'mit überwiegendem Unterhaltungscharakter',
          title: 'Unterhaltung',
          icon: 'entertainment',
          terminalPoint: false,
          disabled: true,
          options: []
        },
        {
          name: 'Geschäftsessen',
          title: 'Geschäftsessen',
          icon: 'businessLunch',
          terminalPoint: false,
          questionOrComment: 'Wer lädt Sie ein?',
          type: 'who',
          options: [
            {
              name: 'Geschäftspartner',
              terminalPoint: false,
              questionOrComment: 'Welchen Geldwert hat die Einladung?',
              type: 'howMuch',
              options: [
                {
                  name: 'x ≤ 250€',
                  terminalPoint: true,
                  getUserCareerLevel: false,
                  proceed: {
                    all: {
                      continueWith: 'info',
                      infoText: `no-approval_business-lunch`,
                      documentationRequired: false,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: '250€ < x ≤ 500€',
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
                      infoText: `self-approval`,
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `self-approval`,
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                  }
                },
                {
                  name: 'x > 500€',
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
            },
            {
              name: 'Andere',
              terminalPoint: true,
              getUserCareerLevel: false,
              proceed: {
                all: {
                  continueWith: 'email',
                  emailTo: 'gComp',
                  note: 'warning_business-lunch',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            }
          ]
        },
        {
          name: 'Geschenke',
          title: 'Geschenk',
          icon: 'gifts',
          terminalPoint: false,
          disabled: true,
          options: []
        }
      ]
    },
    {
      name: 'Vergabe',
      questionOrComment: 'Worum handelt es sich?',
      type: 'what',
      terminalPoint: false,
      disabled: true,
      options: []
    }
  ]

};
