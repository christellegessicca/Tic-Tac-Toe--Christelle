const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
// declared a global scope in order for turnCount to reset everytime
let turnCount = 2
const onSelectedBox = function (event) {
  event.preventDefault()
  const selectedBox = event.target
  const onSelectedIndex = $(selectedBox).data('cell-index')

  let value
  if (turnCount % 2 === 0) {
    value = 'x'
  } else {
    value = 'o'
  }
  if ($(selectedBox).text() === '') {
    $(selectedBox).text(value)
    turnCount++
    api.updateGame(onSelectedIndex, value)
      .then(ui.updateGameSuccess)
  } else if ($(selectedBox).text() === '1') {
    ui.updateGameFailure()
  }
}

const onNumOfGamesPlayed = function (event) {
  event.preventDefault()
  api.numOfGamesPlayed()
    .then(ui.numOfGamesPlayedSuccess)
    .catch(ui.numOfGamesPlayedFailure)
}
const onUserWin = function (event) {
  event.preventDefault()
  if('cell-index'= '0' &&)
    .then(ui.winnerIs)
    .catch(ui.winnerError)
}

module.exports = {
  onNewGame,
  onNumOfGamesPlayed,
  onSelectedBox,
  onUserWin
}
