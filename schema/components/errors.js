'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'errors',

  // Component title - for docs/style guide
  title: 'Form Errors',

  // Paragraphs for docs
  docs: [
    'User input needs to be validated to check for erroneous or malicious data. To improve usability, human-friendly error messages should be shown on invalid fields.',
    'In-line validation (inline feedback as the user is filling out the form) is much more effective than post-submission feedback.',
    'Error messages can be added to the DOM by javascript or into the source html server-side. A wrapper with class #[code .has-error] around an input and label denotes an error. A span with class #[code .error-message] should show the specific error.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: true,

  // Default blocks content (false for no block)
  block: true,

  // Can attributes be passed to the mixin?
  attributes: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: `+input('text', 'example-text-error', 'Some erroneous text', 'example-text-error', 'Text field with an error', 'Helper text', null, 'This field is too long')`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_input.pug',

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null
}
