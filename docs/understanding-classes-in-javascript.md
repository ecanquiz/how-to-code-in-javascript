# Comprender las Clases en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
:::

## Introducción

JavaScript es un lenguaje basado en prototipos y cada objeto en JavaScript tiene una propiedad interna oculta llamada `[[Prototype]]` que se puede usar para ampliar las propiedades y métodos del objeto. Puede leer más sobre prototipos en nuestro tutorial [Comprensión de Prototipos y Herencia en JavaScript](./understanding-prototypes-and-inheritance-in-javascript.html).

Hasta hace poco, los desarrolladores laboriosos utilizaban [funciones constructoras](./understanding-prototypes-and-inheritance-in-javascript.html#funciones-constructoras) para imitar un patrón de diseño orientado a objetos en JavaScript. La especificación del lenguaje ECMAScript 2015, a menudo denominada ES6, introdujo clases en el lenguaje JavaScript. Las clases en JavaScript en realidad no ofrecen funcionalidad adicional y, a menudo, se describen como que proporcionan "azúcar sintáctico" sobre los prototipos y la herencia, ya que ofrecen una sintaxis más limpia y elegante. Debido a que otros lenguajes de programación usan clases, la sintaxis de clases en JavaScript hace que sea más sencillo para los desarrolladores moverse entre idiomas.

## Las Clases Son Funciones

Una clase de JavaScript es un tipo de función. Las clases se declaran con la palabra clave `class`. Usaremos la sintaxis de expresión de función para inicializar una función y la sintaxis de expresión de clase para inicializar una clase.



```js
// Initializing a function with a function expression
const x = function() {}
```

```js
// Initializing a class with a class expression
const y = class {}
```

Podemos acceder al `[[Prototype]]` de un objeto usando el método [`Object.getPrototypeOf()`](./understanding-prototypes-and-inheritance-in-javascript.html#prototipos-de-javascript). Usemos eso para probar la **función** vacía que creamos.


```js
Object.getPrototypeOf(x);
```

```sh
Output
ƒ () { [native code] }
```


También podemos usar ese método en la **clase** que acabamos de crear.


```js
Object.getPrototypeOf(y);
```

```sh
Output
ƒ () { [native code] }
```

El código declarado con `function` y `class` devuelve una función `[[Prototype]]`. Con los prototipos, cualquier función puede convertirse en una instancia de constructor utilizando la palabra clave `new`.



```js
const x = function() {}

// Initialize a constructor from a function
const constructorFromFunction = new x();

console.log(constructorFromFunction);
```

```sh
Output
x {}
constructor: ƒ ()
```


Esto también se aplica a las clases.



```js
const y = class {}

// Initialize a constructor from a class
const constructorFromClass = new y();

console.log(constructorFromClass);
```


```sh
Output
y {}
constructor: class
```


Estos ejemplos de constructores de prototipos están vacíos, pero podemos ver cómo debajo de la sintaxis, ambos métodos logran el mismo resultado final.


## Defining a Class
