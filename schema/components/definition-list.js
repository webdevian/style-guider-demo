'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'definition-list',

  // Component title - for docs/style guide
  title: 'Definition Lists',

  // Paragraphs for docs
  docs: [
    'A definition list #[code= \'<dl>\'] is used to display name-value pairs, like FAQs. Each term #[code= \'<dt>\'] is paired with one or more definitions #[code= \'<dd>\'].'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`dl
  dt A Definition Term
  dd The definition, styled just like a paragraph, but with clever spacing between definitions.

  dt Why should I use this style guide?
  dd Because it looks good`
}
