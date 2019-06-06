<template>
  <div class="hello">
    <h1 v-bind:id="id">{{ msg }}</h1>
     <p v-html="msg1"></p>
     <div>
     {{number + 1}}
     </div>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  props: { //props 是传参的入口
    msg: String
  },
  data(){
    return{
        msg1:' <a href="tel:+86 18776007488">HelloWorld</a>',
        id:'txt',
        number:1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
