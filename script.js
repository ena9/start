document.querySelector('input').onkeypress = function(e) {
    var char = String.fromCharCode(e.charCode);
    if (char < '0' || '9' < char) {
        return false;
    }
};

var calcDisplay = document.getElementById('display'),
    number = document.getElementsByClassName('calc_button'),
    operator = document.getElementsByClassName('func_button'),
    result = document.getElementsByClassName('result'),
    clear = document.getElementsByClassName('clear_button'),
    backpace = document.getElementsByClassName('backspace_button'),
    decimal = document.getElementsByClassName('decimal'),
    saveOperator = "";
    inputString = "";
    resultDisplayed = false;

// console.log(typeof(calcDisplay));

// input number
for (var i = 0; i< number.length; i++){
    number[i].onclick = eventOnClickNumber(i);
    }
function eventOnClickNumber(i){
    return function(){
        inputString = inputString + saveOperator;
        if (saveOperator.length == 0){
            calcDisplay.value = calcDisplay.value + number[i].value;
        } else {
            calcDisplay.value = number[i].value;
            inputString.value = calcDisplay.value + number[i].value;
            saveOperator = "";
        }
        //         if (number[i].onclick = number[10].onclick || calcDisplay.value.indexOf(number[10].onclick) > 1){
        //     return;
        // }


        if (resultDisplayed === true) {
            calcDisplay.value ='';
            saveOperator = "";

            // inputString.value = calcDisplay.value + saveOperator + calcDisplay.value;
        }
        // console.log(inputString); 
    }
}

// operator
for (var i = 0; i< operator.length; i++){
    operator[i].onclick = eventOnClickOperator(i);
}
function eventOnClickOperator(i){
    return function(){
        if (saveOperator.length == 1){
              saveOperator = operator[i].value;
        }else{
             inputString = inputString + saveOperator + calcDisplay.value;
             console.log(saveOperator);
        }
        // console.log(inputString);  
        saveOperator = operator[i].value;

        if  (resultDisplayed === true) {
            resultDisplayed = false;
            saveOperator = operator[i].value;
          // console.log(disp);
        }
    }
}

var prevOperator = false ;
var disp = '';

// clear
clear[0].onclick = function (){
    saveOperator = "";
    inputString = "";
    calcDisplay.value = '';
    resultDisplayed = false;
}

// backspace
backpace[0].onclick = function() {
    if (resultDisplayed === true){
        return;
    }else{
        calcDisplay.value = calcDisplay.value.substring(calcDisplay.value.length-1, 0)
    };
}

