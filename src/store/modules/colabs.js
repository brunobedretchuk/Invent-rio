export default {
    namespaced: true,
    state() {
      return {
        allColaborators: [{id: 3334,
        name: "Bruno Vinicius Bedretchuk",
        genero: "Masculino",
        nascimento: "1996-04-29",
        nascimentoSorted: "29/04/1996",
        telefone: "48 99180-4224",
        telefoneSorted: "(48) 99180-4224",
        cargo: "Back End Developer",
        email: "brunobedretchuk@gmail.com",
        CEP: "88160-648",
        cidade: "Biguaçu",
        estado: "SC",
        bairro: "Bom Viver",
        num: 210,
        logradouro: "Rua Amaro Damásio",
        complemento: "bl 1 ap 04",
        referencia: "miramar residencial",
        items: []
    } , {id: 1245,
            name: "Ayla Lobo de Souza",
            genero: "Feminino",
            nascimento: "1994-12-22",
            nascimentoSorted: "22/12/1994",
            telefone: "48 99141-2997",
            telefoneSorted: "(48) 99141-2997",
            cargo: "Front End Developer",
            email: "aylalobo2@gmail.com",
            CEP: "88160-648",
            cidade: "Biguaçu",
            estado: "SC",
            bairro: "Bom Viver",
            num: 210,
            logradouro: "Rua Amaro Damásio",
            complemento: "bl 1 ap 04",
            referencia: "miramar residencial",
            items: []}]
      };
    },
    mutations: {
        addColaborator(state , payload){
            state.allColaborators.push(payload);
        },
        editColaborator(state , payload){
            let colabIndex = state.allColaborators.findIndex(obj => obj.id === payload.id);
            let colabUpdated = payload;
            state.allColaborators.splice(colabIndex , 1 , colabUpdated)
        },
        removeColaborator(state , payload){
            let colabIndex = state.allColaborators.findIndex(obj => obj.id === payload.id);
            state.allColaborators.splice(colabIndex , 1)
        },
    },
    actions: {},
    getters: {
        getColaborators(state){
            return state.allColaborators;
        }
    }
  };