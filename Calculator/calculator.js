let operator = "";
let num1 = undefined;
let num2 = undefined;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 * num2
}

function operate(operator, num1, num2){
    let answer = undefined;
    switch(operator){
        case "add":
            answer = add(num1, num2);
        case "subtract":
            answer = subtract(num1, num2);
        case "multiply":
            answer = multiply(num1, num2);
        case "divide":
            answer = divide(num1, num2);
        default:
            alert("Unexpected error")
    }

    console.log(answer)
}

function equals(){
    if(num1 != undefined && num2 != undefined && operator != ""){
        operate(operator, num1, num2)
    }
}

function storeNumber(o, num){
    operator = o;
    if(num1 == undefined){
        num1 = num;
    }
    else{
        num2 = num;
    }
}

function inputNumber(num){
    let inputField = document.querySelector("#inputField");
    inputField.value += num;
}

function clearField(){
    let inputField = document.querySelector("#inputField");
    inputField.value = "";

    console.log("fse")
}