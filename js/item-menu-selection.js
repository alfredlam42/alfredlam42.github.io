// the following code allows the keyboard to navigate the site
$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }

  var current = $('#current-selection')
  var currentColumn = $('#current-selection').parent().parent().attr('id')
  var currentRow = $('#current-selection').parent().attr('class').split(' ')[1]

  if (code == 40){ // down is pressed
    if(current.parent().next().attr('class')){ // moves to next selection
      var next = current.parent().next().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    } else { // loops to top if at bottom
      current.html('');
      current.attr('id', '');
      $('#' + currentColumn).first().children().first().children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 38){ // up is pressed
    if(current.parent().prev().attr('class')){ // moves to previous selection
      var next = current.parent().prev().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
    else { // loops to bottom if at top
      current.html('');
      current.attr('id', '');
      $('#' + currentColumn).first().children().last().children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 13) { // if enter is pressed,
    var current = $('#current-selection')
    var address = current.next().children().attr('href');
    if (address != '#'){
      window.open(address, '_blank');
    }
  } else if (code == 37 || code == 39) { // if left or right is pressed
    if (currentColumn == 'item-col-1'){
      current.html('');
      current.attr('id', '');
      $('#item-col-2 .' + currentRow).children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    } else {
      current.html('');
      current.attr('id', '');
      $('#item-col-1 .' + currentRow).children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  }
})