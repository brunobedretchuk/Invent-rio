<template>
  <div class="box p-3" >
    <div class="row">
      <div class="col-3 border-end">
        <p>{{item.code}}</p>
      </div>
      <div class="col-3 border-end">
        <p>{{item.title}}</p>
      </div>
      <div class="col-3 border-end ">
         <p>{{item.categoria}}</p>
      </div>
      <div class="col-3">
         <div class="form-floating d-flex align-items-end">
            <select
              class="selector"
              id="categoria"
              name="categoria"
              v-model="item.colaborator"
              @change="borrow"
            >
              <option value="" >Disponível</option>
              <option v-for="colab in getColabs" :key="colab.id" :value="colab.name">{{colab.name}}</option>
              
            </select>
          </div>
      </div>
      
    </div>
    </div>
</template>

<script>

export default {
  props: ["itemProp"],
  data() {
    return {
      item: ''
    };
  },
  computed: {
    getColabs(){
        return this.$store.getters['colaborators/getColaborators'];
    }
  },
  methods: {
    loadItemInfo(){
        this.item = this.itemProp;
    },
    borrow(){
        if(this.item.colaborator){
            this.item.emprestado = true;
            let itemUpdated = this.item;
            console.log(itemUpdated)
            this.$store.commit('items/editItem' , itemUpdated)
        } else{
            this.item.emprestado = false;
            let itemUpdated = this.item;
            console.log(itemUpdated)
            this.$store.commit('items/editItem' , itemUpdated)
            }
    }
  },
  beforeMount(){
      this.loadItemInfo();
  }
};
</script>

<style scoped>
p{
    margin: 0;
}
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
.selector{
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgb(194, 194, 194);
    padding: 2px;
    text-align: center;
    font-size: 0.75rem;
}
</style>
