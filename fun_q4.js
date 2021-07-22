function volume(){
  l = window.prompt("enter the length : ");
  w = window.prompt("enter the width : ");
  h = window.prompt("enter the height : ");
  volume = l * w * h ;
  document.getElementById("q4").innerHTML="the volume of cuboid is : " + volume;
}
