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
