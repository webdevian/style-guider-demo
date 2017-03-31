'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'alert',

  // Component title - for docs/style guide
  title: 'Alert Message',

  // Paragraphs for docs
  docs: [
    'Alert messages can be displayed above or below the menu &amp; hero for urgent messages to catch the user\'s attention.',
    'Alert messages can be made dismissable by adding a #[code .close] span.'
  ],

  // Does this component break out of the content wrapper
  breakout: true,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block: "We’re recruiting! #[a(href='#') Click here] to discover our fantastic career opportunities and start your journey today",

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
    type: {
      enum: [ 'default', 'alert', 'warning' ],
      default: 'alert',
      description: 'The type of message, determines colour scheme'
    },
    close: {
      type: 'boolean',
      default: false,
      description: 'Should a close button be shown'
    }
  }
}
