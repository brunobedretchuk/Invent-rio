<template>
  <div class="container-fluid">
    
    <h2>Busca de Produtos</h2>
    <div class="row">
      <div class="form-group col-6 offset-3 mb-3">
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Encontre o produto pelo código"
        />
      </div>
    </div>
    <div class="row mb-3 p-3">
        <div class="col-3 text-center"><h6>Patrimônio</h6></div>
        <div class="col-3"><h6>Título</h6></div>
        <div class="col-3"><h6>Categoria</h6></div>
        <div class="col-3"><h6>Emprestado para</h6></div>
        </div>    
    <div class="d-flex flex-column gap-3">
      <borrow-card v-for="item in getItems" :key="item" :itemProp="item">
      </borrow-card>
    </div>
  </div>
</template>

<script>
import BorrowCard from "../partials/BorrowCard.vue";

export default {
  components: {
      BorrowCard
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    getItems() {
      if (this.search) {
        let list = this.$store.getters["items/getItems"];

        return list.filter(
          (item) =>
            item.code.toLowerCase().startsWith(this.search.toLowerCase())
        );
      } else {
        return this.$store.getters["items/getItems"];
      }
    },
  },
};
</script>
