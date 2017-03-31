'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'quick-links',

  // Component title - for docs/style guide
  title: 'Quick Links',

  // Paragraphs for docs
  docs: [
    'An eye-catching navigation with big icons can be used for directing users to the most common pages and actions of a website or application.',
    'The links on the menu should be consistent throughout the application to help users learn the pattern.'
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
  demo:
`+quick-links([{"label":"Products","link":"#","icon":"tablet"},{"label":"Services","link":"#","icon":"van"},{"label":"Reviews","link":"#","icon":"map"},{"label":"Case Studies","link":"#","icon":"box"},{"label":"Login","link":"#","icon":"laptop"}])

main
  .content
    h4 Varying number of links

    p The default amount of links in the quick link bar should be 5. If you need to have 4 or 6 link the classes #[code .four] and #[code .six] should be used to neatly arrange the spacing.

    h4 Icons

    p Icons are added to links with a class, the 5 icons shown here are using #[code .tablet], #[code .van], #[code .map], #[code .box] and #[code .laptop]. To add new icons you will need to define the #[code background-image: url()] with your own class

  .sidebar.no-bottom-pad
    h4 Vertical quick links

    p Quick links can be displayed vertically (for use in sidebars etc) by adding the #[code .vertical] class. On small devices, vertical quick links are dispayed the same as horizontal.

    +quick-links([{"label":"Products","link":"#","icon":"tablet"},{"label":"Services","link":"#","icon":"van"},{"label":"Reviews","link":"#","icon":"map"},{"label":"Case Studies","link":"#","icon":"box"},{"label":"Login","link":"#","icon":"laptop"}],true)`,

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
      'description': 'array of objects with label/link/icon strings. The length of the array is counted to apply .four or .six class if necessary',
      'default': [
        {
          'label': 'Products',
          'link': '#',
          'icon': 'tablet'
        },
        {
          'label': 'Services',
          'link': '#',
          'icon': 'van'
        },
        {
          'label': 'Reviews',
          'link': '#',
          'icon': 'map'
        },
        {
          'label': 'Case Studies',
          'link': '#',
          'icon': 'box'
        },
        {
          'label': 'Log In',
          'link': '#',
          'icon': 'laptop'
        }
      ]
    },
    'vertical': {
      'type': 'boolean',
      'description': 'Vertical mode',
      'default': false
    },
    'four': {
      'type': 'boolean',
      'description': 'Add four class (Auto-detected in js)',
      'default': false
    },
    'six': {
      'type': 'boolean',
      'description': 'Add six class (Auto-detected in js)',
      'default': false
    }

  }
}
