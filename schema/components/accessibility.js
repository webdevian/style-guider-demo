'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'accessibility',

  // Component title - for docs/style guide
  title: 'Accessibility',

  // Paragraphs for docs
  docs: [
    `#[blockquote Accessibility is the degree to which anyone can access and use a website using any web browsing technology. #[cite Royal National Institute of Blind People]]`,
    'Our public-facing applications must be built to work on all devices, browsers and with assistive technologies. A lot of effort has been made to ensure that the components in this framework are accessible. Such as:'
  ],

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`ul
  li Text and backgrounds have sufficient contrast ratios so text is legible.
  li Clickable elements are clear and uniform, so users know what they can click.
  li ARIA landmark roles and html5 elements help browsers define types of content.
  li Focus states on all elements so that interactions can be operated with a keyboard or screen reader.
  li Javascript features have a fallback for when javascript is not enabled.

p #[a(href='http://a11yproject.com/checklist.html', target='_blank') This checklist from the A11Y Project] is a good guide to all the core web accessibility principles.`
}
