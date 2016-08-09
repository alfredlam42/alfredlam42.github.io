$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }

  if (code == 38){ //up is pressed
    var current = $('#current-selection')
    if(current.parent().prev().attr('class')){ // moves to previous selection
      var next = current.parent().prev().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
      $('#' + current.next().find('a').html()).toggleClass('hide-skill');
      $('#' + next.next().find('a').html()).toggleClass('hide-skill')
    }
    else { // loops to bottom if at top
      var next = $('.pointer-box').last();
      current.html('');
      current.attr('id', '');
      $('.pointer-box').last().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
      $('#' + current.next().find('a').html()).toggleClass('hide-skill');
      $('#' + next.next().find('a').html()).toggleClass('hide-skill')
    }
  } else if (code == 40){ //down is pressed
    var current = $('#current-selection')
    if(current.parent().next().attr('class')){ // moves to next selection
      var next = current.parent().next().children().first();
      current.html('');
      current.attr('id', '');
      next.attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
      $('#' + current.next().find('a').html()).toggleClass('hide-skill');
      $('#' + next.next().find('a').html()).toggleClass('hide-skill')
    }
    else { // loops to top if at bottom
      var next = $('.pointer-box').first();
      current.html('');
      current.attr('id', '');
      $('.pointer-box').first().attr('id', 'current-selection');
      $('#current-selection').html('<img src="./images/HandCursor.gif">');
      $('#' + current.next().find('a').html()).toggleClass('hide-skill');
      $('#' + next.next().find('a').html()).toggleClass('hide-skill')
    }
  }
});

$(document).ready(function(){
  $('.skill-type').on('click', 'a', function(event){
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