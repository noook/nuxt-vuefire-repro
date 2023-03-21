// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    'nuxt-vuefire',
  ],
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    auth: true,
    admin: {
      serviceAccount: {
        clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        privateKey: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVKEY as string).replace(/\\n/gm, '\n'),
        projectId: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
      },
    },
  },
})
