import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cómo codificar en JS',
  description: 'TDD con Vue 3.',
  base: '/how-to-code-in-javascript/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/comenzar/tdd' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },      
    ],
    sidebar: [{
      text: 'Comenzar',   // required
      path: '/comenzar/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Desarrollo Dirigido por Pruebas', link: '/comenzar/tdd' },
        { text: 'Pruebas Unitarias', link: '/comenzar/pruebas-unitarias' }                    
      ]
    }, {
      text: 'Vitest',   // required
      path: '/vitest/',
      collapsible: true,
      collapsed: true,        
      items: [
        { text: '¿Por Qué Vitest?', link: '/vitest/porque-vitest' },
        { text: 'Entorno de Prueba', link: '/vitest/entorno-de-prueba' },
        { text: 'Usando Comparadores', link: '/vitest/usando-comparadores' },
        { text: 'Configuración y Desmontaje', link: '/vitest/configuracion-y-desmontaje' },                  
        { text: 'Filtrando Pruebas', link: '/vitest/filtrando-pruebas' },
        { text: 'Probando Código Asíncrono', link: '/vitest/probando-codigo-asincrono' },          
        { text: 'Un Ejemplo Asíncrono', link: '/vitest/un-ejemplo-asincrono' },
        { text: 'Funciones Simuladas', link: '/vitest/funciones-simuladas' },
        { text: 'Simulaciones', link: '/vitest/simulaciones'},
        { text: 'Simulaciones de Temporizador', link: '/vitest/simulaciones-de-temporizador'},
        { text: 'Simulaciones de Clase ES6', link: '/vitest/simulaciones-de-clase-es6'}          
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CaribesTIC/vue-tdd' }
    ]
  }
})
