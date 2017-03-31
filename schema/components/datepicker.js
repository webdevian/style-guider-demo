'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'datepicker',

  // Component title - for docs/style guide
  title: 'Date Picker',

  // Paragraphs for docs
  docs: [
    'Inputs with an attribute of #[code data-datepicker] can be made more user friendly with the jQuery-ui datepicker widget. The datepicker input element is one case where a placeholder is useful, to indicate that the input must be clicked to open the calendar.'
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
  demo: `+input('date', 'example-date-picker', null, 'Example Date Picker')(data-datepicker, placeholder='Pick Date')`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_input.pug',

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null
}
