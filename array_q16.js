function array3_1(){
  var foods = ["rice", "pizza", "sandwich", "rolls"];
  foods.pop();
  let fLen = foods.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
  text += "<li>" + foods[i] + "</li>";
}
text += "</ul>";

document.getElementById("q16_1").innerHTML = text;
}

function array3_2(){
  var foods = ["rice", "pizza", "sandwich", "rolls"];
  add = window.prompt("enter a food name :","cake");
  foods.push(add);
  let fLen = foods.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
  text += "<li>" + foods[i] + "</li>";
}
text += "</ul>";

document.getElementById("q16_2").innerHTML = text;
}

function array3_3(){
  var foods = ["rice", "pizza", "sandwich", "rolls"];
  foods.shift()
  let fLen = foods.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
  text += "<li>" + foods[i] + "</li>";
}
text += "</ul>";

document.getElementById("q16_3").innerHTML = text;
}
