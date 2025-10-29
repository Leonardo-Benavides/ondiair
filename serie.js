// Archivo serie.js para configuración de cPanel
// Este archivo contiene la configuración necesaria para el servidor

const config = {
  // Configuración del servidor
  server: {
    host: "localhost",
    port: 3000,
    ssl: false,
  },

  // Configuración de la base de datos (si es necesaria)
  database: {
    host: "localhost",
    port: 3306,
    name: "ondiair_db",
    user: "ondiair_user",
    password: "password_here",
  },

  // Configuración de correo
  email: {
    smtp: "smtp.hostinger.com",
    port: 587,
    user: "ondiair@hotmail.com",
    password: "email_password_here",
  },

  // Configuración de archivos estáticos
  static: {
    path: "/public",
    maxAge: "1d",
  },

  // Variables de entorno para producción
  production: {
    NODE_ENV: "production",
    API_URL: "https://ondiair.com/api",
    UPLOAD_PATH: "/uploads",
  },
}

// Exportar configuración
if (typeof module !== "undefined" && module.exports) {
  module.exports = config
} else {
  window.ondiaConfig = config
}

// Función de inicialización para cPanel
function initializeOndiair() {
  console.log("Inicializando configuración ONDIAIR...")

  // Verificar dependencias
  const dependencies = ["express", "cors", "helmet"]
  dependencies.forEach((dep) => {
    try {
      require(dep)
      console.log(`✓ ${dep} disponible`)
    } catch (e) {
      console.warn(`⚠ ${dep} no encontrado`)
    }
  })

  return config
}

// Auto-inicialización si se ejecuta directamente
if (typeof require !== "undefined" && require.main === module) {
  initializeOndiair()
}
