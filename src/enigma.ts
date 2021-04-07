export const orderOne = [0, 2, 4, 6, 8, 10, 12, 3, 16, 18, 20, 24, 22, 26, 14, 25, 5, 9, 23, 7, 1, 11, 13, 21, 19, 17, 15];
export const orderTwo = [0, 1, 10, 4, 11, 19, 9, 18, 21, 24, 2, 12, 8, 23, 20, 13, 3, 17, 7, 26, 14, 16, 25, 6, 22, 15, 5];
export const orderThree = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];

export function runBarrel(position: number, order: number[], displacement: number): number {
    let temporaryPosition = position + displacement;
    if (temporaryPosition > order.length - 1) {
        temporaryPosition = temporaryPosition - order.length + 1;
    }
    for (let i = 0; i < order.length; i++) {
        if (temporaryPosition == order[i]) {
            position = i;
        }
    }
    console.log(position)
    position = position - displacement;

    if(position < 1){
        position + order.length - 1;
    }
    return position;
}

export function reverseBarrel(position: number, order: number[], displacement: number): number {
    let temporaryPosition = position + displacement;
    if (temporaryPosition > order.length - 1) {
        temporaryPosition = temporaryPosition - order.length + 1;
        console.log("fail");
    }
    position = order[temporaryPosition];
    position = position - displacement;
    return position;
}

export function mirrorPosition(position: number): number {
    let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    //let mirrorOrder = [0,1,6,2,5,3,4]
    position = mirrorOrder[position];
    return position;
}

export function reverseMirrorPosition(position: number): number {
    let mirrorOrder = [0, 25, 18, 21, 8, 17, 19, 12, 4, 16, 24, 14, 7, 15, 11, 13, 9, 5, 2, 6, 26, 3, 23, 22, 10, 1, 20];
    //let mirrorOrder = [0,1,6,2,5,3,4]
    for (let i = 0; i < mirrorOrder.length; i++) {
        if (position == mirrorOrder[i]) {
            position = i;
        }
    }
    return position;
}

export default function runBarrels(displacement: [number, number, number], position: number, type: "encrypt" | "decrypt"): number {

    /* let order_One =   [0,6,5,4,3,2,1];
    let order_Two =   [0,4,5,6,1,2,3];
    let order_Three = [0,4,3,2,1,6,5];*/
    let displacement_One = displacement[0];
    let displacement_Two = displacement[1];
    let displacement_Three = displacement[2];
    position++;
    console.log("Start: " + position);
    position = runBarrel(position, orderOne, displacement_One);
    position = runBarrel(position, orderTwo, displacement_Two);
    position = runBarrel(position, orderThree, displacement_Three);
    if (type == "encrypt") {
        position = mirrorPosition(position);
    } else if (type == "decrypt") {
        position = reverseMirrorPosition(position);
    }
    position = reverseBarrel(position, orderThree, displacement_Three);
    position = reverseBarrel(position, orderTwo, displacement_Two);
    position = reverseBarrel(position, orderOne, displacement_One);
    console.log("zurück: " + position);
    position--;
    console.log("ende: " + position);
    return position;
}
