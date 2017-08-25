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
            what: 'cash',
            addition: 'und bargeldähnliche Zuwendungen',
            title: 'Bargeld',
            terminalPoint: true,
            disabled: true,
            options: []
          },
          {
            name: 'Special Events',
            what: 'specialEvent',
            addition: '(z.B. Formel 1, VIP Logen, Oktoberfest)',
            title: 'Special Event',
            terminalPoint: false,
            questionOrComment: 'Wer lädt Sie ein?',
            type: 'who',
            options: [
              {
                what: 'specialEvent',
                name: 'Geschäftspartner',
                terminalPoint: false,
                questionOrComment: 'Welchen Geldwert hat die Einladung?',
                type: 'howMuch',
                options: [
                  {
                    name: '≤ 500€',
                    terminalPoint: true,
                    getUserCareerLevel: true,
                    info: {
                      what: 'specialEvent',
                      who: 'businessPartner',
                      howMuch: '≤ 500€',
                    },
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
                      info: {
                        what: 'specialEvent',
                        who: 'businessPartner',
                        howMuch: '> 500€'
                      },
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
                what: 'specialEvent',
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
            what: 'entertainment',
            terminalPoint: false,
            disabled: true,
            options: []
          },
          {
            name: 'Geschäftsessen',
            title: 'Geschäftsessen',
            what: 'businessLunch',
            terminalPoint: false,
            questionOrComment: 'Wer lädt Sie ein?',
            type: 'who',
            options: [
              {
                what: 'businessLunch',
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
                      info: {
                        what: 'businessLunch',
                        who: 'businessPartner',
                        howMuch: 'x ≤ 250€',
                      },
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
                      info: {
                        what: 'businessLunch',
                        who: 'businessPartner',
                        howMuch: '250€ < x ≤ 500€',
                      },
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
                      info: {
                        what: 'businessLunch',
                        who: 'businessPartner',
                        howMuch: 'x > 500€',
                      },
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
                  info: {
                    what: 'businessLunch',
                    who: 'others',
                  },
                  all: {
                    continueWith: 'email',
                    emailTo: 'gComp',
                    note: 'warning',
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
            what: 'gifts',
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

  }
;
