function squareNum() {
    num = window.prompt("enter number: ");
    total = num * num;
    document.getElementById('q1').innerHTML="square number of " + num + " is : " + total;
}
