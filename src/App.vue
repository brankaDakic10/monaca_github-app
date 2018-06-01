<template>
   <v-ons-navigator :page-stack="pageStack"
   @push-page="pushPage"
  
   ></v-ons-navigator>
     

</template>
<script>

import Home from "./components/Home.vue"

  export default{
   components:{
    Home
    
   },
    data(){
      return {
        pageStack:[ Home ]
      }
    },
methods: {
     pushPage(page){
    this.pageStack.push(page)
      },
}}
</script>
  
   
  

  

