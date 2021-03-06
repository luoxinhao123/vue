module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        // 'assets': 'src/assets',
        // 'common': 'src/common',
        // 'components': 'src/components',
        // 'network': 'src/network',
        // 'views': 'src/views',
      }
    }    
  }
}