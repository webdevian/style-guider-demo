'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'closeable',

  // Component title - for docs/style guide
  title: 'Closeable Elements',

  // Paragraphs for docs
  docs: [
    'Sometimes elements need to be closeable by the user. The helper class #[code .closeable] can be combined with a #[code= \'<span class="close">Close</span>\'] element to add a close button to any element. The styles for this are an attempt at #[em one-size fits all] so they may need to be tweaked for each use case.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`.nest
  .sidebar
    +card('flat','News Item Title','12th December 16','#','Read more...').closeable
      span.close Close
      p Don't forget, you can stay updated with all our latest news by visiting our website!`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_card.pug'
}
