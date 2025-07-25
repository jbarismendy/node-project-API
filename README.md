# node-project-API en Node.js

## Descripción

API REST de Sistema de Gestion de Productos desarrollado con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo **`.env`** con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  { "id": 1, "name": "Pizza", "price": 30 },
  { "id": 2, "name": "Hamburger", "price": 18 },
  { "id": 3, "name": "Beer", "price": 8 }
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=pizza`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Pizza", "price": 30}]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Pizza", "price": 30 }
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{ "name": "Fries", "price": 6 }
```

- **Respuesta ejemplo:**

```json
{ "id": 9, "name": "Fries", "price": 6 }
```

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
{ "name": "Pizza pepperoni", "price": 33 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Pizza pepperoni", "price": 33 }
```

### Actualizar parcialmente un producto (PATCH)

- **PATCH** `/products/:id`
- **Descripción:** Actualiza parcialmente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):** Solo los campos que se desean actualizar

```json
{ "price": 28 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Pizza", "price": 28 }
```

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado

## Estructura del proyecto

```
src/
├── Controllers/
│   └── products.controller.js
├── Models/
│   └── Product.js
├── Routes/
│   └── products.route.js
└── Services/
    └── products.service.js 
```

## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules