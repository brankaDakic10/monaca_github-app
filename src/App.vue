<template>
   <v-ons-navigator :page-stack="pageStack"
   @push-page="pushNewPage"></v-ons-navigator>
     

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
     pushNewPage(page){
    this.pageStack.push(page)
      },
}}
</script>
  
   
  

  

