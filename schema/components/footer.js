'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'footer',

  // Component title - for docs/style guide
  title: 'Footer',

  // Paragraphs for docs
  docs: [
    'The footer sits at the bottom of the screen and can contain 3 horizontal sections. It can be used for re-iterating navigation or adding extra information and links.',
    'No mixin / sample code is provided for this element because there are too many variables. Check the #[code docs.pug] source code for this example.'
  ],

  // Does this component break out of the content wrapper
  breakout: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`footer
  .top
    .contain
      aside
        h2 Style Guider - Generate style guides
        p It's really good!
        ul
          li Call on: 0800 00 00 00 #[sup *]
          li Email: #[a(href='') mail@style-guider-demo.com]
          li #[small * Calls may be recorded]
      nav
        h4 Some Navigation
        ul
          li
            a(href='#') History
          li
            a(href='#') Team
          li
            a(href='#') Awards
          li
            a(href='#') Corporate Social Responsibility
          li
            a(href='#') Careers
      nav
        h4 More Navigation
        ul
          li
            a(href='#') History
          li
            a(href='#') Team
          li
            a(href='#') Awards
          li
            a(href='#') Corporate Social Responsibility
          li
            a(href='#') Careers
      nav
        h4 More Navigation
        ul
          li
            a(href='#') History
          li
            a(href='#') Team
          li
            a(href='#') Awards
          li
            a(href='#') Corporate Social Responsibility
          li
            a(href='#') Careers
      nav
        h4 More Navigation
        ul
          li
            a(href='#') History
          li
            a(href='#') Team
          li
            a(href='#') Awards
          li
            a(href='#') Corporate Social Responsibility
          li
            a(href='#') Careers
  .middle
    .contain
      span.copyright © 2017 Ian Egner
      nav
        ul
          li
            a(href='#') A text link
          li
            a(href='#') A text link
          li
            a(href='#') A text link
          li
            a(href='#') A text link
          li
            a(href='#') A text link
  .bottom
    p Some Company Name, Some Address, Some Town, Some County, Some Postcode
    p Registered in England and Wales No. Some Company Number - VAT Registration No. Some VAT number`
}
