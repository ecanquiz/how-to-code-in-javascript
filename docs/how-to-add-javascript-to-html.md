# Cómo agregar JavaScript a HTML

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)
:::

## Introducción

JavaScript, también abreviado como JS, es un lenguaje de programación utilizado en el desarrollo web. Como una de las tecnologías centrales de la web junto con HTML y CSS, JavaScript se utiliza para hacer que las páginas web sean interactivas y crear aplicaciones web. Los navegadores web modernos, que cumplen con estándares de visualización comunes, admiten JavaScript a través de motores integrados sin necesidad de complementos adicionales.

Cuando se trabaja con archivos para la web, es necesario cargar JavaScript y ejecutarlo junto con el marcado HTML. Esto se puede hacer en línea dentro de un documento HTML o en un archivo separado que el navegador descargará junto con el documento HTML.

Este tutorial explicará cómo incorporar JavaScript en sus archivos web, tanto en línea en un documento HTML como en un archivo separado.

## Agregar JavaScript a un Documento HTML

Puede agregar código JavaScript en un documento HTML empleando la dedicada etiqueta HTML `<script>` que envuelve el código JavaScript.

La etiqueta `<script>` se puede colocar en la sección `<head>` de su HTML o en la sección `<body>`, dependiendo de cuándo desee que se cargue JavaScript.

Generalmente, el código JavaScript puede ir dentro de la sección `<head>` del documento para mantenerlo contenido y fuera del contenido principal de su documento HTML.

Sin embargo, si su script necesita ejecutarse en un punto determinado dentro del diseño de una página (como cuando usa `document.write` para generar contenido), debe colocarlo en el punto donde debe llamarse, generalmente dentro de la sección `<body>`.

Consideremos el siguiente documento HTML en blanco con el título del navegador `Today's Date`:

📃./index.html
```html
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
</head>
 
<body>
 
</body>
 
</html>
```

En este momento, este archivo solo contiene marcado HTML. Digamos que nos gustaría agregar el siguiente código JavaScript al documento:


```js
let d = new Date();
alert("Today's date is " + d);
```

Esto permitirá que la página web muestre una alerta con la fecha actual independientemente de cuándo el usuario cargue el sitio.

Para lograr esto, agregaremos una etiqueta `<script>` junto con algún código JavaScript al archivo HTML.

Para empezar, agregaremos el código JavaScript entre las etiquetas `<head>`, indicando al navegador que ejecute el script JavaScript antes de cargar el resto de la página. Podemos agregar JavaScript debajo de las etiquetas `<title>`, por ejemplo, como se muestra a continuación:


📃./index.html
```html{8,9,10,11}
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
    <script>
        let d = new Date();
        alert("Today's date is " + d);
    </script>
</head>
 
<body>
 
</body>
 
 
 
</html>
```

Una vez que cargues la página, recibirás una alerta similar a esta:

![how-to-add-javascript-to-html](./img/how-to-add-javascript-to-html-1.png)

Si estuviéramos modificando lo que se muestra en el cuerpo del HTML, necesitaríamos implementarlo después de la sección `<head>` para que se muestre en la página, como en el siguiente ejemplo:

📃./index.html
```html{14}
<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Today's Date</title>
</head>
 
<body>
  
  <script>
      let d = new Date();
      document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
  </script>
 
</body>
 
</html>
```

El resultado del documento HTML anterior cargado a través de un navegador web sería similar al siguiente:

![how-to-add-javascript-to-html](./img/how-to-add-javascript-to-html-2.png)

Los scripts que son pequeños o que se ejecutan solo en una página pueden funcionar bien dentro de un archivo HTML, pero para scripts más grandes o scripts que se usarán en muchas páginas, no es una solución muy efectiva porque incluirlos puede resultar difícil de manejar o de leer. y entender. En la siguiente sección, veremos cómo manejar un archivo JavaScript separado en su documento HTML.

## Working with a Separate JavaScript File

