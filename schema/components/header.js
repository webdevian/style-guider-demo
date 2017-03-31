'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'header',

  // Component title - for docs/style guide
  title: 'Headers',

  // Paragraphs for docs
  docs: [
    'Headers use a lighter font-weight. They should be used in cascading order to denote the importance of a section\'s contents.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`h1 h1. This is a very large header
h2 h2. This is a large header
h3 h3. This is a medium header
h4 h4. This is a moderate header
h5 h5. This is a small header
h6 h6. This is a tiny header`
}
