'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'card',

  // Component title - for docs/style guide
  title: 'Floating Card',

  // Paragraphs for docs
  docs: [
    'Floating cards can be useful for displaying single or repeating modules on a page, such as tweets or news stories. Cards fill the horizontal space they are in and stretch vertically to contain the content.',
    'Cards can contain a #[code= "<time>"] or a #[code= \'<span class="meta">\'] element, a header, paragraphs and link. If the card has a link, the header and time should also be linked.',
    'Cards with a class of #[code .flat] will have a grey background. Cards with a class of #[code .shadow] will have a shadow effect.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: true,

  // Default blocks content (false for no block)
  block: "Don't forget, you can stay updated with all our latest news by visiting our website!",

  // Can attributes be passed to the mixin?
  attributes: false,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
  `.nest
    .sidebar
      +card(null,'News Item Title','12th December 16','#','Read more...')
        p Don't forget, you can stay updated with all our latest news by visiting our website!
    .sidebar
      +card('flat','Class 1 Driver','Job Title','#','Apply now...')
        p We are currently looking to recruit a driver to join the existing well established team.
    .sidebar
      +card('shadow','News Item Title','12th December 16','#','Read more...')
        p Don't forget, you can stay updated with all our latest news by visiting our website!`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'type': {
      'enum': [ 'default', 'flat', 'shadow' ],
      'default': 'default',
      'description': 'The style of the card'
    },
    'title': {
      'type': 'string',
      'default': 'My Card Title',
      'description': 'Title of the card'
    },
    'subtitle': {
      'type': 'string',
      'default': 'Sub-Title',
      'description': 'Subtitle of the card'
    },
    'link': {
      'type': 'string',
      'default': '#',
      'description': 'Link when card is clicked'
    },
    'linkLabel': {
      'type': 'string',
      'default': 'Read more...',
      'description': 'Text of link label'
    }
  }
}
