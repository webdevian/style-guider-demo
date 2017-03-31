'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'disabled',

  // Component title - for docs/style guide
  title: 'Disabled Fields',

  // Paragraphs for docs
  docs: [
    'Some applications will need to show a field but not accept user input, or disable the submit button until all required fields are completed. The #[code disabled] attribute stops input and styles it to makes it clear that inputs can not be modified by the user.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: `+input('text', 'example-text-disabled', 'User cannot edit this text', 'example-text-disabled', 'An example disabled text field', 'You cannot edit this field')(disabled)`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_input.pug',

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null
}
