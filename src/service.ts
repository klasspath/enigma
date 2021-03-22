import main from "./enigma"

const inputField = <HTMLInputElement>document.getElementById("input")

const w1 = <HTMLInputElement>document.getElementById("w1")
const w2 = <HTMLInputElement>document.getElementById("w2")
const w3 = <HTMLInputElement>document.getElementById("w3")

const decodeButton = document.getElementById("decode-button")
decodeButton.addEventListener("click", onDecodeButtonClicked)

const newinputField = <HTMLInputElement>document.getElementById("newinput")
const resultOutput = <HTMLInputElement>document.getElementById("result")
const resetButton = <HTMLInputElement>document.getElementById("reset-button")
resetButton.addEventListener("click", onResetButtonClicked)

function onDecodeButtonClicked() {
    const w1Value = letterToNumber(w1.value)
    const w2Value = letterToNumber(w2.value)
    const w3Value = letterToNumber(w3.value)
    let result = main(inputField.value, [w1Value, w2Value, w3Value])
    const output = document.getElementById("output")
    output.innerHTML = result.result
    w1.value = numberToLetter(w1Value + 1)
}

function onResetButtonClicked() {
    w1.value = "a"
    w2.value = "a"
    w3.value = "a"
}

export function letterToNumber(input: string): number {
    const charCode = input.charCodeAt(0) - 97;
    return charCode
}
// why no working? o no get it ok?
export function numberToLetter(output: number): string{
    const charCode = String.fromCharCode(97 + output)
    return charCode
}