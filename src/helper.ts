export function letterToNumber(input: string): number {
    const charCode = input.charCodeAt(0) - 97;
    return charCode;
}

export function numberToLetter(output: number): string {
    const charCode = String.fromCharCode(97 + output);
    return charCode;
}
