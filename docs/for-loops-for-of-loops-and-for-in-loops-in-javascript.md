# Bucles For, Bucles For...Of  y Bucles For...In en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript)
:::

## Introducción

Los bucles se utilizan en programación para automatizar tareas repetitivas. Los tipos más básicos de bucles utilizados en JavaScript son las declaraciones `while` y `do... while`, que puede revisar en "[Cómo Construir Bucles While y Do...While en JavaScript](./using-while-loops-and-do-while-loops-in-javascript.html)."

Porque las declaraciones `while` y `do... while` se [basan condicionalmente](./how-to-write-conditional-statements-in-javascript.html), se ejecutan cuando una declaración determinada vuelve a evaluarse como `true`. De manera similar en que también se basan condicionalmente, las declaraciones `for` también incluyen características adicionales, como un **contador de bucle**, que le permite establecer el número de iteraciones del bucle de antemano.

En este tutorial, aprenderemos sobre la declaración `for`, incluidas las declaraciones `for...of` y `for...in`, que son elementos esenciales del lenguaje de programación JavaScript.


## Bucle For

La declaración `for` es un tipo de bucle que utilizará hasta tres expresiones opcionales para implementar la ejecución repetida de un bloque de código.

Echemos un vistazo a un ejemplo de lo que eso significa.

```js
for (initialization; condition; final expression) {
	// code to be executed
}
```

En la sintaxis anterior hay tres expresiones dentro de la declaración `for`: la **`inicialización`**, la **`condición`** y la **`expresión final`**, también conocida como incremento.

Usemos un ejemplo básico para demostrar lo que hace cada una de estas declaraciones.

📃`forExample.json`
```js
// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	// Print each iteration to the console
	console.log(i);
}
```

Cuando ejecutamos el código anterior, recibiremos el siguiente resultado:


```sh
Output
0
1
2
3
```

En el ejemplo anterior, inicializamos el bucle `for` con `let i = 0`, que comienza el bucle en `0`. Establecemos la condición en `i < 4`, lo que significa que mientras `i` se evalúe como menor que `4`, el bucle continuará ejecutándose. Nuestra expresión final de `i++` incrementa el recuento de cada iteración del bucle. `console.log(i)` imprime los números, comenzando con `0` y deteniéndose tan pronto como `i` se evalúa como `4`.

Sin usar un bucle, podríamos haber logrado el mismo resultado usando el siguiente código.


📃`noLoop.json`
```js
// Set initial variable to 0
let i = 0;

// Manually increment variable by 1 four times
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
```

Sin el bucle, el bloque de código es repetitivo y consta de más líneas. Si necesitáramos incrementar más números, habríamos necesitado escribir aún más líneas de código.

Repasemos cada expresión del bucle para comprenderlas completamente.


### Initialization
