# Gestor de Tareas

Este es un gestor de tareas moderno y eficiente construido con React, Nextjs, Shadcn y Tailwind CSS, utilizando los componentes de shadcn/ui.

## Características Principales

1. **Gestión de Tareas**
   - Añadir nuevas tareas
   - Editar tareas existentes
   - Eliminar tareas
   - Marcar tareas como completadas

2. **Organización de Tareas**
   - Asignar prioridades a las tareas (Alta, Media, Baja, Sin prioridad)
   - Establecer fechas de vencimiento para las tareas

3. **Visualización y Filtrado**
   - Ver todas las tareas
   - Filtrar tareas por estado (Todas, Pendientes, Completadas)
   - Búsqueda de tareas por título o descripción

4. **Interfaz de Usuario**
   - Diseño responsive que se adapta a diferentes tamaños de pantalla
   - Tema claro/oscuro con cambio dinámico
   - Scroll suave para la lista de tareas y la barra lateral

5. **Funciones Especiales**
   - "Tarea Sorpresa": Selecciona aleatoriamente una tarea pendiente para enfocarse
   - Estadísticas de tareas: Muestra el progreso general y el número de tareas por prioridad
   - Mascota motivacional: Muestra mensajes de ánimo periódicamente

6. **Persistencia de Datos**
   - Almacenamiento local de tareas utilizando localStorage
   - No requiere una base de datos externa

7. **Componentes Reutilizables**
   - Estructura modular con componentes separados para diferentes funcionalidades

8. **Experiencia de Usuario Mejorada**
   - Animaciones suaves para una experiencia más agradable
   - Notificaciones toast para acciones importantes
   - Diálogos modales para añadir/editar tareas y seleccionar tarea sorpresa

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- Nextjs
- shadcn/ui (componentes reutilizables)
- Lucide React (iconos)
- date-fns (manejo de fechas)

## Persistencia de Datos sin DB

Este gestor de tareas utiliza `localStorage` para persistir los datos del usuario sin necesidad de una base de datos externa. Esto permite:

- Almacenamiento local de tareas en el navegador del usuario
- Carga rápida de datos sin necesidad de conexión a internet
- Privacidad mejorada al mantener los datos en el dispositivo del usuario

Sin embargo, ten en cuenta que los datos se perderán si el usuario limpia el almacenamiento local de su navegador.

## Instalación y Uso

1. Clona el repositorio
2. Instala las dependencias con `npm install --legacy-peer-deps`
3. Ejecuta el servidor de desarrollo con `npm run dev`
4. Abre `http://localhost:3000` en tu navegador

