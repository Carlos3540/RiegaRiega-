import { defineConfig } from 'vite';

export default defineConfig({
  base: '', // Rutas relativas (importante para que funcione en Android con Capacitor)
  build: {
    outDir: 'dist' // Carpeta donde Vite pondrá la versión compilada
  }
});
