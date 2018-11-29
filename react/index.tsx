import * as React from 'react'
import { injectIntl } from 'react-intl'
import { PaymentModel } from 'gocommerce.admin-gateway'

interface PaymentFormProps {
  intl: any
}

interface PaymentFormState {}

class PaymentFormComponent extends React.PureComponent<PaymentFormProps, PaymentFormState> {
  render() {
    const { intl } = this.props
    const intlPrefix = 'admin.payment.paypalplus'
    const optionsInstallments = new Array(12).fill(0).map(function(_, i) {
      const curr = i + 1
      return {
        "value": curr,
        "label": `${curr}x`
      }
    })
    const paymentSchema = {
      "title": "PayPal Plus",
      "properties": {
        "boxGeneral": {
          "title": intl.formatMessage({ id: `${intlPrefix}.boxGeneral` }),
          "id": "general",
          "fields": {
            "rule.isDefault": {
              "type": "boolean",
              "widget": "hidden",
              "title": "isDefault"
            },
            "paymentAlias": {
              "type": "string",
              "widget": "hidden",
              "title": "paymentAlias"
            },
            "interestRate": {
              "type": "string",
              "widget": "hidden",
              "title": "interestRate"
            },
            "creditCardActive": {
              "type": "boolean",
              "widget": "toggle",
              "title": intl.formatMessage({ id: `${intlPrefix}.creditCardActive` })
            },
            "minimumValue": {
              "type": "number",
              "widget": "currency",
              "title": intl.formatMessage({ id: `${intlPrefix}.minimumValue` }),
              "description": intl.formatMessage({ id: `${intlPrefix}.minimumValue.description` })
            }
          }
        },
        "boxApplicationSetup": {
          "title": intl.formatMessage({ id: `${intlPrefix}.boxApplicationSetup` }),
          "id": "applicationSetup",
          "fields": {
            "affiliation.configuration.clientId": {
              "type": "string",
              "widget": "text",
              "title": "Client ID",
              "validate": {
                "required": true
              }
            },
            "affiliation.configuration.secret": {
              "type": "string",
              "widget": "text",
              "title": "Secret",
              "validate": {
                "required": true
              }
            },
            "affiliation.configuration.userName": {
              "type": "string",
              "widget": "text",
              "title": "Username",
              "validate": {
                "required": true
              }
            },
            "affiliation.configuration.password": {
              "type": "string",
              "widget": "text",
              "title": "Password",
              "validate": {
                "required": true
              }
            },
            "affiliation.configuration.signature": {
              "type": "string",
              "widget": "text",
              "title": "Signature",
              "validate": {
                "required": true
              }
            }
          }
        },
        "boxInstallments": {
          "title": intl.formatMessage({ id: `${intlPrefix}.boxInstallments` }),
          "id": "installments",
          "fields": {
            "installments": {
              "fields": {
                "minimumInstallmentValue": {
                  "type": "number",
                  "widget": "currency",
                  "title": intl.formatMessage({ id: `${intlPrefix}.minimumInstallmentValue` })
                },
                "numberOfInstallments": {
                  "type": "number",
                  "widget": "select",
                  "title": intl.formatMessage({ id: `${intlPrefix}.installments.numberOfInstallments` }),
                  "options": optionsInstallments,
                  "validate": {
                    "required": true
                  }
                }
              }
            },
            "numberOfInstallmentsInterestFree": {
              "type": "number",
              "widget": "hidden",
              "title": intl.formatMessage({ id: `${intlPrefix}.installments.numberOfInstallmentsInterestFree` }),
              "description": intl.formatMessage({ id: `${intlPrefix}.installments.numberOfInstallmentsInterestFree.description` })
            }
          }
        }
      },
      "additionalData": {
        "requireAuthorize": false,
        "description": intl.formatMessage({ id: `${intlPrefix}.additionalData.description` })
      },
      "initialValues": {
        "paymentAlias": "paypalplus",
        "creditCardActive": false,
        "numberOfInstallments": 12,
        "numberOfInstallmentsInterestFree": 1
      }
    }

    return <PaymentModel payment_id="paypalplus" paymentSchema={paymentSchema} />
  }
}

export default injectIntl(PaymentFormComponent)
