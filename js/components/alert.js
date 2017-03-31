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
