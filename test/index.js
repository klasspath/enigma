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
function greaterThan26(checkSum) {
    if (checkSum > 26) {
        checkSum = checkSum - 26;
    }
    return checkSum;
}
function runBarrelOne(position) {
    var order = [0, 6, 5, 4, 3, 2, 1];
    var displacement = 2; //muss noch aus Webseite gezogen werden!!!
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var temporaryPosition = position + displacement;
    if (temporaryPosition > order.length - 1) {
        temporaryPosition = temporaryPosition - order.length + 1;
    }
    for (var i = 0; i < order.length; i++) {
        if (temporaryPosition == order[i]) {
            position = i;
        }
    }
    position = position - displacement;
    return position;
}
function runBarrelTwo(position) {
    //let order = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    var order = [0, 4, 5, 6, 1, 2, 3];
    return position;
}
function runBarrelThree(position) {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var order = [0, 4, 3, 2, 1, 6, 5];
    return position;
}
function reverseBarrelOne(position) {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var order = [0, 6, 5, 4, 3, 2, 1];
    position = order[position];
    return position;
}
function reverseBarrelTwo(position) {
    //let order = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    var order = [0, 4, 5, 6, 1, 2, 3];
    position = order[position];
    return position;
}
function reverseBarrelThree(position) {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var order = [0, 4, 3, 2, 1, 6, 5];
    position = order[position];
    return position;
}
function mirrorPosition(position) {
    //let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    var mirrorOrder = [0, 1, 6, 2, 5, 3, 4];
    position = mirrorOrder[position];
    return position;
}
function runBarells(position) {
    position = 2;
    console.log("Start: " + position);
    position = runBarrelOne(position);
    /*position = runBarrelTwo(position);
    position = runBarrelThree(position);
    position = mirrorPosition(position);
    position = reverseBarrelThree(position);
    position = reverseBarrelTwo(position);
    position = reverseBarrelOne(position);*/
    console.log("Ende: " + position);
    return position;
}
function encryption(displacement, position) {
    position = runBarells(position);
    return position;
}
encryption([1, 1, 1], 1);
//console.log(encryption(position));**
