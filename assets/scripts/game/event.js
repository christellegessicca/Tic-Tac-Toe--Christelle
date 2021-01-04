const api = require('./api')
const ui = require('./ui')
const store = require('./../templates/store')

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
  // const player1 = x
  // const player2 = o
  // let curplayer = player1
  if ($(selectedBox).text() === '') {
    $(selectedBox).text(value)
    turnCount++
    api.updateGame(onSelectedIndex, value)
      .then(ui.updateGameSuccess)
  } else if ($(selectedBox).text() === '1') {
    ui.updateGameFailure()
  }
  // CODE DOES NOT WORK
  // if (store.game.cells[winningConditions[0]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, 'you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if(store.game.cells[winningConditions[1]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[2]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[3]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[4]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //     api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[5]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[6]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[7]]) {
  //   isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // } else if (store.game.cells[winningConditions[8]]) {
  // isOver = true
  //   $('#message').text(`Congrat, ${curPlayer}, you win!`)
  //   api.updateGame(cellindex,curPlayer,isOver)
  // }
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
