# Convenciones de Nombres

Este documento define las convenciones de nombres que todos los miembros del equipo deben seguir. El objetivo es asegurar un código limpio, coherente y fácil de mantener.

## 1. Variables

- **Formato**: Las **variables** deben utilizar **camelCase** (minúsculas con la primera letra de cada palabra en mayúscula, excepto la primera palabra).
- **Propósito**: Usar `camelCase` permite mantener la legibilidad y consistencia en el código.
- **Ejemplo**:
    ```javascript
    let userName = 'John'; // Correcto
    let userAge = 25; // Correcto
    let user_age = 30; // Incorrecto
    ```

## 2. Constantes

- **Formato**: Las **constantes** deben utilizar **UPPER_SNAKE_CASE** (todas las letras en mayúsculas y las palabras separadas por guiones bajos).
- **Propósito**: Usar `UPPER_SNAKE_CASE` permite identificar fácilmente las constantes en el código.
- **Ejemplo**:
    ```javascript
    const MAX_USERS = 100; // Correcto
    const API_URL = 'https://api.example.com'; // Correcto
    const maxUsers = 100; // Incorrecto
    ```

## 3. Funciones

- **Formato**: Las **funciones** deben utilizar **camelCase**.
- **Propósito**: Usar `camelCase` para funciones mantiene la consistencia con las variables.
- **Ejemplo**:
    ```javascript
    function fetchUserData() { ... } // Correcto
    function handleSubmit() { ... } // Correcto
    function fetch_user_data() { ... } // Incorrecto
    ```

## 4. IDs y Clases en HTML

- **Formato**: Los **IDs** y **clases** deben utilizar **kebab-case** (minúsculas con palabras separadas por guiones).
- **Propósito**: Usar `kebab-case` asegura la consistencia y legibilidad en los nombres de IDs y clases.
- **Ejemplo**:
    ```html
    <div id="user-profile"></div> <!-- Correcto -->
    <div id="user-card"></div> <!-- Correcto -->
    <div id="UserProfile"></div> <!-- Incorrecto -->
    ```

## 5. Comentarios

- **Formato**: Los **comentarios** deben ser claros y concisos, utilizando el idioma español. Para comentarios de una sola línea, usar `//` en JavaScript y `<!-- -->` en HTML. Para comentarios de múltiples líneas, usar `/* */` en JavaScript.
- **Propósito**: Los comentarios ayudan a otros desarrolladores a entender el propósito y funcionamiento del código.
- **Ejemplo**:
    ```javascript
    // Esto es un comentario de una sola línea en JavaScript
    let userName = 'John'; // Asigna el nombre de usuario

    /*
     * Esto es un comentario de múltiples líneas en JavaScript
     * Puede ser usado para explicar secciones más complejas del código
     */
    function fetchUserData() {
        // Lógica para obtener datos del usuario
    }
    ```

    ```html
    <!-- Esto es un comentario en HTML -->
    <div id="user-profile"></div>
    ```

## 6. Nombres de Archivos

- **Formato**: Los **nombres de archivos** deben utilizar **kebab-case**.
- **Propósito**: Usar `kebab-case` asegura la consistencia y facilita la lectura de los nombres de archivos.
- **Ejemplo**:
    ```
    index.html // Correcto
    main.js // Correcto
    user-profile.css // Correcto
    userProfile.js // Incorrecto
    ```

## 7. Eventos y Atributos en HTML

- **Formato**: Los **eventos** y **atributos** deben utilizar **camelCase**.
- **Propósito**: Usar `camelCase` para eventos y atributos mantiene la consistencia con JavaScript.
- **Ejemplo**:
    ```javascript
    function handleClick() { ... } // Correcto
    function fetchData() { ... } // Correcto
    function handle_click() { ... } // Incorrecto
    ```

    ```html
    <button type="button">Click me</button> <!-- Correcto -->
    <input type="text" id="user-name"> <!-- Correcto -->
    <BUTTON TYPE="BUTTON">Click me</BUTTON> <!-- Incorrecto -->
    ```

# Convenciones de Código

Este archivo contiene convenciones adaptadas para un proyecto básico que utiliza solo HTML, JavaScript y CSS, de acuerdo con las mejores prácticas. Puedes incluirlo en tu proyecto y compartirlo con el equipo para asegurar la coherencia en el código.

## 1. Espacios vs Tabulaciones

- **Formato**: Utilizar **4 espacios** en lugar de tabulaciones para la indentación.
- **Propósito**: Usar espacios asegura que la indentación sea consistente en todos los editores y entornos.
- **Ejemplo**:
    ```javascript
    function fetchUserData() {
        let userName = 'John'; // Correcto
        let userAge = 25; // Correcto
    }
    ```

## 2. Líneas en Blanco

- **Formato**: Insertar **líneas en blanco** para separar bloques de código lógicos.
- **Propósito**: Las líneas en blanco mejoran la legibilidad del código.
- **Ejemplo**:
    ```javascript
    function fetchUserData() {
        let userName = 'John';

        // Lógica para obtener datos del usuario
        let userAge = 25;
    }
    ```

## 3. Manejo de Errores

- **Formato**: Utilizar **try-catch** para manejar errores en JavaScript.
- **Propósito**: El manejo adecuado de errores previene que el programa falle inesperadamente.
- **Ejemplo**:
    ```javascript
    try {
        fetchUserData();
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
    }
    ```

## 4. Uso de Dependencias

- **Formato**: Mantener las **dependencias** actualizadas y documentadas en el archivo `package.json`.
- **Propósito**: Usar dependencias actualizadas asegura la seguridad y funcionalidad del proyecto.
- **Ejemplo**:
    ```json
    {
        "dependencies": {
            "express": "^4.17.1",
            "mongoose": "^5.10.9"
        }
    }
    ```
