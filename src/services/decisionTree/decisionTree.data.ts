export const DECISIONTREE_DATA = {
  options: [
    {
      name: 'get-donation',
      terminalPoint: false,
      type: 'what',
      options: [
        {
          what: 'cash',
          title: 'Bargeld',
          terminalPoint: true,
          disabled: true,
          options: []
        },
        {
          what: 'specialEvent',
          title: 'Special Event',
          terminalPoint: false,
          type: 'who_invitation',
          options: [
            {
              what: 'specialEvent',
              name: 'businessPartner',
              terminalPoint: false,
              type: 'howMuch_invitation',
              options: [
                {
                  name: '≤ 500€',
                  terminalPoint: true,
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      what: 'specialEvent',
                      who: 'businessPartner',
                      howMuch: '≤ 500€',
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE2',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'info',
                      infoText: `self-approval_special-event`,
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `self-approval_special-event`,
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
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE1',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE1',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_GComp',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    }
                  }
                }
              ]
            },
            {
              what: 'specialEvent',
              name: 'others',
              terminalPoint: false,
              disabled: true,
              options: []
            }
          ]
        },
        {
          title: 'Unterhaltung',
          what: 'entertainment',
          terminalPoint: false,
          disabled: true,
          options: []
        },
        {
          title: 'Geschäftsessen',
          what: 'businessLunch',
          terminalPoint: false,
          type: 'who_invitation',
          options: [
            {
              what: 'businessLunch',
              name: 'businessPartner',
              terminalPoint: false,
              type: 'howMuch_invitation',
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
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE2',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'info',
                      infoText: `self-approval_business-lunch`,
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'info',
                      infoText: `self-approval_business-lunch`,
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
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE1',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE1',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_GComp',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                }
              ]
            },
            {
              name: 'others',
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
                  continueButtonType: 'inquiry_warning',
                  note: 'warning_business-lunch_others',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            }
          ]
        },
        {
          title: 'Geschenk',
          what: 'gifts',
          terminalPoint: false,
          disabled: true,
          options: []
        }
      ]
    },
    {
      name: 'give-donation',
      type: 'what',
      terminalPoint: false,
      disabled: true,
      options: []
    }
  ]

};

