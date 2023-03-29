import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification'

const alertDialog = Dialog
const alertToast = Toast
const alertType = ALERT_TYPE

export const showAlertToast = (title, textBody, type) => {
  return alertToast.show({
    title,
    textBody,
    type:
      type === 'warning'
        ? alertType.WARNING
        : type === 'error'
        ? alertType.DANGER
        : type === 'success'
        ? alertType.SUCCESS
        : '',
  })
}

export const showAlertDialog = (title, textBody, type) => {
  return alertDialog.show({
    title,
    textBody,
    type:
      type === 'warning'
        ? alertType.WARNING
        : type === 'error'
        ? alertType.DANGER
        : type === 'success'
        ? alertType.SUCCESS
        : '',
    button: 'OK',
  })
}
