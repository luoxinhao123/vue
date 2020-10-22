const path = require('path')

module.exports = {
    entry:'./src/main.js',    //入口
    // output:'./dist/bundle.js',   //出口
    output: {
        //动态的获取路径(两个下划线)
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    }
}