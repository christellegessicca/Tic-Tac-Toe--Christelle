'use strict'

const store = require('./../templates/store')

const newGameSuccess = function (response) {
  $('#message').text('Have fun!')
  // $('#gameBoard').show()
  store.game = response.game
}

const newGameFailure = function (error) {
  $('#message').text('Game failed' + error.responseJSON.message)
}

module.exports = {
  newGameFailure,
  newGameSuccess
}
