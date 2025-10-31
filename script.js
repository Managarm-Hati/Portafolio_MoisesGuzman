// Mobile Menu
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// DARK MODE
const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const sun = document.getElementById("sun-icon");
const moon = document.getElementById("moon-icon");

// Cargar tema
if (
  localStorage.theme === "dark" ||
  (!localStorage.theme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  sun.classList.add("opacity-0", "scale-0");
  moon.classList.remove("opacity-0", "scale-0");
} else {
  html.classList.remove("dark");
  sun.classList.remove("opacity-0", "scale-0");
  moon.classList.add("opacity-0", "scale-0");
}

// Cambiar tema
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";

  sun.classList.toggle("opacity-0");
  sun.classList.toggle("scale-0");
  moon.classList.toggle("opacity-0");
  moon.classList.toggle("scale-0");
});

const proyectos2 = {
  ventas: {
    titulo: "Ventas Plantas",
    descripcion:
      "Sistema para automatizar ventas, controlar inventario y generar reportes de forma dinámica. Desarrollado con Node.js, PostgreSQL y Prisma. Incluye dashboard de ventas, control de stock y registro diario de operaciones.",
    imagenes: ["img/ventas1.jpg", "img/ventas2.jpg", "img/ventas3.jpg"],
    link: "https://github.com/Managarm-Hati/venta_plantas",
  },
  danzomana: {
    titulo: "Web Academia Danzomana",
    descripcion:
      "Plataforma web diseñada para una academia de danza, con gestión de cursos, instructores y alumnos. Desarrollada con Express, EJS y TailwindCSS. Contiene panel administrativo para crear, editar y eliminar clases.",
    imagenes: ["img/danzomana1.jpg", "img/danzomana2.jpg"],
    link: "https://github.com/Managarm-Hati/web_Danzomana",
  },
  paranormal: {
    titulo: "Investigación Paranormal",
    descripcion:
      "Aplicación de escritorio creada con Python y Tkinter para analizar anomalías en fotografías. Permite cargar imágenes, detectar patrones inusuales y registrar observaciones para análisis posteriores.",
    imagenes: ["img/paranormal1.jpg", "img/paranormal2.jpg"],
    link: "https://github.com/Managarm-Hati/investigacion_paranormal",
  },
  negocio: {
    titulo: "Sistema de Venta (Negocio)",
    descripcion:
      "Aplicación de escritorio con control de inventario, stock y gráficos de ventas, desarrollada en C#.",
    imagenes: ["img/boxeo1.jpg", "img/boxeo2.jpg"],
    link: "https://github.com/Managarm-Hati/ProyectoVentas#",
  },
};

const proyectos = {
  ventas: {
    titulo: "Venta de Plantas",
    mdUrl: "docs/venta_planta/info.md",
    link: "https://github.com/Managarm-Hati/venta_plantas",
  },
  danzomana: {
    titulo: "Web Academia Danzomana",
    mdUrl: "docs/danzomana/info.md",
    link: "https://github.com/Managarm-Hati/web_Danzomana",
  },
  paranormal: {
    titulo: "Laboratorio Paranormal",
    mdUrl: "docs/paranormal/info.md",
    link: "https://github.com/Managarm-Hati/investigacion_paranormal",
  },
  negocio: {
    titulo: "Sistema de Venta (Negocio)",
    mdUrl: "docs/sistema_negocio/info.md",
    link: "https://github.com/Managarm-Hati/ProyectoVentas",
  },
};

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  langPrefix: "language-",
});

async function mostrarModal(id) {
  const p = proyectos[id];
  if (!p) return;

  document.getElementById("modal-title").textContent = p.titulo;
  document.getElementById("modal-link").href = p.link;

  //  Cargar el archivo Markdown
  const response = await fetch(p.mdUrl);
  const mdText = await response.text();

  //  Convertir Markdown a HTML usando Marked.js
  const htmlContent = marked.parse(mdText);

  // Mostrar el contenido en el modal
  document.getElementById("modal-content").innerHTML = htmlContent;

  // Mostrar el modal
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}
