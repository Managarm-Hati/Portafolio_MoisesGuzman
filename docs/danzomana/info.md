# Ventas Plantas 🌿

Sistema de gestión de ventas e información de plantas.  
Desarrollado con **Express**, **PostgreSQL**, **JS**, **HTML** y **CSS**.

---

## Características principales

- Registro y edición de productos  
- Control de ventas diario  
- Reporte mensual en formato PDF  

![Pantalla principal](ventas1.jpg)
![Vista de ventas](ventas2.jpg)

---

## Ejemplo de código

```python
@app.get("/ventas")
def listar_ventas(db: Session = Depends(get_db)):
    return db.query(Venta).all()
