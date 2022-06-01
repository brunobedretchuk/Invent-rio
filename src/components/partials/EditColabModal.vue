<template>
  <div>
    <div @click="hideModal" class="modalBackground"></div>
    <div>
      <div class="col-md-8 col-xl-4 offset-md-2 offset-xl-4 p-3 modalWindow">
        <div class="row"><div class="col-4 offset-4"><vue-gravatar email='asd' class="avatar"> </vue-gravatar></div></div>
        <div class="row">
        <div class="col p-3 mb-4 bottomDiv">
          <h5>Informações Pessoais</h5>
          <Form @submit="submitForm">
            <div class="row mb-3">
              <div class="form-group col-6">
                <label for="name">Nome Completo:</label>
                <Field
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  :value="colaborator.name"
                  rules='isRequired'
                  
                />
                <ErrorMessage name='nomeCompleto' class="errors"/>
              </div>
              <div class="form-floating col-6 d-flex align-items-end">
                <Field as='select' class="btn generoDiv" id="genero" name='genero' :value="colaborator.genero" rules='isRequired'>
                  <option value="" selected>Qual seu Gênero?</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Prefere não responder">Prefiro não responder</option>
                </Field>
              </div>
                <div class="col-6 offset-6 text-center mt-0"><ErrorMessage name='genero' class="errors"/></div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-4">
                <label for="nascimento">Data de Nascimento</label>
                <Field
                  type="date"
                  class="form-control"
                  id="nascimento"
                  name="nascimento"
                  :value="colaborator.nascimento"
                  rules= 'isRequired|validDate'
                />
                <ErrorMessage name='nascimento' class="errors"/>
              </div>
              <div class="form-group col-4">
                <label for="telefone"
                  >Celular <small>99 99999-9999</small></label
                >
                <Field
                  type="tel"
                  class="form-control"
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone Celular"
                  pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                  :value="colaborator.telefone"
                />
              </div>
              <div class="form-floating col-4 d-flex align-items-end">
                <Field as='select' class="btn generoDiv" name='cargo' :value="colaborator.cargo" rules='isRequired'>
                  <option value="" selected>Qual seu cargo?</option>
                  <option value="Front End Developer">
                    Front End Developer
                  </option>
                  <option value="Back End Developer">Back End Developer</option>
                  <option value="Customer Assistance">
                    Customer Assistance
                  </option>
                  <option value="Project Director">Project Director</option>
                </Field>
              </div>
              <div class="col-4 offset-8 text-center mt-0"><ErrorMessage name='cargo' class="errors"/></div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-6 offset-3">
                <label for="email">E-mail</label>
                <Field
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  :value="colaborator.email"
                  rules='isRequired'
                />
              <ErrorMessage name='email' class="errors"/>
              </div>
            </div>

            <div class="row mb-3">
              <h5>Endereço</h5>
            </div>

            <div class="row mb-3 d-flex justify-content-center">
              <div class="form-group col-3">
                <label for="cep">CEP <small>99999-999</small></label>
                <Field
                  type="text"
                  class="form-control"
                  id="cep"
                  name="cep"
                  placeholder="CEP"
                  @change="pesquisaCEP"
                  :value="colaborator.CEP"
                  rules='isRequired'
                />
                <ErrorMessage name='cep' class="errors"/>
              </div>
              <div class="form-group col-4">
                <label for="cidade">Cidade</label>
                <Field
                  type="text"
                  class="form-control"
                  id="cidade"
                  name="cidade"
                  placeholder="cidade"
                  :value="colaborator.cidade"
                  rules='isRequired'
                />
              </div>
              <div class="form-group col-3">
                <label for="estado">estado</label>
                <Field
                  type="text"
                  class="form-control"
                  id="estado"
                  name="estado"
                  placeholder="estado"
                  :value="colaborator.estado"
                  rules='isRequired|estadoLength'
                />
                <ErrorMessage name='estado' class="errors"/>
              </div>
            </div>

            <div class="row mb-3">
              <div class="form-group col-4">
                <label for="bairro">Bairro</label>
                <Field
                  type="text"
                  class="form-control"
                  id="bairro"
                  name="bairro"
                  placeholder="bairro"
                  :value="colaborator.bairro"
                  rules='isRequired'
                />
                <ErrorMessage name='bairro' class="errors"/>
              </div>
              <div class="form-group col-2">
                <label for="num">Número</label>
                    <Field
                  type="number"
                  class="form-control"
                  id="num"
                  name="num"
                  placeholder="num"
                  :value="colaborator.num"
                  rules='positive'
                />
              </div>
              <div class="form-group col-6">
                <label for="logradouro">Logradouro</label>
                <Field
                  type="text"
                  class="form-control"
                  id="logradouro"
                  name="logradouro"
                  placeholder="logradouro"
                  :value="colaborator.logradouro"
                  rules='isRequired'
                />
                <ErrorMessage name='logradouro' class="errors"/>
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-6">
                <label for="num">Complemento</label>
                <Field
                  type="text"
                  class="form-control"
                  id="complemento"
                  name="complemento"
                  placeholder="complemento"
                  :value="colaborator.complemento"
                />
              </div>

              <div class="form-group col-6">
                <label for="referencia">Ponto de Referência</label>
                <Field
                  type="text"
                  class="form-control"
                  id="referencia"
                  name="referencia"
                  placeholder="referencia"
                  :value="colaborator.referencia"
                />
              </div>
            </div>

        <div class="row mt-5">
              <div class="d-flex gap-3 justify-content-center">
              <button type="submit" class="btn btn-primary">Salvar</button>
              <button type="button" @click="resetModal" class="btn btn-warning">Restaurar</button>
              <button type="button" @click="removeColab" class="btn btn-danger">Remover</button>
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
     address: {},
      colaborator: {
      }
    };
  },
  emits: ["hide-modal" , 'reset-modal'],
  props: ['idProp'],
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed:{
    getColab() {
      return this.$store.getters["colaborators/getColaborators"].find(
        (el) => el.id === this.idProp
      );
    },
  },
  methods: {
    async pesquisaCEP() {
      try {
        let x = await this.$http.get(
          `https://viacep.com.br/ws/${this.colaborator.CEP}/json/`
        );
        this.address = x.data;
        this.colaborator.cidade = this.address.localidade;
        this.colaborator.estado = this.address.uf;
        this.colaborator.bairro = this.address.bairro;
        this.colaborator.logradouro = this.address.logradouro;
        this.colaborator.complemento = this.address.complemento;
      } catch (e) {
        return e;
      }
    },
    loadInfo(){
        this.colaborator = this.getColab;

    },
    hideModal() {
      this.$emit("hide-modal");
    },
    resetModal() {
      this.$emit("reset-modal");
    },
    submitForm(value) {
      this.colaborator = value;
      let nasc = this.colaborator.nascimento;
      let telefone = this.colaborator.telefone;
      let telefoneSorted = `(${telefone.slice(0 , 2)}) ${telefone.slice(3)}`
      let nascimentoSorted = `${nasc.slice(8, 10)}/${nasc.slice(
        5,
        7
      )}/${nasc.slice(0, 4)}`;
      let colab = this.colaborator;
      colab.id = this.idProp;
      colab.nascimentoSorted = nascimentoSorted;
      colab.telefoneSorted = telefoneSorted;
      this.$store.commit('colaborators/editColaborator' , colab)
      this.hideModal();
    },
    removeColab() {
      this.$store.commit('colaborators/removeColaborator' , this.colaborator)
      this.hideModal();
    },
  },
  beforeMount(){
      this.loadInfo();
  }
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
  transform: translateY(-18px)

}
.errors {
    color: red;
    font-size: 0.8rem;
}
.form-group{
    height: 80px;
}
.avatar{
    border-radius: 100%;
}
</style>
