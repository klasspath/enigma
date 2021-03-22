import { letterToNumber } from "./service"
import { numberToLetter } from "./service"

export default function main(input: string, displacement: [number, number, number]): Main {
    let output = 0;
    let result = "Error";
    let position = 0;
    let verschlüsseln = true;
    position = letterToNumber(input);
    if (verschlüsseln = true) {
        output = encryption(output, position, displacement);
    } else if (verschlüsseln = false) {
        output = decryption(output, position, displacement);
    }
    result = numberToLetter(output)
    return { result, displacement }
}
function encryption(){
    let order_1 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order_2 = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order_3 = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];

    let order = [0][1][2];
    let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    let displacement = [0, 0, 0]
    let position = 0;

    // weiterdrehen der Trommeln:
    displacement[0]++;
    if(displacement[0] = 0 ){       // Bei welcher Zahl wird die trommel_2 weiter gedreht?
        displacement[1]++;
        if(displacement[1] = 0){    // Bei welcher Zahl wird die trommel_3 weiter gedreht?
            displacement[2]++;
        }
    }
}
// WICHTIG!!! wenn größer 26 muss noch gelöst werden!!!!!!!!

function trommel(){
    let letter = 0;
    for(int i = 0; i < 3; i++){     // i = trommel nummer
        letter = trommel[i][position + displacement[i]];    // zu welchem Buchstaben wird position
        position = letter + displacement[i];                // wo ist der Buchstabe zu dem position wird
    }
    position = mirrorOrder[position];
    for(int i = 0; i< 3; i++){

    }
}