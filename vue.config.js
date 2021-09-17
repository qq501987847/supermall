module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 公共路径

  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      }
    }
  }
}