<template>
  <div class="container-fluid">
    <h1>Colaborators</h1>
    <div class="row"><div class="form-group col-6 offset-3 mb-3">
        <input v-model="search" type="text" class="form-control" placeholder="pesquise colaboradores pelo nome"></div></div>
    <div class="d-flex flex-wrap justify-content-center gap-3">
      <colab-card
        v-for="colab in getColaborators"
        :key="colab.id"
        :colaborator="colab"
      >
      </colab-card>
    </div>
  </div>
</template>

<script>
import ColabCard from "../partials/ColabCard.vue";
export default {
  components: {
    ColabCard,
  },
  data(){
      return{
          search: '',
      }
  },
  computed: {
    getColaborators() {
      if(this.search){
        let list = this.$store.getters["colaborators/getColaborators"];
          
          
          
          return list.filter(item=> item.name.toLowerCase().startsWith(this.search.toLowerCase()))
      } else{
          return this.$store.getters["colaborators/getColaborators"];
      }
    },

  },
};
</script>
