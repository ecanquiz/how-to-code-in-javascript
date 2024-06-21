# Comprender Generadores en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript)
:::

## Introducción

En [ECMAScript 2015](https://262.ecma-international.org/6.0/), se introdujeron generadores en el lenguaje JavaScript. Un _generador_ es un proceso que se puede pausar y reanudar y puede generar múltiples valores. Un generador en JavaScript consta de una [función generadora](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), que devuelve un objeto [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) iterable.

Los generadores pueden mantener el estado, proporcionando una forma eficiente de crear iteradores, y son capaces de manejar flujos de datos infinitos, que pueden usarse para implementar un desplazamiento infinito en la interfaz de una aplicación web, para operar con datos de ondas de sonido y más. Además, cuando se usan con [`Promises`](https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js#using-promises-for-concise-asynchronous-programming), los generadores pueden imitar la funcionalidad `async/await`, lo que nos permite manejar [código asincrónico](https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js) de una manera más sencilla y legible. Aunque `async/await` es una forma más frecuente de lidiar con casos de uso asincrónicos simples y comunes, como obtener datos de una API, los generadores tienen características más avanzadas que hacen que valga la pena aprender a usarlos.

En este artículo, cubriremos cómo crear funciones generadoras, cómo iterar sobre objetos `Generator`, la diferencia entre `yield` y `return` dentro de un generador y otros aspectos del trabajo con generadores.


## Generator Functions

