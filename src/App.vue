<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="hellow world"/>
    <ev/>
     <com :age="age" @patch="msg">
       <!-- 插槽 -->
       <h1 slot="a" class="class">加首部</h1>
       <h1 slot="b" class="class">加首部</h1>
     </com>

      <!-- <Vuexx/> -->
      <pagea/>
      <pageb/>
  </div>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue'
import ev from './components/events.vue'
import com from './components/com.vue'
// import Vuexx from './components/vuex.vue'
import pagea from './components/a.vue'
import pageb from './components/b.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    // Vuexx,
    pagea,
    pageb
  },
  data:function(){
    return{
      age:18
    }
  },
  methods:{
    msg:function(ag){
      this.age++,
      window.console.log(ag)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
