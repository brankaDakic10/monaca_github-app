<template>
    <v-ons-page>
      
       <app-toolbar />
       <div class="content">
      <app-search :query.sync="query" placeholder="Type username "
      />
     </div>
    </v-ons-page>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
  export default{
   components:{
     AppToolbar,
     AppSearch
   },
    data(){
      return{
        query:""
      }
    },
    methods: {
      alert() {
        this.$ons.notification.alert('This is an Onsen UI alert notification test.');
      }
    }
  };
</script>
