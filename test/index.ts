import { letterToNumber } from "../src/service";
import { numberToLetter } from "../src/service";

interface Main {
    result: string;
    displacement: number[];
}

export default function main(input: string, displacement: [number, number, number]): Main {
    let position = 0;
    position = encryption(displacement, position);
    position = letterToNumber(input);
    return { result: "", displacement };
}

function encryption(displacement: [number, number, number], position: number): number {
    //position = position muss herausgefunden werden
    //Starten mit Null damit nich von null gezählt werden muss
    let order_1 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order_2 = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order_3 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    let checkSum = 0;

    displacement[0] = 1;
    displacement[1] = 1;
    displacement[2] = 1;
    position = 1;
    
    console.log(position + "start");

    for (let i = 0; i < order_1.length; i++) {
        if (position == order_1[i]) {
            position = i;
        }
    }
    console.log(position + "mitte1");
    for (let i = 0; i < order_2.length; i++) {
        if (position == order_2[i]) {
            position = i;
        }
    }
    console.log(position + "mitte_2");
    for (let i = 0; i < order_3.length; i++) {
        if (position == order_3[i]) {
            position = i;
        }
    }
    console.log(position + "mitte_3");
    
    position = order_3[position];
    console.log(position + "mitte_1");

    position = order_2[position];
    console.log(position + "mitte2");

    position = order_1[position];
    console.log(position + "ende3");

    return position;
}

function greaterThan26(checkSum: number) {
    if (checkSum > 26) {
        checkSum = checkSum - 26;
    }
    return checkSum;
}

console.log(main("a", [1, 1, 1]))
