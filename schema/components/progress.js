'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'progress',

  // Component title - for docs/style guide
  title: 'Progress Bar',

  // Paragraphs for docs
  docs: [
    'A progress bar can be used to give an indication to users of how far through their wait they are. The #[code= \'<progress>\'] element is used and the progress is set with the #[code value] and #[code max] attributes. The percentage can be shown in-line by adding the #[code .show-percent] class.'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`progress(value=30, max=100)
progress.show-percent(value=80, max=100)
progress.show-percent(value=55, max=100)`
}
