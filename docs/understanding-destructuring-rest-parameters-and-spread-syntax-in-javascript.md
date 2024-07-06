# Comprender Sintaxis de Desestructuración, Parámetros de Resto y Propagación en JavaScript
:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript)
:::


## Introducción

Desde la [Edición 2015](https://262.ecma-international.org/6.0/) de la especificación ECMAScript, se han puesto a disposición del lenguaje [JavaScript](/intro.html) muchas funciones nuevas para trabajar con [matrices](./understanding-arrays-in-javascript.html) y [objetos](./understanding-objects-in-javascript.html). Algunos de los más importantes que aprenderá en este artículo son la sintaxis de _desestructuración_, _parámetros de resto_ y _propagación_. Estas características proporcionan formas más directas de acceder a los miembros de una matriz o de un objeto y pueden hacer que trabajar con estas estructuras de datos sea más rápido y conciso.

Muchos otros lenguajes no tienen una sintaxis correspondiente para desestructurar, parámetros de resto y propagación, por lo que estas características pueden tener una curva de aprendizaje tanto para los nuevos desarrolladores de JavaScript como para aquellos que vienen de otro lenguaje. En este artículo, aprenderá cómo desestructurar objetos y matrices, cómo usar el operador de propagación para desempaquetar objetos y matrices, y cómo usar parámetros de resto en llamadas a funciones.

## Destructuring