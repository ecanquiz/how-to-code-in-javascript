# Comprender Eventos en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript)
:::


## Introducción

En la serie [Comprensión del DOM](https://ecanquiz.github.io/understanding-the-dom/), analizamos [el árbol DOM](https://ecanquiz.github.io/understanding-the-dom/understanding-the-dom-tree-and-nodes.html) y cómo [acceder](https://ecanquiz.github.io/understanding-the-dom/how-to-access-elements-in-the-dom.html), [recorrer](https://ecanquiz.github.io/understanding-the-dom/how-to-traverse-the-dom.html), [agregar, eliminar](https://ecanquiz.github.io/understanding-the-dom/how-to-make-changes-to-the-dom.html) y [modificar](https://ecanquiz.github.io/understanding-the-dom/how-to-modify-attributes-classes-and-styles-in-the-dom.html) nodos y elementos mediante la [Consola de Herramientas de Desarrollador](./how-to-use-the-js-dev-console.html).

Aunque en este punto ahora podemos realizar casi cualquier cambio que queramos en el DOM, desde la perspectiva del usuario no es muy útil porque solo hemos activado los cambios manualmente. Al aprender sobre eventos, entenderemos cómo unir todo para crear sitios web interactivos.

Los **eventos** son acciones que tienen lugar en el navegador y que pueden ser iniciadas por el usuario o por el propio navegador. A continuación se muestran algunos ejemplos de eventos comunes que pueden ocurrir en un sitio web:

- La página termina de cargarse.
- El usuario hace clic en un botón.
- El usuario pasa el cursor sobre un menú desplegable.
- El usuario envía un formulario.
- El usuario presiona una tecla en su teclado.

Al codificar respuestas de JavaScript que se ejecutan ante un evento, los desarrolladores pueden mostrar mensajes a los usuarios, validar datos, reaccionar al clic de un botón y muchas otras acciones.

En este artículo, repasaremos los controladores de eventos, los detectores de eventos y los objetos de eventos. También repasaremos tres formas diferentes de escribir código para manejar eventos y algunos de los eventos más comunes. Al conocer los eventos, podrá crear una experiencia web más interactiva para los usuarios finales.

## Event Handlers and Event Listeners
