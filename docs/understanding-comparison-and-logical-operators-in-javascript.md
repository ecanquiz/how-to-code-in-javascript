# Comprender los Operadores Lógicos y de Comparación en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-comparison-and-logical-operators-in-javascript)
:::

## Introducción

El campo de la informática tiene muchos fundamentos en la lógica matemática. Si está familiarizado con la lógica, sabrá que implica tablas de verdad, álgebra Booleana y comparaciones para determinar la igualdad o la diferencia.

El lenguaje de programación JavaScript utiliza operadores para evaluar declaraciones que pueden ayudar en el flujo de control dentro de la programación.

En este tutorial, repasaremos los operadores lógicos. Estos se usan comúnmente con declaraciones condicionales y las palabras clave `if`, `else` y `else if`, así como con el operador ternario. Si primero está interesado en obtener más información sobre las declaraciones condicionales, consulte [Cómo Escribir Declaraciones Condicionales en JavaScript](./how-to-write-conditional-statements-in-javascript.html).


## Operadores de Comparación

En JavaScript, hay una serie de operadores de comparación que puede utilizar para evaluar si los valores dados son diferentes o iguales, así como si un valor es mayor o menor que otro. A menudo, estos operadores se utilizan con valores almacenados en [variables](./understanding-variables-scope-and-hoisting.html#comprender-las-variables).


Todos los operadores de comparación devuelven un [valor Booleano (lógico)](./understanding-data-types.html#booleans) de `true` o `false`.

La siguiente tabla resume los operadores de comparación disponibles en JavaScript.

|Operador|Qué significa|
|-|-|
|`==`|Igual a|
|`!=`|No igual a|
|`===`|Estrictamente igual a, sin conversión de tipo|
|`!==`|Estrictamente desigual sin conversión de tipo|
|`>`|Mayor que|
|`>=`|Mayor que o igual a|
|`<`|Menor que|
|`<=`|Menor que o igual a|

Veamos cada operador en detalle.

## Equality

