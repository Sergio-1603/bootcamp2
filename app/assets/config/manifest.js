//= link_tree ../images
//= link_directory ../stylesheets .css
function showTime(){
  myDate = new Date();
  hours = myDate.getHours();
  minutes = myDate.getMinutes();
  seconds = myDate.getSeconds();
  if (hours < 10) hours = 0 + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  var h4 = document.getElementById("horas").innerHTML = hours+ ":" +minutes+ ":" +seconds
  
  anioActual = myDate.getFullYear()
  mesActual = myDate.getMonth()+1
  
   var h4Fecha = document.getElementById("fecha").innerHTML= mesActual+"/"+anioActual
  
  setTimeout("showTime()", 1000);

}
showTime()
