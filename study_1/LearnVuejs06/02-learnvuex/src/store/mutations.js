import {INCREMENT} from "./mutations-types"

export default {
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
  }