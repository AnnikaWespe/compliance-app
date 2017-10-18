export const DECISIONTREE_DATA = {
  options: [
    {
      name: 'get-donation',
      type: 'what',
      options: [
        {
        what: 'gifts',
        type: 'howMuch_gift',
        options: [
          {
            name: '≤ 40€',
            getUserCareerLevel: false,
            proceed: {
              info: {
                branch: 'get-donation',
                what: 'gift',
                who: 'unspecified',
                howMuch: '≤ 40€',
              },
              all: {
                continueWith: 'info',
                infoText: 'no-approval_gift',
                approvalForm: 'none',
                documentationRequired: false,
                sendFormToHumanResources: false,
              }
            }
          },
          {
            name: '40€ < x ≤ 500€',
            getUserCareerLevel: true,
            proceed: {
              info: {
                branch: 'get-donation',
                what: 'gift',
                who: 'unspecified',
                howMuch: '40€ < x ≤ 500€',
              },
              standard: {
                continueWith: 'email',
                emailTo: 'FE2',
                continueButtonType: 'inventory_or_deductible',
                note: 'warning_gift',
                documentationRequired: false,
                sendFormToHumanResources: true,
              },
              FE1: {
                continueWith: 'email',
                emailTo: 'HR',
                continueButtonType: 'inventory_or_deductible',
                note: 'self-approval_gift',
                documentationRequired: false,
                sendFormToHumanResources: true,
              },
              FE2: {
                continueWith: 'email',
                emailTo: 'HR',
                continueButtonType: 'inventory_or_deductible',
                note: 'self-approval_gift',
                documentationRequired: false,
                sendFormToHumanResources: true,
              },
            }
          },
          {
            name: 'x > 500€',
            getUserCareerLevel: true,
            proceed: {
              info: {
                branch: 'get-donation',
                what: 'gift',
                who: 'unspecified',
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
                note: 'normal_gComp',
                documentationRequired: true,
                sendFormToHumanResources: false,
              }
            }
          }
        ]
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
                      infoText: 'no-approval_business-lunch',
                      approvalForm: 'none',
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
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_business-lunch',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_business-lunch',
                      approvalForm: 'self',
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
                      note: 'normal_gComp',
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
                  continueButtonType: 'inquiry_gComp',
                  note: 'warning_business-lunch_others',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            }
          ]
        },
        {
          what: 'entertainment',
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
                      what: 'entertainment',
                      who: 'businessPartner',
                      howMuch: '≤ 500€',
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_FE2',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'HR',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_entertainment',
                      approvalForm: 'self',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'HR',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_entertainment',
                      approvalForm: 'self',
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
                      what: 'entertainment',
                      who: 'businessPartner',
                      howMuch: '> 500€'
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_FE1',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_FE1',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_gComp',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
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
                  what: 'entertainment',
                  who: 'others',
                  howMuch: 'unspecified',
                },
                all: {
                  continueWith: 'email',
                  emailTo: 'gComp',
                  continueButtonType: 'yes',
                  note: 'warning_entertainment_others',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            }
          ]
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
                      continueWith: 'email',
                      emailTo: 'HR',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_special-event',
                      approvalForm: 'self',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'HR',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_special-event',
                      approvalForm: 'self',
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
                      note: 'normal_gComp',
                      documentationRequired: false,
                      sendFormToHumanResources: true,
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
                  what: 'specialEvent',
                  who: 'others',
                  howMuch: 'unspecified',
                },
                all: {
                  continueWith: 'email',
                  emailTo: 'gComp',
                  continueButtonType: 'yes',
                  note: 'warning_specialEvent_others',
                  documentationRequired: true,
                  sendFormToHumanResources: false,
                }
              }
            }
          ]
        },
        {
          what: 'cash',
          getUserCareerLevel: false,
          proceed: {
            info: {
              branch: 'get-donation',
              what: 'cash',
              who: 'unspecified',
              howMuch: 'unspecified',
            },
            all: {
              continueWith: 'email',
              emailTo: 'gComp',
              continueButtonType: 'yes',
              note: 'warning_cash',
              documentationRequired: true,
              sendFormToHumanResources: false,
            }
          }
        },
      ]
    },
    {
      name: 'give-donation',
      type: 'who',
      options: [
        {
          name: 'businessPartner',
          type: 'what',
          options: [
            {
              what: 'gifts',
              type: 'howMuch_gift',
              options: [
                {
                  name: 'x ≤ 35€',
                  getUserCareerLevel: false,
                  proceed: {
                    info: {
                      branch: 'get-donation',
                      what: 'gift',
                      who: 'unspecified',
                      howMuch: '≤ 35€',
                    },
                    all: {
                      continueWith: 'info',
                      infoText: 'no-approval_gift',
                      approvalForm: 'none',
                      documentationRequired: false,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: '35€ < x ≤ 500€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'gift',
                      who: 'unspecified',
                      howMuch: '35€ < x ≤ 500€',
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
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_gift',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_gift',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: 'x > 500€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'get-donation',
                      what: 'gift',
                      who: 'unspecified',
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
                      note: 'normal_gComp',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                }
              ]
            },
            {
              what: 'businessLunch',
              type: 'howMuch',
              options: [
                {
                  name: 'x ≤ 250€',
                  getUserCareerLevel: false,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'businessLunch',
                      who: 'businessPartner',
                      howMuch: '≤ 250€',
                    },
                    all: {
                      continueWith: 'info',
                      infoText: 'no-approval_business-lunch',
                      approvalForm: 'none',
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
                      branch: 'give-donation',
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
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_business-lunch',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_business-lunch',
                      approvalForm: 'self',
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
                      branch: 'give-donation',
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
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_gComp',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_gComp',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                  }
                }
              ]
            },
            {
              what: 'entertainment',
              type: 'howMuch',
              options: [
                {
                  name: '≤ 500€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'entertainment',
                      who: 'businessPartner',
                      howMuch: '≤ 500€',
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_FE2',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_entertainment',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_entertainment',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: '> 500€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'entertainment',
                      who: 'businessPartner',
                      howMuch: '> 500€',
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
                      emailTo: 'FE1+gComp',
                      continueButtonType: 'inquiry_normal',
                      note: 'normal_FE1',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'inquiry_gComp',
                      note: 'normal_gComp',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                  }
                }
              ]
            },
            {
              what: 'specialEvent',
              type: 'howMuch',
              options: [
                {
                  name: '≤ 250€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'specialEvent',
                      who: 'businessPartner',
                      howMuch: '≤ 250€',
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE2',
                      continueButtonType: 'inquiry_normal',
                      note: 'high-necessity_FE2',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_special-event',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'self',
                      continueButtonType: 'inquiry_normal',
                      note: 'self-approval_special-event',
                      approvalForm: 'self',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    }
                  }
                },
                {
                  name: '> 250€',
                  getUserCareerLevel: true,
                  proceed: {
                    info: {
                      branch: 'give-donation',
                      what: 'specialEvent',
                      who: 'businessPartner',
                      howMuch: '> 250€',
                    },
                    standard: {
                      continueWith: 'email',
                      emailTo: 'FE1+gComp',
                      continueButtonType: 'yes',
                      note: 'warning_specialEvent_standard',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE2: {
                      continueWith: 'email',
                      emailTo: 'FE1+gComp',
                      continueButtonType: 'yes',
                      note: 'warning_specialEvent_standard',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                    FE1: {
                      continueWith: 'email',
                      emailTo: 'gComp',
                      continueButtonType: 'yes',
                      note: 'warning_specialEvent_FE1',
                      documentationRequired: true,
                      sendFormToHumanResources: false,
                    },
                  }
                }]
            },
            {
              what: 'cash',
              getUserCareerLevel: false,
              proceed: {
                info: {
                  branch: 'give-donation',
                  what: 'cash',
                  who: 'businessPartner',
                  howMuch: 'unspecified',
                },
                all: {
                  continueWith: 'email',
                  emailTo: 'gComp',
                  continueButtonType: 'yes',
                  note: 'warning_cash',
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
              branch: 'give-donation',
              what: 'unspecified',
              who: 'others',
              howMuch: 'unspecified',
            },
            all: {
              continueWith: 'email',
              emailTo: 'gComp',
              continueButtonType: 'yes',
              note: 'warning_others',
              documentationRequired: true,
              sendFormToHumanResources: false,
            }
          }
        }
      ]
    }
  ]
}

