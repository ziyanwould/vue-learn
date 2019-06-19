<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="hellow world"/>
    <ev/>
  </div>
</template> 

<script>
import HelloWorld from './components/HelloWorld.vue'
import ev from './components/events.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev
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
