console.log("Hola mundo")

//tipos de variables

var myString = "Hola mundo" // se está asignando un string
 // myString = 22   se debe hacer conversion para cambiar la variable de string a int 

 var myString2: string = "hola world" // de esta forma se dice implicitamente que solamente será String

var Myvar: any = "hello" // de esta forma se dice que es cualquier tipo de dato soportado
Myvar = 22

// array

var StringArray: any[] = ["","",""]  //igual que anteriormente se puede seleccionar Any
StringArray = [true,2,2]             // se puede reasignar cualquier tipo de dato
var StringNum: number[]=[1,2,3]      // 


//tupls
var strNumTUple: [string, number]
strNumTUple = ["Hola",22]

document.write(strNumTUple + "")