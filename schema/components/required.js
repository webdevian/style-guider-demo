'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'required',

  // Component title - for docs/style guide
  title: 'Required Fields',

  // Paragraphs for docs
  docs: [
    'In some applications different input fields will be required or optional. For best usability, optional fields should be marked as optional (in the helper text), and required fields should be the default.'
  ],

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null
}
