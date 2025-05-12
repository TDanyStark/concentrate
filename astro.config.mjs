// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/cr/concentrate',
  outDir: 'apps/abbott/cr/concentrate',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});