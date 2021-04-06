"use strict";
exports.__esModule = true;
exports.numberToLetter = exports.letterToNumber = void 0;
function letterToNumber(input) {
    var charCode = input.charCodeAt(0) - 97;
    return charCode;
}
exports.letterToNumber = letterToNumber;
function numberToLetter(output) {
    var charCode = String.fromCharCode(97 + output);
    return charCode;
}
exports.numberToLetter = numberToLetter;
function runBarellOne(position) {
    var order = [6, 5, 4, 3, 2, 1];
    for (var i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }
    return position;
}
function runBarellTwo(position) {
    var order = [4, 5, 6, 1, 2, 3];
    for (var i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }
    return position;
}
function runBarellThree(position) {
    var order = [4, 3, 2, 1, 6, 5];
    for (var i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }
    return position;
}
console.log(runBarellOne(1), runBarellTwo(1), runBarellThree(1));
function encryption(displacement, position) {
    //position = position muss herausgefunden werden
    //Starten mit Null damit nich von null gezählt werden muss
    //let order_1 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    //let order_2 = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    //let order_3 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    var checkSum = 0;
    var order_1 = [6, 5, 4, 3, 2, 1];
    var order_2 = [4, 5, 6, 1, 2, 3];
    var order_3 = [4, 3, 2, 1, 6, 5];
    displacement[0] = 1;
    displacement[1] = 1;
    displacement[2] = 1;
    position = 1;
    console.log(position + "start");
    position = order_3[position];
    console.log(position + "mitte_1");
    position = order_2[position];
    console.log(position + "mitte2");
    position = order_1[position];
    console.log(position + "ende3");
    return position;
}
function greaterThan26(checkSum) {
    if (checkSum > 26) {
        checkSum = checkSum - 26;
    }
    return checkSum;
}
