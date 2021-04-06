"use strict";
exports.__esModule = true;
exports.numberToLetter = exports.letterToNumber = void 0;
var temporary_1 = require("./temporary");
var inputField = document.getElementById("input");
var w1 = document.getElementById("w1");
var w2 = document.getElementById("w2");
var w3 = document.getElementById("w3");
var decodeButton = document.getElementById("decode-button");
decodeButton.addEventListener("click", onDecodeButtonClicked);
var newinputField = document.getElementById("newinput");
var resultOutput = document.getElementById("result");
var resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", onResetButtonClicked);
function onDecodeButtonClicked() {
    var w1Value = letterToNumber(w1.value);
    var w2Value = letterToNumber(w2.value);
    var w3Value = letterToNumber(w3.value);
    var result = temporary_1["default"](inputField.value, [w1Value, w2Value, w3Value]);
    var output = document.getElementById("output");
    output.innerHTML = result.result;
    w1.value = numberToLetter(w1Value + 1);
}
function onResetButtonClicked() {
    w1.value = "a";
    w2.value = "a";
    w3.value = "a";
}
function letterToNumber(input) {
    var charCode = input.charCodeAt(0) - 97;
    return charCode;
}
exports.letterToNumber = letterToNumber;
// why no working? o no get it ok?
function numberToLetter(output) {
    var charCode = String.fromCharCode(97 + output);
    return charCode;
}
exports.numberToLetter = numberToLetter;
