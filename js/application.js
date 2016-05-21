$(document).ready(function(){
  setResolution();
})


$(document).keydown(function(e){
  var code;
  if (e.keyCode){
    code = e.keyCode;
  } else {
    code = e.which;
  }

  if (code == 32) { // goes back to home page when space is pressed
    window.location.href = './index.html';
  }
})

function setResolution(){
  var currentHeight = $(document).height();
  $('#container').css('width', (currentHeight * 4) / 3);
  $('#instructions').css('width', (currentHeight * 4) / 6);
  // $('#container').css('height', currentHeight - 2) ;
}