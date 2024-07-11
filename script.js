//Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    console.log("Hello");
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function goBack(){
    display.value = display.value.slice(0, -1)
}