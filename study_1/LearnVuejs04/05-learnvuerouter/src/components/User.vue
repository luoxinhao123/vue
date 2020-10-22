<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户界面，嘿嘿嘿</p>
      <h3>{{$route.params.userId}}</h3>
      <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
      name: "User",
      created() {
        // console.log('created');
        // document.title = '用户'
      },
      computed: {
        userId() {
          return this.$route.params.userId
        }
      },
      methods: {
        btnClick() {
          // 所有组件都继承自vue类的原型
          // console.log(this.$router);
          // console.log(this.$route);
        }
      }
    }
</script>

<style scoped>

</style>
