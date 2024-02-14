// Your code goes here
const rapid = (texto) => {
    let consonantes = "";
    console.log(texto);
    for (let index = 0; index < texto.length; index++) {
        //console.log(texto[index])
        if (texto[index] != "o") {
            console.log(texto[index])
            consonantes += texto[index]
        }

    }
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
