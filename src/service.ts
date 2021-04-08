import runBarrels from "./enigma";
import { numberToLetter, letterToNumber } from "./helper";

const w1 = <HTMLInputElement>document.getElementById("w1");
const w2 = <HTMLInputElement>document.getElementById("w2");
const w3 = <HTMLInputElement>document.getElementById("w3");

const input = <HTMLInputElement>document.getElementById("input");
const output = document.getElementById("output");

const decryptButton = document.getElementById("decrypt");
decryptButton.addEventListener("click", onDecryptButtonClicked);

const resetButton = <HTMLInputElement>document.getElementById("reset");
resetButton.addEventListener("click", onResetButtonClicked);

function onDecryptButtonClicked(): void {

    const letters = input.value.split("")
    const resultLetters = []
    
    letters.forEach((letter) => {

        const w1Value = letterToNumber(w1.value);
        const w2Value = letterToNumber(w2.value);
        const w3Value = letterToNumber(w3.value);
        const result = runBarrels([w1Value, w2Value, w3Value], letterToNumber(letter));

        if (w1Value < 25) {
            w1.value = numberToLetter(w1Value + 1);
        }
        if (w1Value === 25) {
            w1.value = numberToLetter(0)
            w2.value = numberToLetter(w2Value + 1);
        }
        if (w2Value === 25) {
            w2.value = numberToLetter(0)
            w3.value = numberToLetter(w3Value + 1);
        }
        if (w2Value === 25) {
            w3.value = numberToLetter(0)
        }

        resultLetters.push(numberToLetter(result))
    })

    output.innerHTML = resultLetters.join("")
}

function onResetButtonClicked() {
    w1.value = "a";
    w2.value = "a";
    w3.value = "a";
}