// result
result[0].onclick = function(){
    inputString = inputString + saveOperator + calcDisplay.value;
    var number = inputString.split(/\+|\-|\*|\//g);
    var operator = inputString.replace(/[0-9]|\./g, "").split("");
    
    var divide = operator.indexOf("/");
    while (divide != -1) {
        number.splice(divide, 2, number[divide] / number[divide + 1]);
        operator.splice(divide, 1);
        divide = operator.indexOf("/");
    }

    var multiply = operator.indexOf("*");
    while (multiply != -1) {
        number.splice(multiply, 2, number[multiply] * number[multiply + 1]);
        operator.splice(multiply, 1);
        multiply = operator.indexOf("*");
    }

    var minus = operator.indexOf("-");
    while (minus != -1) {
        number.splice(minus, 2, number[minus] - number[minus + 1]);
        operator.splice(minus, 1);
        minus = operator.indexOf("-");
    }

    var plus = operator.indexOf("+");
    while (plus != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        number.splice(plus, 2, parseFloat(number[plus]) + parseFloat(number[plus + 1]));
        operator.splice(plus, 1);
        plus = operator.indexOf("+");
    }

    // console.log(calcDisplay.value);
    // console.log("cv");

    calcDisplay.value = number[0];
    resultDisplayed = true;
    disp = inputString;
    inputString = '' ;

    // console.log(disp);

    // console.log(resultDisplayed)
    // console.log(number);
    // console.log(operator);
    // console.log(inputString);
    // console.log("----------------------------");
}

//zero
number[9].onclick = function(){
    if (calcDisplay.value === '' | '0'){
        return;
    }else{
        calcDisplay.value = calcDisplay.value + number[9].value ;
    }
}

// var dot = '';

// number[10].onclick = function(){
//     if (calcDisplay.value = ""){
//         calcDisplay.value = '0' + number[10].value;
//     }
// }
// number[10].onclick = function(){
//         if (number[i].onclick = number[10].onclick || calcDisplay.value.indexOf(number[10].onclick) > 1){
//             return;
//         }
// }

// operator[4].addEventListener('click', function(){

// })
// operator[4].onclick = function(){
//     saveOperator = operator[4].value;
//     calcDisplay.value = calcDisplay.value + saveOperator;
//     inputString.value = calcDisplay.value  ;
//     dot = calcDisplay.value.replace(/\+|\-|\*|\/[0-9]|\./g, "").split("");
//     console.log(dot);
//     if (dot.indexOf(saveOperator) > -1 ){
//         return
//     }
//             // var dot = operator[4].value;
//             // if (dot.length === 1){
//             //     dot = operator[4].value;
//             // return};
//     if (calcDisplay.value != ""){
//             // var dot = operator[4].value;
//             calcDisplay.value = calcDisplay.value  + dot;
//             inputString.value = calcDisplay.value + dot;
//                 if (dot.length == 1){
//                 dot = operator[4].value;
//                 };

//     // }else if(calcDisplay.value != ''){
//     //         saveOperator = operator[4].value;
//     //         calcDisplay.value = calcDisplay.value + operator[4].value;
//     //         inputString.value = calcDisplay.value  + saveOperator;


// }else{
//     return;
// }
// }



// operator[4].onclick = function(){
//     if (saveOperator === operator[4].value)
//     calcDisplay.value = calcDisplay.value + saveOperator;
// // }else{
// // return
// }

// for (var i = 0; i< decimal[0].length; i++){
//     decimal[0].onclick = eventOnClickDot(i);
// }
// function eventOnClickDot(i){
//     return function(){
//         if (dot.length == 0){
//               dot = decimal[0].value;
//               calcDisplay.value = '0' + decimal[0].value;
//               console.log(dot);
//         }else{
//             calcDisplay.value = '0' + decimal[0].value;
//  decimal[0].onclick = function(){
//     // return function(){
//     // inputString.value = inputString.value + calcDisplay.value;
//     if (calcDisplay.length > 1 ){
//         calcDisplay.value = calcDisplay.value + decimal[0].value;
//         inputString.value = inputString.value + calcDisplay.value;
//         console.log(calcDisplay.length);
//         console.log(inputString.value);
//         console.log(number[i].onclick);
//         console.log(number[i].onclick);
//     // }else{
//     //     if (decimal[0].value.indexOf('.') === 2 );
//     //     return;
//     // }
//     // if (number[i].onclick){
//     //     calcDisplay.value = calcDisplay.value + decimal[0].value;
//     // }else{
//     //     if (decimal[0].value.indexOf('.') === 1 );
//     //     return;
//     // }
//     }
// }
// // Make sure we only add one decimal mark

//         if (button == decimalMark && self.display().indexOf(decimalMark) > -1)
//             return;

// console.log(dot);





// console.log (number[i].value)

// number.onclick = function(){
//     console.log('fgvtuhufh');
//     calcDisplay.value = number[0].value;
//     // calcDisplay.innerHTML = 2;
// }

// var testMAssive = ["pad", "keypad", 'tad']; 
// testMAssive.forEach(function(w){
//     w = w + '555';
//     console.log(w);
// })

// testMAssive[5] = 289643;
// testMAssive.unshift('235'); 
// console.log (testMAssive.length);
// console.log (testMAssive[testMAssive.length-1]);

// console.log (typeof(testMAssive));
