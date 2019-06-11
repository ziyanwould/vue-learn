import Vue from 'vue';
Vue.directive('n',{
    //初始化
    bind:function(el,binding){
        el.textContent = Math.pow(binding.value,2)
    },
    //数据更新做啥
    update:(el,binding)=>{
        el.textContent = Math.pow(binding.value,2)
    }
}) 