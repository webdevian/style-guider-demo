'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'colour',

  // Component title - for docs/style guide
  title: 'Colours',

  // Paragraphs for docs
  docs: [
    'There are a variety of colours to choose from for digital interfaces.',
    'There are not pre-defined CSS classes for each colour, but they are available as SASS variables to use in your own extended styles.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`h3 Primary Colours

.swatches.big
  span.red Red
  span.blue Blue

h3 Secondary Colours

.swatches.small
  span.claret Claret
  span.flame Flame
  span.carrot Carrot
  span.buttercup Buttercup
  span.sunglow Sunglow
  span.malibu Malibu
  span.bermuda Bermuda
  span.java Java
  span.verdun Verdun
  span.grey Grey`
}
