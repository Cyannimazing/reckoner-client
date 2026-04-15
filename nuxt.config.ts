const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Duplicated imports "useAppConfig"')) return;
  originalWarn(...args);
};

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
      appName: 'Reckoner',
    },
  },
  imports: { dirs: ['composables/api'] },
})
