const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/Main.scss"; '
      }
    }
  }
}