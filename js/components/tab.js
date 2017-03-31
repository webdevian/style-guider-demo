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
