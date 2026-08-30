import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vue(), sites()],
});
