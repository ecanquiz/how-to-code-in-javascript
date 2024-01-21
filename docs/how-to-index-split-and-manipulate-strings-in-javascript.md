# Cómo Indexar, Dividir y Manipular Cadenas en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript)
:::

## Introducción

Una **cadena** es una secuencia de uno o más caracteres que pueden consistir en letras, números o símbolos. Se puede acceder a cada carácter de una cadena de JavaScript mediante un número de índice, y todas las cadenas tienen métodos y propiedades disponibles.

En este tutorial, aprenderemos la diferencia entre las primitivas de cadena y el objeto `String`, cómo se indexan las cadenas, cómo acceder a los caracteres de una cadena y las propiedades y métodos comunes utilizados en las cadenas.

## Primitivas de Cadena y Objetos de Cadena

Primero, aclararemos los dos tipos de cadenas. JavaScript diferencia entre la **cadena primitiva**, un tipo de datos inmutable y el objeto `String`.

Para probar la diferencia entre las dos, inicializaremos una cadena primitiva y un objeto de cadena.

```js
// Initializing a new string primitive
const stringPrimitive = "A new string.";

// Initializing a new String object
const stringObject = new String("A new string."); 
```

Podemos usar el operador `typeof` para determinar el tipo de un valor. En el primer ejemplo, simplemente asignamos una cadena a una variable.


```js
typeof stringPrimitive;
```

```sh
Output
string
```

En el segundo ejemplo, usamos `new String()` para crear un objeto de cadena y asignarlo a una variable.

```js
typeof stringObject;
```

```sh
Output
object
```

La mayor parte del tiempo creará primitivas de cadena. JavaScript puede acceder y utilizar las propiedades y métodos integrados del contenedor de objetos `String` sin cambiar realmente la cadena primitiva que ha creado en un objeto.

Si bien este concepto resulta un poco desafiante al principio, debes tener en cuenta la distinción entre primitivo y objeto. Esencialmente, hay métodos y propiedades disponibles para todas las cadenas y, en segundo plano, JavaScript realizará una conversión a objeto y volverá a primitivo cada vez que se llame a un método o propiedad.

## Cómo se Indexan las Cadenas

Cada uno de los caracteres de una cadena corresponde a un número de índice, comenzando por `0`.

Para demostrarlo, crearemos una cadena con el valor `How are you?`.

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th style="text-align:center">H</th>
        <th style="text-align:center">o</th>
        <th style="text-align:center">w</th>
        <th style="text-align:center"></th>
        <th style="text-align:center">a</th>
        <th style="text-align:center">r</th>
        <th style="text-align:center">e</th>
        <th style="text-align:center"></th>
        <th style="text-align:center">y</th>
        <th style="text-align:center">o</th>
        <th style="text-align:center">u</th>
        <th style="text-align:center">?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center">0</td>
        <td style="text-align:center">1</td>
        <td style="text-align:center">2</td>
        <td style="text-align:center">3</td>
        <td style="text-align:center">4</td>
        <td style="text-align:center">5</td>
        <td style="text-align:center">6</td>
        <td style="text-align:center">7</td>
        <td style="text-align:center">8</td>
        <td style="text-align:center">9</td>
        <td style="text-align:center">10</td>
        <td style="text-align:center">11</td>
      </tr>
    </tbody>
  </table>
</div>

El primer carácter de la cadena es `H`, que corresponde al índice `0`. El último carácter es `?`, que corresponde a `11`. Los espacios en blanco también tienen un índice, en `3` y `7`.

Ser capaz de acceder a todos los caracteres de una cadena nos brinda varias formas de trabajar y manipular cadenas.

## Accessing Characters
