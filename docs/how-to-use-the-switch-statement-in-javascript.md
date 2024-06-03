# Cómo Utilizar la Declaración Switch en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript)
:::

## Introducción

Las declaraciones condicionales se encuentran entre las características más útiles y comunes de todos los lenguajes de programación. [Cómo Escribir Declaraciones Condicionales en JavaScript](./how-to-write-conditional-statements-in-javascript.html) describe cómo usar las palabras clave `if`, `else` y `else if` para controlar el flujo de un programa en función de varias condiciones, que en JavaScript suelen ser el resultado de la entrada del usuario.

Además de `if...else`, JavaScript tiene una característica conocida como declaración `switch`. Un cambio es un tipo de declaración condicional que evaluará una expresión frente a múltiples casos posibles y ejecutará uno o más bloques de código en función de los casos coincidentes. La declaración `switch` está estrechamente relacionada con una declaración condicional que contiene muchos bloques `else if` y, a menudo, se pueden usar indistintamente.

En este tutorial, aprenderemos cómo usar la declaración `switch`, así como también cómo usar las palabras clave relacionadas `case`, `break` y `default`. Finalmente, veremos cómo usar múltiples casos en una declaración `switch`.

## Switch

La declaración `switch` evalúa una expresión y ejecuta código como resultado de un caso coincidente. La sintaxis básica es similar a la de una declaración `if`. Siempre se escribirá con `switch(){}`, con paréntesis que contienen la expresión que se va a probar y llaves que contienen el código potencial a ejecutar.

A continuación se muestra un ejemplo de una declaración `switch` con dos declaraciones `case` y un recurso alternativo conocido como `default`.



```js
switch (expression) {
  case x:
    // execute case x code block
    break;
  case y:
	// execute case y code block
	break;
  default:
	// execute default code block
}
```

Siguiendo la lógica del bloque de código anterior, lo siguiente es la secuencia de eventos que tendrán lugar:

- Se evalúa la expresión.
- El primer `case`, `x`, se comparará con la expresión. Si coincide, el código se ejecutará y la palabra clave `break` finalizará el bloque `switch`.
- Si no coincide, se omitirá `x` y el caso `y` se comparará con la expresión. Si `y` coincide con la expresión, el código se ejecutará y saldrá del bloque `switch`.
- Si ninguno de los casos coincide, se ejecutará el bloque de código `default`.

Let’s make a working example of a switch statement following the syntax above. In this code block, we will find the current day of the week with the new Date() method, and getDay() to print a number corresponding to the current day. 0 stands for Sunday, all the way through 6 which stands for Saturday. We’ll start by setting up our variable.





