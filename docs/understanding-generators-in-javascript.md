# Comprender Generadores en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript)
:::

## Introducción

En [ECMAScript 2015](https://262.ecma-international.org/6.0/), se introdujeron generadores en el lenguaje JavaScript. Un _generador_ es un proceso que se puede pausar y reanudar y puede generar múltiples valores. Un generador en JavaScript consta de una [función generadora](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), que devuelve un objeto [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) iterable.

Los generadores pueden mantener el estado, proporcionando una forma eficiente de crear iteradores, y son capaces de manejar flujos de datos infinitos, que pueden usarse para implementar un desplazamiento infinito en la interfaz de una aplicación web, para operar con datos de ondas de sonido y más. Además, cuando se usan con [`Promises`](https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js#using-promises-for-concise-asynchronous-programming), los generadores pueden imitar la funcionalidad `async/await`, lo que nos permite manejar [código asincrónico](https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js) de una manera más sencilla y legible. Aunque `async/await` es una forma más frecuente de lidiar con casos de uso asincrónicos simples y comunes, como obtener datos de una API, los generadores tienen características más avanzadas que hacen que valga la pena aprender a usarlos.

En este artículo, cubriremos cómo crear funciones generadoras, cómo iterar sobre objetos `Generator`, la diferencia entre `yield` y `return` dentro de un generador y otros aspectos del trabajo con generadores.


## Funciones Generadoras

Una [función generadora](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) es una función que devuelve un objeto `Generator` y se define mediante la palabra clave `function` seguida de un asterisco (`*`), como se muestra a continuación:


```js
// Generator function declaration
function* generatorFunction() {}
```


Ocasionalmente, verá el asterisco junto al nombre de la función, en lugar de la palabra clave de la función, como `function *generatorFunction()`. Esto funciona igual, pero `función*` es una sintaxis más aceptada.

Las funciones generadoras también se pueden definir en una expresión, como las [funciones](./how-to-define-functions-in-javascript.html) regulares:


```js
// Generator function expression
const generatorFunction = function*() {}
```

Los generadores pueden incluso ser los métodos de un [objeto](./understanding-objects-in-javascript.html) o [clase](./understanding-classes-in-javascript.html):


```js
// Generator as the method of an object
const generatorObj = {
  *generatorMethod() {},
}

// Generator as the method of a class
class GeneratorClass {
  *generatorMethod() {}
}
```


Los ejemplos a lo largo de este artículo utilizarán la sintaxis de declaración de función generadora.


:::info Nota
A diferencia de las funciones normales, los generadores no se pueden construir con la palabra clave `new` ni se pueden usar junto con [funciones de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
:::


Ahora que sabes cómo declarar funciones generadoras, veamos los objetos `Generator` iterables que devuelven.

## Generator Objects








