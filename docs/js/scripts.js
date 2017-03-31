$(document).ready(function () {
  /**
   * Close an alert message when its close
   * link is clicked
   * No JS Fallback: ✅ // Don't show close button
   */
  $(document).on('click', '.message .close', function (e) {
    e.preventDefault()
    $(this).closest('.message').slideUp()
    e.stopPropagation()
  })
})

$(document).ready(function () {
  /**
   * Close an element when its close button is clicked
   * link is clicked
   * No JS Fallback: ✅ // Don't show close button
   */
  $(document).on('click', '.closeable .close', function (e) {
    e.preventDefault()
    $(this).closest('.closeable').slideUp()
    e.stopPropagation()
  })
})

$(document).ready(function () {
  /**
   * Convert date input fields to jQuery UI datepicker
   */
  $('input[data-datepicker]').each(function () {
    $(this).attr('type', 'text')
    $(this).datepicker({
      dateFormat: 'yy-mm-dd',
      firstDay: 1
    })
  })
})

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

$(document).ready(function () {
  /**
   * Switch Tabs based on click
   * No JS Fallback: ✅
   */
  $(document).on('click', '.tabs a[data-tab]', function (e) {
    e.preventDefault()
    var selected = $(this).attr('data-tab')
    var $tabs = $(this).closest('.tabs')

    $tabs.find('li').removeClass('active')
    $tabs.find('.panel').removeClass('active')

    $(this).closest('li').addClass('active')
    $tabs.find('.panel[data-tab=' + selected + ']').addClass('active')
  })
})

$(document).ready(function () {
  /**
   * Add th attributes to all stacked tables
   * so that the css can make them display
   * titles for each cell in stacked view
   * No JS Fallback: ✅ // Remove function
   */
  $(document).find('table.stack').each(function () {
    var titles = []

    $(this).find('th').each(function (index) {
      titles.push($(this).text())
    })

    $(this).find('tbody tr').each(function () {
      $(this).find('td').each(function (index) {
        $(this).attr('data-th', titles[index])
      })
    })
  })
})

$(document).ready(function () {
  /**
   * Toggle the parent main menu open
   * when a menu toggle link is clicked
   * No JS Fallback: ✅
   */
  $(document).on('click', '.menu-link', function (e) {
    e.preventDefault()
    $(this).closest('menu').toggleClass('open')
    e.stopPropagation()
  })

  /**
   * When a main menu drop down is clicked,
   * add class 'down' to show child menu
   * No JS Fallback: ✅
   */
  $(document).on('click', '.has-dropdown > a', function (e) {
    e.preventDefault()
    $(document).find('menu ul li').removeClass('down')
    $(this).closest('li').addClass('down')
    e.stopPropagation()
  })

  /**
   * Top menu keyboard controls. Use ⬆️⬇️⬅️➡️ space esc to navigate the menu
   */

  // Top Level keybindings
  $(document).on('focusin', 'menu > .wrap > ul > li > a', function () {
    $(this).on('keydown', function (e) {
      // Down and space - open child menu and focus on first item
      if (e.keyCode === 40 || e.keyCode === 32) {
        e.preventDefault()
        if ($(this).closest('li').hasClass('has-dropdown')) {
          $(this).click()
          $(this).closest('li').find('ul li:first-child a').focus()
        }

      // Left and right, focus on prev or next top level item
      } else if (e.keyCode === 37) {
        e.preventDefault()
        if ($(this).closest('li').prev().length) {
          $(this).closest('li').prev().find('a').focus()
        }
      } else if (e.keyCode === 39) {
        e.preventDefault()
        if ($(this).closest('li').next().length) {
          $(this).closest('li').next().find('a').focus()
        }
      }
    })
  })

  // Sub menu keybindings
  $(document).on('focusin', 'menu ul ul a', function () {
    $(this).on('keydown', function (e) {
      // Esc and up (if top item)
      if (e.keyCode === 27 || (e.keyCode === 38 && $(this).closest('li').is(':first-child'))) {
        e.preventDefault()
        $(document).find('menu ul li').removeClass('down')
        $(this).closest('.has-dropdown').find('a').focus()

      // Left and right, focus on prev or next top level item
      } else if (e.keyCode === 37) {
        e.preventDefault()
        $(document).find('menu ul li').removeClass('down')
        if ($(this).closest('.has-dropdown').prev().hasClass('has-dropdown')) {
          $(this).closest('.has-dropdown').prev().find('> a').click()
          $(this).closest('.has-dropdown').prev().find('ul li:first-child a').focus()
        } else if ($(this).closest('.has-dropdown').prev().length) {
          $(this).closest('.has-dropdown').prev().find('> a').focus()
        } else {
          $(this).closest('.has-dropdown').find('> a').focus()
        }

      // or down if last sub item
      } else if (e.keyCode === 39 || (e.keyCode === 40 && $(this).closest('li').is(':last-child'))) {
        e.preventDefault()
        $(document).find('menu ul li').removeClass('down')
        if ($(this).closest('.has-dropdown').next().hasClass('has-dropdown')) {
          $(this).closest('.has-dropdown').next().find('> a').click()
          $(this).closest('.has-dropdown').next().find('ul li:first-child a').focus()
        } else if ($(this).closest('.has-dropdown').next().length) {
          $(this).closest('.has-dropdown').next().find('> a').focus()
        } else {
          $(this).closest('.has-dropdown').find('> a').focus()
        }

      // Up and down for prev and next child item
      } else if (e.keyCode === 38) {
        e.preventDefault()
        $(this).closest('li').prev().find('a').focus()
      } else if (e.keyCode === 40) {
        e.preventDefault()
        $(this).closest('li').next().find('a').focus()
      }
    })
  })

  // Cancel all keybindings
  $(document).on('focusout', 'menu a', function () {
    $(this).off('keydown')
  })

  /**
   * When anything other than the menu is
   * clicked, close the menu
   * No JS Fallback: ✅
   */
  $(document).on('click', function () {
    $(document).find('menu').removeClass('open')
    $(document).find('menu ul li').removeClass('down')
  })
})
