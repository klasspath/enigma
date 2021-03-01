export default function main() {
    let input = 5;
    let output = 0;
    let result = "Error";
    let position = 0; // welcher Buchstabe
    let displacement = [6, 14, 3]; // -1 da start bei null
    output = encryption(input, output, position, displacement);
    console.log(output)
}

function encryption(input: number, output: number, position: number, displacement: number[]) {
    let displacement_1 = 0;
    let displacement_2 = 0;
    let displacement_3 = 0;
    // wohin leiten die Trommeln weiter??? so:
    let order_1 = [2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    let order_2 = [1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
    let order_3 = [2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
    position = input;
    displacement_1 = displacement[0];
    displacement_2 = displacement[1];
    displacement_3 = displacement[2];

    position = barrel_1(position, order_1, displacement_1);
    position = barrel_2(position, order_2, displacement_2);
    position = barrel_3(position, order_3, displacement_3);
    position = barrel_3(position, order_3, displacement_3);
    position = barrel_2(position, order_2, displacement_2);
    position = barrel_1(position, order_1, displacement_1);

    //fehlt noch zurüch muss anders als hin(?)

    output = position

    return output;
}

/*
interface Barrel {
    displacement: number;
    order: number[];
}
*/

function barrel_1(position: number, order_1: number[], displacement_1: number) {
    displacement_1 = displacement_1 + 1; // verschiebung wird um 1 erweitert
    let letter = 0;
    letter = order_1[position + displacement_1 - 1]; // -1 weil array bei null startet
    position = letter - displacement_1;
    if (position > 26) {
        position = position - 26;
    }
    return position;
}

function barrel_2(position: number, order_2: number[], displacement_2: number){
    // rotation wann bei der zweiten?
    let letter = 0;
    letter = order_2[position + displacement_2 - 1];
    position = letter - displacement_2;
    if (position > 26) {
        position = position - 26;
    }
    return position;
}

function barrel_3(position: number, order_3: number[], displacement_3: number){
    // rotation wann bei der zweiten?
    let letter = 0;
    letter = order_3[position + displacement_3 - 1];
    position = letter - displacement_3;
    if (position > 26) {
        position = position - 26;
    }
    return position;
}
