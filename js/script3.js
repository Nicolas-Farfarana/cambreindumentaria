/* IF */


/* let nombre = prompt("Ingrese su nombre")

if(nombre == "nico"){
    alert("Hola " + nombre)
}
else if(nombre == "chori"){
    alert("nos vimos")
}
else{
    alert("Hols")
}
 */

/* FOR */

/* let numero = parseInt(prompt("ingrese un numero"));

for( let i = 0 ; i <= 10 ; i++){
    let resultado = numero * i ;
    if(i == 5){
        continue;
    }
    alert( numero + " X " + i + " = " + resultado);

} */

/* WHILE */

/* let nombre = prompt( " ingrsar un nombre")

while( nombre != "nico"){
    alert(" el nombre es incorrecto")

    nombre = prompt(" ingresar otro nombre ")
}
while( nombre == "nico"){
    alert("hola nico");
    break;
} */

/* DO ... WHILE*/


/* let numero = 0;
do{
    numero = prompt("ingrese un numero ");
    alert(numero);
} while(parseInt(numero)) */

/* SWITCH */

/* let entrada = prompt("Ingrese su nombre: ")

while (entrada != "ESC"){
    switch(entrada){
        case "nico":
            alert("hola nico");
            break;
        case "rodri":
            alert("hola choribio");
            break;
        default:
            alert("quien sos?");
            break;
    }
    entrada = prompt("Ingrese su nombre: ")
} */

/* FUNCTION */

/* function sumar(primerNumero , segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumar( 5, 8); */

/* FUNCTION CALCULADORA */


/* function calculador( primerNumero , segundoNumero , operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }

}
let numero1 = parseInt (prompt("ingrese un numero: "))
let numero2 = parseInt(prompt("ingrese otro numero: "))
let operacion = prompt("ingrese la operacion que desea realizar : + , - , * , / ")

alert(calculador(numero1,numero2,operacion)) */

/* FUNCTION ANONIMA*/

/* const sumar = function(primerNumero, segundoNumero){return primerNumero + segundoNumero}
alert(sumar(5,2))
 */

/* FUNCION FLECHA 
const resta = (primerNumero, segundoNumero) =>  primerNumero - segundoNumero ;

console.log ( resta ( 19 , 2 ) )*/

