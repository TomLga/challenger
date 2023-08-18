<template>
    <div class="container">
        <h2>USER VIEW</h2>
        <div class="row" v-if="users">
            <div class="card" v-for=" user in users" style="width: 18rem;" :key="user.userID">
                <img src="https://i.postimg.cc/sfLgCSsg/LT-logo.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
                  <p class="card-text">
                    <span>Email: {{ user.emailAdd }}</span>
                   </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
    
        <div v-else class="row">
            <spinnerComp/>
        </div>
    </div>
 
</template>
<script>
  import spinnerComp from '../components/spinnerComp.vue'
    export default {
        computed:{
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers')
        },
      
        components:{
            spinnerComp
        }
    }
</script>

