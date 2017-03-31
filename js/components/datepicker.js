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
