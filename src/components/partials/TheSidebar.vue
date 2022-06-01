<template>
  <div class="main">
    <nav-bar> </nav-bar>
    <div class="row mt-5 d-flex align-items-start">
      <transition name="side" appear mode="out-in">
        <div v-if="showSideBar" class="col-sm-2 d-flex flex-column sideBar">
          <div class="sideSection p-2">
            <h5>Geral</h5>

            <div class="d-flex flex-column my-2">
              <div
                class="subSideSection text-center"
                :class="{ activeSubSideSection: getActivePage === 'inventory' }"
              >
                <button @click="changeActivePage('inventory')">
                  <router-link to="/dashboard"> Inventário</router-link>
                </button>
              </div>
            </div>
          </div>

          <div class="sideSection py-1">
            <h5>Produtos</h5>

            <div class="d-flex flex-column my-2 gap-2">
              <div
                class="subSideSection text-center"
                :class="{
                  activeSubSideSection: getActivePage === 'registeritem',
                }"
              >
                <button @click="changeActivePage('registeritem')">
                  <router-link to="/dashboard/registeritem"
                    >Cadastrar</router-link
                  >
                </button>
              </div>
            </div>
            <div
              class="subSideSection text-center"
              :class="{ activeSubSideSection: getActivePage === 'actions' }"
            >
              <button @click="changeActivePage('actions')">
                <router-link to="/dashboard/actions">Empréstimos</router-link>
              </button>
            </div>
          </div>

          <div class="sideSection py-1">
            <h5>Colaboradores</h5>

            <div class="d-flex flex-column my-2 gap-2">
              <div
                class="subSideSection text-center"
                :class="{
                  activeSubSideSection: getActivePage === 'registercolab',
                }"
              >
                <button @click="changeActivePage('registercolab')">
                  <router-link to="/dashboard/registercolab"
                    >Cadastrar</router-link
                  >
                </button>
              </div>

              <div
                class="subSideSection text-center"
                :class="{
                  activeSubSideSection: getActivePage === 'colaborators',
                }"
              >
                <button @click="changeActivePage('colaborators')">
                  <router-link to="/dashboard/colaborators">Listar</router-link>
                </button>
              </div>
            </div>
          </div>

          <div class="offset-5 col-3">
            <button @click="showHideSideBar" class="btn btn-sm showHideButton">
              {{ buttonText }}
            </button>
          </div>
        </div>
        <span class="mb-3" v-else-if="!showSideBar"
          ><button
            
            @click="showHideSideBar"
            class="btn btn-sm showHideButton"
          >
            {{ buttonText }}
          </button></span
        >
      </transition>

      <div class="col m-3 mt-0 p-4 text-center childComponentDiv">
        <router-view v-slot='slotProps'>
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"> </component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      showSideBar: true,
    };
  },
  computed: {
    getActivePage() {
      return this.$store.state.activePage;
    },

    buttonText() {
      if (this.showSideBar == true) {
        return "Ocultar";
      } else {
        return "Mostrar Menu";
      }
    },
  },
  methods: {
    changeActivePage(payload) {
      this.$store.commit("setActivePage", payload);
    },
    showHideSideBar() {
      this.showSideBar = !this.showSideBar;
    },
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.topBar {
  height: 3rem;
  background-color: rgb(71, 194, 153);
  width: 100%;
}

.sideBar {
  background-color: rgb(71, 194, 153);
  border-radius: 0px 10px 10px 0px;
  padding: 1rem;
  box-shadow: 0px 1px 5px 1px black;
}

.sideSection {
  color: white;
  margin-bottom: 1rem;
}
.subSideSection {
  padding: 5px;
  color: white;
  transition: all 0.3s;
  border-radius: 10px;
}
.subSideSection:hover {
  background-color: rgb(85, 226, 179);
}
.activeSubSideSection {
  background-color: rgb(85, 226, 179);
}
.subSideSection:leave {
  border-left: 0px solid rgb(85, 226, 179);
}

.subSideSection button {
  background: none;
  border: none;
  color: inherit;
}

.showHideButton {
  color: white;
  background-color: rgb(85, 226, 179);
}

.childComponentDiv{
    background-color: rgb(238, 238, 238);
    border-radius: 15px;
}

#box {
  width: 100%;
}

/* Animations */
/* sidebar animations */
.side-enter-from {
  transform: translateX(-100%);
}
.side-enter-active {
  transition: all 0.5s ease;
}
.side-leave-to {
  transform: translateX(-110%);
}
.side-leave-active {
  transition: all 0.5s ease;
}
/* Route Animations */
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.25s ease-out;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.25s ease-in;
}
</style>
