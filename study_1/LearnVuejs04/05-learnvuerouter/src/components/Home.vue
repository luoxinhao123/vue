<template>
    <div>
      <h2>我是首页</h2>
      <p>我是首页内容，哈哈哈</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "Home",
      data() {
          return {
            path: '/home/news'
          }
      },
    //  生命周期函数
      created() {
        console.log('home created');
        // document.title = '首页'
      },
      destroyed() {
        console.log('home destroyed');
      },
      // 这两个函数activated、deactivated，只有该组件被保持了状态使用了keep-alive时，才是有效的
      activated() {
          this.$router.push(this.path)
      },
      // deactivated() {
      // },
      beforeRouteLeave(to,from,next) {
          this.path = this.$route.path;
          next()
      }
      // mounted() {
      //   console.log('mounted');
      // },
      // updated() {
      //   console.log('update');
      // }
    }
</script>

<style scoped>

</style>
