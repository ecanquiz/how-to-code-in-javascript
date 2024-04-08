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

## Creating an Array