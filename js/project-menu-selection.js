// the following code allows the keyboard to navigate the site
$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }

  var current = $('#current-selection');
  var currentRow = $('#current-selection').parent().parent().attr('class');

  if (code == 40){ // down is pressed
    if(current.parent().parent().next().attr('class')){ // moves to next selection
      var next = current.parent().parent().next().children().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    } else { // loops to top if at bottom
      current.html('');
      current.attr('id', '');
      $('.' + currentRow).first().children().children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 38){ // up is pressed
    if(current.parent().parent().prev().attr('class')){ // moves to previous selection
      var next = current.parent().parent().prev().children().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
    else { // loops to bottom if at top
      current.html('');
      current.attr('id', '');
      $('.' + currentRow).last().children().last().children().first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  } else if (code == 13) { // if enter is pressed,
    var current = $('#current-selection')
    var address = current.next().children().attr('href');
    if (address != '#'){
      window.open(address, '_blank');
    }
  } else if (code == 37 || code == 39) { // if left or right is pressed
    if (current.parent().next().attr('class')){
      var next = current.parent().next().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    } else if  (current.parent().prev().attr('class')){
      var next = current.parent().prev().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }
  }
})