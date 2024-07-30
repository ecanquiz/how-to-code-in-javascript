# Comprender Event Loop, Callbacks, Promises, y Async/Await en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)
:::


## Introducción

En los primeros tiempos de Internet, los sitios web solían constar de datos estáticos en una [página HTML](https://www.digitalocean.com/community/tutorial-series/how-to-build-a-website-with-html). Pero ahora que las aplicaciones web se han vuelto más interactivas y dinámicas, se ha vuelto cada vez más necesario realizar operaciones intensivas, como realizar solicitudes de red externas para recuperar datos de [API](https://developer.mozilla.org/en-US/docs/Glossary/API). Para manejar estas operaciones en JavaScript, un desarrollador debe utilizar técnicas de _programación asincrónica_.

Dado que JavaScript es un lenguaje de programación _de un solo hilo_ con un modelo de ejecución _sincrónica_ que procesa una operación tras otra, solo puede procesar una instrucción a la vez. Sin embargo, una acción como solicitar datos de una API puede llevar una cantidad de tiempo indeterminada, según el tamaño de los datos solicitados, la velocidad de la conexión de red y otros factores. Si las llamadas a la API se realizaran de manera sincrónica, el navegador no podría manejar ninguna entrada del usuario, como desplazarse o hacer clic en un botón, hasta que se complete esa operación. Esto se conoce como _bloqueo_.

Para evitar el comportamiento de bloqueo, el entorno del navegador tiene muchas API web a las que JavaScript puede acceder que son _asincrónicas_, lo que significa que pueden ejecutarse en paralelo con otras operaciones en lugar de secuencialmente. Esto es útil porque permite al usuario continuar usando el navegador normalmente mientras se procesan las operaciones asincrónicas.

Como desarrollador de JavaScript, debe saber cómo trabajar con API web asincrónicas y manejar la respuesta o el error de esas operaciones. En este artículo, aprenderá sobre el bucle de eventos, la forma original de lidiar con el comportamiento asincrónico a través de devoluciones de llamadas, la incorporación actualizada de promesas en [ECMAScript 2015](https://262.ecma-international.org/6.0/) y la práctica moderna de usar `async/await`.


:::info Nota
Este artículo se centra en JavaScript del lado del cliente en el entorno del navegador. Los mismos conceptos son generalmente válidos en el entorno de [Node.js](https://nodejs.org/en), sin embargo, Node.js utiliza sus propias [C++ API](https://nodejs.org/api/) en lugar de las [Web API](https://developer.mozilla.org/en-US/docs/Web/API) del navegador. Para obtener más información sobre la programación asincrónica en Node.js, consulte [Cómo Escribir Código Asincrónico en Node.js](https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js).
:::

## El Bucle Event

En esta sección se explicará cómo JavaScript maneja el código asincrónico con el bucle de eventos. Primero se mostrará una demostración del bucle de eventos en funcionamiento y luego se explicarán los dos elementos del bucle de eventos: la pila y la cola.

El código JavaScript que no utiliza ninguna API web asincrónica se ejecutará de manera sincrónica, una a la vez, de manera secuencial. Esto se demuestra con este código de ejemplo que llama a tres funciones, cada una de las cuales imprime un número en la [consola](./how-to-use-the-js-dev-console.html):


```js
// Define three example functions
function first() {
  console.log(1)
}

function second() {
  console.log(2)
}

function third() {
  console.log(3)
}
```

En este código, se definen tres funciones que imprimen números con `console.log()`.

A continuación, se escriben las llamadas a las funciones:


```js
// Execute the functions
first()
second()
third()
```

La salida se basará en el orden en que se llamaron las funciones—`first()`, `second()` y luego `third()`:


```sh
Output
1
2
3
```


Cuando se utiliza una API web asincrónica, las reglas se vuelven más complicadas. Una API integrada con la que puedes probar esto es `setTimeout`, que establece un temporizador y realiza una acción después de un período de tiempo específico. `setTimeout` debe ser asincrónico, de lo contrario, todo el navegador permanecería congelado durante la espera, lo que daría como resultado una mala experiencia de usuario.

Agrega `setTimeout` a la función `second` para simular una solicitud asincrónica:


```js
// Define three example functions, but one of them contains asynchronous code
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}
```

`setTimeout` toma dos argumentos: la función que se ejecutará de forma asincrónica y la cantidad de tiempo que esperará antes de llamar a esa función. En este código, envolviste `console.log` en una función anónima y la pasaste a `setTimeout`, luego configuraste la función para que se ejecute después de `0` milisegundos.

Ahora llama a las funciones, como lo hiciste antes:


```js
// Execute the functions
first()
second()
third()
```

Se podría esperar que con un `setTimeout` establecido en `0`, la ejecución de estas tres funciones dé como resultado que los números se impriman en orden secuencial. Pero debido a que es asincrónico, la función con el tiempo de espera se imprimirá en último lugar:


```sh
Output
1
3
2
```


No habrá diferencia alguna si establece el tiempo de espera en cero segundos o cinco minutos—el `console.log` llamado por el código asincrónico se ejecutará después de las funciones de nivel superior sincrónicas. Esto sucede porque el entorno de host de JavaScript, en este caso el navegador, utiliza un concepto llamado _bucle de eventos_ para manejar la concurrencia o eventos paralelos. Dado que JavaScript solo puede ejecutar una instrucción a la vez, necesita que el bucle de eventos esté informado de cuándo ejecutar qué instrucción específica. El bucle de eventos maneja esto con los conceptos de una _pila_ y una _cola_.


### Pila

La _pila_, o pila de llamadas, contiene el estado de la función que se está ejecutando en ese momento. Si no estás familiarizado con el concepto de pila, puedes imaginarla como una [matriz](./understanding-arrays-in-javascript.html) con propiedades de último en entrar, primero en salir (LIFO, “Last in, first out”), lo que significa que solo puedes agregar o quitar elementos del final de la pila. JavaScript ejecutará el _marco_ actual (o la llamada de función en un entorno específico) en la pila, luego lo eliminará y pasará al siguiente.

Para el ejemplo que solo contiene código sincrónico, el navegador maneja la ejecución en el siguiente orden:

- Agrega `first()` a la pila, ejecuta `first()` que registra `1` en la consola, elimina `first()` de la pila.
- Agrega `second()` a la pila, ejecuta `second()` que registra `2` en la consola, elimina `second()` de la pila.
- Agrega `third()` a la pila, ejecuta `third()` que registra `3` en la consola, elimina `third()` de la pila.

El segundo ejemplo con `setTimeout` se ve así:

- Agrega `first()` a la pila, ejecuta `first()` que registra `1` en la consola, elimina `first()` de la pila.
- Agrega `second()` a la pila, ejecuta `second()`.
  - Agrega `setTimeout()` a la pila, ejecute la API Web `setTimeout()` que inicia un temporizador y agrega la función anónima a la cola, elimina `setTimeout()` de la pila.
- Elimina `second()` de la pila.
- Agrega `third()` a la pila, ejecuta `third()` que registra `3` en la consola, elimina `third()` de la pila.
- El bucle de eventos verifica la cola en busca de mensajes pendientes y encuentra la función anónima de `setTimeout()`, agrega la función a la pila que registra `2` en la consola y luego la elimina de la pila.

El uso de `setTimeout`, una API Web asincrónica, presenta el concepto de cola, que este tutorial cubrirá a continuación.

### Cola

La _cola_, también conocida como cola de mensajes o cola de tareas, es un área de espera para funciones. Siempre que la pila de llamadas esté vacía, el bucle de eventos comprobará la cola en busca de mensajes en espera, comenzando por el mensaje más antiguo. Una vez que encuentre uno, lo agregará a la pila, que ejecutará la función en el mensaje.

En el ejemplo `setTimeout`, la función anónima se ejecuta inmediatamente después del resto de la ejecución de nivel superior, ya que el temporizador se estableció en `0` segundos. Es importante recordar que el temporizador no significa que el código se ejecutará exactamente en `0` segundos o en el tiempo especificado, sino que agregará la función anónima a la cola en ese lapso de tiempo. Este sistema de cola existe porque si el temporizador agregara la función anónima directamente a la pila cuando finaliza, interrumpiría cualquier función que se esté ejecutando en ese momento, lo que podría tener efectos no deseados e impredecibles.

:::info Nota
También hay otra cola llamada cola de trabajos o cola de microtareas que maneja promesas. Las microtareas como las promesas se manejan con mayor prioridad que las macrotareas como `setTimeout`.
:::

Ahora ya sabe cómo el bucle de eventos utiliza la pila y la cola para manejar el orden de ejecución del código. La siguiente tarea es averiguar cómo controlar el orden de ejecución en su código. Para ello, primero aprenderá sobre la forma original de garantizar que el bucle de eventos maneje correctamente el código asincrónico: las funciones de devolución de llamada.

## Funciones de Devolución de Llamada

En el ejemplo `setTimeout`, la función con el tiempo de espera se ejecutó después de todo lo que se encontraba en el contexto de ejecución principal de nivel superior. Pero si desea asegurarse de que una de las funciones, como la función `third` , se ejecutara después del tiempo de espera, entonces tendría que usar métodos de codificación asincrónica. El tiempo de espera aquí puede representar una llamada API asincrónica que contiene datos. Desea trabajar con los datos de la llamada API, pero debe asegurarse de que los datos se devuelvan primero.

La solución original para tratar este problema es usar _funciones de devolución de llamada_. Las funciones de devolución de llamada no tienen una sintaxis especial; son simplemente una función que se ha pasado como argumento a otra función. La función que toma otra función como argumento se denomina _función de orden superior_. Según esta definición, cualquier función puede convertirse en una función de devolución de llamada si se pasa como argumento. Las devoluciones de llamada no son asincrónicas por naturaleza, pero se pueden utilizar para fines asincrónicos.

A continuación se muestra un ejemplo de código sintáctico de una función de orden superior y una devolución de llamada:


```js
// A function
function fn() {
  console.log('Just a function')
}

// A function that takes another function as an argument
function higherOrderFunction(callback) {
  // When you call a function that is passed as an argument, it is referred to as a callback
  callback()
}

// Passing a function
higherOrderFunction(fn)
```


En este código, se define una función `fn`, se define una función `higherOrderFunction` que toma un `callback` de función como argumento y se pasa `fn` como una devolución de llamada a `higherOrderFunction`.

Si se ejecuta este código, se obtendrá lo siguiente:


```sh
Output
Just a function
```


Volvamos a las funciones `first`, `second` y `third` con `setTimeout`. Esto es lo que tienes hasta ahora:


```js
function first() {
  console.log(1)
}

function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}
```

La tarea consiste en lograr que la función `third` siempre retrase la ejecución hasta que se haya completado la acción asincrónica en la función `second`. Aquí es donde entran en juego las devoluciones de llamadas. En lugar de ejecutar `first`, `second` y `third` en el nivel superior de ejecución, pasará la función `third` como argumento a `second`. La función `second` ejecutará la devolución de llamada después de que se haya completado la acción asincrónica.

A continuación, se muestran las tres funciones con una devolución de llamada aplicada:


```js
// Define three functions
function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2)

    // Execute the callback function
    callback()
  }, 0)
}

function third() {
  console.log(3)
}
```

Ahora, ejecute `first` y `second`, luego pase `third` como argumento a `second`:


```js
first()
second(third)
```

Después de ejecutar este bloque de código, recibirá el siguiente resultado:


```sh
Output
1
2
3
```

Primero se imprimirá `1` y, una vez que se complete el temporizador (en este caso, cero segundos, pero puede cambiarlo a cualquier cantidad), imprimirá `2` y luego `3`. Al pasar una función como devolución de llamada, ha retrasado con éxito la ejecución de la función hasta que se complete la API Web asincrónica (`setTimeout`).

La conclusión clave aquí es que las funciones de devolución de llamada no son asincrónicas—`setTimeout` es la API Web asincrónica responsable de gestionar las tareas asincrónicas. La devolución de llamada solo le permite recibir información sobre cuándo se ha completado una tarea asincrónica y gestiona el éxito o el fracaso de la tarea.

Ahora que ha aprendido a utilizar las devoluciones de llamadas para gestionar tareas asincrónicas, la siguiente sección explica los problemas de anidar demasiadas devoluciones de llamadas y crear una "pirámide de la perdición".

## Devoluciones de Llamada anidadas y la Pirámide de la Perdición

Las funciones de devolución de llamadas son una forma eficaz de garantizar la ejecución retrasada de una función hasta que otra se complete y regrese con datos. Sin embargo, debido a la naturaleza anidada de las devoluciones de llamadas, el código puede terminar volviéndose desordenado si tiene muchas solicitudes asincrónicas consecutivas que dependen unas de otras. Esto fue una gran frustración para los desarrolladores de JavaScript al principio y, como resultado, el código que contiene devoluciones de llamadas anidadas a menudo se denomina la "pirámide de la perdición" o "el infierno de las devoluciones de llamadas".

A continuación, se muestra una demostración de devoluciones de llamadas anidadas:


```js
function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1)
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
      }, 500)
    }, 2000)
  }, 1000)
}
```

En este código, cada nuevo `setTimeout` se anida dentro de una función de orden superior, lo que crea una forma piramidal de devoluciones de llamadas cada vez más profundas. Al ejecutar este código, obtendríamos lo siguiente:


```sh
Output
1
2
3
```

En la práctica, con el código asincrónico del mundo real, esto puede volverse mucho más complicado. Lo más probable es que necesites manejar errores en código asincrónico y luego pasar algunos datos de cada respuesta a la siguiente solicitud. Hacer esto con devoluciones de llamadas hará que tu código sea difícil de leer y mantener.

A continuación, se muestra un ejemplo ejecutable de una “pirámide de la perdición” más realista con la que puedes experimentar:


```js
// Example asynchronous function
function asynchronousRequest(args, callback) {
  // Throw an error if no arguments are passed
  if (!args) {
    return callback(new Error('Whoa! Something went wrong.'))
  } else {
    return setTimeout(
      // Just adding in a random number so it seems like the contrived asynchronous function
      // returned different data
      () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
      500,
    )
  }
}

// Nested asynchronous requests
function callbackHell() {
  asynchronousRequest('First', function first(error, response) {
    if (error) {
      console.log(error)
      return
    }
    console.log(response.body)
    asynchronousRequest('Second', function second(error, response) {
      if (error) {
        console.log(error)
        return
      }
      console.log(response.body)
      asynchronousRequest(null, function third(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
      })
    })
  })
}

// Execute 
callbackHell()
```


En este código, debes hacer que cada función tenga en cuenta un posible `response` y un posible `error`, lo que hace que la función `callbackHell` sea visualmente confusa.

Si ejecutas este código, obtendrás lo siguiente:


```sh
Output

First 9
Second 3
Error: Whoa! Something went wrong.
    at asynchronousRequest (<anonymous>:4:21)
    at second (<anonymous>:29:7)
    at <anonymous>:9:13
```

Esta forma de manejar el código asincrónico es difícil de seguir. Por ello, en ES6 se introdujo el concepto de _promesas_. Este es el tema central de la siguiente sección.

## Promesas

Una _promesa_ representa la finalización de una función asincrónica. Es un objeto que podría devolver un valor en el futuro. Cumple el mismo objetivo básico que una función de devolución de llamada, pero con muchas características adicionales y una sintaxis más legible. Como desarrollador de JavaScript, es probable que pase más tiempo consumiendo promesas que creándolas, ya que generalmente son las API web asincrónicas las que devuelven una promesa para que el desarrollador la consuma. Este tutorial le mostrará cómo hacer ambas cosas.

### Creando una Promesa

Puede inicializar una promesa con la sintaxis `new Promise` y debe inicializarla con una función. La función que se pasa a una promesa tiene los parámetros `resolve` y `reject`. Las funciones `resolve` y `reject` manejan el éxito y el fracaso de una operación, respectivamente.

Escriba la siguiente línea para declarar una promesa:



```js
// Initialize a promise
const promise = new Promise((resolve, reject) => {})
```

Si inspecciona la promesa inicializada en este estado con la consola de su navegador web, encontrará que tiene un estado `pending` y un valor `undefined`:



```sh
Output
__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined
```


Hasta ahora, no se ha configurado nada para la promesa, por lo que permanecerá en un estado `pending` para siempre. Lo primero que puede hacer para probar una promesa es cumplirla resolviéndola con un valor:


```js
const promise = new Promise((resolve, reject) => {
  resolve('We did it!')
})
```


Ahora, al inspeccionar la promesa, encontrará que tiene un estado `fulfilled` y un `value` establecido en el valor que pasó para `resolve`:


```sh
Output
__proto__: Promise
[[PromiseStatus]]: "fulfilled"
[[PromiseValue]]: "We did it!"
```

Como se indicó al principio de esta sección, una promesa es un objeto que puede devolver un valor. Después de cumplirse correctamente, el `value` pasa de `undefined` a estar lleno de datos.

Una promesa puede tener tres estados posibles: _pending_, _fulfilled_ y _rejected_.

- **_Pending_** - (Pendiente) Estado inicial antes de ser resuelta o rechazada
- **_Fulfilled_** - (Cumplida) Operación exitosa, la promesa se resolvió
- **_Rejected_** - (Rechazada) Operación fallida, la promesa se rechazó

Después de ser cumplida o rechazada, una promesa se liquida.

Ahora que tiene una idea de cómo se crean las promesas, veamos cómo un desarrollador puede consumirlas.

### Consumiendo una Promesa

La promesa de la última sección se ha cumplido con un valor, pero también quieres poder acceder a ese valor. Las promesas tienen un método llamado `then` que se ejecutará después de que una promesa alcance `resolve` en el código. `then` devolverá el valor de la promesa como parámetro.

Así es como devolverías y registrarías el `value` de la promesa de ejemplo:


```js
promise.then((response) => {
  console.log(response)
})
```

La promesa que creaste tenía un `[[PromiseValue]]` de `We did it!`. Este valor es el que se pasará a la función anónima como `response`:


```sh
Output
We did it!
```

Hasta ahora, el ejemplo que creaste no involucraba una API Web asincrónica — solo explicaba cómo crear, resolver y consumir una promesa de JavaScript nativa. Con `setTimeout`, puedes probar una solicitud asincrónica.

El siguiente código simula los datos devueltos de una solicitud asincrónica como una promesa:


```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
})

// Log the result
promise.then((response) => {
  console.log(response)
})
```

El uso de la sintaxis `then` garantiza que el `response` se registrará solo cuando la operación `setTimeout` se complete después de `2000` milisegundos. Todo esto se hace sin anidar devoluciones de llamadas.

Ahora, después de dos segundos, resolverá el valor de la promesa y se registrará en `then`:


```sh
Output
Resolving an asynchronous request!
```

Las promesas también se pueden encadenar para pasar datos a más de una operación asincrónica. Si se devuelve un valor en `then`, se puede agregar otro `then` que cumpla con el valor de retorno del `then` anterior:


```js
// Chain a promise
promise
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + ' And chaining!'
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })
```

La respuesta cumplida en el segundo `then` registrará el valor de retorno:


```sh
Output
Resolving an asynchronous request! And chaining!
```

Dado que `then` se puede encadenar, permite que el consumo de promesas parezca más sincrónico que las devoluciones de llamadas, ya que no necesitan estar anidadas. Esto permitirá un código más legible que se pueda mantener y verificar más fácilmente.


### Error Handling



