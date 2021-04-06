import { letterToNumber } from "./service";
import { numberToLetter } from "./service";
/*
Es fehlt:
    - walze 2 und 3 weiter drehen
    - rückweg maybe wrong, has to be tested further
    - Walzen anzeige beim weiterdrehen
*/

interface Main {
    result: string;
    displacement: number[];
}

export default function main(input: string, displacement: [number, number, number]): Main {
    let output = 0;
    let result = "Error";
    let position = 0;
    let verschlüsseln = true;
    position = letterToNumber(input);
    if ((verschlüsseln = true)) {
        output = encryption(output, position, displacement);
    } else if ((verschlüsseln = false)) {
        output = decryption(output, position, displacement);
    }
    result = numberToLetter(output);
    return { result, displacement };
}
function decryption(output: number, position: number, displacement: number[]) {
    //muss das anders?
    return output;
}
function encryption(output: number, position: number, displacement: number[]) {
    let displacement_1 = displacement[0];
    let displacement_2 = displacement[1];
    let displacement_3 = displacement[2];
    // wohin leiten die Trommeln weiter??? so:
    let order_1 = [2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order_2 = [1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order_3 = [2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let mirrorOrder = [25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];

    position = barrel_1(position, order_1, displacement_1);
    /* console.log("barrel_1, position on: ", position) */

    position = barrel_2(position, order_2, displacement_2);
    /* console.log("barrel_2, position on: ", position) */

    position = barrel_3(position, order_3, displacement_3);
    /* console.log("barrel_3, position on: ", position) */

    position = barrelMirror(position, mirrorOrder);
    /* console.log("Mirror, position on: ", position) */

    position = barrel_3(position, order_3, displacement_3);
    /* console.log("barrel_3, position on: ", position) */

    position = barrel_2(position, order_2, displacement_2);
    /* console.log("barrel_2, position on: ", position) */

    position = barrel_1(position, order_1, displacement_1);
    /* console.log("barrel_1, position on: ", position) */

    output = position;
    return output;
}
function barrelMirror(position: number, mirrorOrder: number[]) {
    let placeholder = 0;
    placeholder = mirrorOrder[position];
    position = placeholder;
    return position;
}

function barrel_1(position: number, order_1: number[], displacement_1: number) {
    let findEntryPositionValue = 0;
    let positionOnEntry = 0;

    displacement_1++;
    findEntryPositionValue = position + displacement_1 - 1; // -1 weil array bei null startet
    if (findEntryPositionValue > 25) {
        findEntryPositionValue = findEntryPositionValue - 25;
    }

    positionOnEntry = order_1[findEntryPositionValue];
    position = positionOnEntry - displacement_1;
    if (position < 1) {
        position = position + 25;
    } else if (position > 25) {
        position = position - 25;
    }
    return position;
}
function barrel_2(position: number, order_2: number[], displacement_2: number) {
    let findEntryPositionValue = 0;
    let positionOnEntry = 0;

    findEntryPositionValue = position + displacement_2 - 1;
    if (findEntryPositionValue > 25) {
        findEntryPositionValue = findEntryPositionValue - 25;
    }

    positionOnEntry = order_2[findEntryPositionValue];
    position = positionOnEntry - displacement_2;
    if (position < 1) {
        position = position + 25;
    } else if (position > 25) {
        position = position - 25;
    }
    return position;
}
function barrel_3(position: number, order_3: number[], displacement_3: number) {
    let findEntryPositionValue = 0;
    let positionOnEntry = 0;

    findEntryPositionValue = position + displacement_3 - 1;
    if (findEntryPositionValue > 25) {
        findEntryPositionValue = findEntryPositionValue - 25;
    }

    positionOnEntry = order_3[findEntryPositionValue];
    position = positionOnEntry - displacement_3;
    if (position < 1) {
        position = position + 25;
    } else if (position > 25) {
        position = position - 25;
    }
    return position;
}
