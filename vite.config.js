import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base:
      mode === 'gh'
        ? '/RiegaRiega-/' // para GitHub Pages
        : '', // vacío para Capacitor / APK
    build: {
      outDir: 'dist'
    }
  };
});
