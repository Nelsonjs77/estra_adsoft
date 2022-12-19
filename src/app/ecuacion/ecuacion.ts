export function ecuacion(arrayX: number[], a: number, b: number){
    let arrayY: number[] = [];
    for(let i = 0; i < arrayX.length; i++){
        let aux = 0;
        aux = a*arrayX[i];
        arrayY[i] = aux + b;
    }

    return arrayY;
}