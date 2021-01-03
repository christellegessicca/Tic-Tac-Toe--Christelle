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
  api.newGame()
  if ($(selectedBox).text() === '') {
    $(selectedBox).text(value)
    turnCount++
    api.updateGame(onSelectedIndex, value)
      .then(ui.updateGameSuccess)
  } else if ($(selectedBox).text() === '1') {
    ui.updateGameFailure()
  }

  const player1 = 'x'
  const player2 = 'o'
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const onWinner = function (winningConditions, event) {
    const curPlayer = event.target

    if (player1 === winningConditions.data('cell-index')) {
    // .then(ui.winnerIsX)
    //   .catch(ui.winnerErrorX)
    // console.log('player 1 won')
      //  ui.winnerIsX()
      // alert(winningConditions.data())
    }

    if (player2 === winningConditions.data('cell-index')) {
      console.log('I made it here')
    // console.log('player 2 won')
    // .then(ui.winnerIsO)
    //   .catch(ui.winnerErrorO)
      //  ui.winnerIsO()
    }
  }
}

const onNumOfGamesPlayed = function (event) {
  event.preventDefault()
  api.numOfGamesPlayed()
    .then(ui.numOfGamesPlayedSuccess)
    .catch(ui.numOfGamesPlayedFailure)
}

module.exports = {
  onNewGame,
  onNumOfGamesPlayed,
  onSelectedBox
}
