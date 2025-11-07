# 🛍️ Carrito de Compras | React

Aplicación web de e-commerce desarrollada con **React**, que permite visualizar productos, agregarlos o quitarlos del carrito y simular una compra.  
Este proyecto fue parte del recorrido formativo de **Desarrollo Web Front End** en *Digital House* y me permitió afianzar conceptos clave de React y manejo de estado global.

---

## 🚀 Demo

🔗 **Deploy:** [Ver en Netlify](https://carrito-compras-final-react.netlify.app/)  
🔗 **Repositorio:** [GitHub](https://github.com/JoshuaSMC/proyecto-final-carrito-compras-react)

---

## 🧠 Funcionalidades principales

✅ Listado dinámico de productos con nombre, imagen, descripción y precio.  
✅ Agregar y quitar productos del carrito.  
✅ Modificar la cantidad de cada producto (incrementar o decrementar).  
✅ Cálculo automático del total de la compra.  
✅ Alerta visual al finalizar la compra con **SweetAlert2**.  
✅ Navegación entre vistas con **React Router**.  
✅ Diseño responsive con un estilo **vintage moderno** (beige, dorado y rojo acento).  

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso principal |
|-------------|---------------|
| ⚛️ **React.js** | Framework principal |
| 🧩 **Context API** | Manejo de estado global |
| 💅 **CSS3** | Estilos personalizados y diseño responsive |
| 🧭 **React Router DOM** | Navegación SPA |
| 🔔 **SweetAlert2** | Alertas visuales interactivas |
| ⚡ **Vite** | Entorno de desarrollo rápido |

---

## 📁 Estructura del proyecto
```
src/
├── components/
│ ├── CardComponent.jsx
│ ├── NavBarComponent.jsx
│
├── context/
│ ├── CartContext.jsx
│ ├── CartProvider.jsx
│ ├── ProductContext.jsx
│
├── pages/
│ ├── ProductsPage.jsx
│ ├── CartPage.jsx
│
├── styles/
│ ├── vintage-theme.css
│
├── App.jsx
└── main.jsx
```
---

## 🎨 Diseño visual

**Paleta de colores**
- 🏺 **Beige principal:** `#f8f3e7`  
- 🟤 **Marrón oscuro:** `#6b5430`  
- ✨ **Dorado tenue:** `#c7a35e`  
- ❤️ **Rojo acento:** `#b11226`  
- ⚫ **Negro profundo:** `#1b1b1b`

**Tipografías**
- *Playfair Display* — títulos  
- *Poppins* — textos generales  

---

## 💡 Aprendizajes clave

Durante el desarrollo de este proyecto aprendí a:  
- Manejar el **estado global** con Context API.  
- Optimizar la comunicación entre componentes mediante **props**.  
- Implementar la lógica de un **carrito de compras funcional**.  
- Diseñar interfaces **responsives** y visualmente coherentes.  
- Mantener una estructura de código ordenada y modular.  

---

## ⚙️ Instalación y ejecución local

Si querés probar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/JoshuaSMC/proyecto-final-carrito-compras-react.git

# Entrar en la carpeta del proyecto
cd proyecto-final-carrito-compras-react

# Instalar dependencias
npm install

# Iniciar el entorno de desarrollo
npm run dev

```
Luego abrí http://localhost:5173
 en tu navegador 🚀

##🌱 Futuras mejoras

-🚧 Integración con una base de datos o API de productos.
-🧾 Sistema de login y registro de usuario.
-💳 Simulación de pago en línea.
-🛠 Filtros y categorías por tipo de producto.

👨‍💻 Autor

Desarrollado por Joshua SMC

📫 Front End Developer | React | JavaScript | HTML | CSS | UX/UI

⭐ Si te gustó este proyecto, podés dejar una estrella en el repositorio :)

