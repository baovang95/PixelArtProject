// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);

})

//removes boxes after submit button is clicked
function makeGrid(h, w) {
  $('tr').remove();

// code for grid
  for (var i = 1; i <= h; i++) {
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1; j <= w; j++) {
          $('#table' + i).append('<td></td>');
      }
  }
//code for picking color
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

//add or removes color when clicking on box
    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
