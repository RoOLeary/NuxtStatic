const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script:[
      { src: 'https://fonts.google.com/selection?selection.family=Montserrat:400,700'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/main.css',
    'aos/dist/aos.css',
    'vue-js-modal/dist/styles.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/owl.js", ssr: false},
    { src: "~/plugins/vue-js-modal", ssr: false },
    { src: "~/plugins/vue-social-sharing", ssr: false},
    { src: "~/plugins/moment", ssr: false},
  ],

  env: {
    browser: true
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
      '@nuxtjs/axios',
      '@nuxtjs/moment',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  nuxtent: {
    content: [
      [
        'posts',
        {
          page: '/posts/_id',
          permalink: '/posts/:id',
          generate: ['get', 'getAll'],
          isPost: false,
        },
      ],
    ],
  },
  // router: {
  //   base: '/NuxtStatic/'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here

    */
    extractCSS: true,
   
    extend (config, { isDev, isClient }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        }
      }
  },
}
