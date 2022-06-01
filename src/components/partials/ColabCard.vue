<template>
  <div class="card" style="width: 20rem">
    <div class="d-flex justify-content-center p-3">
      <vue-gravatar :email='colaborator.email' class="avatar"> </vue-gravatar>
    </div>
    <div class="card-body">
      <h5 class="card-title" > <b>{{colaborator.name}}</b> </h5>
      <p class="card-text">
        {{colaborator.cargo}}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{colaborator.email}}</li>
      <li class="list-group-item">{{colaborator.telefoneSorted}}</li>
      <li class="list-group-item"><a href="#" @click.prevent='showEditModal' class="card-link">Editar</a></li>
    </ul>
    <edit-colab-modal v-if='showModal' @hide-modal='hideEditModal' @reset-modal="resetEditModal" :idProp='colaborator.id'
    ></edit-colab-modal>
    
  </div>
</template>

<script>
import EditColabModal from '../partials/EditColabModal.vue'
export default {
  components: {
    EditColabModal
  },
  props: ['colaborator'],
  data(){
    return{
      showModal: false
    }
  },
  methods:{
    showEditModal(){
      this.showModal = true;
    },
    hideEditModal(){
      this.showModal = false;
    },
     resetEditModal() {
      this.showModal = false;
      setTimeout(()=> this.showModal = true , 5)
    },
  }
};
</script>

<style scoped>
.avatar {
  width: 50%;
  border-radius: 100%;
}
</style>
