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

Los operadores de **adición** y **sustracción** están disponibles en JavaScript y se pueden usar para encontrar la suma y resta de valores numéricos. JavaScript tiene una calculadora incorporada y las operaciones matemáticas se pueden realizar directamente en la consola.

Podemos hacer algunas sumas simples con números, por ejemplo sumando `10` y `20`, usando el signo más (`+`).


```js
10 + 20;
```

```sh
Output
30
```

Además de hacer matemáticas con números simples, también podemos asignar números a variables y realizar los mismos cálculos. En este caso, asignaremos los valores numéricos a `x` e `y` y colocaremos la suma en `z`.


```js
// Assign values to x and y
let x = 10;
let y = 20;

// Add x and y and assign the sum to z
let z = x + y;

console.log(z);
```

```sh
Output
30
```

De manera similar, usamos el signo menos (`-`) para restar números o variables que representan números.


```js
// Assign values to x and y
let x = 10;
let y = 20;

// Subtract x from y and assign the difference to z
let z = y - x;

console.log(z);
```

```sh
Output
10
```


También podemos sumar y restar con números negativos y flotantes (decimales).


```js
// Assign values to x and y
let x = -5.2;
let y = 2.5;

// Subtract y from x and assign the difference to z
let z = x - y;

console.log(z);
```


```sh
Output
-7.7
```


Una cosa interesante a tener en cuenta y a tener en cuenta en JavaScript es el resultado de sumar un número y una [cadena](./how-to-work-with-strings-in-javascript.html). Sabemos que `1 + 1` debería ser igual a `2`, pero esta ecuación tendrá resultados inesperados.



```js
let x = 1 + "1";

console.log(x);
typeof x;
```


```sh
Output
11
'string'
```

En lugar de sumar los dos números, JavaScript convertirá la declaración completa en una cadena y los [concatenará](./how-to-work-with-strings-in-javascript.html#concatenacion-de-cadenas). Es importante tener cuidado con la naturaleza de tipo dinámico de JavaScript, ya que puede tener resultados no deseados.

Una razón común para usar la suma o resta en JavaScript sería desplazarse hasta una identificación menos la altura en píxeles de una barra de navegación fija.


```js
function scrollToId() {
	const navHeight = 60;
	window.scrollTo(0, window.pageYOffset - navHeight);
}

window.addEventListener('hashchange', scrollToId);
```

En el ejemplo anterior, al hacer clic en una identificación, se desplazará a 60 píxeles por encima de la identificación.

La suma y la resta son dos de las ecuaciones matemáticas más comunes que utilizarás en JavaScript.


## Multiplication and Division
