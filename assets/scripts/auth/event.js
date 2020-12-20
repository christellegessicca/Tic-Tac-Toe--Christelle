const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

const onSignUp = function (event) {
  // prevents page from refreshing
  event.preventDefault()

  // Get data from form
  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword

}
