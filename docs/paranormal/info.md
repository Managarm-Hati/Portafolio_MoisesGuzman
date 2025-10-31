# Aplicación para la Investigación Paranormal 👻
Una herramienta desarrollada para facilitar el análisis de fotografías paranormales y revelar anomalías que a simple vista resultan difíciles de detectar.
Su objetivo es permitir una exploración visual más profunda mediante filtros y herramientas interactivas que ayudan a resaltar formas, sombras y posibles figuras en las imágenes.

Tecnologías utilizadas: **Python** y **Tkinter**.  
---  

***
# Características principales

- **Filtros automáticos**: seis modos de procesamiento diseñados para resaltar bordes, luces y sombras.
- **Herramienta de lupa**: con cinco niveles de zoom para examinar zonas específicas. 
- **Detección automática de orbes**: identifica círculos o figuras luminosas de forma automática. 
- **Ajustes visuales**: control independiente de brillo y contraste.
- **Exportación directa**: guarda las imágenes procesadas con los ajustes y filtros aplicados.
<br>

# Interfaz y flujo general
**1. Carga de imagen**
Al abrir la aplicación aparece una ventana para buscar y seleccionar la imagen a investigar.
![Pantalla principal](/docs/paranormal/img/img1.png)
<br>

**2. Tres visores simultáneos** 
Al cargar una imagen se despliegan tres ventanas:
- **Panel izquierdo**: herramientas y filtros (controles y botones).

- **Visor principal (centro)**: muestra la imagen procesada y responde a brillo/contraste y filtros.

- **Visor secundario (derecha)**: muestra la imagen original sin ningún filtro, útil para comparación constante.
![Vista de ventas](/docs/paranormal/img/img2.png)
--- 
<br>

## Panel izquierdo — grupos de funciones
El panel izquierdo organiza las funciones en 4 grupos principales (Filtros, Lupa, Herramienta de Análisis, Opciones). A continuación están todos los botones y su comportamiento:

## Filtros
- **6 filtros**: cada uno pensado para resaltar bordes, sombras o formas específicas.
- **Botón "Ninguno"**: deja la imagen sin filtro (útil para ajustar brillo/contraste sin interferencias).
- **Botón "Reiniciar"**: restaura todos los parámetros a sus valores por defecto (sin filtro, brillo/contraste predeterminados).
![Vista de ventas](/docs/paranormal/img/img3.3.png)

## Lupa
- **“Botón Toggle Lupa”**: abre/activa la ventana de lupa específica de la imagen.
- **Lupa**: pequeña ventana flotante que amplía la porción de la imagen bajo el puntero.
- **5 niveles de zoom**: botones que aumentan progresivamente la ampliación para ver detalles finos.
![Vista de ventas](/docs/paranormal/img/img8.png)

En la lupa, la imagen procesada se puede mostrar con filtro negativo para resaltar contrastes (de ahí los colores inusuales).
![Vista de ventas](/docs/paranormal/img/img6.png)
***

## Herramienta de Análisis (Automático)
- **Botón "Análisis Automático"**: abre una nueva ventana donde se muestra:

    - Detección de bordes (algoritmos de detección para resaltar contornos).

    - Detección de círculos / orbes (detección automática de formas circulares en la imagen).
- **Botón “Guardar”** en la ventana de análisis: guarda la imagen resultante del análisis (bordes y/o orbes resaltados).
![Vista de ventas](/docs/paranormal/img/img9.png)

# Formato del nombre guardado:

- **bordes_20251029_132456.jpg**

    - **bordes** = nombre de la herramienta

    - **20251029** = fecha (YYYYMMDD; 2025-10-29)

    - **132456** = hora (HHMMSS; 13:24:56)

    - **.jpg** = formato

![Vista de ventas](/docs/paranormal/img/img13.png)
***

## Opciones Generales
- **Guardar imagen**: guarda la imagen mostrada en el visor principal usando los filtros y parámetros actuales.
- **Cargar nueva imagen**: permite abrir otra fotografía y continuar el análisis.
- **Salir**: cierra la aplicación.
![Vista de ventas](/docs/paranormal/img/img11.png )

# nombre al guardar desde el visor principal:

- **imagen_ajustada_20251029_132317.jpg**

    - **imagen_ajustada** = función/etiqueta

    - **20251029** = fecha (2025-10-29)

    - **132317** = hora (13:23:17)

    - **.jpg** = formato

![Vista de ventas](/docs/paranormal/img/img12.png)
***

## Visores en detalle
- **Visor principal**

    - Se adapta a las dimensiones de la imagen.

    - Controles de **brillo y contraste** independientes; cualquier ajuste se refleja en tiempo real.

    - Útil para combinar filtros con ajustes finos y preparar imágenes para análisis o guardado.
![Vista de ventas](/docs/paranormal/img/img4.png)
<br>

- **Visor secundario (original)**

    - Muestra la imagen sin procesar y **no cambia** con filtros ni ajustes.

    - Sirve para comparar “antes / después” y detectar diferencias sutiles.
![Vista de ventas](/docs/paranormal/img/img5.png)
<br>

- **Visor de lupa**

    - Ventana flotante que muestra un recuadro ampliado alrededor del puntero.

    - Permite hasta 5 niveles adicionales de zoom para inspección granular.
![Vista de ventas](/docs/paranormal/img/img7.png)
<br>

- **Visor de análisis automático**

    - Se abre en una ventana independiente al activar la función **“Análisis automático”**.

    - Muestra **dos resultados principales** generados por los procesos automáticos:

    - **Detección de bordes**: la imagen procesada donde se resaltan contornos y líneas relevantes (útil para ver formas y delineados).

    - **Detección de orbes / círculos**: overlay que marca las formas circulares detectadas en la imagen (orbes), facilitando su localización visual.

    - La ventana de análisis está pensada para facilitar la documentación: permite revisar los resultados en detalle y guardar un respaldo instantáneo del procesamiento.

![Vista de ventas](/docs/paranormal/img/img10.png)
***

# Guardado y nomenclatura automática

Las imágenes que se guardan (tanto desde el análisis como desde el visor principal) usan nombres generados automáticamente con formato claro y reproducible. Esto facilita mantener registros y respaldos ordenados por fecha y hora, por ejemplo:

- **bordes_20251029_132456.jpg** (resultado del análisis de bordes)

- **imagen_ajustada_20251029_132317.jpg** (resultado del visor principal con filtros/ajustes)

***

# Descarga y uso (Distribución)

Este proyecto cuenta con un ejecutable **.EXE**, lo que permite utilizarlo fácilmente en cualquier equipo.
Para probar la aplicación, visita el repositorio en **GitHub** y accede a la carpeta **“dist”**, donde encontrarás el archivo **procesador_imagen.exe**.

Puedes descargarlo, ejecutarlo y comenzar a investigar tus propias fotografías 👻😱.
