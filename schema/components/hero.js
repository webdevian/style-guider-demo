'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'hero',

  // Component title - for docs/style guide
  title: 'Hero Image',

  // Paragraphs for docs
  docs: [
    'A hero image can sit beneath the menu and spans the full width of the screen.',
    'Using a class of #[code .slim] squeezes the image to take up less vertical space. This is more appropriate for non-home pages.',
    'Using a class of #[code .outline] adds an oval cutout overlay to the image. Be sure to test any images on all screen sizes to make sure important focal points are not cropped'
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
  demo: null,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'src': {
      'type': 'string',
      'default': 'https://unsplash.it/1200/400/?random',
      'description': 'The URL of the image'
    },
    'alt': {
      'type': 'string',
      'default': 'A hero image',
      'description': 'The alt text of the image'
    },
    'slim': {
      'type': 'boolean',
      'default': false,
      'description': 'Make the hero image thinner'
    },
    'outline': {
      'type': 'boolean',
      'default': false,
      'description': 'Put an oval outline over the image'
    }
  }
}
