# Cómo Trabajar con JSON en JavaScript

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript)
:::


## Introducción

Debido a que JSON se deriva del lenguaje de programación JavaScript, es una opción natural usarlo como formato de datos en JavaScript. JSON, abreviatura de JavaScript Object Notation, normalmente se pronuncia como el nombre "Jason".

Para obtener más información sobre JSON en términos generales, lea el tutorial "[Introducción a JSON](./an-introduction-to-json)".

Para comenzar a pensar en dónde puede usar JSON en sus programas JavaScript, algunos casos de uso generales de JSON incluyen:

- Almacenamiento de datos
- Generar estructuras de datos a partir de la entrada del usuario.
- Transferir datos de servidor a cliente, de cliente a servidor y de servidor a servidor
- Configurar y verificar datos

Este tutorial le proporcionará una introducción a cómo trabajar con JSON en JavaScript. Para aprovechar al máximo esta introducción, debe estar familiarizado con el lenguaje de programación JavaScript.


## Formato JSON

El formato JSON se deriva de la sintaxis de objetos de JavaScript, pero está completamente basado en texto. Es un formato de datos clave-valor que normalmente se representa entre llaves.

Cuando trabaja con JSON, probablemente verá objetos JSON en un archivo `.json`, pero también pueden existir como un objeto JSON o una cadena dentro del contexto de un programa. Lea más sobre la [sintaxis y la estructura aquí](./an-introduction-to-json).

📃`sammy.json`
```json
{ 
  "first_name"  :  "Sammy", 
  "last_name"   :  "Shark", 
  "online"      :  true 
}
```

Si, en cambio, tienes un objeto JSON en un archivo `.js` o `.html`, probablemente lo verás configurado en una variable:


```js
var sammy = { 
  "first_name"  :  "Sammy", 
  "last_name"   :  "Shark", 
  "online"      :  true 
}
```


Además, es posible que vea JSON como una cadena en lugar de un objeto dentro del contexto de un archivo de programa o secuencia de comandos JavaScript. En este caso, también podrás verlo todo en una sola línea:


```js
var sammy = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';
```

Convertir objetos JSON en cadenas puede resultar especialmente útil para transportar datos de forma rápida.

Hemos repasado el formato general de JSON y cómo puede esperar verlo como un archivo `.json` o dentro de JavaScript como un objeto o una cadena.


## Comparison to JavaScript Object
