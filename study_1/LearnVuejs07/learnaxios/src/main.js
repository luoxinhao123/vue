import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1. 基本使用
axios({
  url: 'http://152.136.185.210:7878/api/m5/home/multidata',  //默认使用get请求
  method: ''                                //method定义请求方式
}).then(res => {
    console.log(res);
})
// axios.get(),axios.post()

axios({
  url: 'http://152.136.185.210:7878/api/m5/home/data',
  // 专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

// 2. axios发送并发请求
axios.all([axios({
  url: 'http://152.136.185.210:7878/api/m5/home/multidata'
}), axios({
  url: 'http://152.136.185.210:7878/api/m5/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})])
  .then(results => {
    console.log(results)
  })  