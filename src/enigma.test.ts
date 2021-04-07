import { runBarrel, orderOne, orderTwo, orderThree } from "./enigma"

test("test run of barrel 1", () => {
    expect(runBarrel(1, orderOne, 5)).toBe(1)
})

test("test run of barrel 1", () => {
    expect(runBarrel(1, orderOne, 0)).toBe(2)
})

/* test("test run of barrel 1", () => {
    expect(runBarrel(1, orderOne, 1)).toBe(2)
}) */
