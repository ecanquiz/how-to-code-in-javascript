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


### Inicialización

Nuestra primera expresión es la **inicialización**. Esto es lo que parece.


```js
let i = 0;
```

Estamos declarando una variable llamada `i` con la palabra clave `let` (también se puede usar la palabra clave `var`) y le damos un valor de `0`. Si bien la variable puede tener cualquier nombre, `i` se usa con mayor frecuencia. La variable `i` representa iteración, es consistente y mantiene el código compacto.

### Condición

Tal como vimos en los bucles `while` y `do... while`, los bucles `for` generalmente contienen una **condición**. Aquí está nuestra declaración de condición.


```js
i < 4;
```

Ya establecimos que nuestra variable de iteración, `i`, representa `0` para empezar. Ahora decimos que la condición es `true` siempre que `i` sea menor que `4` en este ejemplo.

### Expresión Final

La **expresión final** es una declaración que se ejecuta al final de cada bucle. Se utiliza con mayor frecuencia para incrementar o disminuir un valor, pero puede usarse para cualquier propósito.


```js
i++
```

En nuestro ejemplo, incrementamos la variable en uno, con `i++`. Esto es lo mismo que ejecutar `i = i + 1`.

A diferencia de las expresiones de inicialización y condición, la expresión final no termina con punto y coma.

### Poniéndolo Junto

Ahora que hemos revisado nuestras tres expresiones contenidas en el bucle `for`, podemos volver a echar un vistazo al bucle completo.


```js
// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
	console.log(i);
}
```

Primero, declaramos `i` y lo configuramos en `0`. Luego, establecemos una condición para que el bucle se ejecute hasta que `i` sea menor que `4`. Finalmente, incrementamos `i` en un 1 en cada iteración. Nuestro bloque de código imprime el valor de `i` en la consola, por lo que nuestro resultado es `0`, `1`, `2` y `3` como salida.


### Expresiones Opcionales


Las tres expresiones del bucle `for` son opcionales. Por ejemplo, podemos escribir la misma declaración `for` sin la expresión de inicialización inicializando la variable fuera del bucle.


```js
// Declare variable outside the loop
let i = 0;

// Initialize the loop
for (; i < 4; i++) {
	console.log(i);
}
```

```sh
Output
0
1
2
3
```

En este caso, el primer `;` es necesario para indicar si la declaración se refiere a inicialización, condición o expresión final, incluso cuando se omite.

A continuación, también podemos eliminar la condición del bucle. Usaremos una declaración `if` combinada con `break` para indicarle al bucle que deje de ejecutarse una vez que `i` sea mayor que `3`, que es lo contrario de la condición `true`.


```js
// Declare variable outside the loop
let i = 0;

// Omit initialization and condition
for (; ; i++) {
	if (i > 3) {
		break;
	}
	console.log(i);
}
```


```sh
Output
0
1
2
3
```

:::warning Advertencia
La declaración `break` _debe_ incluirse si se omite la condición; de lo contrario, el bucle se ejecutará indefinidamente como un [bucle infinito](./using-while-loops-and-do-while-loops-in-javascript.html#bucles-infinitos) y potencialmente bloqueará el navegador.
:::

Por último, la expresión final se puede eliminar colocándola al final del bucle. Aún se deben incluir ambos puntos y coma o el bucle no funcionará.



```js
// Declare variable outside the loop
let i = 0;

// Omit all statements
for (; ;) {
	if (i > 3) {
		break;
	}
	console.log(i);
	i++;
}
```


```sh
Output
0
1
2
3
```


Como podemos ver en los ejemplos anteriores, incluir las tres declaraciones generalmente produce el código más conciso y legible. Sin embargo, es útil saber que las declaraciones se pueden omitir en caso de que surja este problema en el futuro.


### Modificando una Matriz

Podemos usar bucles `for` para modificar una [matriz](./understanding-arrays-in-javascript.html).

En el siguiente ejemplo, crearemos una matriz vacía y la rellenaremos con la variable del contador de bucle.


📃`modifyArray.json`
```js
// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
	// Update array with variable value
	arrayExample.push(i);
	console.log(arrayExample);
}
```


La ejecución del código JavaScript anterior dará como resultado el siguiente resultado.



```sh
Output
[ 0 ]
[ 0, 1 ]
[ 0, 1, 2 ]
```


Establecemos un bucle que se ejecuta hasta que `i < 3` ya no sea `true`, y le decimos a la consola que imprima la matriz `arrayExample` en la consola al final de cada iteración. Con este método podemos ver cómo la matriz se actualiza con los nuevos valores.



### Longitud de una Matriz


A veces, es posible que queramos que un bucle se ejecute varias veces sin estar seguros de cuál será el número de iteraciones. En lugar de declarar un número estático, como hicimos en ejemplos anteriores, podemos utilizar la [propiedad `length`](./understanding-arrays-in-javascript.html#matrices-de-indexacion) de una matriz para que el bucle se ejecute tantas veces como elementos haya en la matriz.


📃`loopThroughArray.json`
```js
// Declare array with 3 items
let fish = [ "flounder", "salmon", "pike" ];

// Initalize for loop to run for the total length of an array
for (let i = 0; i < fish.length; i++) {
	// Print each item to the console
	console.log(fish[i]);
}
```

Recibiremos el siguiente resultado.


```sh
Output
flounder
salmon
pike
```



En este ejemplo, incrementamos a través de cada índice de la matriz con `fish[i]` (por ejemplo, el bucle se incrementará a través de `fish[0]`, `fish[1]`, etc.). Esto hace que el índice se actualice dinámicamente con cada iteración.


Más detalles sobre la declaración `for` están disponibles en [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).


## Bucle For...In
