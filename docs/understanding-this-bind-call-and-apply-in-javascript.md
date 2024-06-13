# Comprender This, Bind, Call y Apply en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/conceptual-articles/understanding-this-bind-call-and-apply-in-javascript)
:::

## Introducción

La palabra clave [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) es un concepto muy importante en JavaScript y también particularmente confuso tanto para los nuevos desarrolladores como para aquellos que tienen experiencia en otros lenguajes de programación. En JavaScript, `this` es una referencia a un objeto. El objeto al que `this` se refiere puede variar, implícitamente en función de si es global, en un objeto o en un constructor, y también puede variar explícitamente en función del uso de los métodos del prototipo `Function`: `bind`, `call` y `apply`.

Aunque `this` es un tema un poco complejo, también aparece tan pronto como comienzas a escribir tus primeros programas JavaScript. Ya sea que esté intentando acceder a un elemento o evento en [el Modelo de Objetos del Documento (DOM)](https://ecanquiz.github.io/understanding-the-dom/), creando clases para escribir en el estilo de programación orientada a objetos o utilizando las propiedades y métodos de objetos normales, encontrará `this`.

En este artículo, aprenderá a qué se refiere `this` implícitamente según el contexto y aprenderá a utilizar los métodos `bind`, `call`, y `apply` para determinar explícitamente el valor de `this`.


## Contexto Implícito

Hay cuatro contextos principales en los que se puede inferir implícitamente el valor de `this`:

- el contexto global
- como método dentro de un objeto
- como constructor de una función o clase
- como controlador de eventos DOM

## Global

En el contexto global, `this` se refiere al [objeto global](https://developer.mozilla.org/en-US/docs/Glossary/Global_object). Cuando estás trabajando en un navegador, el contexto global sería `window`. Cuando trabajas en Node.js, el contexto global es `global`.


:::info Nota
Si aún no está familiarizado con el concepto de alcance en JavaScript, consulte [Comprender Variables, Alcance y Elevación en JavaScript](./understanding-variables-scope-and-hoisting.html).
:::

Para los ejemplos, practicará el código en la consola de herramientas de desarrollo del navegador. Lea [Cómo Utilizar la Consola para Desarrolladores de JavaScript](./how-to-use-the-js-dev-console.html) si no está familiarizado con la ejecución de código JavaScript en el navegador.

Si registra el valor de `this` sin ningún otro código, verá a qué objeto se refiere `this`.


```js
console.log(this)
```

```sh
Output
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

Puede ver que `this` es `window`, que es el objeto global de un navegador.


En [Comprender Variables, Alcance y Elevación en JavaScript](./understanding-variables-scope-and-hoisting.html), aprendió que las funciones tienen su propio contexto para las variables. Podría sentirse tentado a pensar que `this` seguiría las mismas reglas dentro de una función, pero no es así. Una función de nivel superior aún conservará la referencia `this` del objeto global.

Escribe una función de nivel superior, o una función que no está asociada con ningún objeto, como esta:


```js
function printThis() {
  console.log(this)
}

printThis()
```

```sh
Output
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
```

Incluso dentro de una función, `this` todavía se refiere a `window` u objeto global.

Sin embargo, cuando se utiliza el [modo estricto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), el contexto de `this` dentro de una función en el contexto global estará `undefined`.


```js
'use strict'

function printThis() {
  console.log(this)
}

printThis()
```

```sh
Output
undefined
```

Generalmente, es más seguro utilizar el modo estricto para reducir la probabilidad de que tenga un alcance inesperado. Rara vez alguien querrá referirse al objeto `window` usando `this`.

>Para obtener más información sobre el modo estricto y los cambios que realiza con respecto a errores y seguridad, lea la documentación del [Modo Estricto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) en MDN.


### An Object Method


