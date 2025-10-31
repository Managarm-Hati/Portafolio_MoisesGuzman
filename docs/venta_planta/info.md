# Catálogo de Plantas 🌿

Sistema de gestión de ventas e información botánica, diseñado como un catálogo virtual intuitivo, con múltiples filtros que permiten al usuario encontrar fácilmente la planta ideal según sus necesidades y el tipo de espacio disponible.

Tecnologías utilizadas: **FastAPI**, **SQLAlchemy**, **HTML** y **CSS**.

---

---

## Características principales

- Registro y edición completa de productos.
- Contacto directo mediante WhatsApp.
- Fichas informativas personalizadas para cada planta.
- Filtros dinámicos para explorar según tipo, estilo o preferencia.

  <br>

**1. Pantalla principal**
En la página de inicio se presentan cinco frases que rotan automáticamente, aportando dinamismo y una experiencia visual atractiva.
El botón verde **“Ver catálogo”** permite acceder directamente a todas las plantas disponibles.
![Pantalla principal](/docs/venta_planta/img/img1.png)
<br>

**2. Plantas destacadas**
Más abajo se encuentran las **“Plantas Destacadas”**, una sección con las tres especies más solicitadas.
Estas se muestran en cards visuales que presentan el nombre y la imagen de cada planta.
![Vista de ventas](/docs/venta_planta/img/img2.png)
<br>

**3. Plantas categorizadas**
La siguiente sección muestra una **galería de categorías**.
Cada card es clickeable y permite filtrar las plantas según sus características, facilitando una búsqueda rápida e intuitiva.
![Vista de ventas](/docs/venta_planta/img/img3.png)
<br>

**4. Catálogo completo**
Al presionar el botón **“Catálogo”** desde el encabezado principal (hero), se despliega una vista con **todas las plantas disponibles**.
Incluye un buscador por nombre, un botón de contacto directo vía **WhatsApp**, y otro para volver a la pantalla inicial.
![Vista de ventas](/docs/venta_planta/img/img1.1.png)
<br>

**5. Ficha de información detallada**
Todas las cards de la sección de **categorías** son interactivas.
Cada una despliega información completa sobre la planta seleccionada, incluyendo sus requerimientos de **luz solar, riego y clima**, además de una breve descripción informativa.
![Vista de ventas](/docs/venta_planta/img/img1.3.png)
<br>

**6. Sección de contacto**
En la parte final del sitio se encuentra el área de **contacto directo**, con dos botones principales:

- **WhatsApp**: abre el chat directo para consultas o pedidos.

- **Instagram**: enlaza con la cuenta de la marca, donde se muestran fotografías, novedades y comentarios de clientes.
  ![Vista de ventas](/docs/venta_planta/img/img4.png)

---

# Tecnologías y estructura del proyecto

El sistema utiliza **SQLite** como base de datos local durante el desarrollo, lo que permite una configuración ágil y ligera.
La base de datos se comunica con el backend a través de **FastAPI**, utilizando **Uvicorn** como servidor ASGI.

El servidor puede levantarse automáticamente mediante un script Bash que simplifica el proceso de ejecución.

## Script Bash para iniciar el servidor Uvicorn

```bash:

#!/bin/bash

# Moverse al proyecto
cd /e/venta_plantas || {
  echo "❌ No se pudo acceder a /e/venta_plantas"
  exit 1
}

# Activar entorno virtual
source ./env/Scripts/activate

echo "✅ Entorno virtual activado."

# Abrir el navegador en localhost:8000
echo "🌐 Abriendo navegador en http://127.0.0.1:8000..."
start "" "http://127.0.0.1:8000/docs"

# Iniciar servidor Uvicorn
echo "🚀 Iniciando servidor Uvicorn..."
uvicorn app.main:app --reload
```

<br>

## Servidor Uvicorn en ejecución

![Vista de ventas](/docs/venta_planta/img/servidor.png)
