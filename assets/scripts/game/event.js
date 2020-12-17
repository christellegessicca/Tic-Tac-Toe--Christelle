const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   api.updateGame()
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

const onNumOfGamesPlayed = function (event) {
  event.preventDefault()
  api.numOfGamesPlayed()
    .then(ui.numOfGamesPlayedSuccess)
    .catch(ui.numOfGamesPlayedFailure)
}

let turnCount = 2
const onSelect = function (event) {
  const selectedBox = event.target
  const onSelectIndex = $(selectedBox).data('cell-index')
let value

  if (turnCount % 2 === 0) {
    value = 'x'
  } else {
    value = 'o'
  }

  if ($(selectedBox).text === '') {
    turnCount++
    $(selectedBox).text(value)
    api.updateGame(onSelectIndex, value)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)

  }
}

module.exports = {
  onNewGame,
  onNumOfGamesPlayed,
  onSelect
}
