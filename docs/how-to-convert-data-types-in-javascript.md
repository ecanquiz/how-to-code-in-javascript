# Cómo Convertir Tipos de Datos en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-convert-data-types-in-javascript)
:::

## Introducción

En JavaScript, [los tipos de datos](./understanding-data-types.html) se utilizan para clasificar un tipo particular de datos, determinando los valores que puede asignar al tipo y las operaciones que puede realizar con él.

Aunque debido a la [coerción de tipos](./how-to-convert-data-types-in-javascript.html#conversion-implicita), JavaScript convertirá automáticamente muchos valores, a menudo es una buena práctica convertir valores manualmente entre tipos para lograr los resultados esperados.

Este tutorial lo guiará a través de la conversión de los tipos de datos primitivos de JavaScript, incluidos números, cadenas y Booleanos.

## Conversión Implícita

Como lenguaje de programación, JavaScript es muy tolerante con valores inesperados. Debido a esto, JavaScript intentará convertir valores inesperados en lugar de rechazarlos por completo. Esta conversión implícita se conoce como coerción de tipo.

Algunos métodos convertirán valores automáticamente para poder utilizarlos. El [método `alert()`](https://www.w3schools.com/jsref/met_win_alert.asp) toma una cadena como parámetro, pero convertirá automáticamente otros tipos en cadenas. Entonces, podemos pasar un valor numérico al método:


```js
alert(8.5);
```

Si ejecutamos la línea anterior, el navegador devolverá un cuadro de diálogo de alerta emergente que muestra el valor `8.5`, excepto que se habrá convertido en una cadena para poder hacerlo.

Al utilizar cadenas que se pueden evaluar en números con [operadores matemáticos](./how-to-do-math-in-javascript-with-operators), encontrará que JavaScript puede manejar los valores convirtiendo implícitamente las cadenas en números, como se muestra en los ejemplos siguientes.


```js
// Subtraction
"15" - "10";
```

```sh
Output
5
```

```js
// Modulo
"15" % "10";
```

```sh
Output
5
```

Sin embargo, no todos los operadores funcionarán como se esperaba. El operador `+` es particularmente problemático ya que puede significar suma o [concatenación de cadenas](./how-to-work-with-strings-in-javascript.html#concatenacion-de-cadenas).


```js
// When working with strings, + stands for concatenation
"2" + "3";
```

```sh
Output
"23"
```

Dado que el operador `+` es multiuso, los valores de cadena de `2` y `3`, a pesar de ser cadenas numéricas, se concatenan con el valor de cadena de `23` en lugar de sumarlos para obtener el número `5`.

Debido a que puede existir ambigüedad y, a veces, provocar resultados inesperados, suele ser mejor convertir explícitamente los tipos de datos en el código tanto como sea posible. Esto ayudará a gestionar las aportaciones de los usuarios y a gestionar los errores.

## Converting Values to Strings
