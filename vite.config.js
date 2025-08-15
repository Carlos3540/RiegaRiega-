import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '', // <-- vacío para rutas relativas en APK
    build: {
      outDir: 'dist'
    }
  };
});
