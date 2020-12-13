export default {
    state: {
      name: 'zhangsan'
    },
    mutations: {
      updateName(state,payload) {
        state.name = payload
      }
    },
    actions: {
      aUpdateName(context) {
        setTimeout(() => {
          context.commit('updateName', 'wangwu')   //这里的context不再指代store对象，而是模块里面的mutations
        }, 1000)
      }
    },
    getters: {
      fullName(state) {
        return state.name + '1111'
      },
      fullName2(state, getters){
        return getters.fullName + '2222'
      },
      // 模块里面可以有三个参数
      fullName3(state, getters, rootState){
        return getters.fullName2 + rootState.counter     //拿到store里面state的counter
      }
    }
  }