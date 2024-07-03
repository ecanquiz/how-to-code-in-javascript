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

## Sintaxis de Parámetros Predeterminada


Con la adición de parámetros predeterminados en ES2015, ahora puede asignar un valor predeterminado a cualquier parámetro, que la función usará en lugar de `undefined` cuando se llame sin un argumento. Esta sección primero le mostrará cómo hacer esto manualmente y luego lo guiará a través de la configuración de los parámetros predeterminados.

Sin parámetros predeterminados, tendría que verificar explícitamente si hay valores `undefined` para poder establecer los valores predeterminados, como se muestra en este ejemplo:



```js
// Check for undefined manually
function cube(x) {
  if (typeof x === 'undefined') {
    x = 5
  }

  return x * x * x
}

cube()
```

Esto utiliza una [declaración condicional](./how-to-write-conditional-statements-in-javascript.html) para verificar si el valor se ha proporcionado automáticamente como `undefined`, luego establece el valor de `x` en `5`. Esto dará como resultado el siguiente resultado:


```sh
Output
125
```

Por el contrario, el uso de parámetros predeterminados logra el mismo objetivo con mucho menos código. Puede establecer un valor predeterminado para el parámetro en el `cube` asignándolo con el operador de asignación de igualdad (`=`), como se resalta aquí:


```js{2}
// Define a cube function with a default value
function cube(x = 5) {
  return x * x * x
}
```


Ahora, cuando se invoca la función `cube` sin un argumento, asignará `5` a `x` y devolverá el cálculo en lugar de `NaN`:


```js
// Invoke cube function without an argument
cube()
```

```sh
Output
125
```

Seguirá funcionando según lo previsto cuando se pase un argumento, ignorando el valor predeterminado:


```js
// Invoke cube function with an argument
cube(2)
```

```sh
Output
8
```


Sin embargo, una advertencia importante a tener en cuenta es que el valor del parámetro predeterminado también anulará un `undefined` explícito pasado como argumento a una función, como se demuestra aquí:


```js
// Invoke cube function with undefined
cube(undefined)
```


Esto dará el cálculo con `x` igual a `5`:


```sh
Output
125
```


En este caso, se calcularon los valores de los parámetros predeterminados y un valor `undefined` explícito no los anuló.

Ahora que tiene una idea de la sintaxis básica de los parámetros predeterminados, la siguiente sección mostrará cómo funcionan los parámetros predeterminados con diferentes tipos de datos.


## Default Parameter Data Types