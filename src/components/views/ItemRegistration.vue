<template>
  <div>
    <div class="row">
      <div class="col p-3 mt-4 topDiv">
        <h1 class="mb-4">Caro usuário,</h1>
        <h5>
          Para realizar o cadastro de um novo produto, basta preencher o
          formulário abaixo.
        </h5>
      </div>
    </div>
    <item-form></item-form>

    <div>
      
    </div>
  </div>
</template>

<script>
import ItemForm from '../partials/ItemForm.vue'
export default {
  components: {
    ItemForm
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
