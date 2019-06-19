<template>
    <div class="events">
        <button type="button" name="button" @click="msg('s',$event)">test</button>
         <button @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>

        <div class="parent" @click="parent">
            <p>parent</p>
            <p>parent</p>
            <p>parent</p>
            <div class="child" @click.stop="child">
                child
            </div>
        </div>
    </div>
</template>

<script>
export default{
 data:function(){
   return{
       counter:0
   }
 },
 methods:{
     msg:function(s,b){
       window.console.log(Math.random(),s,b) 
     },
     parent:function(){
        window.console.log('parent') 
     },
     child:function(){
         window.console.log('child') 
     }
 }
}
</script>

<style lang="css">

</style>
