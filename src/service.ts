import main from "./enigma"

const inputField = <HTMLInputElement>document.getElementById("input")

const w1 = <HTMLInputElement>document.getElementById("w1")
const w2 = <HTMLInputElement>document.getElementById("w2")
const w3 = <HTMLInputElement>document.getElementById("w3")

const decodeButton = document.getElementById("decode-button")
decodeButton.addEventListener("click", onDecodeButtonClicked)

const newinputField = <HTMLInputElement>document.getElementById("newinput")

const newdecodeButton = document.getElementById("new-decode-button")
newdecodeButton.addEventListener("click", onNewDecodeButtonClicked)

const resultOutput = <HTMLInputElement>document.getElementById("result")




function onDecodeButtonClicked() {
    const w1Value = letterToNumber(w1.value)
    const w2Value = letterToNumber(w2.value)
    const w3Value = letterToNumber(w3.value)
    main(inputField.value, [w1Value, w2Value, w3Value])
}
function onNewDecodeButtonClicked() {
    const w1Value = letterToNumber(w1.value)
    const w2Value = letterToNumber(w2.value)
    const w3Value = letterToNumber(w3.value)
    const result = main(inputField.value, [w1Value, w2Value, w3Value])
    resultOutput.value = result
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