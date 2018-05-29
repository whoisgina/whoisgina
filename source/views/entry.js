var html = require('choo/html')
var renderEntry = require('../components/entry')

module.exports = view

function view (state, emit) {
  return html`
    <div>
      ${renderEntry(state.page().v(), emit)}
    </div>
  `
}
