<template>
  <div>
    <div class="row">
      <div class="col p-3 mt-4 topDiv">
        <h1 class="mb-4">Olá!</h1>
        <h5>
          Para realizar o cadastro de um novo colaborador, basta preencher o
          formulário abaixo.
        </h5>
      </div>
    </div>
    <colab-form></colab-form>

    <div>
      
    </div>
  </div>
</template>

<script>
import ColabForm from '../partials/ColabForm.vue'
export default {
  components: {
    ColabForm
  }
};
</script>

<style scoped>
.topDiv {
  border-left: 3px solid rgb(71, 194, 153);
  border-top: 3px solid rgb(71, 194, 153);
  border-radius: 15px 15px 0px 0px;
}

</style>
