'use strict'

/**
 * Docs configuration
 * @type {Object}
 */
module.exports = {

  /**
   * Meta data options for generated docs
   */
  meta: {
    // Title tag
    title: 'Style Guider Demo',
    // Include meta-basic mixin?
    basic: true,
    // Include meta-social mixin?
    social: {
      // Meta values for the meta social mixin
      url: 'https://style-guider-demo.github.io/',
      title: 'Style Guider Demo',
      image: '',
      description: 'Demo site for generator-style-guider',
      siteName: 'Style Guider'
    }
  },

  /**
   * Options for including core components in the docs
   */
  options: {
    // Include no-js script
    noJs: false,
    // Include skip-link mixin
    'skipLink': false,
    // Include no-script mixin
    'noScript': false
  },

  /**
   * Introdcution text. Array of paragraphs. Each string will be a separate paragraph, inline pug will be rendered
   */
  introduction: [
    `This is the style-guider-demo CSS framework and style guide, built with #[a(href='https://www.npmjs.com/package/generator-style-guider', target='_blank') Style Guider]. The source code for this style guide can be found on #[a(href='https://github.com/webdevian/style-guider-demo', target='_blank') GitHub].`,
    `This fictional style guide is designed to give a demonstration of the wide variety of components that Style Guider docs can display`
  ],

  /**
   * Set up the page structure (and menu) of your docs. Use the same name
   * as in each components schema. For example:
   *
    form: [
      'input',
      'textarea',
      'select',
    ]
   * This configurate would generate a form section, containing the input,
   * textarea and select components, where form, input, textarea and
   * select all have a schema in schema/components
   */
  menu: {
    // NB! The below line is required for our yeoman generator and should not be changed.
    // ------ yeoman include hook ------ //
    'accessibility': [],
    'colour': [],
    'typography': [
      'header',
      'bold-header',
      'sub-header',
      'link',
      'list',
      'definition-list',
      'blockquote',
      'divider'
    ],
    form: [
      'input',
      'textarea',
      'select',
      'checkbox',
      'radio',
      'upload',
      'datepicker',
      'errors',
      'callout',
      'required',
      'disabled',
      'button',
      'submit',
      'hidden'
    ],
    'ui-elements': [
      'layout',
      'table',
      'top-menu',
      'hero',
      'alert',
      'sub-menu',
      'quick-links',
      'card',
      'breadcrumbs',
      'pagination',
      'tab',
      'progress',
      'login',
      'closeable',
      'banner',
      'footer'
    ]
  }
}
