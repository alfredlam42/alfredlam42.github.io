$(document).ready(function(){
  session();
  getClock();
  setInterval(getClock , 1000);
})

$(document).keydown(function(e){
  $('#instructions').fadeOut();
})

$(document).click(function(e){
  $('#instructions').fadeOut();
})

function getClock(){
  var d = new Date();
  var nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds();
  if(nmin<=9) nmin="0"+nmin
  if(nsec<=9) nsec="0"+nsec;

  $('#clock').html("" + nhour + ":" + nmin + ":" + nsec +"");
}

function session(){
    if (document.cookie.indexOf("visited") >= 0) {
        $('#instructions').hide();
    } else {
        document.cookie = "visited";
    }
}