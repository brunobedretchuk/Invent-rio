<template>
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
              v-model="item.title"
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
              v-model="item.categoria"
              rules="isRequired"
            >
              <option value="" selected>Selecione uma categoria</option>
              <option value="Computador">Computador</option>
              <option value="Periféricos">Periféricos</option>
              <option value="Papelaria">Papelaria</option>
              <option value="Escritório">Escritório</option>
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
              v-model="item.valorNum"
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
              v-model="item.marca"
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
              v-model="item.modelo"
              rules="isRequired"
            />
            <ErrorMessage name="modelo" class="errors" />
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
              v-model="item.urlFoto"
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
              v-model="item.descricao"
              rules="isRequired"
            />
            <ErrorMessage name="descricao" class="errors" />
          </div>
        </div>

        <div class="d-flex gap-3 justify-content-center">
          <button type="submit" class="btn btn-primary">Salvar</button>
          <button type="button" @click="limpar" class="btn btn-danger">
            Limpar
          </button>
        </div>
      </Form>
    </div>
    <div class="loadDiv" v-if="showLoading"><img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt=""></div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      showLoading: false,
      item: {
        title: "",
        categoria: "",
        valorNum: "",
        urlFoto: "",
        marca: "",
        modelo: "",
        descricao: "",
      },
    };
  },
  computed: {},
  methods: {
    submitForm() {
      let code = (
        performance.now().toString(36) + Math.random().toString(36)
      ).replace(/\./g, "");
      let emprestado = false;
      let valor = this.item.valorNum.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      });
      let valorNum = parseFloat(this.item.valorNum);
        let item = this.item;
        item.code = code;
        item.emprestado = emprestado;
        item.valor = valor;
        item.valorNum = valorNum;
        item.colaborator = '';
        this.$store.commit('items/addItem' , item)
        this.showLoading = true
        setTimeout(() => {
          this.showLoading = false
          this.$router.push('/dashboard/inventory')} , 2000)
    },
    limpar() {
      for (let key in this.item) {
        this.item[key] = "";
      }
    },
  },
};
</script>

<style scoped>
.bottomDiv {
  border-bottom: 3px solid rgb(71, 194, 153);
  border-right: 3px solid rgb(71, 194, 153);
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
.description {
  height: unset;
}
textarea {
  resize: none;
  overflow-y: auto;
}
.loadDiv{
  width: 100px;
  position: fixed;
  top: 50%;
  left: 53%;
  z-index: 100;
}
.loadDiv img{
  width: 100%;
}
</style>
