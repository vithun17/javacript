
function addition(){
  num1 = window.prompt("enter number 1 : ");
  num2 = window.prompt("enter number 2 : ");
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let addTotal = num1 + num2;
  document.getElementById('q2_add').innerHTML= "i. The addition of the two numbers is"+" " +addTotal;
  let mulTotal = num1 * num2;
  document.getElementById('q2_mul').innerHTML= "ii. The multiplication of the two numbers is"+" " +mulTotal;
  let subTotal = num1 - num2;
  document.getElementById('q2_sub').innerHTML= "iii. The subtraction of the two numbers is"+" " +subTotal;
  let divTotal = num1 / num2;
  document.getElementById('q2_div').innerHTML= "iv. The division of the two numbers is"+" " +divTotal;
}
