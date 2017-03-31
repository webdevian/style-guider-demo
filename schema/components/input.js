'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'input',

  // Component title - for docs/style guide
  title: 'Text Inputs',

  // Paragraphs for docs
  docs: [
    'These input types create a single line text field: #[code text], #[code date], #[code datetime], #[code datetime-local], #[code email], #[code month], #[code number], #[code password], #[code search], #[code tel], #[code time], #[code url], and #[code week]',
    'Using specific input types for different data formats can help improve usability. For example, using a #[code tel] input will open a numpad keyboard on mobile devices, making it easier for the user to input a phone number.',
    'All form inputs should have a clear label, that describes what you want the user to enter. Clicking a label should focus on the form field. This is achieved by linking label elements to input elements with a #[code for] attribute.',
    'Although popular in modern websites, inline placeholders should not be used because they disappear as soon as a user starts typing, and the user may think there is already text input. Instead an example or hint should be placed beneath the input.'
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
  demo: `+input('text', 'example-text', null, 'example-text', 'An example text field', 'A helper or example for this field', false)`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'type': {
      'enum': [ 'text', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url', ' week' ],
      'default': 'text',
      'description': 'The input type attribute'
    },
    'name': {
      'type': 'string',
      'default': 'my-input',
      'description': 'The name attribute of the input'
    },
    'value': {
      'type': 'string',
      'default': null,
      'description': 'The default value of the field'
    },
    'id': {
      'type': 'string',
      'default': 'my-input',
      'description': 'The id of the input'
    },
    'label': {
      'type': 'string',
      'default': 'My Input',
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
    'error': {
      'type': 'string',
      'default': null,
      'description': 'Error message string, marks whole field as errorneous'
    }
  }
}
