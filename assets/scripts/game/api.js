const config = require('./../config')
const store = require('./../templates/store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGameGet = function (response) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (selectedBox, value) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: selectedBox,
          value: value
        },
        over: false
      }

    },

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const numOfGamesPlayed = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  newGame,
  // updateGame,
  numOfGamesPlayed,
  newGameGet,
  updateGame
}
