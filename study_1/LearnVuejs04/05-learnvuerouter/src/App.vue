<template>
  <div id="app">
    <h2>我是APP组件</h2>
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link v-bind:to="'/user/'+userId">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    传递一个对象-->
<!--    <router-link v-bind:to="{path: '/profile',query:{name:'why',age:18,height:1.88}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile, User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick(){
      // this.$router.replace('/home')
      this.$router.push('/home')
    },
    aboutClick(){
      // this.$router.replace('/about')
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 18,
          height: 1.87
        }
      })
    }
  }
}
</script>

<style>

</style>
