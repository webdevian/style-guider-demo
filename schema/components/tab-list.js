'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'tab-list',

  // Component title - for docs/style guide
  title: 'Tab List',

  // Paragraphs for docs
  docs: [
    'To save on-screen space we can use tabbed content to alternate between views within the same context, whilst staying on the same page.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block:
`+tab(1)
  h2 This is tab 1
  p Some tab content
+tab(2, true)
  h2 This is tab 2
  p Some tab content
+tab(3)
  h2 This is tab 3
  p Some tab content
+tab(4)
  h2 This is tab 4
  p Some tab content`,

  // Can attributes be passed to the mixin?
  attributes: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: null,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_tab.pug',

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'tabs': {
      'type': 'array',
      'default': [
        {
          'label': 'Tab 1',
          'id': 1
        },
        {
          'label': 'Tab 2',
          'id': 2,
          'active': true
        },
        {
          'label': 'Tab 3',
          'id': 3
        },
        {
          'label': 'Tab 4',
          'id': 4
        }
      ],
      'description': 'Array of links with label/id/active key/values'
    }
  }
}
