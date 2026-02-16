import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'datascience/home.html'),
        about: resolve(__dirname, 'datascience/about.html'),
        projects: resolve(__dirname, 'datascience/projects.html'),
        contact: resolve(__dirname, 'datascience/contact.html'),
        tasks: resolve(__dirname, 'datascience/tasks.html'),
      },
    },
  },
});
