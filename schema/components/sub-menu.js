'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'sub-menu',

  // Component title - for docs/style guide
  title: 'Sub-menu',

  // Paragraphs for docs
  docs: [
    'The submenu component can be used to help users navigate between pages or screens within the current section.',
    'Active menu items (the page the user is currently on) should be given the #[code .active] class to highlight them'
  ],

  // Does this component break out of the content wrapper
  breakout: true,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block: false,

  // Can attributes be passed to the mixin?
  attributes: false,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo: `+sub-menu([{"label":"Menu Item 1","link":"#"},{"label":"Active Menu Item","link":"#","active":true},{"label":"Menu Item 3","link":"#"}])`,

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
      'description': 'Array of objects with label/link strings and active boolean',
      'default': [
        {
          'label': 'Menu Item 1',
          'link': '#'
        },
        {
          'label': 'Active Menu Item',
          'link': '#',
          'active': true
        },
        {
          'label': 'Menu Item 3',
          'link': '#'
        }
      ]
    }
  }
}
