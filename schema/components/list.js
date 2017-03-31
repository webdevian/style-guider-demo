'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'list',

  // Component title - for docs/style guide
  title: 'Lists',

  // Paragraphs for docs
  docs: [
    'Lists are useful for a collection of text items and can be numbered or nested too.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`p This is what an un-ordered list looks like:

ul
  li A list item
  li Another list item
  li Another one
  li Ok, last one

p A list following a paragraph has reduced spacing, so that a paragraph can give context to a list:

ol
  li A list item
  li Another list item
  li Another one
  li Ok, last one`
}
