$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }
  if (code == 40 || code == 38){ // down is pressed
    var current = $('#current-selection')
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
      $('.pointer-box').last().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
    }

    $('#white-magic').toggleClass('hide-magic');
    $('#black-magic').toggleClass('hide-magic');
  }
});

$(document).ready(function(){
  $('a').click(function(event){
    event.preventDefault();

    var current = $('#current-selection')

    if($(this).text() == 'White'){
      if($('#white-magic').hasClass('hide-magic')){
        current.html('');
        current.attr('id', '');
        $('.pointer-box').first().attr('id', 'current-selection');
        $('#current-selection').html('<img src="./images/HandCursor.gif">');
        $('#white-magic').toggleClass('hide-magic');
        $('#black-magic').toggleClass('hide-magic');
      }
    } else {
      if($('#black-magic').hasClass('hide-magic')){
        current.html('');
        current.attr('id', '');
        $('.pointer-box').last().attr('id', 'current-selection');
        $('#current-selection').html('<img src="./images/HandCursor.gif">');
        $('#white-magic').toggleClass('hide-magic');
        $('#black-magic').toggleClass('hide-magic');
      }
    }
  })
})