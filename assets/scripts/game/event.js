const api = require('./api')
const ui = require('./ui')

const onNewGame = function(event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
// declared a global scope in order for turnCount to reset everytime
let turnCount = 2
const onSelectedBox = function(event) {
  event.preventDefault()
  const selectedBox = event.target
  const onSelectedIndex = $(selectedBox).data('cell-index')
  let value
  if (turnCount % 2 === 0) {
    value = 'x'
  } else {
    value = 'o'
  }
  api.newGame()
  if ($(selectedBox).text() === '') {
    $(selectedBox).text(value)
    turnCount++
    api.updateGame(onSelectedIndex, value)
      .then(ui.updateGameSuccess)
  } else if ($(selectedBox).text() === '1') {
    ui.updateGameFailure()
  }
}

const onWinnerIs = function(event) {
  event.preventDefault()
  const winner = event.target
  const onWinner = $(winner).data('cell-index')
  let playerX
  let playerO
  const eightWinningComb = [
    ($(onWinner) === '0', '1', '2')
    ($(onWinner) === '3', '4', '5')
    ($(onWinner) === '6', '7', '8')
    ($(onWinner) === '0', '5', '7')
    ($(onWinner) === '1', '4', '7')
    ($(onWinner) === '2', '6', '8')
    ($(onWinner) === '0', '4', '8')
    ($(onWinner) === '6', '4', '3')
  ]

  if (playerX = eightWinningComb) {
      .then(ui.winnerIs)
      .catch(ui.winnerError)
  }
  if (playerO = eightWinningComb) {
    .then(ui.winnerIs)
      .catch(ui.)
  }
}

const onNumOfGamesPlayed = function(event) {
  event.preventDefault()
  api.numOfGamesPlayed()
    .then(ui.numOfGamesPlayedSuccess)
    .catch(ui.numOfGamesPlayedFailure)
}

module.exports = {
  onNewGame,
  onNumOfGamesPlayed,
  onSelectedBox,
  onWinner
}
