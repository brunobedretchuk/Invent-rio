<template>
    
<nav class="navbar navbar-dark navbar-expand-lg" id="nav">
  <div class="container-fluid d-flex justify-content-between" >
    <div class="d-flex">
        <router-link class="navbar-brand ms-2" to="/dashboard">
    <img src="../../assets/box.png" class='logo' alt="">
    </router-link>
    <span class="d-flex flex-column justify-content-center fs-3">{{getPageName}}</span>
   
    </div>
        <div class="d-flex me-2 gap-3 align-text-bottom">
            <span class="d-flex flex-column justify-content-center"> {{getLoggedUser}}   </span>
            <vue-gravatar :email='getLoggedUser' class="logo"> </vue-gravatar>
            <button class="btn btn-danger  btn-sm" @click="logout">Logout</button>
            </div>
  </div>
</nav>


</template>

<script>
export default {
    computed: {
         getPageName(){
        return this.$store.getters.getPageName;
    },
        getLoggedUser(){
            return localStorage.getItem('loggedUser');
        }
    },
    methods: {
         logout(){
             this.$store.commit('logout');
             this.$router.push('/')
         }
    }
    
}
</script>

<style scoped>
.logo{
    width: 40px;
    transition: .3s;
    border-radius: 100%;
}
.logo:hover{
    transform: scale(120%);
}

#nav{
   background-color: rgb(71, 194, 153);
   color: white;
}
#username{
    margin: 0px;
    vertical-align: ;
}
</style>