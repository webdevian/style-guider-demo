'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'submit',

  // Component title - for docs/style guide
  title: 'Submit Button',

  // Paragraphs for docs
  docs: [
    'A mixin for inputs with a type of #[code hidden] has been included'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: true,

  // Default blocks content (false for no block)
  block: false,

  // Can attributes be passed to the mixin?
  attributes: true,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`+submit('Submit')
br`,

  // Mixin params (false for no mixin)
  'params': {
    'value': {
      'type': 'string',
      'default': 'Submit',
      'description': 'The label on the submit button'
    }
  }
}
