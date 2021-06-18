console.log("Hola mundo");
//tipos de variables
var myString = "Hola mundo"; // se está asignando un string
// myString = 22   se debe hacer conversion para cambiar la variable de string a int 
var myString2 = "hola world"; // de esta forma se dice implicitamente que solamente será String
var Myvar = "hello"; // de esta forma se dice que es cualquier tipo de dato soportado
Myvar = 22;
// array
var StringArray = ["", "", ""]; //igual que anteriormente se puede seleccionar Any
StringArray = [true, 2, 2]; // se puede reasignar cualquier tipo de dato
var StringNum = [1, 2, 3]; // 
//tupls                              // array estructuaro
var strNumTUple;
strNumTUple = ["Hola", 22];
// const pi = 3.1415 
var myVoid = undefined;
var myNull = null;
var cont = 0;
//function
function suma(num1, num2) {
    return num1 + num2; // explicitamente se solicitan 2 numeros de entrada
}
var myuSum = function (num1, num2) {
    return;
};
function getName(name, apellido) {
    // además de que la concatenación dará como resultado otro String -> explicitamente 
    if (apellido == undefined) {
        return name;
    }
    return name + " " + apellido; // Sintaxis para mostrar los datos equivalente a --> name  ' ' + apellido <--
}
document.write(getName("nicolás"));
