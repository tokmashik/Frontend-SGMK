const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/Main.scss"; '
      }
    }
  }
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})

