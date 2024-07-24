# Comprender las Funciones de Flecha en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-arrow-functions-in-javascript)
:::

## Introduction

La [edición 2015 de la especificación ECMAScript (ES6)](https://262.ecma-international.org/6.0/) agregó expresiones de función de flecha al lenguaje [JavaScript](./intro.html). Las funciones de flecha son una nueva forma de escribir expresiones de funciones anónimas y son similares a las [funciones lambda](https://en.wikipedia.org/wiki/Anonymous_function) en algunos otros lenguajes de programación, como [Python](https://www.digitalocean.com/community/tutorial-series/how-to-code-in-python-3).

Las funciones de flecha se diferencian de las funciones tradicionales en varios aspectos, incluida la forma en que se determina su alcance y cómo se expresa su sintaxis. Debido a esto, las funciones de flecha son particularmente útiles cuando se pasa una función como parámetro a una función de orden superior, como cuando se recorre una [matriz](./understanding-arrays-in-javascript.html) con [métodos iteradores integrados](./how-to-use-array-methods-in-javascript-iteration-methods.html). Su abreviatura sintáctica también puede permitirle mejorar la legibilidad de su código.

En este artículo, revisará declaraciones y expresiones de funciones, aprenderá sobre las diferencias entre las expresiones de funciones tradicionales y las expresiones de funciones de flecha, aprenderá sobre el alcance léxico en lo que respecta a las funciones de flecha y explorará algunas de las taquigrafías sintácticas permitidas con las funciones de flecha.

## Definición de Funciones

Antes de profundizar en los detalles de las expresiones de funciones de flecha, este tutorial revisará brevemente las funciones tradicionales de JavaScript para mostrar mejor los aspectos únicos de las funciones de flecha más adelante.

El tutorial [Cómo Definir Funciones en JavaScript](./how-to-define-functions-in-javascript.html) anteriormente en esta serie introdujo el concepto de _declaraciones de funciones y expresiones de funciones_. Una declaración de función es una función con nombre escrita con la palabra clave `function`. Las declaraciones de funciones se cargan en el contexto de ejecución antes de que se ejecute cualquier código. Esto se conoce como _elevación_, lo que significa que puede utilizar la función antes de declararla.

A continuación se muestra un ejemplo de una función `sum` que devuelve la suma de dos parámetros:


```js
function sum(a, b) {
  return a + b
}
```

Puede ejecutar la función `sum` antes de declarar la función debido a la elevación:


```js
sum(1, 2)

function sum(a, b) {
  return a + b
}
```


Ejecutar este código daría el siguiente resultado:


```sh
Output
3
```


Puede encontrar el nombre de la función registrando la función misma:


```js
console.log(sum)
```

Esto devolverá la función, junto con su nombre:


```sh
Output
ƒ sum(a, b) {
  return a + b
}
```


Una expresión de función es una función que no está precargada en el contexto de ejecución y solo se ejecuta cuando el código la encuentra. Las expresiones de funciones generalmente se asignan a una variable y pueden ser _anónimas_, lo que significa que la función no tiene nombre.

En este ejemplo, escriba la misma función `sum` como una expresión de función anónima:


```js
const sum = function (a, b) {
  return a + b
}
```


Ahora ha asignado la función anónima a la constante `sum`. Intentar ejecutar la función antes de declararla resultará en un error:


```js
sum(1, 2)

const sum = function (a, b) {
  return a + b
}
```

Ejecutar esto dará:


```js
Output
Uncaught ReferenceError: Cannot access 'sum' before initialization
```

Además, tenga en cuenta que la función no tiene un identificador con nombre. Para ilustrar esto, escriba la misma función anónima asignada a `sum` y luego registre `sum` en la consola:


```js
const sum = function (a, b) {
  return a + b
}

console.log(sum)
```


Esto le mostrará lo siguiente:


```sh
Output
ƒ (a, b) {
  return a + b
}
```

El valor de `suma` es una función anónima, no una función con nombre.


Puede nombrar expresiones de funciones escritas con la palabra clave `function`, pero esto no es popular en la práctica. Una razón por la que quizás quieras nombrar una expresión de función es hacer que los seguimientos de la pila de errores sean más fáciles de depurar.


Considere la siguiente función, que utiliza una [declaración `if`](./how-to-write-conditional-statements-in-javascript.html) para generar un error si faltan los parámetros de la función:


```js{1}
const sum = function namedSumFunction(a, b) {
  if (!a || !b) throw new Error('Parameters are required.')

  return a + b
}

sum();
```

La sección resaltada le da un nombre a la función, y luego la función usa el operador **o** `||`  para generar un [objeto](./understanding-objects-in-javascript.html) de error si falta alguno de los parámetros.


Al ejecutar este código obtendrá lo siguiente:


```sh
Output
Uncaught Error: Parameters are required.
    at namedSumFunction (<anonymous>:3:23)
    at <anonymous>:1:1
```

En este caso, nombrar la función le da una idea rápida de dónde está el error.



Una [_expresión de función de flecha_](./how-to-define-functions-in-javascript.html#funciones-de-flecha) es una expresión de función anónima escrita con la sintaxis de “flecha gorda” (`=>`).

Reescribe la función `sum` con la sintaxis de la función de flecha:


```js
const sum = (a, b) => {
  return a + b
}
```

Al igual que las expresiones de funciones tradicionales, las funciones de flecha no están elevadas, por lo que no puedes llamarlas antes de declararlas. También son siempre anónimas—no hay forma de nombrar una función de flecha. En la siguiente sección, explorará más diferencias sintácticas y prácticas entre las funciones de flecha y las funciones tradicionales.

## Comportamiento y Sintaxis de Función de Flecha

Las funciones de flecha tienen algunas distinciones importantes en su funcionamiento que las distinguen de las funciones tradicionales, así como algunas mejoras sintácticas. La mayor diferencia funcional es que las funciones de flecha no tienen su propio `this` vinculante o prototipo y no pueden usarse como constructor. Las funciones de flecha también se pueden escribir como una alternativa más compacta a las funciones tradicionales, ya que otorgan la capacidad de omitir paréntesis alrededor de los parámetros y agregar el concepto de un cuerpo de función conciso con retorno implícito.

En esta sección, analizará ejemplos que ilustran cada uno de estos casos.



### Léxico `this`

La palabra clave `this` a menudo se considera un tema complicado en JavaScript. El artículo [Comprender This, Bind, Call y Apply en JavaScript](./understanding-this-bind-call-and-apply-in-javascript.html) explica cómo funciona `this` y cómo se puede inferir implícitamente en función de si el programa lo usa en el contexto global, como método dentro de un objeto, como constructor de una función o clase, o como manejador de eventos [DOM](https://ecanquiz.github.io/understanding-the-dom).

Las funciones de flecha tienen _léxico_ `this`, lo que significa que el valor de `this` está determinado por el alcance circundante (el entorno léxico).

El siguiente ejemplo demostrará la diferencia entre cómo las funciones tradicionales y de flecha manejan `this`. En el siguiente objeto `printNumbers`, hay dos propiedades: `phrase` y `numbers`. También hay un método en el objeto, `loop`, que debería imprimir la cadena `phrase` y el valor actual en `numbers`:


```js
const printNumbers = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach(function (number) {
      console.log(this.phrase, number)
    })
  },
}
```

Se podría esperar que la función `loop` imprima la cadena y el número actual en el bucle en cada iteración. Sin embargo, en el resultado de ejecutar la función, la `phrase` en realidad es `undefined`:


```js
printNumbers.loop()
```

Esto dará lo siguiente:


```sh
Output
undefined 1
undefined 2
undefined 3
undefined 4
```

Como muestra esto, `this.phrase` no está definido, lo que indica que `this` dentro de la función anónima pasada al [método `forEach`](./how-to-use-array-methods-in-javascript-iteration-methods.html#foreach) no se refiere al objeto `printNumbers`. Esto se debe a que una función tradicional no determinará su valor `this` desde el alcance del entorno, que es el objeto `printNumbers`.

En versiones anteriores de JavaScript, habría tenido que utilizar el método `bind`, que establece `this` explícitamente. Este patrón se puede encontrar a menudo en algunas versiones anteriores de frameworks, como [React](https://react.dev/), antes de la llegada de ES6.

Utilice `bind` para arreglar la función:


```js
const printNumbers = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    // Bind the `this` from printNumbers to the inner forEach function
    this.numbers.forEach(
      function (number) {
        console.log(this.phrase, number)
      }.bind(this),
    )
  },
}

printNumbers.loop()
```

Esto dará el resultado esperado:

```sh
Output
The current value is: 1
The current value is: 2
The current value is: 3
The current value is: 4
```

Las funciones de flecha proporcionan una forma más directa de abordar esto. Dado que su valor `this` se determina en función del alcance léxico, la función interna llamada en `forEach` ahora puede acceder a las propiedades del objeto externo `printNumbers`, como se demuestra:


```js
const printNumbers = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number)
    })
  },
}

printNumbers.loop()
```

Esto dará el resultado esperado:


```sh
Output
The current value is: 1
The current value is: 2
The current value is: 3
The current value is: 4
```

Estos ejemplos establecen que el uso de funciones de flecha en métodos de matriz integrados como `forEach`, `map`, `filter` y `reduce` puede ser más intuitivo y fácil de leer, lo que hace que sea más probable que esta estrategia cumpla con las expectativas.


### Funciones de Flecha como Métodos de Objeto

Si bien las funciones de flecha son excelentes como funciones de parámetros pasadas a métodos de matriz, no son efectivas como métodos de objetos debido a la forma en que utilizan el alcance léxico para `this`. Usando el mismo ejemplo anterior, tome el método `loop` y conviértalo en una función de flecha para descubrir cómo se ejecutará:


```js
const printNumbers = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop: () => {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number)
    })
  },
}
```

En este caso de un método de objeto, `this` debería hacer referencia a las propiedades y métodos del objeto `printNumbers`. Sin embargo, dado que un objeto no crea un nuevo alcance léxico, una función de flecha buscará más allá del objeto el valor de `this`.

Llame al método `loop()`:


```js
printNumbers.loop()
```

Esto dará lo siguiente:


```sh
Output
Uncaught TypeError: Cannot read property 'forEach' of undefined
```

Dado que el objeto no crea un alcance léxico, el método de función de flecha busca `this` en el alcance externo–[`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) en este ejemplo. Dado que la propiedad `numbers` no existe en el objeto `Window`, genera un error. Como regla general, es más seguro utilizar funciones tradicionales como métodos de objeto de forma predeterminada.

### Las Funciones de Flecha No Tienen `constructor` ni `prototype`

El tutorial [Comprender las Funciones de Flecha en JavaScript](./understanding-prototypes-and-inheritance-in-javascript.html) anterior en esta serie explicó que las funciones y clases tienen una propiedad `prototype`, que es lo que JavaScript usa como modelo para la clonación y la herencia.

Para ilustrar esto, cree una función y registre la propiedad `prototype` asignada automáticamente:


```js
function myFunction() {
  this.value = 5
}

// Log the prototype property of myFunction
console.log(myFunction.prototype)
```


Esto imprimirá lo siguiente en la consola:


```sh
Output
{constructor: ƒ}
```


Esto muestra que en la propiedad `prototype` hay un objeto con un `constructor`. Esto le permite usar la palabra clave `new` para crear una instancia de la función:


```js
const instance = new myFunction()

console.log(instance.value)
```


Esto producirá el valor de la propiedad `value` que definiste cuando declaraste la función por primera vez:


```sh
Output
5
```

Por el contrario, las funciones de flecha no tienen una propiedad `prototype`. Cree una nueva función de flecha e intente registrar su prototipo:


```js
const myArrowFunction = () => {}

// Attempt to log the prototype property of myArrowFunction
console.log(myArrowFunction.prototype)
```


Esto dará lo siguiente:


```sh
Output
undefined
```

Como resultado de la propiedad `prototype` que falta, la palabra clave `new` no está disponible y no se puede construir una instancia a partir de la función de flecha:


```js
const arrowInstance = new myArrowFunction()

console.log(arrowInstance)
```

Esto dará el siguiente error:


```sh
Output
Uncaught TypeError: myArrowFunction is not a constructor
```


Esto es consistente con nuestro ejemplo anterior: dado que las funciones de flecha no tienen su propio valor `this`, se deduce que no podría usar una función de flecha como constructor.

Como se muestra aquí, las funciones de flecha tienen muchos cambios sutiles que las hacen operar de manera diferente a las funciones tradicionales en ES5 y versiones anteriores. También ha habido algunos cambios sintácticos opcionales que hacen que la escritura de funciones de flecha sea más rápida y menos detallada. La siguiente sección mostrará ejemplos de estos cambios de sintaxis.


### Implicit Return
