# Comprender Map y Set  de Objetos en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript)
:::

## Introducción

En JavaScript, los desarrolladores suelen dedicar mucho tiempo a decidir la estructura de datos correcta a utilizar. Esto se debe a que elegir la estructura de datos correcta puede facilitar la manipulación de esos datos en el futuro, ahorrando tiempo y haciendo que el código sea más fácil de comprender. Las dos estructuras de datos predominantes para almacenar colecciones de datos son [Objetos](./understanding-objects-in-javascript.html) y [Arrays](./understanding-arrays-in-javascript.html) (un tipo de objeto). Los desarrolladores utilizan objetos para almacenar pares clave/valor y matrices para almacenar listas indexadas. Sin embargo, para brindar a los desarrolladores más flexibilidad, la especificación ECMAScript 2015 introdujo dos nuevos tipos de objetos iterables: _Mapṣ_, que son colecciones ordenadas de pares clave/valor, y _Sets_, que son colecciones de valores únicos.

En este artículo, repasará los objetos Map y Set, qué los hace similares o diferentes a Objects y Arrays, las propiedades y métodos disponibles para ellos y ejemplos de algunos usos prácticos. 

## Maps

Un _Map_ es una colección de pares clave/valor que puede utilizar cualquier [tipo de datos](./understanding-data-types.html) como clave y puede mantener el orden de sus entradas. Los _Maps_ tienen elementos tanto de _Objects_ (una colección única de pares clave/valor) como de _Arrays_ (una colección ordenada), pero conceptualmente son más similares a los _Objects_. Esto se debe a que, aunque el tamaño y el orden de las entradas se conservan como un _Array_, las entradas en sí son pares clave/valor como los _Objects_.

Los _Maps_ se pueden inicializar con sintaxis `new Map()`:


```js
const map = new Map()
```

Esto nos da un _Map_ vacío:


```sh
Output
Map(0) {}
```

### Agregar Valores a un _Map_

Puede agregar valores a un _Map_ con el método `set()`. El primer argumento será la clave y el segundo argumento será el valor.

Lo siguiente agrega tres pares clave/valor al `map`:


```js
map.set('firstName', 'Luke')
map.set('lastName', 'Skywalker')
map.set('occupation', 'Jedi Knight')
```

Aquí comenzamos a ver cómo los `_Map_s` tienen elementos tanto de _Objects_ como de _Arrays_. Al igual que un _Array_, tenemos una colección indexada a cero y también podemos ver cuántos elementos hay en el `_Map_` de forma predeterminada. Los `_Map_s` usan la sintaxis `=>` para indicar pares clave/valor como `key => value`:


```sh
Output
Map(3)
0: {"firstName" => "Luke"}
1: {"lastName" => "Skywalker"}
2: {"occupation" => "Jedi Knight"}
```

Este ejemplo es similar a un objeto normal con claves basadas en cadenas, pero podemos usar cualquier tipo de datos como clave con _Maps_.

Además de configurar valores manualmente en un _Map_, también podemos inicializar un _Map_ con valores. Hacemos esto usando una _Array_ de _Arrays_ que contiene dos elementos, cada uno de los cuales es un par clave/valor, que se ve así:


```js
[ [ 'key1', 'value1'], ['key2', 'value2'] ]
```


Usando la siguiente sintaxis, podemos recrear el mismo _Map_:


```js
const map = new Map([
  ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['occupation', 'Jedi Knight'],
])
```

:::info Nota
Este ejemplo utiliza _comas finales_, también conocidas como _comas colgantes_. Esta es una práctica de formato de JavaScript en la que el elemento final de una serie al declarar una colección de datos tiene una coma al final. Aunque esta opción de formato se puede utilizar para obtener diferencias más limpias y facilitar la manipulación del código, utilizarla o no es una cuestión de preferencia. Para obtener más información sobre las comas finales, consulte este [artículo de las Comas Finales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) de los documentos web de MDN.
:::

Por cierto, esta sintaxis es la misma que el resultado de llamar a [`Object.entries()`](./how-to-use-object-methods-in-javascript.html#object-entries) en un _Object_.  Esto proporciona una forma preparada para convertir un _Object_ en un _Map_, como se muestra en el siguiente bloque de código:


```js
const luke = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  occupation: 'Jedi Knight',
}

const map = new Map(Object.entries(luke))
```

Alternativamente, puedes convertir un _Map_ nuevamente en un _Object_ o una _Array_ con una sola línea de código.

Lo siguiente convierte un _Map_ en un _Object_:


```js
const obj = Object.fromEntries(map)
```

Esto dará como resultado el siguiente valor de `obj`:


```sh
Output
{firstName: "Luke", lastName: "Skywalker", occupation: "Jedi Knight"}
```

Ahora, convertimos un _Map_ en un _Array_:


```js
const arr = Array.from(map)
```

Esto dará como resultado el siguiente _Array_ para `arr`:


```sh
Output
[ ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['occupation', 'Jedi Knight'] ]
```

### Map Keys



