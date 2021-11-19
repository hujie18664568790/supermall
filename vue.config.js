module.exports = {
  configureWebpack: {
    // 解决路径相关问题
    resolve: {
      // 省略某些路径文件的后缀默认已经配置过.json,.vue,.js
      extensions: [],
      // 别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}