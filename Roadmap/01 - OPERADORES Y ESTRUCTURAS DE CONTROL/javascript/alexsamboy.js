/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// Operadores de asignación
let x = y;
x /= y;

//Operadores de comparación
a == b;     // igual
a === b;    // igualdad estricta
a != b;     // desigualdad
a > b;      // mayor que
a !== b;    // desigualdad estricta
a > b;      // mayor que
a >= b;     // mayor o igual que
a < b;      // menor que
a <= b;     // menor o igual que

//Operadores aritméticos
    // Residuo (%)
    12 % 5
    // Incremento (++)
    3++
    ++3
    // Decremento (--)
    3--
    --3
    // Negación unaria (-)
    -3
    // Positivo unario (+)
    +4
    // Operador de exponenciación (**)
    5 ** 3

    // Operadores bit a bit
    a & b   // AND
    a | b   // OR
    a ^ b   // XOR
    ~ a     // NOT
    a << b  // Desplazamiento a la izquierda
    a >> b  // Desplazamiento a la derecha de propagación de signo
    a >>> b // Desplazamiento a la derecha de relleno cero

    //Operadores lógicos
    true && false   // AND Lógico (&&)
    true || false   // OR lógico (||)
    !true           // NOT lógico (!)

    //Operadores de cadena
    "cadena 1 " + "cadena 2"
    let cadena = "primera cadena";
    cadena += " Agregando segunda cadena";

    // Operador condicional (ternario)
    var status = age >= 18 ? "adult" : "minor"; // Operador ternario

    // Operador coma (,)
    // Operadores unarios
    delete object.property; // delete
    typeof operand          // typeof
    typeof (operand)        // typeof
    void (expression)       // void
    void expression         // void

    // Operadores relacionales
    propNameOrNumber in objectName;     // in
    objectName instanceof objectType    // instanceof

    // Operador de agrupación ()
    (2 + 2)

/*
// Estructuras de control
*/
// Condicional
if (1 > 2){
    console.log(2);
} else {
    console.log(1);
}

// swtich

let diaSemana;

switch(diaSemana){
    case "Lunes":
        console.log("Lunes");
        break;
    case "Martes":
        console.log("Martes");
        break;
    case "Miércoles":
        console.log("Miércoles");
            break;
    case "Jueves":
        console.log("Jueves");
        break;    
    case "Viernes":
        console.log("Viernes");
        break;
    case "Sábado":
        console.log("Sábado");
        break;
    case "Domingo":
        console.log("Domingo");
        break;
    default:
        console.log("Debes insertar un día de la semana"); 
}

// Tipos de excepciones
// Expresión throw
throw {
    toString: function () {
      console.log("¡Soy una excepción!");
    },
  };

//Declaración try...catch
// Cadena JSON inválida
jsonString = '{"name": "John", "age": 30'; // Falta una comilla de cierre

try {
    // Intentamos parsear la cadena JSON inválida
    let user = JSON.parse(jsonString);
    console.log("Nombre:", user.name);
    console.log("Edad:", user.age);
} catch (error) {
    // Manejamos el error de parseo
    console.log("Se produjo un error al parsear JSON:", error.message);
}

// try...catch ... Finally
try {
    // Código que puede lanzar una excepción
    let result = JSON.parse('{"name": "John"}');
    console.log("Nombre:", result.name);
} catch (error) {
    // Manejo de la excepción
    console.log("Se produjo un error:", error.message);
} finally {
    // Código que se ejecuta siempre, ocurra o no una excepción
    console.log("Esto se ejecuta siempre");
}

// Bucles

// For
for (let i = 0; i < 5; i++) {
    console.log("Iteración", i);
}

// For Of
let array = [1, 2, 3, 4, 5];

for (let value of array) {
    console.log("Valor", value);
}

// For In
let obj = { name: "John", age: 30, city: "New York" };

for (let key in obj) {
    console.log(key, ":", obj[key]);
}


// While
let count = 0;

while (count < 5) {
    console.log("Cuenta", count);
    count++;
}

// Do While
do {
    console.log("Cuenta", count);
    count++;
} while (count < 5);

/* DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log(i);
    }
}
