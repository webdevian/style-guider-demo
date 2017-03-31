'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'upload',

  // Component title - for docs/style guide
  title: 'File Upload',

  // Paragraphs for docs
  docs: [
    'File upload inputs are inconsistent across all browsers, so we use a label mask to display it like a button. When clicked it opens up the user\'s file browser'
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
  demo: `+upload('example-file-upload', 'example-file-upload', 'Upload your file', 'Upload')`,

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
      'default': 'my-upload',
      'description': 'The name attribute of the input'
    },
    'id': {
      'type': 'string',
      'default': 'my-upload',
      'description': 'The id of the input'
    },
    'label': {
      'type': 'string',
      'default': 'My Upload',
      'description': 'The label text'
    },
    'buttonText': {
      'type': 'string',
      'default': 'An Upload Button',
      'description': 'The text on the upload button'
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
