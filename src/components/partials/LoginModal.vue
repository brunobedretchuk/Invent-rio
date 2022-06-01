<template>
  <div>
    <div @click="hideModal" class="modalBackground"></div>
    <div>
      <div class="col-md-8 col-xl-4 offset-md-2 offset-xl-4 p-3 modalWindow">
        <div class="border-bottom">
          <h3>Criação de Conta</h3>
        </div>
        <Form @submit="submitForm" action="">
          <div class="row my-2">
            <label for="email" class="form-label">E-mail</label>
          </div>
          <div class="row mb-2">
            <div class="col-6">
              <Field
                type="email"
                class="form-control"
                id="email"
                name="email"
                v-model="email"
                rules="isRequired"
              />
            </div>

            <div class="col-6 d-flex flex-wrap align-items-center">
              <ErrorMessage class="errors" name="email" />
            </div>
          </div>

          <div class="row my-2">
            <label for="password" class="form-label">Senha</label>
          </div>
          <div class="row mb-2">
            <div class="col-6">
              <Field
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="password"
              rules="isRequired|matchPasswords:@confirmPassword|passwordLength"
            />
            </div>

            <div class="col-6 d-flex flex-wrap align-items-center">
              <ErrorMessage class="errors" name="password" />
            </div>
          </div>
          
            <div class="row my-2">
            <label for="confirmPassword" class="form-label"
              >Confirmar Senha</label
            >
          </div>
          <div class="row mb-2">
            <div class="col-6">
               <Field
              type="password"
              class="form-control"
              id="confirmPassword"
              name="confirmPassword"
              v-model="confirmPassword"
              rules="isRequired"
            />
            </div>

            <div class="col-6 d-flex flex-wrap align-items-center">
              <ErrorMessage class="errors" name="confirmPassword" />
            </div>
          </div>
            
          <div class="col mt-3 gap-4 d-flex justify-content-center">
            <button class="btn btn-primary">Cadastrar</button>
            <button @click="limpar" type="button" class="btn btn-danger">
              Limpar
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  emits: ["hide-modal"],
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    hideModal() {
      this.$emit("hide-modal");
    },
    limpar() {
      this.email = null;
      this.password = null;
      this.confirmPassword = null;
    },
    submitForm() {
      let user = {
        email: this.email,
        senha: this.password,
      };
      this.$store.commit("registrarUser", user);
      this.limpar();
      this.hideModal();
    },
  },
};
</script>

<style scoped>

.modalBackground {
  background-color: black;
  opacity: 0.4;
  z-index: 99;
  height: 100%;
  width: 100%;
  position: absolute;
}
.modalWindow {
  top: 15%;
  z-index: 100;
  position: absolute;
  background-color: white;
  border-radius: 15px;
  border: 10px solid rgb(71, 194, 153);
  box-shadow: 1px 1px 1px 1px black;
}
.errors {
  color: red;
  font-size: 0.8rem;
}
</style>
