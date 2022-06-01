<template>
  <div class="container-fluid">
    <h2>Estatísticas do Sistema</h2>
    <div class="row d-flex justify-content-center gap-3 flex-wrap mb-3">
      <statistic-card
        :quantity="getColabQuantity"
        title="Colaboradores"
        url="data:image/png;base64,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"
      >
      </statistic-card>
      <statistic-card
        :quantity="getItemQuantity"
        title="Itens"
        url="https://img.icons8.com/ios/500/open-parcel.png"
      >
      </statistic-card>
      <statistic-card
        :quantity="getTotalBorrows"
        title="Empréstimos"
        url="https://cdn-icons-png.flaticon.com/512/5525/5525088.png"
      >
      </statistic-card>
      <statistic-card
        :quantity="getTotalValue"
        title="Patrimônio"
        url="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
      >
      </statistic-card>
    </div>
    <h2>Busca de Produtos</h2>
    <div class="row">
      <div class="form-group col-6 offset-3 mb-3">
        <input
          v-model="search"
          type="text"
          class="form-control"
          placeholder="Encontre o produto Desejado"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-center gap-3">
      <item-card v-for="item in getItems" :key="item.id" :item="item">
      </item-card>
    </div>
  </div>
</template>

<script>
import ItemCard from "../partials/ItemCard.vue";
import StatisticCard from "../partials/StatisticCard.vue";
export default {
  components: {
    ItemCard,
    StatisticCard,
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
            item.title.toLowerCase().startsWith(this.search.toLowerCase()) ||
            item.descricao
              .toLowerCase()
              .startsWith(this.search.toLowerCase()) ||
            item.marca.toLowerCase().startsWith(this.search.toLowerCase()) ||
            item.modelo.toLowerCase().startsWith(this.search.toLowerCase())
        );
      } else {
        return this.$store.getters["items/getItems"];
      }
    },
    getColabQuantity() {
      return this.$store.getters["colaborators/getColaborators"].length;
    },
    getItemQuantity() {
      return this.$store.getters["items/getItems"].length;
    },
    getTotalValue() {
      let itens = this.$store.getters["items/getItems"];
      let total = 0;
      for (let item of itens) {
        total += item.valorNum;
      }
      return total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      });
    },
    getTotalBorrows() {
      let itens = this.$store.getters["items/getItems"];
      let total = 0;
      for (let item of itens) {
        if(item.emprestado){
          total++
        }
      }
      return total;
    },
  },
};
</script>
