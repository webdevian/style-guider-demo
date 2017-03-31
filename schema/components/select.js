'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'select',

  // Component title - for docs/style guide
  title: 'Select Menu',

  // Paragraphs for docs
  docs: [
    'Use select menus to combine many choices into one dropdown menu. This is useful for saving space, small screen devices have native UI patterns for dealing with these'
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
  demo: `+select('my-input',2,'my-input','My Input','Some helpful advice for this field','More helpful advice for this field',[{"label":"An Option","value":"1"},{"label":"Another Option","value":"2"},{"label":"A Third Option","value":"3"}])`,

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
      'default': 'my-select',
      'description': 'The name attribute of the input'
    },
    'selectedValue': {
      'type': 'string',
      'default': null,
      'description': 'The default value of the field'
    },
    'id': {
      'type': 'string',
      'default': 'my-select',
      'description': 'The id of the input'
    },
    'label': {
      'type': 'string',
      'default': 'My Select',
      'description': 'The label text'
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
    'error': {
      'type': 'string',
      'default': null,
      'description': 'Error message string, marks whole field as errorneous'
    }
  }
}
