# Comprender la Fecha y la Hora en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript)
:::

## Introducción

La fecha y la hora son una parte habitual de nuestra vida cotidiana y, por lo tanto, ocupan un lugar destacado en la programación informática. En JavaScript, es posible que tengas que crear un sitio web con un calendario, un horario de trenes o una interfaz para programar citas. Estas aplicaciones deben mostrar horas relevantes según la zona horaria actual del usuario, o realizar cálculos sobre llegadas y salidas o horas de inicio y finalización. Además, es posible que necesite utilizar JavaScript para generar un informe a una hora determinada todos los días o filtrar los restaurantes y establecimientos abiertos actualmente.

Para lograr todos estos objetivos y más, JavaScript viene con el objeto `Date` integrado y métodos relacionados. Este tutorial explicará cómo formatear y usar la fecha y la hora en JavaScript.

## El Objeto de Fecha

El [objeto](./understanding-objects-in-javascript.html) `Date` es un objeto integrado en JavaScript que almacena la fecha y la hora. Proporciona una serie de métodos integrados para formatear y administrar esos datos.

De forma predeterminada, un nueva instancia `Date` sin argumentos proporcionados crea un objeto correspondiente a la fecha y hora actuales. Esto se creará de acuerdo con la configuración del sistema de la computadora actual.

Para demostrar el `Date` de JavaScript, creemos una variable y le asignaremos la fecha actual. Este artículo se escribió el miércoles 18 de octubre en Londres (GMT), por lo que la fecha, hora y zona horaria actuales se representan a continuación.

📃`now.js`
```js
// Set variable to current date and time
const now = new Date();

// View the output
now;
```

```sh
Output
Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)
```

Al observar el resultado, tenemos una cadena de fecha que contiene lo siguiente:

|Día de la Semana|Mes|Día|Año|Hora|Minuto|Segundo|Zona Horaria|
|-|-|-|-|-|-|-|-|
|Wed|Oct|18|2017|12|41|34|GMT+0000 (UTC)|


La fecha y la hora están divididas e impresas de una manera que podemos entender como humanos.

JavaScript, sin embargo, entiende la fecha basándose en una **marca de tiempo** derivado del [tiempo de Unix](https://en.wikipedia.org/wiki/Unix_time#History), que es un valor que consiste en el número de milisegundos que han pasado desde la medianoche del 1 de enero de 1970. Podemos obtener la marca de tiempo con el método `getTime()`.


```js
// Get the current timestamp
now.getTime();
```

```sh
Output
1508330494000
```

The large number that appears in our output for the current timestamp represents the same value as above, October 18th, 2017.
