function array4_1(){
  var fruits = ["Apple"];
  fruits.unshift("Pineapple", "Lemon");
  let fLen = fruits.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("q17_1").innerHTML = text;
}

function array4_2(){
  var fruits = ["Apple"];
  fruits.push("Pineapple", "Lemon");

  let fLen = fruits.length;

  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("q17_2").innerHTML = text;
}
