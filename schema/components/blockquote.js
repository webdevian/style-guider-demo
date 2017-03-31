'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'blockquote',

  // Component title - for docs/style guide
  title: 'Blockquote',

  // Paragraphs for docs
  docs: [
    'Sometimes other people say nice things, and we may want to mention those things with a quote that clearly shows who said it. Use a #[code= \'<cite>\'] tag for the byline.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`blockquote I had a really good experience using this product.
  cite A. Customer`
}
