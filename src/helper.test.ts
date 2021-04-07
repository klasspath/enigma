import { letterToNumber, numberToLetter } from "./helper"

test("test converting letter a to number", () => {
    expect(letterToNumber("a")).toBe(0)
})

test("test converting letter b to number", () => {
    expect(letterToNumber("b")).toBe(1)
})

test("test converting letter c to number", () => {
    expect(letterToNumber("c")).toBe(2)
})

test("test converting letter z to number", () => {
    expect(letterToNumber("z")).toBe(25)
})

test("test converting number 1 to letter", () => {
    expect(numberToLetter(1)).toBe("b")
})

test("test converting letter 2 to letter", () => {
    expect(numberToLetter(2)).toBe("c")
})
