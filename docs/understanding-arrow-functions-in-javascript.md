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



