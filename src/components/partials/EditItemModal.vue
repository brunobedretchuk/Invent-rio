<template>
  <div>
    <div @click="hideModal" class="modalBackground"></div>
    <div>
      <div class="col-md-8 col-xl-4 offset-md-2 offset-xl-4 p-3 modalWindow">
        <div class="row">
          <div class="col-6 offset-3">
            <img class="image" :src="item.urlFoto" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col p-3 mb-4 bottomDiv">
            <h5>Dados Principais</h5>
            <Form @submit="submitForm">
              <div class="row mb-3">
                <div class="form-group col-6">
                  <label for="nomeCompleto">Título:</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    :value="item.title"
                    rules="isRequired"
                  />
                  <ErrorMessage name="title" class="errors" />
                </div>
                <div class="form-floating col-6 d-flex align-items-end">
                  <Field
                    as="select"
                    class="btn generoDiv"
                    id="categoria"
                    name="categoria"
                    :value="item.categoria"
                    rules="isRequired"
                  >
                    <option value="" selected>Selecione uma categoria</option>
                    <option value="Computador">Computador</option>
                    <option value="Periféricos">Periféricos</option>
                    <option value="Papelaria">Papelaria</option>
                    <option value="Webcams">Webcams</option>
                  </Field>
                </div>
                <div class="col-6 offset-6 text-center mt-0">
                  <ErrorMessage name="categoria" class="errors" />
                </div>
              </div>
              <div class="row mb-3">
                <h5>Dados Complementares</h5>
              </div>
              <div class="row mb-3">
                <div class="form-group col-4">
                  <label for="valorNum">Valor em R$</label>
                  <Field
                    type="number"
                    class="form-control"
                    name="valorNum"
                    :value="item.valorNum"
                    rules="positive"
                  />
                  <ErrorMessage name="valorNum" class="errors" />
                </div>
                <div class="form-group col-4">
                  <label for="marca">Marca</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="marca"
                    name="marca"
                    :value="item.marca"
                    rules="isRequired"
                  />
                  <ErrorMessage name="marca" class="errors" />
                </div>
                <div class="form-group col-4">
                  <label for="modelo">Modelo</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="modelo"
                    name="modelo"
                    :value="item.modelo"
                    rules="isRequired"
                  />
                  <ErrorMessage name="modelo" class="errors" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="form-group col-6">
                  <label for="patrimonio">Código Patrimonial</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="code"
                    name="code"
                    :value="item.code"
                    readonly
                  />
                </div>
                <div class="form-group col-6">
                  <label for="patrimonio">Colaborador Responsável</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="colaborator"
                    name="colaborator"
                    :value="item.colaborator"
                    readonly
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="form-group col">
                  <label for="urlFoto">URL da Foto</label>
                  <Field
                    type="text"
                    class="form-control"
                    id="urlFoto"
                    name="urlFoto"
                    :value="item.urlFoto"
                    rules="isRequired"
                  />
                  <ErrorMessage name="urlFoto" class="errors" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="form-group col description">
                  <label for="descricao">Descrição</label>
                  <Field
                    as="textarea"
                    cols="30"
                    rows="3"
                    type="text"
                    class="form-control"
                    id="descricao"
                    name="descricao"
                    :value="item.descricao"
                    rules="isRequired"
                  />
                  <ErrorMessage name="descricao" class="errors" />
                </div>
              </div>

              <div class="row mt-5">
                <div class="d-flex gap-3 justify-content-center">
                <button type="submit" class="btn btn-primary">Salvar</button>
                <button type="button" @click="resetModal" class="btn btn-warning">
                  Restaurar
                </button>
                <button type="button" @click="removeItem" class="btn btn-danger">
                  Remover
                </button>
              </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      item: {},
    };
  },
  emits: ["hide-modal" , 'reset-modal'],
  props: ["codeProp"],
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    getItem() {
      return this.$store.getters["items/getItems"].find(
        (el) => el.code === this.codeProp
      );
    },
  },
  methods: {
    loadInfo() {
      this.item = this.getItem;
    },

    hideModal() {
      this.$emit("hide-modal");
    },
    resetModal() {
      this.$emit("reset-modal");
    },
    submitForm(value) {
      this.item = value;
      let valor = this.item.valorNum.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      });
      let valorNum = parseFloat(this.item.valorNum);
      let item = this.item;
      item.valor = valor;
      item.valorNum = valorNum;
      this.$store.commit("items/editItem", item);
      this.hideModal();
    },
    removeItem(){
       this.$store.commit("items/removeItem", this.item);
      this.hideModal();
    }
  },
  beforeMount() {
    this.loadInfo();
  },
};
</script>

<style scoped>
.modalBackground {
  background-color: rgb(17, 17, 17);
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: 99;
  height: 100vh;
  width: 100%;
  position: fixed;
}
.modalWindow {
  z-index: 100;
  position: fixed;
  top: 10px;
  left: 0;
  background-color: white;
  border-radius: 15px;
  border: 10px solid rgb(71, 194, 153);
  box-shadow: 1px 1px 1px 1px black;
  overflow-y: auto;
  max-height: 100%;
}
.bottomDiv {
  border-radius: 0px 0px 15px 15px;
}
.generoDiv {
  border: 1px solid rgb(199, 199, 199);
  color: rgb(0, 0, 0);
  width: 100%;
  transform: translateY(-18px);
}
.errors {
  color: red;
  font-size: 0.8rem;
}
.form-group {
  height: 80px;
}
.image {
  width: 100%;
}
</style>
