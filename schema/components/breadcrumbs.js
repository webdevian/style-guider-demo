'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'breadcrumbs',

  // Component title - for docs/style guide
  title: 'Breadcrumbs',

  // Paragraphs for docs
  docs: [
    'On applications with multi-level navigation, breadcrumbs can be used to indicate which section the user is in, and help them navigate back up navigation.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block: false,

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
    'items': {
      'type': 'array',
      'description': 'Array of objects with label/link strings',
      'default': [
        {
          'label': 'Home',
          'link': '#'
        },
        {
          'label': 'Category',
          'link': '#',
          'active': true
        },
        {
          'label': 'Sub-Category',
          'link': '#',
          'active': true
        },
        {
          'label': 'Current'
        }
      ]
    }
  }
}
