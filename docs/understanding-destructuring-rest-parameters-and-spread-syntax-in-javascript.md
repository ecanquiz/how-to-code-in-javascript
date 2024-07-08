# Comprender Sintaxis de Desestructuración, Parámetros de Resto y Propagación en JavaScript
:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript)
:::


## Introducción

Desde la [Edición 2015](https://262.ecma-international.org/6.0/) de la especificación ECMAScript, se han puesto a disposición del lenguaje [JavaScript](/intro.html) muchas funciones nuevas para trabajar con [matrices](./understanding-arrays-in-javascript.html) y [objetos](./understanding-objects-in-javascript.html). Algunos de los más importantes que aprenderá en este artículo son la sintaxis de _desestructuración_, _parámetros de resto_ y _propagación_. Estas características proporcionan formas más directas de acceder a los miembros de una matriz o de un objeto y pueden hacer que trabajar con estas estructuras de datos sea más rápido y conciso.

Muchos otros lenguajes no tienen una sintaxis correspondiente para desestructurar, parámetros de resto y propagación, por lo que estas características pueden tener una curva de aprendizaje tanto para los nuevos desarrolladores de JavaScript como para aquellos que vienen de otro lenguaje. En este artículo, aprenderá cómo desestructurar objetos y matrices, cómo usar el operador de propagación para desempaquetar objetos y matrices, y cómo usar parámetros de resto en llamadas a funciones.

## Desestructuración

La _asignación de desestructuración_ es una sintaxis que le permite asignar propiedades de objetos o elementos de una matriz como variables. Esto puede reducir en gran medida las líneas de código necesarias para manipular datos en estas estructuras. Hay dos tipos de desestructuración: desestructuración de Objetos y desestructuración de Matrices.

### Desestructuración de Objetos

La desestructuración de objetos le permite crear nuevas [variables](./understanding-variables-scope-and-hoisting.html#comprender-las-variables) utilizando una propiedad de objeto como valor.

Considere este ejemplo, un objeto que representa una nota con un `id`, `title` y `date`:


```js
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
}
```

Tradicionalmente, si quisieras crear una nueva variable para cada propiedad, tendrías que asignar cada variable individualmente, con mucha repetición:


```js
// Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date
```


Con la desestructuración de objetos, todo esto se puede hacer en una sola línea. Al rodear cada variable entre llaves `{}`, JavaScript creará nuevas variables a partir de cada propiedad con el mismo nombre:


```js
// Destructure properties into variables
const { id, title, date } = note
```

Ahora, [`console.log()`](./how-to-use-the-js-dev-console.html#trabajando-en-la-consola) las nuevas variables:


```js
console.log(id)
console.log(title)
console.log(date)
```

Obtendrá los valores de propiedad originales como resultado:


```sh
Output
1
My first note
01/01/1970
```


:::info Nota
La desestructuración de un objeto no modifica el objeto original. Aún puedes llamar al `note` original con todas sus entradas intactas.
:::

La asignación predeterminada para la desestructuración de objetos crea nuevas variables con el mismo nombre que la propiedad del objeto. Si no desea que la nueva variable tenga el mismo nombre que el nombre de la propiedad, también tiene la opción de cambiar el nombre de la nueva variable usando dos puntos (`:`) para decidir un nuevo nombre, como se ve con `noteId` en la siguiente:


```js
// Assign a custom name to a destructured value
const { id: noteId, title, date } = note
```

Registre la nueva variable `noteId` en la consola:


```js
console.log(noteId)
```

Recibirá el siguiente resultado:


```sh
Output
1
```

También puede desestructurar valores de objetos anidados. Por ejemplo, actualice el objeto `note` para que tenga un objeto `author` anidado:



```js
const note = {
  id: 1,
  title: 'My first note',
  date: '01/01/1970',
  author: {
    firstName: 'Sherlock',
    lastName: 'Holmes',
  },
}
```


Ahora puede desestructurar `note`, luego desestructurarla una vez más para crear variables a partir de las propiedades de `author`:


```js
// Destructure nested properties
const {
  id,
  title,
  date,
  author: { firstName, lastName },
} = note
```


A continuación, registre las nuevas variables `firstName` y `lastName` usando [literales de plantilla](./how-to-work-with-strings-in-javascript.html#concatenacion-de-cadenas):


```js
console.log(`${firstName} ${lastName}`)
```

Esto dará el siguiente resultado:


```sh
Output
Sherlock Holmes
```


Tenga en cuenta que en este ejemplo, aunque tiene acceso al contenido del objeto `author`, el objeto `author` en sí no es accesible. Para acceder a un objeto y a sus valores anidados, deberá declararlos por separado:


```js
// Access object and nested values
const {
  author,
  author: { firstName, lastName },
} = note

console.log(author)
```

Este código generará el objeto de `author`:


```sh
Output
{firstName: "Sherlock", lastName: "Holmes"}
```


Deestructurar un objeto no sólo es útil para reducir la cantidad de código que hay que escribir; también le permite orientar su acceso a las propiedades que le interesan.


Finalmente, la desestructuración se puede utilizar para acceder a las propiedades del objeto de los valores primitivos. Por ejemplo, [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) es un objeto global para cadenas y tiene una propiedad `length`:


```js
const { length } = 'A string'
```


Esto encontrará la propiedad de longitud inherente de una cadena y la igualará a la variable `length`. Registre `length` para ver si esto funcionó:


```js
console.log(length)
```

Obtendrá el siguiente resultado:


```sh
Output
8
```

La cadena `A string` se convirtió implícitamente en un objeto aquí para recuperar la propiedad `length`.


### Array Destructuring



