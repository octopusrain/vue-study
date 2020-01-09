module.exports = {
  lintOnSave: true,
  css:{
    loaderOptions:{
      postcss: {
        plugins:[require('postcss-plugin-px2rem')({
          exclude: /(node_module)/,
        })]
      }
    }
  }
}