# Comprender Map y Set  de Objetos en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript)
:::

## Introducción

En JavaScript, los desarrolladores suelen dedicar mucho tiempo a decidir la estructura de datos correcta a utilizar. Esto se debe a que elegir la estructura de datos correcta puede facilitar la manipulación de esos datos en el futuro, ahorrando tiempo y haciendo que el código sea más fácil de comprender. Las dos estructuras de datos predominantes para almacenar colecciones de datos son [Objetos](./understanding-objects-in-javascript.html) y [Arrays](./understanding-arrays-in-javascript.html) (un tipo de objeto). Los desarrolladores utilizan objetos para almacenar pares clave/valor y matrices para almacenar listas indexadas. Sin embargo, para brindar a los desarrolladores más flexibilidad, la especificación ECMAScript 2015 introdujo dos nuevos tipos de objetos iterables: _Mapṣ_, que son colecciones ordenadas de pares clave/valor, y _Sets_, que son colecciones de valores únicos.

En este artículo, repasará los objetos Map y Set, qué los hace similares o diferentes a Objects y Arrays, las propiedades y métodos disponibles para ellos y ejemplos de algunos usos prácticos. 

## Maps
