'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'button',

  // Component title - for docs/style guide
  title: 'Buttons',

  // Paragraphs for docs
  docs: [
    'Buttons are for users to trigger an actions, the text on the button should make it clear what the action will do. The colour of the button can also denote whether an action is constructive, destructive etc.',
    'Buttons in a row are spaced apart so that a user won\'t press the wrong one by mistake.',
    'Links or submit inputs can be styled as buttons with the #[code .button] class.',
    '#[h4 Create new order?]',
    '#[a.button.small.secondary(href=\'#\') Cancel] #[a.button(href=\'#\') Create order]',
    'Button labels should be clear so that the user knows what action will happen when they click it. Constructive actions (Yes, Confirm, Save etc) should go on the right and be blue. Destructive actions (Delete etc) should be red. Back-tracking actions (Cancel, Undo, No) should be grey and on the left, and could be smaller.',
    'Colour of buttons can be modified by adding a #[code .alert] or #[code .secondary] class. The size of buttons can be modified with #[code .small], #[code .tiny], #[code .large] and #[code .expanded] classes.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`div
  a.button(href='#') Basic Button
  a.alert.button(href='#') Alert Btn
  a.secondary.button(href='#') Secondary Btn
div
  a.secondary.small.button(href='#') A Small Btn
  a.tiny.button.alert(href='#') An even smaller button
  a.large.button(href='#') A large button
div
  a.small.expanded.button(href='#') An expanded button`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null
}
