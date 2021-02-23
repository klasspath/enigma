export function main(){
    let input = 5;
    let output = 0;
    let result = "Error";
    let position = 0; // welcher Buchstabe
    let displacement = [0,0,0]
    output = encryption(input, output, position, displacement);
    
    console.log(output)
}
function encryption(input, output, position, displacement){
    let displacement_1 = 0;
    let displacement_2 = 0;
    let displacement_3 = 0;
    let order_1 = [2,4,6,8,10,12,3,16,18,20,24,22,26,14,25,5,9,23,7,1,11,13,21,19,17,15];
    let order_1 = [2,4,6,8,10,12,3,16,18,20,24,22,26,14,25,5,9,23,7,1,11,13,21,19,17,15];
    let order_1 = [2,4,6,8,10,12,3,16,18,20,24,22,26,14,25,5,9,23,7,1,11,13,21,19,17,15];
    position = input;
    displacement_1 = displacemnet[0];
    displacement_2 = displacement[1];
    displacement_3 = displacement[2];
     
    //durchlauf durch die Rollen (hin)
    position = barrel_1(position, order_1, displacement_1);
    position = barrel_2(position, order_2, displacement_2);
    position = barrel_3(position, order_3, displacement_3);
    //durchlauf durch die Rollen (zurück)

        //fehlt noch zurüch muss anders als hin(?)

    // Temporär, muss dann zum Buchstaben gemacht werden...
    output = position

    return output;
}
function barrel_1(position, order_1, displacement_1){
    let temporary_position = 0;
    temporary_position = order_1[position + displacement_1 + 1]; 
    // die Eingabe wird unter beachtung der verschiebung zur neuen Zahl gedreht
    position = temporary_position + displacement_1 + 1;
    // Trommel ist rund, hier wenns rund geht ->
    if(position > 26){
        position = position - 26;
    }
    // der neue Buchtsabe wird gefunden (verschiebung + buchstabe = position in der Trommel)
    return position;
}
function barrel_2(position, order_2, displacement_2){
    let temporary_position = 0;
    temporary_position = order_2[position + displacement_2 + 1]; 
    position = temporary_position + displacement_2 + 1;
    if(position > 26){
        position = position - 26;
    }
    return position;
}
function barrel_3(position, order_3, displacement_3){
    let temporary_position = 0;
    temporary_position = order_3[position + displacement_3 + 1]; 
    position = temporary_position + displacement_3 + 1;
    if(position > 26){
        position = position - 26;
    }
    return position;
}