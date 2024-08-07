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


### Manejo de Errores

Hasta ahora, solo ha manejado una promesa con una `resolve` exitosa, que pone la promesa en un estado `fulfilled`. Pero con frecuencia con una solicitud asincrónica también tiene que manejar un error — si la API está inactiva o se envía una solicitud mal formada o no autorizada. Una promesa debería poder manejar ambos casos. En esta sección, creará una función para probar tanto el caso de éxito como el de error de la creación y el consumo de una promesa.

Esta función `getUsers` pasará un indicador a una promesa y devolverá la promesa:


```js
function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
    }, 1000)
  })
}
```

Configura el código de modo que si `onSuccess` es `true`, el tiempo de espera se cumplirá con algunos datos. Si es `false`, la función rechazará la operación con un error:


```js{5,6,7,8,9,10,11,12,13}
function getUsers(onSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Handle resolve and reject in the asynchronous API
      if (onSuccess) {
        resolve([
          {id: 1, name: 'Jerry'},
          {id: 2, name: 'Elaine'},
          {id: 3, name: 'George'},
        ])
      } else {
        reject('Failed to fetch data!')
      }
    }, 1000)
  })
}
```

Para obtener un resultado satisfactorio, se devuelven [objetos JavaScript](./understanding-objects-in-javascript.html) que representan datos de usuario de muestra.

Para manejar el error, utilizará el método de instancia `catch`. Esto le proporcionará una devolución de llamada de error con `error` como parámetro.

Ejecute el comando `getUser` con `onSuccess` establecido en `false`, utilizando el método `then` para el caso de éxito y el método `catch` para el error:


```js
// Run the getUsers function with the false flag to trigger an error
getUsers(false)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
```

Dado que se desencadenó el error, se omitirá el `then` y el `catch` manejará el error:


```sh
Output
Failed to fetch data!
```


Si cambia la bandera y `resolve` en su lugar, se ignorará `catch` y los datos regresarán en su lugar:


```js
// Run the getUsers function with the true flag to resolve successfully
getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
```

Esto proporcionará los datos del usuario:


```sh
Output
(3) [{…}, {…}, {…}]
0: {id: 1, name: "Jerry"}
1: {id: 2, name: "Elaine"}
3: {id: 3, name: "George"}
```

Como referencia, aquí hay una tabla con los métodos de manejo sobre objetos `Promise`:

|Método|Descripción|
|-|-|
|`then()`|Maneja un `resolve`. Devuelve una promesa y llama a la función `onFulfilled` de forma asincrónica.|
|`catch()`|Maneja un `reject`. Devuelve una promesa y llama a la función `onRejected` de forma asincrónica.|
|`finally()`|Se llama cuando se cumple una promesa. Devuelve una promesa y llama a la función `onFinally` de forma asincrónica.|

Las promesas pueden ser confusas, tanto para los nuevos desarrolladores como para los programadores experimentados que nunca han trabajado en un entorno asincrónico. Sin embargo, como se mencionó, es mucho más común consumir promesas que crearlas. Por lo general, la API Web de un navegador o una biblioteca de terceros proporcionará la promesa y solo es necesario consumirla.

En la sección final de promesas, este tutorial citará un caso de uso común de una API Web que devuelve promesas: [la API Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).


### Usando la API Fetch con Promesas

Una de las API Web más útiles y utilizadas que devuelve una promesa es la API Fetch, que permite realizar una solicitud de recursos asincrónica a través de una red. `fetch` es un proceso de dos partes y, por lo tanto, requiere encadenar `then`. Este ejemplo demuestra cómo acceder a la API de GitHub para obtener los datos de un usuario y, al mismo tiempo, gestionar cualquier error potencial:


```js
// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
```

La solicitud `fetch` se envía a la URL `https://api.github.com/users/octocat`, que espera una respuesta de forma asincrónica. El primer `then` pasa la respuesta a una función anónima que formatea la respuesta como [datos JSON](./how-to-work-with-json-in-javascript.html) y luego pasa el JSON a un segundo `then` que registra los datos en la consola. La declaración `catch` registra cualquier error en la consola.

Al ejecutar este código, se obtendrá lo siguiente:


```sh
Output
login: "octocat",
id: 583231,
avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4"
blog: "https://github.blog"
company: "@github"
followers: 3203
...
```

Estos son los datos solicitados desde `https://api.github.com/users/octocat`, representados en formato JSON.

