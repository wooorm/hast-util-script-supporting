'use strict'

module.exports = scriptSupporting

var is = require('hast-util-is-element')

var names = ['script', 'template']

/* Check if a node is a script-supporting element */
function scriptSupporting(node) {
  return is(node, names)
}
