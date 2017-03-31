'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'banner',

  // Component title - for docs/style guide
  title: 'Banner Message',

  // Paragraphs for docs
  docs: [
    'Banner callouts can be useful for displaying a quick eye-catching message. A logo can be included with the #[code .logo] class or the text can be centred with a #[code .center] class.'
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
  params: {
    heading: {
      type: 'string',
      default: 'A fancy strapline',
      description: 'The header of the banner'
    },
    subHeading: {
      type: 'string',
      default: 'Call us on 0800 00 00 00',
      description: 'The sub-header of the banner'
    },
    logo: {
      type: 'boolean',
      default: true,
      description: 'Should logo be included'
    },
    center: {
      type: 'boolean',
      default: false,
      description: 'Should text be centered'
    }
  }
}
