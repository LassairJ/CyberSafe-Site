import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` if the production URL ever changes.
export default defineConfig({
  site: 'https://security.lassair.me',
  integrations: [sitemap()],
});
