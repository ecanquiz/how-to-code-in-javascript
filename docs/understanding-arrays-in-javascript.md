# Comprender Matrices en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript)
:::

## Introducción

Una **matriz** en JavaScript es un tipo de objeto global que se utiliza para almacenar datos. Las matrices constan de una colección o lista ordenada que contiene cero o más tipos de datos y utilizan índices numerados que comienzan desde `0` para acceder a elementos específicos.

Las matrices son muy útiles ya que almacenan múltiples valores en una sola variable, lo que puede condensar y organizar nuestro código, haciéndolo más legible y mantenible. Las matrices pueden contener cualquier [tipo de datos](./understanding-data-types.html), incluidos [números](./understanding-data-types.html#numbers), [cadenas](./understanding-data-types.html#strings) y [objetos](./understanding-data-types.html#objects).

Para demostrar cómo pueden resultar útiles las matrices, considere asignar los cinco océanos del mundo a sus propias variables.

📃 oceans.js
```js
// Assign the five oceans to five variables
const ocean1 = "Pacific";
const ocean2 = "Atlantic";
const ocean3 = "Indian";
const ocean4 = "Arctic";
const ocean5 = "Antarctic";
```

Este método es muy detallado y rápidamente puede volverse difícil de mantener y seguir.

Usando matrices, podemos simplificar nuestros datos.

📃 oceans.js
```js
let oceans = [
	"Pacific",
	"Atlantic",
	"Indian",
	"Arctic",
	"Antarctic",
];
```

En lugar de crear cinco variables separadas, ahora tenemos una variable que contiene los cinco elementos. Usamos corchetes - `[]` - para crear una matriz.

Para acceder a un elemento específico, agregue su índice a la variable.


```js
// Print out the first item of the oceans array
oceans[0];
```

```sh
Output
Pacific
```

En este tutorial, aprenderemos cómo crear matrices; cómo están indexados; cómo agregar, modificar, eliminar o acceder a elementos en una matriz; y cómo recorrer matrices.

## Creando una Matriz

Hay dos formas de crear una matriz en JavaScript:

- El literal de matriz, que utiliza corchetes.
- El constructor de la matriz, que utiliza la palabra clave `new`.

Demostremos cómo crear una matriz de especies de tiburones usando el literal de matriz, que se inicializa con `[]`.


📃 sharks.js
```js
// Initialize array of shark species with array literal
let sharks = [
	"Hammerhead",
	"Great White",
	"Tiger",
];
```


Ahora aquí están los mismos datos creados con el constructor de matriz, que se inicializa con `new Array()`.


📃 sharks.js
```js
// Initialize array of shark species with array constructor
let sharks = new Array(
	"Hammerhead",
	"Great White",
	"Tiger",
);
```


Ambos métodos crearán una matriz. Sin embargo, el método literal de matriz (corchetes) es mucho más común y preferido, ya que el método constructor `new Array()` puede tener inconsistencias y resultados inesperados. Es útil conocer este constructor de matriz en caso de que lo encuentre en el futuro.

Podemos imprimir una matriz completa, que se mostrará igual que nuestra entrada.

```js
// Print out the entire sharks array
sharks;
```

```sh
Output
[ 'Hammerhead', 'Great White', 'Tiger' ]
```

Las matrices se utilizan a menudo para agrupar listas de tipos de datos similares, pero técnicamente pueden contener cualquier valor o una combinación de valores, incluidas otras matrices.


```js
// Initialize array of mixed datatypes
let mixedData = [
	"String",
	null,
	7,
	[
		"another",
		"array",
	],
];
```

Después de crear una matriz, podemos manipularla de muchas maneras, pero primero debemos entender cómo se indexan las matrices.

:::warning Nota
Es posible que vea el último elemento de una matriz con o sin una coma final. Esto se conoce como [coma final](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas). Es común verlos omitidos, pero en general se prefiere incluirlos en su código, ya que esto hace que las diferencias de control de versiones sean más claras y facilita agregar y eliminar elementos sin errores. Tenga en cuenta que las comas finales no están permitidas en [archivos JSON](https://www.digitalocean.com/community/tutorials/an-introduction-to-json).
:::

## Indexing Arrays