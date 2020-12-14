'use strict'

const config = require('./../config')

const store = require('./../templates/store')

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl,
    method: 'DELETE',
    headers: {
      Autorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = function () {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Autorization: 'Bearer ' + store.user.token
    }
  })
}

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData

  })
}

module.exports = {
  changePassword,
  signUp,
  signOut,
  signIn
}
