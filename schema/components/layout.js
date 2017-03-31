'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'layout',

  // Component title - for docs/style guide
  title: 'Layout',

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`.content

  p There are 3 main layout components: Full-width, two-thirds and one-third. This #[code .content] column is two-thirds.

  p A #[code .full] element stretches across the width of the screen.

  p On small screens all three if of these components are full-width and stack on top of each other

  h4 Helper layout classes

  p #[code .half], #[code .third], #[code .quarter] and #[code .sixth] are available for quick column width setting.

  h4 Custom column layouts

  p Columns should be implemented using Foundation's sass mixins - #[a(href='http://foundation.zurb.com/sites/docs/grid.html#building-semantically', target='_blank') see more details here]. There is also a useful grid-columns mixin in \`scss/_mixins.scss\`, see the documentation on that for more info

.sidebar
  h3 Sidebar

  p This #[code .sidebar] element is one third width.`
}