Esta sección del tutorial mostró que las promesas incorporan muchas mejoras para manejar código asincrónico. Pero, si bien usar `then` para manejar acciones asincrónicas es más fácil de seguir que la pirámide de devoluciones de llamadas, algunos desarrolladores aún prefieren un formato sincrónico para escribir código asincrónico. Para abordar esta necesidad, [ECMAScript 2016 (ES7)](https://262.ecma-international.org/7.0/index.html) introdujo funciones `async` y la palabra clave `await` para facilitar el trabajo con promesas.

## Funciones Asincrónicas con `async/await`

Una _función `async`_ le permite manejar código asincrónico de una manera que parezca sincrónica. Las funciones `async` aún usan promesas en segundo plano, pero tienen una sintaxis de JavaScript más tradicional. En esta sección, probará ejemplos de esta sintaxis.

Puede crear una función `async` agregando la palabra clave `async` antes de una función:



```js
// Create an async function
async function getUser() {
  return {}
}
```

Aunque esta función aún no maneja nada asincrónico, se comporta de manera diferente a una función tradicional. Si ejecuta la función, verá que devuelve una promesa con un `[[PromiseStatus]]` y `[[PromiseValue]]` en lugar de un valor de retorno.

Pruebe esto registrando una llamada a la función `getUser`:


```js
console.log(getUser())
```

Esto dará como resultado lo siguiente:


```sh
Output
__proto__: Promise
[[PromiseStatus]]: "fulfilled"
[[PromiseValue]]: Object
```

Esto significa que puedes manejar una función `async` con `then` de la misma manera que manejarías una promesa. Prueba esto con el siguiente código:


```js
getUser().then((response) => console.log(response))
```


Esto llamada a `getUser` pasa el valor de retorno a una función anónima que registra el valor en la consola.

Recibirá lo siguiente cuando ejecute este programa:


```sh
Output
{}
```


Una función `async` puede manejar una promesa llamada dentro de ella usando el operador `await`. `await` se puede usar dentro de una función `async` y esperará hasta que se cumpla una promesa antes de ejecutar el código designado.

Con este conocimiento, puede reescribir la solicitud Fetch de la última sección usando `async`/`await` de la siguiente manera:


```js
// Handle fetch with async/await
async function getUser() {
  const response = await fetch('https://api.github.com/users/octocat')
  const data = await response.json()

  console.log(data)
}

// Execute async function
getUser()
```


Los operadores `await` aquí garantizan que `data` no se registre antes de que la solicitud se haya llenado con datos.

Ahora, la `data` final se pueden manejar dentro de la función `getUser`, sin necesidad de usar `then`. Este es el resultado del registro de `data`:


```sh
Output
login: "octocat",
id: 583231,
avatar_url: "https://avatars3.githubusercontent.com/u/583231?v=4"
blog: "https://github.blog"
company: "@github"
followers: 3203
...
```

:::info Nota
En muchos entornos, es necesario `async` para usar `await` — sin embargo, algunas versiones nuevas de navegadores y Node permiten usar `await` de nivel superior, lo que permite evitar la creación de una función asíncrona para envolver `await`.
:::

Por último, dado que estás manejando la promesa cumplida dentro de la función asincrónica, también puedes manejar el error dentro de la función. En lugar de usar el método `catch` con `then`, usarás el patrón [`try`/`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) para manejar la excepción.

Agrega el siguiente código resaltado:


```js{3,9,11,12}
// Handling success and errors with async/await
async function getUser() {
  try {
    // Handle success in try
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    // Handle error in catch
    console.error(error)
  }
}
```


El programa ahora saltará al bloque `catch` si recibe un error y registrará ese error en la consola.

El código JavaScript asincrónico moderno se maneja con mayor frecuencia con la sintaxis `async`/`await`, pero es importante tener un conocimiento práctico de cómo funcionan las promesas, especialmente porque las promesas son capaces de ofrecer funciones adicionales que no se pueden manejar con `async`/`await`, como combinar promesas con [`Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).


:::info Nota
`async`/`await` se puede reproducir mediante el uso de [generadores combinados con promesas](./understanding-generators-in-javascript.html#async-await-con-generadores) para agregar más flexibilidad a su código. Para obtener más información, consulte nuestro tutorial [Comprender Generadores en JavaScript](./understanding-generators-in-javascript.html).
:::


## Conclusión

Dado que las API Web suelen proporcionar datos de forma asincrónica, aprender a manejar el resultado de acciones asincrónicas es una parte esencial de ser un desarrollador de JavaScript. En este artículo, aprendiste cómo el entorno _host_ usa el bucle de eventos para manejar el orden de ejecución del código con la pila y la cola. También probaste ejemplos de tres formas de manejar el éxito o el fracaso de un evento asincrónico, con devoluciones de llamadas, promesas y sintaxis `async`/`await`. Finalmente, usaste la API Web Fetch para manejar acciones asincrónicas.

Para obtener más información sobre cómo el navegador maneja eventos paralelos, lee [Modelo de concurrencia y bucle de eventos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)  en Mozilla Developer Network. Si deseas obtener más información sobre JavaScript, vuelve a nuestra serie [Cómo codificar en JavaScript](./intro.html).









