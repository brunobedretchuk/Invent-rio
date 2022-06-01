<template>
 <div class="container-fluid">
  
<router-view></router-view>
 </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;700&display=swap');
*{
  font-family: 'Manrope' , sans-serif;
}
.container-fluid{
  margin: 0;
  padding: 0;
}
</style>
