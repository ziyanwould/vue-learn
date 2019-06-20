<template lang="html">
    <div class="com">
        <slot name="b"></slot>
       
        components {{name}} {{age}}
        <br>
        <button class="buttom" type='button'  @click="$emit('patch',34)">发送到父组件</button>
        <slot name="b"></slot>
    </div>
</template>

<script>
export default{
 props:['age'],
 data(){
     return{
        name:'com'
     }
    
 }
 
}
</script>

<style lang="css">

</style>
