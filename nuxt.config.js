const webpack = require('webpack')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Baby Shop | Toko Online Susu, Mainan Anak, Baju Bayi, Perlengkapan Bayi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' }
    ],
    script: [
      { src: 'js/jquery-3.5.1.min.js' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', type: 'text/javascript' },
      { src: 'js/bootstrap.bundle.min.js' },
      { src: 'js/slick.min.js' },
      // { src: 'js/megamenu.js' },
      // { src: 'js/modernizr.js' },
      // { src: 'js/jquery.menu-aim.js' },
      { src: 'js/main.js' }
    ]
  },

  // Global   
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/bootstrap-vue',
    // { src: '@/plugins/jquery.menu-aim.js', ssr: false },
    // { src: '@/plugins/megamenu.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/composition-api'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

}
