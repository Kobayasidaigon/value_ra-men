import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name:"apple-mobile-web-app-capable", content:"yes"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:"/img/iphone5_splash.png", media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},
      { href:"/img/iphone6_splash.png", media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},
      { href:"/img/iphoneplus_splash.png", media:"(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image"},
      { href:"/img/iphonex_splash.png", media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image"},
      { href:"/img/iphonexr_splash.png", media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},
      { href:"/img/iphonexsmax_splash.png", media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)", rel:"apple-touch-startup-image"},
      { href:"/img/ipad_splash.png", media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},
      { href:"/img/ipadpro1_splash.png", media:"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},
      { href:"/img/ipadpro3_splash.png", media:"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)", rel:"apple-touch-startup-image"},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  manifest:{  
    name: "ラーメン",
    title: "ラーメン",
    description: "",
    lang: 'ja',
    theme_color: "#529b58",
    background_color: "#bde0c0",
    display: "standalone",
    scope: "/",
    start_url: "/"
  }
}
