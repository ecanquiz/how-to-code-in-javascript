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

## Objetos Generadores

Tradicionalmente, las funciones en JavaScript se ejecutan hasta su finalización y llamar a una función devolverá un valor cuando llegue a la palabra clave `return`. Si se omite la palabra clave `return`, una función devolverá implícitamente `undefined.

En el siguiente código, por ejemplo, declaramos una función `sum()` que devuelve un valor que es la suma de dos argumentos enteros:



```js
// A regular function that sums two values
function sum(a, b) {
  return a + b
}
```

Llamar a la función devuelve un valor que es la suma de los argumentos:



```js
sum(5, 6) // 11
```


Sin embargo, una función generadora no devuelve un valor inmediatamente, sino que devuelve un objeto `Generator` iterable. En el siguiente ejemplo, declaramos una función y le damos un único valor de retorno, como una función estándar:


```js
// Declare a generator function with a single return value
function* generatorFunction() {
  return 'Hello, Generator!'
}
```

Cuando invocamos la función generadora, esta devolverá el objeto [`Generator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), que podemos asignar a una variable:


```js
// Assign the Generator object to generator
const generator = generatorFunction();
```

Si se tratara de una función normal, esperaríamos que `generator` nos diera la cadena devuelta en la función. Sin embargo, lo que realmente obtenemos es un objeto en estado `suspended`. Por lo tanto, llamar al `generator` dará un resultado similar al siguiente:



```sh
Output
generatorFunction {<suspended>}
  __proto__: Generator
  [[GeneratorLocation]]: VM272:1
  [[GeneratorStatus]]: "suspended"
  [[GeneratorFunction]]: ƒ* generatorFunction()
  [[GeneratorReceiver]]: Window
  [[Scopes]]: Scopes[3]
```

El objeto `Generator` devuelto por la función es un [iterador](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol). Un iterador es un objeto que tiene un método `next()` disponible, que se utiliza para iterar a través de una secuencia de valores. El método `next()` devuelve un objeto con las propiedades `value` y `done`. `value` representa el valor devuelto y `done` indica si el iterador ha ejecutado todos sus valores o no.

Sabiendo esto, llamemos a `next()` en nuestro `generator` y obtengamos el valor actual y el estado del iterador:


```js
// Call the next method on the Generator object
generator.next()
```

Esto dará el siguiente resultado:


```sh
Output
{value: "Hello, Generator!", done: true}
```


El valor devuelto al llamar a `next()` es `Hello, Generator!`, y el estado de `done` es `true`, porque este valor proviene de un `return` que cerró el iterador. Dado que el iterador finaliza, el estado de la función generadora cambiará de `suspended` a `close`. Llamar a `generator` nuevamente dará lo siguiente:


```sh
Output
generatorFunction {<closed>}
```

Hasta el momento, solo hemos demostrado cómo una función generadora puede ser una forma más compleja de obtener el valor `return` de una función. Pero las funciones generadoras también tienen características únicas que las distinguen de las funciones normales. En la siguiente sección, aprenderemos sobre el operador `yield` y veremos cómo un generador puede pausar y reanudar la ejecución.

## Operadores `yield`

Los generadores introducen una nueva palabra clave en JavaScript: [`yield`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield). `yield` puede pausar una función generadora y devolver el valor que sigue a `yield`, proporcionando una forma ligera de iterar a través de valores.

En este ejemplo, pausaremos la función generadora tres veces con valores diferentes y devolveremos un valor al final. Luego asignaremos nuestro objeto `Generator` a la variable `generator`.


```js
// Create a generator function with multiple yields
function* generatorFunction() {
  yield 'Neo'
  yield 'Morpheus'
  yield 'Trinity'

  return 'The Oracle'
}

const generator = generatorFunction()
```


Ahora, cuando llamamos a `next()` en la función del generador, se detendrá cada vez que encuentre `yield`. `done` se establecerá en `false` después de cada `yield`, lo que indica que el generador no ha terminado. Una vez que encuentre un `return`, o no se encuentren más `yields` en la función, `done` cambiará a `true` y el generador finalizará.

Utilice el método `next()` cuatro veces seguidas:


```js
// Call next four times
generator.next()
generator.next()
generator.next()
generator.next()
```

Estos darán las siguientes cuatro líneas de salida en orden:


```js
Output
{value: "Neo", done: false}
{value: "Morpheus", done: false}
{value: "Trinity", done: false}
{value: "The Oracle", done: true}
```

Tenga en cuenta que un generador no requiere un `return`; si se omite, la última iteración devolverá `{value: undefined, done: true}`, al igual que cualquier llamada posterior a `next()` después de que se haya completado un generador.



## Iterando Sobre un Generador

Usando el método `next()`, iteramos manualmente a través del objeto `Generator`, recibiendo todo el valor y las propiedades hechas del objeto completo. Sin embargo, al igual que [`Array`](./understanding-arrays-in-javascript.html), [`Map` y `Set`](./understanding-map-and-set-objects-in-javascript.html), un `Generator` sigue el [protocolo de iteración](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) y se puede iterar con [`for...of`](./for-loops-for-of-loops-and-for-in-loops-in-javascript.html):


```js
// Iterate over Generator object
for (const value of generator) {
  console.log(value)
}
```

Esto devolverá lo siguiente:



```js
Output
Neo
Morpheus
Trinity
```

El [operador de propagación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) también se puede utilizar para asignar los valores de un `Generator` a una matriz.


```js
// Create an array from the values of a Generator object
const values = [...generator]

console.log(values)
```

Esto dará la siguiente matriz:


```sh
Output
(3) ["Neo", "Morpheus", "Trinity"]
```

Tanto la propagación como el `for...of` no factorizará el `return` en los valores (en este caso, habría sido `The Oracle`).


:::info Nota
Si bien ambos métodos son efectivos para trabajar con generadores finitos, si un generador está tratando con un flujo de datos infinito, no será posible utilizar propagación o `for...of` directamente sin crear un bucle infinito.
:::




