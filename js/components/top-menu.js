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
