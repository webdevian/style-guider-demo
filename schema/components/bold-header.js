'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'bold-header',

  // Component title - for docs/style guide
  title: 'Bold Headers',

  // Paragraphs for docs
  docs: [
    'Sometimes a bolder header might be required for more emphasis. This can be done by adding the #[code .heavy] class. If this option is used it should be done consistently throughout the application or website.',
    'By inserting a #[code small] element into a header Foundation will scale the header font size down for an inline element, allowing you to use this for subtitles or other secondary header text.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`h1.heavy h1. This is a very large header
h2.heavy h2. This is a large header
h3.heavy h3. This is a medium heade
h4.heavy h4. This is a moderate header
h5.heavy h5. This is a small header
h6.heavy h6. This is a tiny header`
}
