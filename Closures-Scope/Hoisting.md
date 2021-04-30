# Hoisting

Es javascript se conoce como hoisting a cuando las variables y las funciones se declaran antes que se procese el código y esto pasa con versiones EMS 5 hacia abajo.

En js para utilizar una variable se tiene que dar los siguientes pasos primero que declarar la variable y luego se inicializa la variable. También se puede inicializar la variable al momento de la declaración, que es la forma mas común de hacerlo

```javascript
var miNombre = "Patricio"; 
```

Pero en ocasiones tienes variables cuyo valor aun no conoces y tienes que declararlas y luego asignar el valor cuando lo tengas

```javascript
var miNombre;
miNombre = "Patricio"; 
```

El problema que genera el hoisting es que a veces se manda a llamar a una variable sin antes haberla declarado

```javascript
console.log(miNombre);
miNombre = "Patricio"; 
```
Si se ejecuta el bloque de código anterior vamos a obtener como resultado un `undefined`, pero por qué no se genero un error como pasaría en otro lenguaje, esto es porque cuando el código de js se compila en el navegador al momento de que detecta lo que js piensa que puede ser una variable le reserva un espacio de memoria y como no la encuentra declarada, la declara por nosotros y la inicializa con un valor de `undefined` que sería como que si hiciéramos esto en nuestro código

```javascript
var miNombre = undefined; 
console.log(miNombre);
```
Como se definió al principio el hoisting también se puede dar en la funciones.

```javascript
hey();

function hey() {
  console.log("Hola " + miNombre);
}
var miNombre = "Patricio"; 
```
Lo que pasa si ejecutamos bloque de código anterior es que nos va a devolver `Hola undefined` porque en js las funciones y las variables en ese orden se procesan antes de ejecutar cualquier bloque de código y esto es lo que puede dar paso al hoisting.

Entonces en nuestro ejemplo al momento que detecta la función js la declara al inicio del código y hace lo mismo al detectar la variable declarándola con un valor de undefined de la siguiente forma

```javascript
function hey() {
  console.log("Hola " + miNombre);
}
var miNombre = undefined; 

hey();

var miNombre = "Patricio"; 
```

Hay que tener en cuneta que javascript solo utiliza el hoisting en las declaraciones y no en las inicializaciones.

Es por eso que por buenas prácticas todas las variables y funciones que vayamos a utilizar se tienen que declarar al inicio del código para evitar este tipo de problemas relacionados con el hoisting.