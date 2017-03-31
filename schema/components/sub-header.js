'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'sub-header',

  // Component title - for docs/style guide
  title: 'Sub Headers',

  // Paragraphs for docs
  docs: [
    'By inserting a #[code small] element into a header Foundation will scale the header font size down for an inline element, allowing you to use this for subtitles or other secondary header text.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: `h4 This is a medium header #[small with a subheader]`
}
