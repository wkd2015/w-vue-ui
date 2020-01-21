const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, 'src/style/index.scss')]
      }
    }
  }
}
