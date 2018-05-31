<template>
    <v-ons-page>
      
       <app-toolbar />
       <div class="content">
      <app-search :query.sync="query" placeholder="Type username "
      /> 
 <!-- show list when the search is finished -->
  <v-ons-list v-if="isSearchDone">
<v-ons-list-header>Repositories of {{query}}</v-ons-list-header>
      <v-ons-list-item v-for="repo in repos" :key="repo.id" v-if="repo">
        <div class="left">
          <img class="list-item__thumbnail" :src="image">
        </div>
        <div class="center">
          <span class="list-item__title">{{repo.name}}</span>
          <span class="list-item__subtitle">{{repo.description}}</span>
           <span class="list-item__subtitle">{{repo.updated_at}}</span>
 
 
 


        </div>
      </v-ons-list-item>
      </v-ons-list>
      <!-- end -->
      <div v-if="!isSearchDone">
      <v-ons-progress-circular indeterminate ></v-ons-progress-circular>
      </div>
       
       <empty-state :type="query" v-if="!repos.length"/>
       <error />
       <!-- v-if="" -->
     
</div>
       
  
      
    </v-ons-page>
</template>
<script>
import debounce from "lodash/debounce"
import { gitHub } from "./services/GitHub.js"
import AppToolbar from "./components/AppToolbar.vue"
import AppSearch from "./components/AppSearch.vue"
import EmptyState from "./components/EmptyState.vue"
import Error from "./components/Error.vue"

  export default{
   components:{
     AppToolbar,
     AppSearch,
     EmptyState,
     Error
    
   },
    data(){
      return{
        query:"",
        image:'',
       isSearchDone:true,
       repos:[]
      }
    },
methods: {
    getRepos: debounce(function () {

          //  this.isSearchDone = false;
       gitHub.getRepos(this.query)
        .then(response => {
           
          this.repos = response.data;
          console.log('see repos info',this.repos);
          // this.isSearchDone = true;
         this.repos.forEach(repo => {
         this.image = repo.owner.avatar_url;
         });
   
          
        })
        .catch(errors => {
          console.log(errors);
          if(errors.response === 404){
            this.repos =[]

          }
            // this.isSearchDone = true;
        }).finally(()=>{
          this.isSearchDone = true
        })
    }, 500)
  },
  watch: {
    query: function() {
    this.isSearchDone = false;
      this.getRepos()
     
    }
  }
  }
</script>
  
    // getRepos() {
    //   gitHub.getRepos(this.query).then(response => {
    //     console.log(response)
    //   })
    // }

    
  

  

