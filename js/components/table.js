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
