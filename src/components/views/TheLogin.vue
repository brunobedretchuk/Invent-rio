<template>
  <div>
    
<div class="row" v-if="modalShow">
      <login-modal
      @hide-modal="hideModal"
      > </login-modal>
    </div>

    
    <div class="row mx-2 mt-5">
      <div class="col-md-10 col-xl-6 offset-md-1 offset-xl-3 d-flex gap-2">
        <transition name="dev" appear>
          <div class="col d-flex align-items-center logoText"><h1>Dev</h1></div>
        </transition>
        <transition name="box" appear>
          <div class="col-1 boxDiv">
            <img src="../../assets/box.png" id="box" alt="" />
          </div>
        </transition>
        <transition name="inventory" appear>
          <div class="col-11 d-flex align-items-center logoText">
            <h1>Inventory</h1>
          </div>
        </transition>
      </div>
    </div>

    <div class="row mt-5 mx-2 d-flex justify-content-center">
      <transition name="image" appear>
        <div class="col-6 col-md-5 col-xl-3 imgDiv">
        </div>
      </transition>

      <transition name="form" appear>
        <div
          class="col-6 col-md-5 col-xl-3 formDiv p-3 d-flex flex-column justify-content-around"
        >
          <div class="row d-flex justify-content-between align-items-end mb-3">
            <div class="col"><h5 class="m-0">Acessar</h5></div>
            <div class="col"><p id="criarConta" class="m-0 text-end">
              ou <a href="" @click.prevent='showModal'>criar uma conta</a>
            </p></div>
          </div>
          <div class="row">
            <form @submit.prevent='submitLogin'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input v-model="emailLogin" type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input v-model="senhaLogin" type="password" class="form-control form-control-sm" id="exampleInputPassword1">
  </div>
  <div class="d-flex gap-3 align-items-center">
<button type="submit" class="btn btn-primary">Login</button>
  <button type="button" class="btn" @click="notAvailable"><img src="" alt="">Google Sign In</button>
  <a @click.prevent='notAvailable' href="">Esqueci minha Senha</a>
  </div>
</form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import LoginModal from '../partials/LoginModal.vue'
export default {
  components: {
    LoginModal
  },
  data(){
    return{
      modalShow: false,
      emailLogin: null,
      senhaLogin: null
    }
  },
  methods: {
    showModal(){
      this.modalShow = true;
    },
    hideModal(){
      this.modalShow = false;
    },
    submitLogin(){
      let user = {email: this.emailLogin , senha: this.senhaLogin};
      this.$store.commit('autenticar' , user);
      this.senhaLogin = null
      this.$router.push('/dashboard')
    },
    notAvailable(){
      window.alert('Desculpe, essa função está indisponível no momento!')
    }
  }
};
</script>

<style scoped>
.boxDiv {
  z-index: 10;
}
#box {
  width: 100%;
}
.logoText,
h1 {
  letter-spacing: 2px;
}


.imgDiv {
  padding: 0;
  border-radius: 20px 0px 0px 20px;
  z-index: 1;
  box-shadow: 2px 1px 3px 0px black;
  background-color: rgb(71, 194, 153);
  background-image: url('../../assets/loginImg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 50%;
  min-height: 400px;
}
.formDiv {
  border-radius: 0px 20px 20px 0px;

  border: 10px solid rgb(58, 194, 153);
  border-left: none;
  transform: translateX(-000px);
  box-shadow: 2px 1px 3px 0px black;
}

col-6,
img {
  width: 100%;
  border-radius: 20px 0px 0px 20px;
}
#criarConta{
  font-size: 0.8rem;
  vertical-align: text-bottom;
  }

/* Upper Div animation */
.dev-enter-from {
  transform: translateX(50px);
}
.dev-enter-active {
  transition: all 1.5s ease;
}

.box-enter-from {
  transform: scale(150%);
  
}
.box-enter-active {
  transition: all 1.5s ease-out;
}

.inventory-enter-from {
  transform: translateX(-380px) scaleX(0%);
}
.inventory-enter-active {
  transition: all 1.5s;
}

/* Lower Div Animation */
.image-enter-from {
  transform: translateX(50%);
}
.image-enter-active {
  transition: all 1.5s ease;
}

.form-enter-from {
  transform: translateX(-45%);
  opacity: 0.5;
}
.form-enter-active {
  transition: all 1.5s ease;
}
</style>
