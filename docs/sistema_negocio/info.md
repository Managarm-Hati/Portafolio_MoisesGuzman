# Aplicación Sistema de Ventas 
Sistema de gestión de ventas diseñado para pequeños negocios, orientado a optimizar el control de inventario, agilizar los procesos de venta y facilitar la toma de decisiones mediante reportes y estadísticas.

Tecnologías utilizadas: **C#** y **SQLServer**.
---  

***
## Características principales

- Caja registradora con visualización del producto.

- Registro, edición y eliminación de productos.

- Administración completa del stock.

- Reporte de número de ventas diarias y semanales.

- Registro de cantidad de clientes atendidos por día.

- Control de productos vendidos.

- Cálculo automático del total diario de ventas.

- Gráfico comparativo de ventas de los últimos 7 días.
<br>

**1. Portada** 
La pantalla principal incluye un menú funcional con los accesos a cada módulo del sistema.
Se incorporó además un botón de calculadora para agilizar operaciones rápidas durante el proceso de venta.
![Pantalla principal](/docs/sistema_negocio/img/img1.png)
<br>

**2. Venta** 
En la ventana **“Venta”**, cada producto se busca por su código.
El usuario ingresa la cantidad requerida y agrega el producto mediante el botón “+”.
El sistema calcula automáticamente el total de la venta.
Al registrar el monto recibido, se genera el vuelto correspondiente o se muestra el monto faltante en caso de pago insuficiente.
![Vista de ventas](/docs/sistema_negocio/img/img2.png)
<br>

**3. Nuevo Productos** 
En la ventana **“Nuevo”** se pueden agregar nuevos productos, actualizar precios o stock, editar registros existentes o eliminarlos.
Incluye un botón **“Actualizar”** para mantener sincronizados los datos del sistema en tiempo real.
![Vista de ventas](/docs/sistema_negocio/img/img3.png)
<br>

**4. Ver Productos** 
La ventana **“Ver Productos”** lista automáticamente todos los productos registrados.
El sistema utiliza un código de color para identificar el nivel de stock:
- **Rojo**: stock crítico.
- **Amarillo**: advertencia, nivel bajo.
- **Verde**: stock suficiente.

Los productos pueden filtrarse por categoría y exportarse a **Excel** o **PDF** para reportes externos.
![Vista de ventas](/docs/sistema_negocio/img/img4.png)
<br>

**5. Resumen** 
En la sección **“Resumen”**, el usuario puede acceder a una vista general de la información clave del negocio:

- Cantidad de productos por categoría.

- Productos más vendidos.

- Comparativa de ganancias de los últimos 7 días mediante una **línea de tiempo gráfica**.

Esta información permite una **mejor toma de decisiones** sobre ventas, reposición y tendencias de consumo.
![Vista de ventas](/docs/sistema_negocio/img/img5.png)
<br>

**6. Ayuda** 
La ventana **“Ayuda”** se encuentra en desarrollo.
Su propósito es ofrecer un manual de usuario integrado dentro de la aplicación, junto con un canal de contacto por correo electrónico para resolver dudas o solicitar soporte técnico.
![Vista de ventas](/docs/sistema_negocio/img/img6.png)
