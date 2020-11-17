import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from "./mutations-types";

//1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  actions: {},
  getters: {
    fullNameA(state) {
      return state.name + '1111'
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      {id:110, name:'why', age:18},
      {id:111, name:'what', age:19},
      {id:112, name:'when', age:20},
      {id:113, name:'how', age:22},
    ],
    info: {
      name: 'Kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // incrementCount(state,count) {
    //   state.counter += count
    // },
    incrementCount(state,payload) {
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // 一开始就在state里面定义的属性，都会被加入响应式系统中，而响应式系统会监听属性的变化，当属性发生变化时，
      // 会通知所有界面中用到该属性的地方，让界面发生刷新

      state.info.name = 'codewhy'   //同步，响应式
      // state.info['address'] = '洛杉矶'   //非响应式（后面添加的，没有加入响应式系统中）
      // Vue.set(state.info, 'address', '洛杉矶')  //响应式
      // delete state.info.age  //删除数据，非响应式
      // Vue.delete(state.info, 'age')   //删除数据，响应式
      // setTimeout(() => {
      //   state.info.name = 'codewhy'     //异步操作，devtools不能监听
      // },1000)
    }
  },
  actions: {
    // context：上下文，现在可理解为store对象
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);

          resolve('111')
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },
    // 年龄大于age，其他传过来的age，不写死
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store
