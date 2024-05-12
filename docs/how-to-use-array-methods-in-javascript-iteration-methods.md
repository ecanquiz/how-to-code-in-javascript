# Cómo Utilizar Métodos de Matriz en JavaScript: Métodos de Iteración

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods)
:::

En JavaScript, el tipo de datos de [matriz](./understanding-data-types.html#arrays) consta de una lista de elementos. Hay muchos métodos integrados útiles disponibles para que los desarrolladores de JavaScript trabajen con matrices. Los métodos que modifican la matriz original se conocen como [métodos **mutadores**](./how-to-use-array-methods-in-javascript-mutator-methods.html) y los métodos que devuelven un nuevo valor o representación se conocen como [métodos de **acceso**](./how-to-use-array-methods-in-javascript-accessor-methods.html).

Existe una tercera clase de métodos de matriz, conocidos como métodos de **iteración**, que son métodos que operan en cada elemento de una matriz, uno a la vez. Estos métodos están estrechamente asociados con los bucles. En este tutorial, nos centraremos en los métodos de iteración.

Para aprovechar al máximo este tutorial, debe estar familiarizado con la creación, indexación, modificación y bucle de matrices, lo cual puede revisar en el tutorial [Comprender Matrices en JavaScript](./understanding-arrays-in-javascript.html).

En este tutorial, usaremos métodos de iteración para recorrer matrices, realizar funciones en cada elemento de una matriz, filtrar los resultados deseados de una matriz, reducir los elementos de la matriz a un solo valor y buscar en matrices para encontrar valores o índices.

:::info Nota
Los métodos de Matrices se escriben correctamente como `Array.prototype.method()`, ya que `Array.prototype` se refiere al objeto `Array` en sí. Para simplificar, simplemente enumeraremos el nombre como `method()`.
:::

## Comprender las Funciones de Flecha

Muchos ejemplos a lo largo de este tutorial utilizarán [expresiones de función de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) de JavaScript, que están representadas por un signo igual seguido de un signo mayor que: `=>`.

Una **función** es un bloque de código reutilizable que se puede ejecutar. Tradicionalmente, una función se puede escribir con la siguiente sintaxis:


```js
var example = function() {
  // code to execute
}

example();
```

La última versión de JavaScript al momento de escribir este artículo permite el uso de funciones de flecha, que se pueden escribir con la siguiente sintaxis:


```js
var example = () => {
  // code to execute
}

example();
```

Los paréntesis en cualquier caso pueden contener parámetros. Cuando solo hay un parámetro, se pueden omitir los paréntesis, así:


```js
var example = parameter1 => {
  // code to execute
}
```

A lo largo de los ejemplos de este tutorial, utilizaremos la sintaxis de la función de flecha. Para leer y comprender más sobre las funciones en JavaScript, lea la [referencia de Funciones en Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).



