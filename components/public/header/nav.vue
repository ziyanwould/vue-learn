<template>
    <div class="m-nav">
     <ul class="nav">
         <li class="list">
             <nuxt-link to="/my">中住71</nuxt-link>
              <dl>
                  <dd><nuxt-link to="/my">我的订单</nuxt-link></dd>
                  <dd><nuxt-link to="/my">我的收藏</nuxt-link></dd>
                  <dd><nuxt-link to="/my">抵用劵</nuxt-link></dd>
                  <dd><nuxt-link to="/my">账户设置</nuxt-link></dd>
              </dl>
         </li>
         <li> 
             <nuxt-link to="/order">手机APP</nuxt-link>
         </li>
         <li class="list db">
             <nuxt-link to="/center">商家中心</nuxt-link>
         </li>
         <li class="list site">
             <nuxt-link to="/site">网站导航</nuxt-link>
         </li>
     </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>