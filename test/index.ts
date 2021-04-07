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

function runBarrel(position: number): number {
    let displacement = 2    //muss noch aus Webseite gezogen werden!!!

    let temporaryPosition = position + displacement;
    if(temporaryPosition > order.length -1){
        temporaryPosition = temporaryPosition - order.length + 1; //das +1 als auch das -1 weil am Anfang des Array 0 ist dieser alos eins zu lang ist, dass muss ausgeglichen werden!
    }
    for (let i = 0; i < order.length; i++) {
        if (temporaryPosition == order[i]) {
            position = i;
        }
    }
    position = position - displacement;
    return position;
}

function reverseBarrel(position: number): number{
    return position;
}


function mirrorPosition(position: number): number{
    //let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    let mirrorOrder = [0,1,6,2,5,3,4]
    position = mirrorOrder[position]
    return position;
}
function runBarells(position): number {
    //let order = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    //let order = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    //let order = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    let order_One = [0,6,5,4,3,2,1];
    let order_Two = [0,4,5,6,1,2,3];
    let order_Three = [0,4,3,2,1,6,5];

    position = 2
    console.log("Start: "+position)
    position = runBarrelOne(position);
    position = runBarrelTwo(position);
    position = runBarrelThree(position);
    position = mirrorPosition(position);
    position = reverseBarrelThree(position);
    position = reverseBarrelTwo(position);
    position = reverseBarrelOne(position);
    console.log("Ende: "+position)
    return position;
}

function encryption(displacement: [number, number, number], position: number): number {

    position = runBarells(position)

    return position;
}

encryption([1,1,1], 1)
//console.log(encryption(position));