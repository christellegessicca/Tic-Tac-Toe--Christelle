'use strict'

const store = require('./../templates/store')

const newGameSuccess = function (response) {
  $('#message').text('Game is in session')
  $('.game-board').show()
  $('.box').text('')
  store.game = response.game
}

const newGameFailure = function (error) {
  $('#message').text('Game failed' + error.responseJSON.message)
  $('.authenticated').show()
}

const updateGameSuccess = function (response) {
  $('#message').text('Game is updated')
  store.game = response.game
}

const updateGameFailure = function (error) {
  $('#message').text('Game update failed' + error.responseJSON.message)
}

const numOfGamesPlayedSuccess = function (response) {
  $('#message').text('Number of games played: ' + response)
  $('.authenticated').show()
}

const winnerIs = function (response) {
  $('message').text('The winner is: ' + response)
  $('.authenticated').show()
}

const winnerError = function () {
  $('#message').text('Failed to gget number of games played')
}
module.exports = {
  newGameFailure,
  newGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  numOfGamesPlayedSuccess,
  winnerIs,
  winnerError
}
