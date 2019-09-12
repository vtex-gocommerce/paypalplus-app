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
            "redirectActive": {
              "type": "boolean",
              "widget": "toggle",
              "title": intl.formatMessage({ id: `${intlPrefix}.creditCardActive` })
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
      },
      "additionalData": {
        "requireAuthorize": false,
        "description": intl.formatMessage({ id: `${intlPrefix}.additionalData.description` })
      },
      "initialValues": {
        "paymentAlias": "paypalplus",
        "redirectActive": false,
      }
    }

    return <PaymentModel payment_id="paypalplus" paymentSchema={paymentSchema} />
  }
}

export default injectIntl(PaymentFormComponent)
