import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'gh' ? '/RiegaRiega-/' : './', // ./ para local, /repo-name/ para GitHub
    build: {
      outDir: 'dist'
    }
  };
});
