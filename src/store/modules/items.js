export default {
  namespaced: true,
  state() {
    return {
      allItems: [
        {
          code: '1234',
          title: "Notebook",
          categoria: "Computador",
          valor: "R$7.000,00",
          valorNum: 7000,
          urlFoto:
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/pt-br/pd-image-gallery/in3501nt-cnb-00055lf110-bk-large.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=554&qlt=100,0&resMode=sharp2&size=554,402",
          marca: "LeNovo",
          modelo: "d2-mhf5",
          descricao:
            "Placa de vídeo integrada Intel® Iris® Xe Graphics (para Intel® Core™ i7-1165G7)",
          emprestado: false,
          colaborator: ''
        },
        {
          code: '12347',
          title: "Headset",
          categoria: "Periféricos",
          valor: "R$200,00",
          valorNum: 200,
          urlFoto:
            "https://images.kabum.com.br/produtos/fotos/81132/81132_index_gg.jpg",
          marca: "HyperX",
          modelo: "Cloud Stinger",
          descricao:
            "Conexão headset - plugue de 3,5 mm (4 polos) + cabo de extensão - plugues de 3,5 mm estéreo e de microfone",
          emprestado: false,
          colaborator: ''
        },
        {
          code: '12334',
          title: "Teclado",
          categoria: "Periféricos",
          valor: "R$300,00",
          valorNum: 300,
          urlFoto:
            "https://samsungbr.vtexassets.com/arquivos/ids/337353-600-auto?width=600&height=auto&aspect=true",
          marca: "Logitech",
          modelo: "K380",
          descricao:
            "Conexão Bluetooth Easy-Switch para até 3 dispositivos",
          emprestado: false,
          colaborator: ''
        },
      ],
    };
  },
  mutations: {
    addItem(state, payload) {
      state.allItems.push(payload);
    },
    editItem(state, payload) {
      let itemIndex = state.allItems.findIndex(
        (obj) => obj.code === payload.code
      );
      let itemUpdated = payload;
      state.allItems.splice(itemIndex , 1 , itemUpdated)
    },
    removeItem(state, payload) {
      let itemIndex = state.allItems.findIndex(
        (obj) => obj.code === payload.code
      );
      state.allItems.splice(itemIndex , 1)
    },
  },
  actions: {},
  getters: {
    getItems(state) {
      return state.allItems;
    },
  },
};
