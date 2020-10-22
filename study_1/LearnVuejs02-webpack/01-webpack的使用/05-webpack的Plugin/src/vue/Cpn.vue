<template>
    <div>
        <h2>我是Cpn组件的标题</h2>
        <p>我是Cpn组件的内容</p>
        <h3>{{name}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                name: 'Cpn123'
            }
        }
    }
</script>

<style scoped>

</style>