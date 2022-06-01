import { createStore } from "vuex";
import colabsModule from './modules/colabs.js';
import itemsModule from './modules/items.js';


const store = createStore({
  modules: {
    colaborators: colabsModule,
    items: itemsModule
  },
  state() {
    return {
      autenticado: false,
      listaDeUsers: [{ email: "abc@gmail.com", senha: "123" }],
      loggedUser: null,
      activePage: "inventory",
    };
  },
  mutations: {
    autenticar(state, payload) {
      const validaUser = state.listaDeUsers.filter(
        (user) => user.email === payload.email && user.senha === payload.senha
      );
      if (validaUser.length > 0) {
          state.autenticado = true;
          state.loggedUser = payload.email;
          localStorage.setItem("autenticado", true);
          localStorage.setItem("loggedUser", state.loggedUser);
      } else {
        console.log("fail");
      }
    },
    logout(state) {
      localStorage.removeItem("autenticado");
      localStorage.removeItem("loggedUser");
      state.loggedUser = null;
      state.autenticado = false;
    },
    registrarUser(state, payload) {
      state.listaDeUsers.push(payload);
    },
    setActivePage(state, payload) {
      state.activePage = payload;
    },
  },
  getters: {
    getPageName(state) {
      if (state.activePage == "inventory") {
        return "Inventário";
      } else if (state.activePage == "registeritem") {
        return 'Cadastro de Produtos';
      } else if (state.activePage == "actions") {
        return 'Relação de Empréstimos';
      }else if (state.activePage == "registercolab") {
        return 'Cadastro de Colaboradores';
      }else if (state.activePage == "colaborators") {
        return 'Lista de Colaboradores';
      }
    },
  },
});

export default store;
