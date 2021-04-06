"use strict";
exports.__esModule = true;
var service_1 = require("./service");
function main(input, displacement) {
    var position = 0;
    position = encryption(displacement, position);
    position = service_1.letterToNumber(input);
    return { result: "", displacement: displacement };
}
exports["default"] = main;
function encryption(displacement, position) {
    //position = position muss herausgefunden werden
    //Starten mit Null damit nich von null gezählt werden muss
    var order_1 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var order_2 = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    var order_3 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    var mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    var checkSum = 0;
    displacement[0] = 1;
    displacement[1] = 1;
    displacement[2] = 1;
    position = 1;
    console.log(position + "start");
    for (var i = 0; i < order_1.length; i++) {
        if (position == order_1[i]) {
            position = i;
        }
    }
    console.log(position + "mitte1");
    for (var i = 0; i < order_2.length; i++) {
        if (position == order_2[i]) {
            position = i;
        }
    }
    console.log(position + "mitte_2");
    for (var i = 0; i < order_3.length; i++) {
        if (position == order_3[i]) {
            position = i;
        }
    }
    console.log(position + "mitte_3");
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
