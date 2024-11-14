# Naming Conventions

This document defines the naming conventions that all team members must follow. The goal is to ensure clean, consistent, and maintainable code.

## 1. Variables

- **Format**: **Variables** should use **camelCase** (lowercase with the first letter of each word capitalized, except the first word).
- **Purpose**: Using `camelCase` maintains readability and consistency in the code.
- **Example**:
    ```javascript
    let userName = 'John'; // Correct
    let userAge = 25; // Correct
    let user_age = 30; // Incorrect
    ```

## 2. Constants

- **Format**: **Constants** should use **UPPER_SNAKE_CASE** (all uppercase letters with words separated by underscores).
- **Purpose**: Using `UPPER_SNAKE_CASE` makes it easy to identify constants in the code.
- **Example**:
    ```javascript
    const MAX_USERS = 100; // Correct
    const API_URL = 'https://api.example.com'; // Correct
    const maxUsers = 100; // Incorrect
    ```

## 3. Functions

- **Format**: **Functions** should use **camelCase**.
- **Purpose**: Using `camelCase` for functions maintains consistency with variables.
- **Example**:
    ```javascript
    function fetchUserData() { ... } // Correct
    function handleSubmit() { ... } // Correct
    function fetch_user_data() { ... } // Incorrect
    ```

## 4. IDs and Classes in HTML

- **Format**: **IDs** and **classes** should use **kebab-case** (lowercase with words separated by hyphens).
- **Purpose**: Using `kebab-case` ensures consistency and readability in ID and class names.
- **Example**:
    ```html
    <div id="user-profile"></div> <!-- Correct -->
    <div id="user-card"></div> <!-- Correct -->
    <div id="UserProfile"></div> <!-- Incorrect -->
    ```

## 5. Comments

- **Format**: **Comments** should be clear and concise, using Spanish. For single-line comments, use `//` in JavaScript and `<!-- -->` in HTML. For multi-line comments, use `/* */` in JavaScript.
- **Purpose**: Comments help other developers understand the purpose and functionality of the code.
- **Example**:
    ```javascript
    // This is a single-line comment in JavaScript
    let userName = 'John'; // Assigns the user name

    /*
     * This is a multi-line comment in JavaScript
     * It can be used to explain more complex sections of code
     */
    function fetchUserData() {
        // Logic to fetch user data
    }
    ```

    ```html
    <!-- This is a comment in HTML -->
    <div id="user-profile"></div>
    ```

## 6. File Names

- **Format**: **File names** should use **kebab-case**.
- **Purpose**: Using `kebab-case` ensures consistency and readability of file names.
- **Example**:
    ```
    index.html // Correct
    main.js // Correct
    user-profile.css // Correct
    userProfile.js // Incorrect
    ```

## 7. Events and Attributes in HTML

- **Format**: **Events** and **attributes** should use **camelCase**.
- **Purpose**: Using `camelCase` for events and attributes maintains consistency with JavaScript.
- **Example**:
    ```javascript
    function handleClick() { ... } // Correct
    function fetchData() { ... } // Correct
    function handle_click() { ... } // Incorrect
    ```

    ```html
    <button type="button">Click me</button> <!-- Correct -->
    <input type="text" id="user-name"> <!-- Correct -->
    <BUTTON TYPE="BUTTON">Click me</BUTTON> <!-- Incorrect -->
    ```

# Code Conventions

This file contains conventions adapted for a basic project that uses only HTML, JavaScript, and CSS, according to best practices. You can include it in your project and share it with the team to ensure code consistency.

## 1. Spaces vs Tabs

- **Format**: Use **4 spaces** instead of tabs for indentation.
- **Purpose**: Using spaces ensures consistent indentation across all editors and environments.
- **Example**:
    ```javascript
    function fetchUserData() {
        let userName = 'John'; // Correct
        let userAge = 25; // Correct
    }
    ```

## 2. Blank Lines

- **Format**: Insert **blank lines** to separate logical blocks of code.
- **Purpose**: Blank lines improve code readability.
- **Example**:
    ```javascript
    function fetchUserData() {
        let userName = 'John';

        // Logic to fetch user data
        let userAge = 25;
    }
    ```

## 3. Error Handling

- **Format**: Use **try-catch** to handle errors in JavaScript.
- **Purpose**: Proper error handling prevents the program from failing unexpectedly.
- **Example**:
    ```javascript
    try {
        fetchUserData();
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
    ```

## 4. Use of Dependencies

- **Format**: Keep **dependencies** updated and documented in the `package.json` file.
- **Purpose**: Using updated dependencies ensures the security and functionality of the project.
- **Example**:
    ```json
    {
        "dependencies": {
            "express": "^4.17.1",
            "mongoose": "^5.10.9"
        }
    }
    ```
