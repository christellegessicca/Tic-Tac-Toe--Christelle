'use strict'
const store = require('./../templates/store')

const signUpSuccess = function (response) {
  $('#message').text('Sign up Succesful!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed ' + error.responseJSON.message)
}

const onSignInSuccess = function (response) {
  $('#message').text('Sign in Succesful!')
  store.user = response.user
  $('form').trigger('reset')
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const onSignInFailure = function (error) {
  $('#message').text('Please try signing in again! ' + error.responseJSON.message)
}
const onChangePasswordSuccess = function (response) {
  $('#message').text('Password change is Succesful! ')
  $('form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Change password failed. Please try again! ' + error.responseJSON.message)
}

const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('Sign out was a success!')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess
}
