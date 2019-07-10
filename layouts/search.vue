<template>
    <!--这个是一个普通的组件-->
    <div class="layout-search">
        <h1>search layout header</h1>
        <nuxt/> <!--必须要有不不燃调用的组件将无法工作-->
        <footer>search layout footer</footer>
    </div>
</template>

<style lang="css" scoped>
.layout-search{
    color:red
}
</style>