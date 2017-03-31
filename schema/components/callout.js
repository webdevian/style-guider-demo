'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'callout',

  // Component title - for docs/style guide
  title: 'Error Callout',

  // Paragraphs for docs
  docs: [
    'A callout should be included at the top of the form to indicate that there are errors after form submission. It should indicate which fields have errors to help the user amend them'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block: true,

  // Can attributes be passed to the mixin?
  attributes: false,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: null,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'type': {
      'enum': ['default', 'alert', 'warning'],
      'default': null,
      'description': 'Type of callout, defines colour scheme'
    },
    'header': {
      'type': 'string',
      'default': 'There were some problems with your form',
      'description': 'The header of the callout'
    },
    'errors': {
      'type': 'array',
      'default': [
        {
          'label': 'Example Field',
          'id': 'example-text-error',
          'message': 'Must be less than 30 characters'
        },
        {
          'label': 'Another Field',
          'id': 'example-text-error',
          'message': 'Must be a specific type of data'
        }
      ],
      'description': 'Array of objects with label/id/message pairs'
    }
  }
}
