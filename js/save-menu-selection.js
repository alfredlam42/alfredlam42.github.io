$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }

  if (code == 40){ // down is pressed
    var current = $('#current-selection')
    if(current.parent().parent().next().children().attr('class') == 'save-file'){ // moves to next selection
      var next = current.parent().parent().next().children().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    } else { // loops to top if at bottom
      current.html('');
      current.attr('id', '');
      $('.pointer-box').first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 38){ // up is pressed
    var current = $('#current-selection')
    if(current.parent().parent().prev().children().attr('class') == 'save-file'){ // moves to previous selection
      var next = current.parent().parent().prev().children().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
    else { // loops to bottom if at top
      current.html('');
      current.attr('id', '');
      $('.pointer-box').last().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 13) { // if enter is pressed
    var current = $('#current-selection')
    var address = current.parent().parent().attr('href');
    if (address != '#') {
      window.open(address, '_blank');
    }
  }
})