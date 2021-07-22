function array1(){
  var fruits = ["Apple","Banana"];
  for (let i = 0; i < 5; i++) {
    f = window.prompt("enter a fruit name : ");
    fruits.splice(1, 0, f);

    }
    document.getElementById("q14_1").innerHTML="3rd fruit is: "+fruits[3];
    document.getElementById("q14_2").innerHTML="length of this array is : "+fruits.length;
    document.getElementById("q14_3").innerHTML="reverse of this array is : "+fruits.reverse();
}
