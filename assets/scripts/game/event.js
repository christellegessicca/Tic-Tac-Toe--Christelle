const ui require = ('./ui')
const api require = ('./api')
const getFormFields = require('./../../lib/get-form-fields')

const onNewGame = function(event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGame)
    .catch(ui.onNewGame)
}

module.exports = {
  onNewGame
}
