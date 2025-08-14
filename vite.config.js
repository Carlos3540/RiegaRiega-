import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'gh' ? '/RiegaRiega-/' : '', // GitHub Pages vs Capacitor
    build: {
      outDir: 'dist'
    }
  };
});
