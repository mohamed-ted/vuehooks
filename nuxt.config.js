export default {
  // target: 'static',
  mode: 'universal',
  head: {
    title: 'Vue Hooks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},
  googleFonts: {
    families: {
      Quicksand: [400, 500, 600, 700],
    },
    display: 'swap',
  },

  build: {},
}
