import { runBarrel, reverseBarrel, orderOne, orderTwo, orderThree } from "./enigma"

test("run barrel 1", () => {
    expect(runBarrel(1, orderOne, 1)).toBe(26)
})

test("run barrel 1", () => {
    expect(runBarrel(1, orderOne, 0)).toBe(20)
})

test("run barrel 2", () => {
    expect(runBarrel(1, orderTwo, 1)).toBe(9)
})

test("run barrel 2", () => {
    expect(runBarrel(1, orderTwo, 0)).toBe(1)
})

test("run barrel 3", () => {
    expect(runBarrel(1, orderThree, 1)).toBe(17)
})

test("run barrel 3", () => {
    expect(runBarrel(1, orderThree, 0)).toBe(25)
})

test("reverse run barrel 1", () => {
    expect(reverseBarrel(26, orderOne, 1)).toBe(1)
})
