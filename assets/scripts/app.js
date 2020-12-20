'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/event')
const newGameEvents = require('./game/event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.game-board').hide()
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create new game
  $('#new-game').on('click', newGameEvents.onNewGame)
  $('.box').on('click', newGameEvents.onSelectedBox)
  $('')
})
