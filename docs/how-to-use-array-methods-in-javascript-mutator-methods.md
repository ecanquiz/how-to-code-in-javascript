# Cómo Utilizar Métodos de Matriz en JavaScript: Métodos Mutadores

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods)
:::


## Introducción

[Las matrices](./understanding-data-types.html#arrays) en JavaScript constan de una lista de elementos. JavaScript tiene muchos métodos integrados útiles para trabajar con matrices. Los métodos que modifican la matriz original se conocen como métodos mutadores y los métodos que devuelven un nuevo valor o representación se conocen como [métodos de **acceso**](./how-to-use-array-methods-in-javascript-accessor-methods.html). En este tutorial, nos centraremos en los métodos mutadores.

Para aprovechar al máximo este tutorial, debe estar familiarizado con la creación, indexación, modificación y bucle de matrices, lo cual puede revisar en el tutorial [Comprender Matrices en JavaScript](./understanding-arrays-in-javascript.html).



Las matrices son similares a las [cadenas](./how-to-index-split-and-manipulate-strings-in-javascript.html), en el sentido de que ambas constan de una secuencia de elementos a los que se puede acceder mediante un número de índice. Sin embargo, es importante recordar que las cadenas son un tipo de datos inmutables, lo que significa que no se pueden cambiar. Las matrices, por otro lado, son mutables, lo que significa que muchos métodos de matriz afectarán a la matriz original, no a una copia de la matriz.

:::warning Nota:
Los métodos de matrices se escriben correctamente como `Array.prototype.method()`, ya que `Array.prototype` se refiere al objeto `Array` en sí. Para simplificar, simplemente listaremos el nombre como `method()`.
:::


## isArray()

Antes de entrar en los métodos mutadores, veamos el método `isArray()` para probar si los objetos son matrices. Este es un método [Boolean](./understanding-data-types.html#booleans) que devuelve `true` si el valor de una variable es igual a una matriz. Si el objeto no es una matriz, este método devuelve `false`.


```js
let fish = [ "piranha", "barracuda", "koi", "eel" ];

// Test if fish variable is an array
Array.isArray(fish);
```

```sh
Output
true
```

El método `isArray()` es útil porque el operador `typeof` que normalmente usaríamos para probar devuelve `object` cuando se usa con matrices y, a veces, es necesario conocer la distinción entre un objeto y un objeto `Array`.

Tenga en cuenta que `isArray()` se escribe de manera diferente a la mayoría de los métodos de matriz, y la variable de matriz se proporciona como argumento del método.

Ahora que sabemos cómo verificar que un objeto sea una matriz, pasemos a los métodos mutadores.

## pop()


