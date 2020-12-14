const config = require('./../config')

const newGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  newGame
}
