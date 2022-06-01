<template>
    <div class="row">
        <div class="col p-3 mb-4 bottomDiv">
          <h5>Informações Pessoais</h5>
          <Form @submit="submitForm">
            <div class="row mb-3">
              <div class="form-group col-6">
                <label for="nomeCompleto">Nome Completo:</label>
                <Field
                  type="text"
                  class="form-control"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  placeholder="Nome"
                  v-model="colaborator.name"
                  rules='isRequired'
                  
                />
                <ErrorMessage name='nomeCompleto' class="errors"/>
              </div>
              <div class="form-floating col-6 d-flex align-items-end">
                <Field as='select' class="btn generoDiv" id="genero" name='genero' v-model="colaborator.genero" rules='isRequired'>
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
                  v-model="colaborator.nascimento"
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
                  v-model="colaborator.telefone"
                />
              </div>
              <div class="form-floating col-4 d-flex align-items-end">
                <Field as='select' class="btn generoDiv" name='cargo' v-model="colaborator.cargo" rules='isRequired'>
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
                  v-model="colaborator.email"
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
                  v-model="colaborator.CEP"
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
                  v-model="colaborator.cidade"
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
                  v-model="colaborator.estado"
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
                  v-model="colaborator.bairro"
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
                  v-model="colaborator.num"
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
                  v-model="colaborator.logradouro"
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
                  v-model="colaborator.complemento"
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
                  v-model="colaborator.referencia"
                />
              </div>
            </div>

            <div class="d-flex gap-3 justify-content-center">
              <button type="submit" class="btn btn-primary">Salvar</button>
              <button type="button" @click="limpar" class="btn btn-danger">Limpar</button>
            </div>
          </Form>
        </div>
        <div class="loadDiv" v-if="showLoading"><img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt=""></div>
      </div>
</template>



<script>
import { Field , Form , ErrorMessage} from "vee-validate";
export default {
    components: {
       Field, 
       Form,
       ErrorMessage
    },
    data() {
    return {
      showLoading: false,
      address: '',
      colaborator: {
      name: "",      genero: "",
      nascimento: "",      telefone: "",      cargo: "",
      email: "",

      
      CEP: "",      cidade: "",      estado: "",
      bairro: "",      num: "",      logradouro: "",
      complemento: "",      referencia: ""
      }
    };
  },
  computed: {},
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
    submitForm() {
      let nasc = this.colaborator.nascimento;
      let telefone = this.colaborator.telefone;
      let telefoneSorted = `(${telefone.slice(0 , 2)}) ${telefone.slice(3)}`
      let nascimentoSorted = `${nasc.slice(8, 10)}/${nasc.slice(
        5,
        7
      )}/${nasc.slice(0, 4)}`;
      let colab = this.colaborator;
      colab.id = (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
      colab.nascimentoSorted = nascimentoSorted;
      colab.telefoneSorted = telefoneSorted;
      this.$store.commit('colaborators/addColaborator' , colab)
      this.showLoading = true
      setTimeout(() => {
          this.showLoading = false
          this.$router.push('/dashboard/colaborators')} , 2000)
},
    limpar(){
      for (let key in this.colaborator){
        this.colaborator[key] = '';
      }
    }
  },
}
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
  transform: translateY(-18px)

}
.errors {
    color: red;
    font-size: 0.8rem;
}
.form-group{
    height: 80px;
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