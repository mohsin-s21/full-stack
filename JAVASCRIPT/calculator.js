function add(a , b){
    return a + b;
}
function subtract(a , b){
    return a - b;
}
function multiply(a , b){
    return a * b;
}
function divide(a , b){
    if (b === 0){
        return "error:division by zero"
    }
    return a / b;
}
console.log("Addition:" +add(21 , 25));
console.log("Subtraction:" +subtract(12 , 6));
console.log("Multiplication:" +multiply(30 , 50));
console.log("Division:" +divide(17 , 4));
