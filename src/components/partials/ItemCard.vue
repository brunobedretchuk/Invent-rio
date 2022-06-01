<template>
  <div class="box p-3" style="width: 25rem">
    <div class="row border-bottom">
      <div class="col-4 border-end">
        <img :src="item.urlFoto" class="avatar" alt="" />
      </div>
      <div
        class="col-8 d-flex flex-column align-items-start justify-content-start"
      >
        <h5 class="card-title mb-2">
          <b>{{ item.title }}</b>
        </h5>
        <p class="m-0"><b>Modelo:</b> {{ item.modelo }}</p>
        <p class="m-0"><b>Marca:</b> {{ item.marca }}</p>
        <div><b>Empréstimo: </b><span 
        class="px-2 emprestadoSpan"
        :class='{"text-bg-danger" : item.emprestado , "text-bg-success" : !item.emprestado}'
        >{{isEmprestado}}</span> </div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>Descrição:</b>{{ item.descricao }}</li>
      <li class="list-group-item">
        <a
          href="#"
          @click.prevent="showEditModal"
          class="card-link"
          >Editar</a
        >
      </li>
    </ul>
    <edit-item-modal
      v-if="showModal"
      @hide-modal="hideEditModal"
      @reset-modal="resetEditModal"
      :codeProp="item.code"
    ></edit-item-modal>
  </div>
</template>

<script>
import EditItemModal from "../partials/EditItemModal.vue";
export default {
  components: {
    EditItemModal,
  },
  props: ["item"],
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    isEmprestado(){
      let state = this.item.emprestado;
      if (state){
        return 'Indisponível'
      }
      return 'Disponível'
    }
  },
  methods: {
    showEditModal() {
      this.showModal = true;
      // let teste = {id: colaborator.id , name: 'natanael'}
      // this.$store.commit('colaborators/editColaborator' , teste)
    },
    hideEditModal() {
      this.showModal = false;
    },
    resetEditModal() {
      this.showModal = false;
      setTimeout(()=> this.showModal = true , 5)
    },
  },
};
</script>

<style scoped>
.box {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 1px 5px 1px gray;
}
.avatar {
  width: 100%;
  border-radius: 100%;
  height: 120px;
}
.emprestadoSpan{
  border-radius: 15px;
}
</style>
