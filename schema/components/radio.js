'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'radio',

  // Component title - for docs/style guide
  title: 'Radio Buttons',

  // Paragraphs for docs
  docs: [
    'Use radio buttons when the user must select just one choice'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: true,

  // Default blocks content (false for no block)
  block: false,

  // Can attributes be passed to the mixin?
  attributes: true,

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
    'name': {
      'type': 'string',
      'default': 'my-radios',
      'description': 'The name attribute of the radio group'
    },
    'selectedValue': {
      'type': 'string',
      'default': null,
      'description': 'The selected value'
    },
    'id': {
      'type': 'string',
      'default': 'my-radios',
      'description': 'The id of the radio-group'
    },
    'legend': {
      'type': 'string',
      'default': 'My Radio options',
      'description': 'The legend text'
    },
    'helperBelow': {
      'type': 'string',
      'default': 'Some helpful advice for this field',
      'description': 'Helper that appears below the field'
    },
    'helperAbove': {
      'type': 'string',
      'default': 'More helpful advice for this field',
      'description': 'Helper the appears above the field'
    },
    'options': {
      'type': 'array',
      'default': [
        {
          'label': 'An Option',
          'value': '1'
        },
        {
          'label': 'Another Option',
          'value': '2'
        },
        {
          'label': 'A Third Option',
          'value': '3'
        }
      ],
      'description': 'Array of objects with label/value pairs'
    },
    'stack': {
      'type': 'boolean',
      'default': false,
      'description': 'Display options in vertical stack?'
    },
    'error': {
      'type': 'string',
      'default': null,
      'description': 'Error message string, marks whole field as errorneous'
    }
  }
}
