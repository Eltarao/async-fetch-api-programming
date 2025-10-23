# async-fetch-api-programming
# 🪐 Star Wars Characters – Programación Asíncrona con Fetch

## 🎯 Objetivo

Este proyecto demuestra cómo usar **fetch()** y **promesas** para realizar peticiones HTTP a una API pública, procesar los datos recibidos y mostrarlos en el navegador usando HTML, JavaScript y Bootstrap.

---

## 🚀 API Utilizada: [SWAPI (Star Wars API)](https://www.swapi.tech/)

SWAPI es una API pública que permite acceder a información sobre personajes, películas, naves y más del universo de Star Wars.

**Endpoint usado:**

https://www.swapi.tech/api/people/?name={nombre}

yaml
Copiar código

Ejemplo:  
`https://www.swapi.tech/api/people/?name=Luke Skywalker`

Devuelve un objeto JSON con los datos del personaje buscado: nombre, altura, peso, género, color de cabello y año de nacimiento.

---

## 🧩 Estructura del proyecto

Proyecto/
│
├── index.html
├── src/
│ ├── css/
│ │ └── style.css
│ └── js/
│ ├── app.js
│ └── main.js
└── README.md

---

## 💻 Descripción de archivos

### 🟡 index.html  
Contiene:

- Input para escribir el nombre del personaje
- Botón para ejecutar la búsqueda
- Contenedor donde se muestran los resultados
- Estilos con **Bootstrap 5** y fuente tipo Star Wars

### 🔵 app.js  
Contiene la función `buscarPersonaje(nombre, contenedor)` que:

- Usa `fetch()` y `.then()` para manejar promesas
- Muestra un mensaje de carga mientras llega la respuesta
- Maneja errores con un mensaje al usuario
- Imprime los resultados en una tarjeta estilizada

### 🟢 main.js  
Se encarga de:

- Detectar el `click` en el botón
- Capturar el valor del input
- Llamar a `buscarPersonaje()` de `app.js`
- Ejecutarse tras `DOMContentLoaded`

---

## ⚙️ Ejemplo de uso

1. Escribe un nombre en el input: `Luke Skywalker`
2. Haz clic en **Buscar personaje**
3. Se mostrará una tarjeta con los datos:

Nombre: Luke Skywalker
Altura: 172 cm
Peso: 77 kg
Género: male
Color de cabello: blond
Nacimiento: 19BBY

---

## 💡 Manejo de errores

El código utiliza `.catch()` para detectar:

- Fallos en la conexión a la API
- Parámetros sin resultados válidos

Así el programa no se rompe y el usuario recibe feedback claro.

---

## 🧠 Conclusión

Este ejercicio permitió practicar:

- **fetch()**
- **promesas (.then, .catch, .finally)**
- **consumo de API pública**
- **render en el DOM + diseño con Bootstrap**

También ayudó a comprender manejo de errores y presentación visual de datos.

---