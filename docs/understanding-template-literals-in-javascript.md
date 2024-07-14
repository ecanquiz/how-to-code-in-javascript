# Comprender Literales de Plantilla en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript)
:::


## Introducción

La [edición 2015 de la especificación ECMAScript (ES6)](https://262.ecma-international.org/6.0/) agregó literales de plantilla al lenguaje JavaScript. Los literales de plantilla son una nueva forma de crear [cadenas en JavaScript](./how-to-work-with-strings-in-javascript.html) que agrega muchas capacidades nuevas y poderosas, como crear cadenas de varias líneas más fácilmente y usar marcadores de posición para incrustar expresiones en una cadena. Además, una característica avanzada llamada literales de plantilla etiquetados le permite realizar operaciones en las expresiones dentro de una cadena. Todas estas capacidades aumentan sus opciones para la manipulación de cadenas como desarrollador, permitiéndole generar cadenas dinámicas que podrían usarse para [URLs](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) o funciones que personalizan [elementos HTML](https://developer.mozilla.org/en-US/docs/Web/HTML).

En este artículo, repasará las diferencias entre cadenas entre comillas simples o dobles y literales de plantilla, repasando las diversas formas de declarar cadenas de diferentes formas, incluidas cadenas de varias líneas y cadenas dinámicas que cambian según el valor de una variable o expresión. Luego aprenderá sobre las plantillas etiquetadas y verá algunos ejemplos del mundo real de proyectos que las utilizan.

## Declarar Cadenas

Esta sección revisará cómo declarar cadenas con comillas simples y dobles, y luego le mostrará cómo hacer lo mismo con los literales de plantilla.

En JavaScript, una cadena se puede escribir con comillas simples (`' '`):


```js
const single = 'Every day is a good day when you paint.'
```

Una cadena también se puede escribir entre comillas dobles (`" "`):


```js
const double = "Be so very light. Be a gentle whisper."
```


No existe una diferencia importante en JavaScript entre cadenas entre comillas simples o dobles, a diferencia de otros lenguajes que pueden permitir la _interpolación_ en un tipo de cadena pero no en el otro. En este contexto, la interpolación se refiere a la evaluación de un comodín como parte dinámica de una cadena.

El uso de cadenas entre comillas simples o dobles se reduce principalmente a preferencias y convenciones personales, pero utilizadas en conjunto, cada tipo de cadena solo necesita [escapar](./how-to-work-with-strings-in-javascript.html#escapar-de-comillas-y-apostrofes-en-cadenas) de su propio tipo de comilla:


```js
// Escaping a single quote in a single-quoted string
const single = '"We don\'t make mistakes. We just have happy accidents." - Bob Ross'

// Escaping a double quote in a double-quoted string
const double = "\"We don't make mistakes. We just have happy accidents.\" - Bob Ross"

console.log(single);
console.log(double);
```


El resultado del método `log()` aquí imprimirá las mismas dos cadenas en la [consola](./how-to-use-the-js-dev-console.html):


```sh
Output
"We don't make mistakes. We just have happy accidents." - Bob Ross
"We don't make mistakes. We just have happy accidents." - Bob Ross
```


Los literales de plantilla, por otro lado, se escriben rodeando la cadena con el carácter de comilla invertida o acento grave (` `` `):


```js
const template = `Find freedom on this canvas.`
```

Ellas no necesitan escapar comillas simples o dobles:


```js
const template = `"We don't make mistakes. We just have happy accidents." - Bob Ross`
```


Sin embargo, todavía necesitan escapar de las comillas invertidas:


```js
const template = `Template literals use the \` character.`
```


Los literales de plantilla pueden hacer todo lo que pueden hacer las cadenas normales, por lo que posiblemente podrías reemplazar todas las cadenas de tu proyecto con ellas y tener la misma funcionalidad. Sin embargo, la convención más común en las bases de código es usar solo literales de plantilla cuando se usan las capacidades adicionales de los literales de plantilla y usar consistentemente comillas simples o dobles para todas las demás cadenas simples. Seguir este estándar hará que su código sea más fácil de leer si lo examina otro desarrollador.

Ahora que ha visto cómo declarar cadenas con comillas simples, comillas dobles y comillas invertidas, puede pasar a la primera ventaja de los literales de plantilla: escribir cadenas de varias líneas.


## Cadenas Multilínea

En esta sección, primero repasará la forma en que se declaraban cadenas con varias líneas antes de ES6 y luego verá cómo los literales de plantilla lo hacen más fácil.

Originalmente, si quisieras escribir una cadena que abarcara varias líneas en tu editor de texto, usarías el [operador de concatenación](./how-to-work-with-strings-in-javascript.html#concatenacion-de-cadenas). Sin embargo, este no siempre fue un proceso sencillo. La siguiente concatenación de cadenas parecía abarcar varias líneas:

```js
const address = 
  'Homer J. Simpson' + 
  '742 Evergreen Terrace' + 
  'Springfield'
```

Esto podría permitirle dividir la cadena en líneas más pequeñas e incluirla en varias líneas en el editor de texto, pero no tiene ningún efecto en la salida de la cadena. En este caso, todas las cadenas estarán en una línea y no estarán separadas por nuevas líneas o espacios. Si registró `address` en la consola, obtendrá lo siguiente:


```sh
Output
Homer J. Simpson742 Evergreen TerraceSpringfield
```

Puede utilizar el carácter de barra invertida (`\`) para continuar la cadena en varias líneas:


```js
const address =
  'Homer J. Simpson\
  742 Evergreen Terrace\
  Springfield'
```


Esto conservará cualquier sangría como espacio en blanco, pero la cadena seguirá estando en una línea en la salida:


```sh
Output
Homer J. Simpson  742 Evergreen Terrace  Springfield
```

Usando el carácter de nueva línea (`\n`), puede crear una verdadera cadena de varias líneas:


```js
const address = 
  'Homer J. Simpson\n' + 
  '742 Evergreen Terrace\n' + 
  'Springfield'
```

Cuando registre en la consola, se mostrará lo siguiente:


```sh
Output
Homer J. Simpson
742 Evergreen Terrace
Springfield
```

Sin embargo, el uso de caracteres de nueva línea para designar cadenas de varias líneas puede resultar contrario a la intuición. Por el contrario, crear una cadena de varias líneas con literales de plantilla puede ser mucho más sencillo. No es necesario concatenar, utilizar caracteres de nueva línea ni barras invertidas. Simplemente presionar `ENTER` y escribir la cadena en varias líneas funciona de forma predeterminada:


```js
const address = `Homer J. Simpson
742 Evergreen Terrace
Springfield`
```


La salida de registrar esto en la consola es la misma que la entrada:


```sh
Output
Homer J. Simpson
742 Evergreen Terrace
Springfield
```


Se conservará cualquier sangría, por lo que es importante no sangrar ninguna línea adicional en la cadena si no lo desea. Por ejemplo, considere lo siguiente:


```js
const address = `Homer J. Simpson
                 742 Evergreen Terrace
                 Springfield`
```

Aunque este estilo de escritura de la línea puede hacer que el código sea más legible para los humanos, el resultado no será:


```sh
Output
Homer J. Simpson
                 742 Evergreen Terrace
                 Springfield
```


Una vez cubiertas las cadenas de varias líneas, la siguiente sección abordará cómo se interpolan las expresiones en sus valores con las diferentes declaraciones de cadenas.


## Interpolación de Expresiones

En cadenas anteriores a ES6, se usaba la concatenación para crear una cadena dinámica con variables o expresiones:


```js
const method = 'concatenation'
const dynamicString = 'This string is using ' + method + '.'
```

Cuando registre en la consola, esto producirá lo siguiente:


```sh
Output
This string is using concatenation.
```

Con los literales de plantilla, se puede incrustar una expresión en un `marcador de posición`. Un marcador de posición está representado por `${}`, todo lo que esté dentro de las llaves se trata como JavaScript y todo lo que está fuera de las llaves se trata como una cadena:


```js
const method = 'interpolation'
const dynamicString = `This string is using ${method}.`
```

Cuando `dynamicString` se registra en la consola, la consola mostrará lo siguiente:


```sh
Output
This string is using interpolation.
```

Un ejemplo común de incrustación de valores en una cadena podría ser la creación de URL dinámicas. Con la concatenación, esto puede resultar engorroso. Por ejemplo, lo siguiente declara una [función](./how-to-define-functions-in-javascript.html) para generar una cadena de acceso [OAuth](https://datatracker.ietf.org/doc/html/rfc6749):


```js
function createOAuthString(host, clientId, scope) {
  return host + '/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope
}

createOAuthString('https://github.com', 'abc123', 'repo,user')
```

Al registrar esta función se obtendrá la siguiente URL a la consola:


```sh
Output
https://github.com/login/oauth/authorize?client_id=abc123&scope=repo,user
```

Al utilizar la interpolación de cadenas, ya no es necesario realizar un seguimiento de las cadenas de apertura y cierre ni de la ubicación del operador de concatenación. Aquí está el mismo ejemplo con literales de plantilla:


```js
function createOAuthString(host, clientId, scope) {
  return `${host}/login/oauth/authorize?client_id=${clientId}&scope=${scope}`
}

createOAuthString('https://github.com', 'abc123', 'repo,user')
```

Esto tendrá el mismo resultado que el ejemplo de concatenación:


```sh
Output
https://github.com/login/oauth/authorize?client_id=abc123&scope=repo,user
```

También puede utilizar el [método `trim()`](./how-to-index-split-and-manipulate-strings-in-javascript.html#recortar-espacios-en-blanco) en un literal de plantilla para eliminar cualquier espacio en blanco al principio o al final de la cadena. Por ejemplo, lo siguiente utiliza una [función de flecha](./how-to-define-functions-in-javascript.html#funciones-de-flecha) para crear un [elemento `<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) HTML con un enlace personalizado:


```js
const menuItem = (url, link) =>
  `
<li>
  <a href="${url}">${link}</a>
</li>
`.trim()

menuItem('https://google.com', 'Google')
```


Se eliminarán todos los espacios en blanco del resultado, asegurando que el elemento se represente correctamente:


```sh
Output
<li>
  <a href="https://google.com">Google</a>
</li>
```

Se pueden interpolar expresiones enteras, no sólo variables, como en este ejemplo de la suma de dos números:


```js
const sum = (x, y) => x + y
const x = 5
const y = 100
const string = `The sum of ${x} and ${y} is ${sum(x, y)}.`

console.log(string)
```


Este código define la función `sum` y las variables `x` e `y`, luego usa tanto la función como las variables en una cadena. El resultado registrado mostrará lo siguiente:


```sh
Output
The sum of 5 and 100 is 105.
```

Esto puede resultar particularmente útil con [operadores ternarios](./how-to-write-conditional-statements-in-javascript.html#operador-ternario), que permiten condicionales dentro de una cadena:


```js
const age = 19
const message = `You can ${age < 21 ? 'not' : ''} view this page`
console.log(message)
```

El mensaje registrado aquí cambiará dependiendo de si el valor de `age` es mayor o menor de `21` años. Dado que en este ejemplo es `19`, se registrará el siguiente resultado:


```sh
Output
You can not view this page
```

Ahora tiene una idea de cómo los literales de plantilla pueden resultar útiles cuando se utilizan para interpolar expresiones. La siguiente sección llevará esto un paso más allá al examinar los literales de plantilla etiquetados para trabajar con las expresiones pasadas a los marcadores de posición.


## Tagged Template Literals


