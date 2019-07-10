<template>
    <div> page is earch

     <ul>
      <li v-for="(item,idx) in $store.state.city.list" :key="idx">{{item}}</li>
     </ul>
    </div>
    
</template>
<script>
import axios from 'axios'
export default{
  layout: 'search',
  data() {
      return {
          list:[]
      }
  },
  async asyncData(){
      let self = this
      let { status, data: {list}} = await axios.get('http://localhost:3000/city/list')
      if(status == 200){
         return{
             list
         }
      }
  }
}
</script>
<style lang="css" scoped>
</style>