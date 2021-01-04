'use strict'

const store = require('./../templates/store')
// const winnerIs = require('./event')

const newGameSuccess = function (response) {
  $('#message').text('Game is in session')
  $('.game-board').show()
  $('.box').text('')
  store.game = response.game
  // let reset = 2
}

const newGameFailure = function (error) {
  $('#message').text('Game failed' + error.responseJSON.message)
  $('.authenticated').show()
}

const updateGameSuccess = function (response) {
  $('#message').text('Game is updated')
  store.game = response.game
  // winnerIs.onWinner()
}

const updateGameFailure = function (error) {
  $('#message').text('Game update failed' + error.responseJSON.message)
}

const numOfGamesPlayedSuccess = function (response) {
  $('#message').text('Number of games played: ' + response.game)
  $('.authenticated').show()
  store.game = response.game
}

const numOfGamesPlayedFailure = function (error) {
  $('#message').text('Number of games played failed' + error.responseJSON.message)
}

module.exports = {
  newGameFailure,
  newGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  numOfGamesPlayedSuccess,
  numOfGamesPlayedFailure
}
