import {APRI_MODAL, CHIUDI_MODAL} from './action'

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "PREMO_BOTTONE") {
    console.log("bottone premuto");
  }
  if (action.type === CHIUDI_MODAL) {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === APRI_MODAL) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: action.payload,
    };
  }

  throw new Error(`Nessuna funzione corrisponde a ${action.type}`)
  //return state; //il reducer necessita sempre di un return alla fine non accetta un state vuoto
};

export default reducer;
