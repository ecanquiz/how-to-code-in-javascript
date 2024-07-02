# Comprender Parámetros Predeterminados en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-default-parameters-in-javascript)
:::

## Introducción

En [ECMAScript 2015](https://262.ecma-international.org/6.0/), los parámetros de función predeterminados se introdujeron en el lenguaje [JavaScript](./). Estos permiten a los desarrolladores inicializar una [función](./how-to-define-functions-in-javascript.html) con valores predeterminados si los argumentos no se proporcionan a la llamada de función. Inicializar los parámetros de función de esta manera hará que sus funciones sean más fáciles de leer y menos propensas a errores, y proporcionará un comportamiento predeterminado para sus funciones. Esto le ayudará a evitar errores que surgen al pasar argumentos `undefined` y desestructurar objetos que no existen.

En este artículo, revisará la diferencia entre parámetros y argumentos, aprenderá cómo usar parámetros predeterminados en funciones, verá formas alternativas de admitir parámetros predeterminados y aprenderá qué tipos de valores y expresiones se pueden usar como parámetros predeterminados. También verá ejemplos que demuestran cómo funcionan los parámetros predeterminados en JavaScript.

## Argumentos y Parámetros

Antes de explicar los parámetros de función predeterminados, es importante saber qué es lo que los parámetros pueden establecer de forma predeterminada. Por esta razón, primero revisaremos la diferencia entre argumentos y parámetros en una función. Si desea obtener más información sobre esta distinción, consulte nuestro artículo anterior de la [serie JavaScript](./), [Cómo Definir Funciones en JavaScript ](./how-to-define-functions-in-javascript.html).

En el siguiente bloque de código, creará una función que devuelve el cubo de un número determinado, definido como `x`:


```js
// Define a function to cube a number
function cube(x) {
  return x * x * x
}
```

La variable `x` en este ejemplo es un _parámetro_— una variable con nombre que se pasa a una función. Un parámetro siempre debe estar contenido en una variable y nunca debe tener un valor directo.

Ahora eche un vistazo al siguiente bloque de código, que llama a la función de `cube` que acaba de crear:


```js
// Invoke cube function
cube(10)
```

Esto dará el siguiente resultado:


```sh
Output
1000
```


En este caso, `10` es un _argumento_— un valor que se pasa a una función cuando se invoca. A menudo, el valor también estará contenido en una variable, como en el siguiente ejemplo:


```js
// Assign a number to a variable
const number = 10

// Invoke cube function
cube(number)
```

Esto producirá el mismo resultado:


```sh
Output
1000
```


Si no pasa un argumento a una función que espera uno, la función usará implícitamente `undefined` como valor:

```js
// Invoke the cube function without passing an argument
cube()
```

Esto devolverá:

```sh
Output
NaN
```

En este caso, `cube()` intenta calcular el valor de `undefined * undefined * undefined`, lo que da como resultado `NaN`, o _“not a number”_. Para obtener más información sobre esto, consulte la sección numérica de [Comprender Tipos de Datos en JavaScript](./understanding-data-types.html#numbers).

Este comportamiento automático a veces puede ser un problema. En algunos casos, es posible que desee que el parámetro tenga un valor incluso si no se pasó ningún argumento a la función. Ahí es donde resulta útil la característica de _parámetros predeterminados_, un tema que cubrirá en la siguiente sección.

## Default Parameter Syntax

