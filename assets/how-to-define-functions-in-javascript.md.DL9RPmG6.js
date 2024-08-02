import{_ as s,c as a,o as i,V as e}from"./chunks/framework.C80zbCY-.js";const g=JSON.parse('{"title":"Cómo Definir Funciones en JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"how-to-define-functions-in-javascript.md","filePath":"how-to-define-functions-in-javascript.md"}'),n={name:"how-to-define-functions-in-javascript.md"},l=e(`<h1 id="como-definir-funciones-en-javascript" tabindex="-1">Cómo Definir Funciones en JavaScript <a class="header-anchor" href="#como-definir-funciones-en-javascript" aria-label="Permalink to &quot;Cómo Definir Funciones en JavaScript&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://www.digitalocean.com/community/tutorials/how-to-define-functions-in-javascript" target="_blank" rel="noreferrer">aquí</a></p></div><h2 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h2><p>Una <strong>función</strong> es un bloque de código que realiza una acción o devuelve un valor. Las funciones son códigos personalizados definidos por programadores que son reutilizables y, por lo tanto, pueden hacer que sus programas sean más modulares y eficientes.</p><p>En este tutorial, aprenderemos varias formas de definir una función, llamar a una función y usar parámetros de función en JavaScript.</p><h2 id="definiendo-una-funcion" tabindex="-1">Definiendo una Función <a class="header-anchor" href="#definiendo-una-funcion" aria-label="Permalink to &quot;Definiendo una Función&quot;">​</a></h2><p>Las funciones se definen o declaran con la palabra clave <code>function</code>. A continuación se muestra la sintaxis de una función en JavaScript.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nameOfFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Code to be executed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>La declaración comienza con la palabra clave <code>function</code>, seguida del nombre de la función. Los nombres de funciones siguen las mismas reglas que las variables: pueden contener letras, números, guiones bajos y signos de dólar, y con frecuencia se escriben en <a href="./understanding-syntax-and-code-structure-in-javascript.html#identificadores">camel case</a>. El nombre va seguido de un conjunto de paréntesis, que se pueden utilizar para parámetros opcionales. El código de la función está contenido entre llaves, al igual que una <a href="./for-loops-for-of-loops-and-for-in-loops-in-javascript.html">declaración <code>for</code></a> o una <a href="./how-to-write-conditional-statements-in-javascript.html">declaración <code>if</code></a>.</p><p>En nuestro primer ejemplo, haremos una <strong>declaración de función</strong> para imprimir una declaración de saludo en la consola.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize greeting function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Aquí tenemos el código para imprimir <code>Hello, World!</code> a la consola contenida dentro de la función <code>greet()</code>. Sin embargo, no sucederá nada y no se ejecutará ningún código hasta que <strong>invoquemos</strong> o llamemos a la función. Puede invocar una función escribiendo el nombre de la función seguido del paréntesis.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke the function</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Ahora los juntaremos, definiremos nuestra función e invocaremos.</p><p>📃<code>greet.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize greeting function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, World!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke the function</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Con la llamada a <code>greet();</code>, la función se ejecutará y recibiremos el mensaje <code>Hello, World!</code> como salida del programa.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> World!</span></span></code></pre></div><p>Ahora tenemos nuestro código <code>greet()</code> contenido en una función y podemos reutilizarlo tantas veces como queramos.</p><p>Usando parámetros, podemos hacer que el código sea más dinámico.</p><h2 id="parametros-de-funcion" tabindex="-1">Parámetros de Función <a class="header-anchor" href="#parametros-de-funcion" aria-label="Permalink to &quot;Parámetros de Función&quot;">​</a></h2><p>En nuestro archivo <code>greet.js</code>, creamos una función básica que imprime <code>Hello, World</code> en la consola. Usando parámetros, podemos agregar funcionalidad adicional que hará que el código sea más flexible. Los <strong>parámetros</strong> son entradas que se pasan a funciones como nombres y se comportan como variables locales.</p><p>Cuando un usuario inicia sesión en una aplicación, es posible que deseemos que el programa lo salude por su nombre, en lugar de simplemente decir &quot;Hello, World!&quot;.</p><p>Agregaremos un parámetro a nuestra función, llamado <code>name</code>, para representar el nombre de la persona a la que se saluda.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize custom greeting function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello, \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>El nombre de la función es <code>greet</code> y ahora tenemos un único parámetro dentro del paréntesis. El nombre del parámetro sigue las mismas reglas que el nombre de una variable. Dentro de la función, en lugar de una cadena estática que consta de <code>Hello, World</code>, tenemos una cadena <a href="./how-to-work-with-strings-in-javascript.html#variables-en-cadenas-con-literales-de-plantilla">literal de plantilla</a> que contiene nuestro parámetro, que ahora se comporta como una variable local.</p><p>Notarás que no hemos definido nuestro parámetro <code>name</code> en ninguna parte. Le asignamos un valor cuando invocamos nuestra función. Suponiendo que nuestro usuario se llama Sammy, llamaremos a la función y colocaremos el nombre de usuario como <strong>argumento</strong>. El argumento es el valor real que se pasa a la función; en este caso es la cadena <code>&quot;Sammy&quot;</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke greet function with &quot;Sammy&quot; as the argument</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sammy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>El valor de <code>&quot;Sammy&quot;</code> se pasa a la función a través del parámetro <code>name</code>. Ahora, cada vez que se utilice <code>name</code> en toda la función, representará el valor <code>&quot;Sammy&quot;</code>. Aquí está el código completo.</p><p>📃<code>greetSammy.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize custom greeting function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Hello, \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}!\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke greet function with &quot;Sammy&quot; as the argument</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sammy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Cuando ejecutamos el programa anterior, recibiremos el siguiente resultado.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Hello,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sammy!</span></span></code></pre></div><p>Ahora tenemos un ejemplo de cómo se puede reutilizar una función. En un ejemplo del mundo real, la función extraería el nombre de usuario de una base de datos en lugar de proporcionar directamente el nombre como valor de argumento.</p><p>Además de los parámetros, se pueden declarar variables dentro de las funciones. Estas variables se conocen como <strong>variables locales</strong> y solo existirán dentro del alcance de su propio bloque de funciones. El alcance de las variables determina la accesibilidad de las variables; Las variables que se definen dentro de una función no son accesibles desde fuera de la función, pero se pueden usar tantas veces como se usa su función en un programa.</p><h2 id="valores-devueltos" tabindex="-1">Valores Devueltos <a class="header-anchor" href="#valores-devueltos" aria-label="Permalink to &quot;Valores Devueltos&quot;">​</a></h2><p>Se puede utilizar más de un parámetro en una función. Podemos pasar múltiples valores a una función y devolver un valor. Crearemos una función para encontrar la suma de dos valores, representados por <code>x</code> e <code>y</code>.</p><p>📃<code>sum.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Initialize add function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find the sum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>En el programa anterior, definimos una función con los parámetros <code>x</code> e <code>y</code>, y luego pasamos los valores de <code>9</code> y <code>7</code> a la función. Cuando ejecutamos el programa, recibiremos la suma de esos números como resultado.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">16</span></span></code></pre></div><p>En este caso, con <code>9</code> y <code>7</code> pasados ​​a la función <code>sum()</code>, el programa devolvió <code>16</code>.</p><p>Cuando se utiliza la palabra clave <code>return</code>, la función deja de ejecutarse y se devuelve el valor de la expresión. Aunque en este caso el navegador mostrará el valor en la consola, no es lo mismo que usar <code>console.log()</code> para imprimir en la consola. Al invocar la función se generará el valor exactamente donde se invocó la función. Este valor se puede utilizar inmediatamente o colocar en una variable.</p><h2 id="expresiones-de-funcion" tabindex="-1">Expresiones de Función <a class="header-anchor" href="#expresiones-de-funcion" aria-label="Permalink to &quot;Expresiones de Función&quot;">​</a></h2><p>En la última sección, usamos una declaración de función para obtener la suma de dos números y devolver ese valor. También podemos crear una <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" target="_blank" rel="noreferrer">expresión de función</a> asignando una función a una variable.</p><p>Usando nuestro mismo ejemplo de función <code>add</code>, podemos aplicar directamente el valor devuelto a una variable, en este caso <code>sum</code>.</p><p>📃<code>functionExpression.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Assign add function to sum constant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find the sum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">25</span></span></code></pre></div><p>Ahora la constante <code>sum</code> es una función. Podemos hacer que esta expresión sea más concisa convirtiéndola en una <strong>función anónima</strong>, que es una función sin nombre. Actualmente, nuestra función tiene el nombre <code>add</code>, pero con las expresiones de función no es necesario nombrar la función y el nombre generalmente se omite.</p><p>📃<code>anonymousExpression.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Assign function to sum constant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find the sum</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">103</span></span></code></pre></div><p>En este ejemplo, eliminamos el nombre de la función que era <code>add</code> y la convertimos en una función anónima. Se podría utilizar una expresión de función con nombre para ayudar en la depuración, pero normalmente se omite.</p><h2 id="funciones-de-flecha" tabindex="-1">Funciones de Flecha <a class="header-anchor" href="#funciones-de-flecha" aria-label="Permalink to &quot;Funciones de Flecha&quot;">​</a></h2><p>Hasta ahora, hemos visto cómo definir funciones usando la palabra clave <code>function</code>. Sin embargo, existe un método más nuevo y conciso para definir una función conocida como <strong>expresiones de función de flecha</strong> a partir de <a href="https://262.ecma-international.org/6.0/" target="_blank" rel="noreferrer">ECMAScript 6</a>. Las funciones de flecha, como se las conoce comúnmente, se representan mediante un signo igual seguido de un signo mayor que: <code>=&gt;</code>.</p><p>Las funciones de flecha son siempre funciones anónimas y un tipo de expresión de función. Podemos crear un ejemplo básico para encontrar el producto de dos números.</p><p>📃<code>arrowFunction.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Define multiply function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> multiply</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find product</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multiply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">120</span></span></code></pre></div><p>En lugar de escribir la palabra clave <code>function</code>, usamos la flecha <code>=&gt;</code> para indicar una función. De lo contrario, funciona de manera similar a una expresión de función regular, con algunas diferencias avanzadas que puede leer en <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions" target="_blank" rel="noreferrer">Funciones de Flecha en Mozilla Developer Network</a>.</p><p>En el caso de un solo parámetro, se pueden excluir los paréntesis. En este ejemplo, elevamos <code>x</code> al cuadrado, lo que solo requiere que se pase un número como argumento. Se han omitido los paréntesis.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Define square function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> square</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find product</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">64</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Nota</p><p>En el caso de que no haya parámetros, se requiere un conjunto vacío de paréntesis <code>()</code> en las funciones de flecha.</p></div><p>Con estos ejemplos particulares que solo consisten en una declaración <code>return</code>, las funciones de flecha permiten reducir aún más la sintaxis. Si la función es un <code>return</code> de una sola línea, se pueden omitir tanto las llaves como la declaración <code>return</code>, como se ve en el siguiente ejemplo.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Define square function</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> square</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Invoke function to find product</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span></span></code></pre></div><p>Estos tres tipos de sintaxis dan como resultado la misma salida. Generalmente es una cuestión de preferencia o de estándares de codificación de la empresa decidir cómo estructurará sus propias funciones.</p><h2 id="conclusion" tabindex="-1">Conclusión <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusión&quot;">​</a></h2><p>En este tutorial, cubrimos declaraciones de funciones y expresiones de funciones, devolución de valores de funciones, asignación de valores de funciones a variables y funciones de flecha de ES6.</p><p>Las funciones son bloques de código que devuelven un valor o realizan una acción, lo que hace que los programas sean escalables y modulares.</p>`,72),t=[l];function p(o,r,h,d,c,k){return i(),a("div",null,t)}const E=s(n,[["render",p]]);export{g as __pageData,E as default};