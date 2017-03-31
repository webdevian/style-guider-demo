'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'top-menu',

  // Component title - for docs/style guide
  title: 'Main Menu',

  // Paragraphs for docs
  docs: [
    'On applications with multi-level navigation, breadcrumbs can be used to indicate which section the user is in, and help them navigate back up navigation.'
  ],

  // Does this component break out of the content wrapper
  breakout: true,

  // Can the component be demo'd inline
  inline: false,

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
    'items': {
      'type': 'array',
      'description': 'Multi-dimensional array of items, links and children',
      'default': [
        {
          'label': 'Home',
          'link': '#'
        },
        {
          'label': 'A dropdown Menu',
          'children': [
            {
              'label': 'Menu Item 1',
              'link': '#'
            },
            {
              'label': 'Menu Item 2',
              'link': '#'
            },
            {
              'label': 'Menu Item 3',
              'link': '#'
            }
          ]
        },
        {
          'label': 'Active dropdown Menu',
          'active': true,
          'children': [
            {
              'label': 'Menu Item 1',
              'link': '#'
            },
            {
              'label': 'Menu Item 2',
              'link': '#',
              'active': true
            },
            {
              'label': 'Menu Item 3',
              'link': '#'
            }
          ]
        },
        {
          'label': 'A dropdown Menu',
          'children': [
            {
              'label': 'Menu Item 1',
              'link': '#'
            },
            {
              'label': 'Menu Item 2',
              'link': '#'
            },
            {
              'label': 'Menu Item 3',
              'link': '#'
            }
          ]
        }
      ]
    },
    'logo': {
      'type': 'boolean',
      'default': true,
      'description': 'Should the logo be included in the menu'
    },
    'logoLink': {
      'type': 'string',
      'default': '#',
      'description': 'Link when clicking on logo'
    },
    'icon': {
      'type': 'boolean',
      'default': true,
      'description': 'Should the hamburger menu icon be shown on mobile'
    },
    'linkText': {
      'type': 'string',
      'default': 'Menu',
      'description': 'Text for mobile menu link'
    }
  }
}
