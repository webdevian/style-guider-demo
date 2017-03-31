'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'login',

  // Component title - for docs/style guide
  title: 'Login Screen',

  // Paragraphs for docs
  docs: [
    'The login screen can be used inline (within another page) or floated alone on a full page.',
    'Users should be allowed to log in with their email address. If this is not technically possible, a link to instructions on how to find their username/user id etc should be provided underneath the relevant field.',
    'No mixin / sample code is provided for this element because there are too many variables. Check the #[code docs.pug] source code for this example.'
  ],

  // Does this component break out of the content wrapper
  breakout: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
`.login-page
  form.login(action='#', method='post')
    h1 Login to My App
    +input('email', 'email', null, 'email', 'Your email address:')
    +input('text', 'password', null, 'password', 'Password:')
      span
        a(href='#') Forgotten your password?
    div
      a.login-go(href='#') Login
    .login-signup
      p Don't have an account? #[a(href='#') Sign Up]`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: './pug/components/_input.pug'
}
