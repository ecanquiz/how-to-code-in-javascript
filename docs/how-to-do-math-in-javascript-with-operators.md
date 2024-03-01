# Cómo Hacer Matemáticas en JavaScript con Operadores


:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators)
:::

## Introducción

Las operaciones matemáticas se encuentran entre las características más fundamentales y universales de cualquier lenguaje de programación. En JavaScript, los números se utilizan con frecuencia para tareas comunes como encontrar las dimensiones del tamaño de la ventana del navegador, obtener el precio final de una transacción monetaria y calcular la distancia entre elementos en un documento de un sitio web.

Aunque un conocimiento de alto nivel de las matemáticas no es un requisito previo para ser un desarrollador capaz, es importante saber qué tipos de operaciones están disponibles en JavaScript y cómo utilizar las matemáticas como herramienta para realizar tareas prácticas.

A diferencia de otros lenguajes de programación, JavaScript sólo tiene un [tipo de datos numérico](./understanding-data-types.html#numbers); no se hace distinción entre números enteros (números enteros positivos o negativos) y flotantes (números con punto decimal), por ejemplo.

En este tutorial, repasaremos los operadores aritméticos, los operadores de asignación y el orden de las operaciones utilizadas con los tipos de datos numéricos de JavaScript.

## Operadores Aritméticos

Los **operadores aritméticos** son símbolos que indican una operación matemática y devuelven un valor. En la ecuación `3 + 7 = 10`, el `+` es la sintaxis que significa suma.

JavaScript tiene muchos operadores familiares de matemáticas básicas, así como algunos operadores adicionales específicos de programación.

Aquí hay una tabla de referencia de operadores aritméticos de JavaScript.

|Operador|Sintaxis|Ejemplo|Definición|
|-|-|-|-|
|Adición|`+`|`x + y`|Suma de `x` e `y`
|Sustracción|`-`|`x - y`|Resta de `x` e `y`|
|Multiplicación|`*`|`x * y`|Producto de `x` e `y`|
|División|`/`|`x / y`|Cociente de `x` e `y`|
|Módulo|`%`|`x % y`|Resto de `x / y`|
|Exponenciación|`**`|`x ** y`|`x` elevado a `y`|
|Incremento|`++`|`x++`|`x` más uno|
|Decremento|`--`|`x--`|`x` menos uno|

Entraremos en más detalles sobre cada uno de estos operadores a lo largo de este artículo.





## Adición y Sustracción
