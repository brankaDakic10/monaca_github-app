<template>
<v-ons-card>
      <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" alt="Onsen UI" style="width: 100%">
      <div class="title" >
       There are no repositorie {{changedType}} here
      </div>
      
    </v-ons-card>
</template>

<script>
import pluralize from 'pluralize'
export default {
  name:"EmptyState",

  props:{
     type:String
  },
  computed:{
      changedType(){
          return pluralize(this.type)
      }
  }
}
</script>

<style>

</style>
