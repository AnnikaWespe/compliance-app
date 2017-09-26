export const DECISIONTREE_DATA = {
  options: [
    {
      name: 'get-donation',
      type: 'what',
      options: [
        {
          what: 'cash'
        },
        {
          what: 'specialEvent',
          type: 'who_invitation',
          options: [
            {
              name: 'businessPartner',
              type: 'howMuch_invitation',
              options: [
                {
                  name: '≤ 500€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'get-donation',
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
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'get-donation',
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
              name: 'others',
              disabled: true,
              options: []
            }
          ]
        },
        {
          what: 'entertainment',
          disabled: true,
          options: []
        },
        {
          what: 'businessLunch',
          type: 'who_invitation',
          options: [
            {
              name: 'businessPartner',
              type: 'howMuch_invitation',
              options: [
                {
                  name: 'x ≤ 250€',
                  getUserCareerLevel: false,
                  proceed: {
                    info: {
                      branch: 'get-donation',
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
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'get-donation',
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
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'get-donation',
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
              getUserCareerLevel: false,
              proceed: {
                info: {
                  branch: 'get-donation',
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
          what: 'gifts',
          disabled: true,
          options: []
        }
      ]
    },
    {
      name: 'give-donation',
      type: 'what',
      disabled: true,
      options: []
    }
  ]

};

