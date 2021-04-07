import runBarrels from "./enigma";
import { numberToLetter, letterToNumber } from "./helper";

const w1 = <HTMLInputElement>document.getElementById("w1");
const w2 = <HTMLInputElement>document.getElementById("w2");
const w3 = <HTMLInputElement>document.getElementById("w3");

const input = <HTMLInputElement>document.getElementById("input");

const encodeButton = document.getElementById("encrypt");
encodeButton.addEventListener("click", onEncodeButtonClicked);

const decodeButton = document.getElementById("decrypt");
decodeButton.addEventListener("click", onDecodeButtonClicked);

const resetButton = <HTMLInputElement>document.getElementById("reset");
resetButton.addEventListener("click", onResetButtonClicked);

function onDecodeButtonClicked(): void {
    const w1Value = letterToNumber(w1.value);
    const w2Value = letterToNumber(w2.value);
    const w3Value = letterToNumber(w3.value);
    console.log(w1Value, w2Value, w3Value)
    const inputValue = letterToNumber(input.value)
    let result = runBarrels([w1Value, w2Value, w3Value], inputValue, "decrypt");
    const output = document.getElementById("output");
    output.innerHTML = result.toString();
    w1.value = numberToLetter(w1Value + 1);
}

function onEncodeButtonClicked(): void {
    const w1Value = letterToNumber(w1.value);
    const w2Value = letterToNumber(w2.value);
    const w3Value = letterToNumber(w3.value);
    const inputValue = letterToNumber(input.value)
    let result = runBarrels([w1Value, w2Value, w3Value], inputValue, "encrypt");
    const output = document.getElementById("output");
    output.innerHTML = result.toString();
    w1.value = numberToLetter(w1Value + 1);
}

function onResetButtonClicked() {
    w1.value = "a";
    w2.value = "a";
    w3.value = "a";
}
