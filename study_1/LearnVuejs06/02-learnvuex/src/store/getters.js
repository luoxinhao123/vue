export default {
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
  }