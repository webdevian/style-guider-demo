'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'textarea',

  // Component title - for docs/style guide
  title: 'Text Area',

  // Paragraphs for docs
  docs: [
    'Text areas are used for multi-line text input, for example on a comments form. A text area can also be given a helper label. The text area should be given an appropriate amount of rows (with the #[code rows] attribute) for the text that is expected to be entered.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: true,

  // Default blocks content (false for no block)
  block: 'Default Value',

  // Can attributes be passed to the mixin?
  attributes: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: `+textarea('example-textarea', 'example-textarea', 'Example Text Area', 3, null, 'Some helper text')`,

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
      'default': 'my-input',
      'description': 'The name attribute of the text area'
    },
    'id': {
      'type': 'string',
      'default': 'my-input',
      'description': 'The id of the text area'
    },
    'label': {
      'type': 'string',
      'default': 'My Input',
      'description': 'The label text'
    },
    'rows': {
      'type': 'number',
      'default': 4,
      'description': 'The number of rows'
    },
    'helperBelow': {
      'type': 'string',
      'default': 'Some helpful advice for this field',
      'description': 'Helper that appears below the text area'
    },
    'helperAbove': {
      'type': 'string',
      'default': 'More helpful advice for this field',
      'description': 'Helper the appears above the text area'
    },
    'error': {
      'type': 'string',
      'default': null,
      'description': 'Error message string, marks whole field as errorneous'
    }
  }
}
