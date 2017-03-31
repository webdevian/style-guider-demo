'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'table',

  // Component title - for docs/style guide
  title: 'Tables',

  // Paragraphs for docs
  docs: [
    'Tables are used for showing tabular data. A few simple style tweaks make tables much easier to read. Adding a class of #[code .hover] makes rows highlight on hover.',
    'Adding a class of #[code .stack] to a table makes it stack up on small screens for a cleaner layout.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`table.stack.hover
  thead
    tr
      th(width='200') Table Header
      th Another Table Header
      th Table Header
      th Table Header
  tbody
    tr
      td Content Goes Here
      td This is longer content Donec id elit non mi porta gravida at eget metus.
      td Content Goes Here
      td
        a.button.small(href='') A Button
    tr
      td Content Goes Here
      td
        | This is longer Content Donec id elit non mi porta gravida at eget metus.
      td
      td Content Goes Here
    tr
      td Content Goes Here
      td
        | This is longer Content Donec id elit non mi porta gravida at eget metus.
      td Content Goes Here
      td Content Goes Here`
}
