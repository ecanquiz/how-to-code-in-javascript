import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cómo codificar en JS',
  description: 'TDD con Vue 3.',
  base: '/how-to-code-in-javascript/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/me.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },     
    ],
    sidebar: [{      
      path: '/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      items: [
        { text: 'Introducción', link: '/intro' },
        { text: 'Cómo Utilizar la Consola para Desarrolladores', link: '/how-to-use-the-js-dev-console' },
        { text: 'Cómo Agregar JS a HTML', link: '/how-to-add-javascript-to-html' },
        { text: 'Cómo Escribir Su Primer Programa', link: '/how-to-write-your-first-javascript-program' },
        { text: 'Comprender Sintaxis y Estructura del Código', link: '/understanding-syntax-and-code-structure-in-javascript' },
        { text: 'Cómo Escribir Comentarios', link: '/how-to-write-comments-in-javascript' },        
        { text: 'Comprender Tipos de Datos', link: '/understanding-data-types' },
        { text: 'Cómo Trabajar con Cadenas', link: '/how-to-work-with-strings-in-javascript' },
        { text: 'Cómo Indexar, Dividir y Manipular Cadenas', link: '/how-to-index-split-and-manipulate-strings-in-javascript' },
        { text: 'Cómo Convertir Tipos de Datos', link: '/how-to-convert-data-types-in-javascript' },        
        { text: 'Comprender Variables, Alcance y Elevación', link: '/understanding-variables-scope-and-hoisting' },
        { text: 'Cómo Hacer Matemáticas con Operadores', link: '/how-to-do-math-in-javascript-with-operators' },
        { text: 'Comprender los Operadores Lógicos y de Comparación', link: '/understanding-comparison-and-logical-operators-in-javascript' },
        { text: 'Comprender Matrices', link: '/understanding-arrays-in-javascript' },
        { text: 'Comprender Objetos', link: '/understanding-objects-in-javascript' },
        { text: 'Cómo Escribir Declaraciones Condicionales', link: '/how-to-write-conditional-statements-in-javascript' },
        { text: 'Bucles For, Bucles For...Of  y Bucles For...In', link: '/for-loops-for-of-loops-and-for-in-loops-in-javascript' },
        { text: 'Comprender las Funciones de Flecha', link: '/understanding-arrow-functions-in-javascript' }
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/how-to-code-in-javascript' }
    ]
  }
})




