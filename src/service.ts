import main from "./enigma"

const inputField = <HTMLInputElement>document.getElementById("input")

const decodeButton = document.getElementById("decode-button")
decodeButton.addEventListener("click", onDecodeButtonClicked)

const inputField = <HTMLInputElement>document.getElementById("newinput")

const newdecodeButton = document.getElementById("new-decode-button")
decodeButton.addEventListener("click", onDecodeButtonClicked)


function onDecodeButtonClicked() {
    main(inputField.value)
}