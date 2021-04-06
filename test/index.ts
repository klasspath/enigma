export function letterToNumber(input: string): number {
    const charCode = input.charCodeAt(0) - 97;
    return charCode;
}

export function numberToLetter(output: number): string {
    const charCode = String.fromCharCode(97 + output);
    return charCode;
}

function greaterThan26(checkSum: number) {
    if (checkSum > 26) {
        checkSum = checkSum - 26;
    }
    return checkSum;
}

function runBarrelOne(position: number): number {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order = [6,5,4,3,2,1];
    for (let i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }
    return position;
}

function runBarrelTwo(position: number): number {
    //let order = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order = [4,5,6,1,2,3];
    for (let i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }

    return position;
}

function runBarrelThree(position: number): number {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order = [4,3,2,1,6,5];
    for (let i = 0; i < order.length; i++) {
        if (position == order[i]) {
            position = i;
        }
    }

    return position;
}

function reverseBarrelOne(position: number): number{
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order = [6,5,4,3,2,1];
    position = order[position];
    return position;
}

function reverseBarrelTwo(position: number): number{
    //let order = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order = [4,5,6,1,2,3];
    return position;
}

function reverseBarrelThree(position: number): number{
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order = [4,3,2,1,6,5];
    return position;
}

function mirrorPosition(position: number): number{
    let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    return position;
}
function runBarells(position): number {
    position = runBarrelOne(position);
    position = runBarrelTwo(position);
    position = runBarrelThree(position);
    position = mirrorPosition(position);
    position = reverseBarrelThree(position);
    position = reverseBarrelTwo(position);
    position = reverseBarrelOne(position);
    return position;
}

function encryption(displacement: [number, number, number], position: number): number {

    position = runBarells(position)

    return position;
}
//console.log(encryption(position));**