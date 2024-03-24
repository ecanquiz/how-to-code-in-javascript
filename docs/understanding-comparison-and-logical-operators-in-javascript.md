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

## Igualdad

El operador de igualdad mide si los valores a ambos lados del operador son iguales.

Consideremos lo siguiente:


```js
let x = 3;

x == 3;
```

Como `3` es equivalente a `3`, la salida recibida será el valor _Boolean_ de `true`.


```js
Output
true
```

Si, en cambio, probamos si `x` es igual a otro número entero, recibiremos un resultado que indica que la declaración está validada como falsa.


```js
let x = 3;

x == 5;
```


```sh
Output
false
```

Con esta expresión de equivalencia, también puede probar otros tipos de datos, como [strings](./understanding-data-types.html#strings) y [Booleans](./understanding-data-types.html#booleans).

Usaremos un ejemplo de cadena a continuación.


```js
let shark = 'sammy';

shark == 'sammy';
shark == 'taylor';
```


```sh
Output
true
false
```

En primera instancia, la expresión devolvió `true` porque las cadenas eran equivalentes. En el segundo caso, de `shark == 'taylor'`, la expresión devolvió `false` porque las cadenas no eran iguales.

Vale la pena señalar que el operador `==` no es una equivalencia estricta, por lo que _puede_ mezclar números y cadenas que se evalúen como equivalentes. Considere el siguiente ejemplo.


```js
let x = 3;

x == '3';
```


```sh
Output
true
```

Debido a que este operador no es estricto con respecto al tipo de datos, puede permitir a los usuarios ingresar cadenas en lugar de números, por ejemplo. No es necesario convertir tipos de datos para probar la equivalencia.


Hay muchos casos en los que puede utilizar operadores de comparación como el operador `==`. Es posible que desee comprobar la equivalencia al calificar un examen, por ejemplo. De esa forma podrás validar si una respuesta dada es correcta o no.


```js
let answer = 10;
let response = prompt("What is 5 + 5?");

if (answer == response) {
  console.log("You're correct!");
}
```

Aquí, si el estudiante ingresa `10` en respuesta a la pregunta cuando se le solicita, recibirá la respuesta de que está en lo correcto.

Hay muchas aplicaciones potenciales de operadores de comparación en JavaScript y le ayudarán a controlar el flujo de su programa.

Ahora que tienes una base con algunos ejemplos para `==`, seremos un poco más breves en adelante.

## Inequality





