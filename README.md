# TodoApp-SEEK

## Descripción del Proyecto

TodoApp-SEEK es una aplicación para la gestión de tareas que permite visualizar, crear, actualizar y eliminar tareas de manera organizada. Las tareas se agrupan en tres columnas según su estado, y cada tarea se resalta con un color que indica su prioridad.

---

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Git](https://git-scm.com/)

---

## Instrucciones de Instalación

Sigue estos pasos para clonar e instalar el proyecto en tu entorno local:

1. **Clonar el Repositorio**  
   Ejecuta el siguiente comando en tu terminal para clonar el proyecto:

   ```bash
   git clone https://github.com/WalRoldan/todoApp-SEEK.git
   ```

2. **Navegar al Directorio del Proyecto**

   ```bash
   cd todoApp-SEEK
   ```

3. **Instalar las Dependencias**  
   Instala las dependencias del proyecto ejecutando:

   ```bash
   npm install
   ```

4. **Levantar el Proyecto en Local**  
   Inicia el servidor de desarrollo con el siguiente comando:

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

---

## Uso de la Aplicación

### Pantalla de Login

En la pantalla de inicio de sesión, utiliza las siguientes credenciales:

- **Email:** `admin@example.com`
- **Password:** `password123`

Una vez autenticado, serás redirigido al dashboard.

### Dashboard

El dashboard está dividido en tres columnas que representan los estados de las tareas:

1. **To Do**
2. **Doing**
3. **Done**

### Gestión de Tareas

- Al **editar** o **crear una nueva tarea**, esta se mostrará automáticamente en la columna correspondiente según su estado.
- Las tareas están representadas por tarjetas que incluyen un sombreado de color según su **prioridad**:
  - **Rojo:** Alta prioridad
  - **Amarillo:** Media prioridad
  - **Verde:** Baja prioridad

---

## Contacto

Si tienes alguna pregunta o necesitas soporte, no dudes en ponerte en contacto a través del repositorio.
