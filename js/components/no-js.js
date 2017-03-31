$(document).ready(function () {
  /**
   * Detect js and change class of HTML element so we can
   * apply different styles for users with javascript disabled.
   * This can also be done with some inline vanilla js in the <head>
   * for quicker resolution to stop FOUC.
   */
  $('html').removeClass('no-js')
  $('html').addClass('js')
})
