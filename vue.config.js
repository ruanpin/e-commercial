const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
        '/member': { // 抓member開頭
          target: 'http://localhost:5000', 
          changeOrigin: true,
          pathRewrite: {'^/member':''}
        },
      }
    },

  publicPath:
  process.env.NODE_ENV === "production"
    ? "/e-commercial"
    : "/",

})
