<template>
 <v-ons-page>
        <v-ons-toolbar>
            <!-- for back -->
            <div class="left">
                <v-ons-back-button>Back</v-ons-back-button>
            </div>
            <!-- end -->
          
        </v-ons-toolbar>
      
          <div class="center">

                 <v-ons-list>
          <v-ons-list-header>Name:{{user.login}}</v-ons-list-header>
          <v-ons-list-item>Location:{{user.location}}</v-ons-list-item>
          <v-ons-list-item>Followers:{{user.followers}}</v-ons-list-item>
          <v-ons-list-item>Following:{{user.following}}</v-ons-list-item>
        </v-ons-list>
            </div>


      <div class="center">
       <v-ons-search-input placeholder="Input notes here..." 
          v-model="note">
        </v-ons-search-input>
             <v-ons-button modifier="small" @click="saveNotes">Save Note</v-ons-button>

      </div>
    
   
    </v-ons-page>
</template>

<script>
import { gitHub } from "./../services/GitHub.js"
export default {
   name:"Profile",
   props:{
       username:String
   },
   data(){
       return{
       user:{},
       note:""
       }
   },
   methods:{
     saveNotes(){
      localStorage.setItem('note',this.note)
      console.log( 'Saved note ',localStorage.getItem('note'))
      this.note=""
     }
   },
   created(){
       gitHub.getProfile(this.username)
       .then(({data})=>{
           this.user=data
      
       })
   }

}
</script>

<style>

</style>
