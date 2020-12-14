'use strict'
const store = require('./../templates/store')

const signUpSuccess = function (response) {
  $('#message').text('Sign up Succesful!')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed' + error.responseJSON.message)
}

const onSignInSuccess = function (response) {
  $('#message').text('Sign in Succesful!')
  store.user = response.user
}

const onSignInFailure = function (error) {
  $('#message').text('Sign in failed' + error.responseJSON.message)
}
const changePasswordSuccess = function (response) {
  $('#message').text('Password change is Succesful!')
  store.user = response.user
}

const changePasswordFailure = function (error) {
  $('#message').text('Sign up failed' + error.responseJSON.message)
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign out was a success!')
}

const onSignOutFailure = function (error) {
  $('message').text('Sign out failed' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  onSignInFailure,
  onSignInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess
}
