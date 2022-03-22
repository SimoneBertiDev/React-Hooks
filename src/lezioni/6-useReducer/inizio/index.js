import React, { useReducer } from "react";
import Modal from "./Modal";
import reducer from "./Reducer";
import {APRI_MODAL, CHIUDI_MODAL} from './action'

const initialSate = {
  isModalOpen: false,
  modalContent: "Sono un modelsss",
};

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialSate);

  // const tiPremo = () => {
  //   dispatch({ type: "PREMO_BOTTONE" });
  // };

  const apriModal = () => {
    dispatch({ type: APRI_MODAL , payload: "qui ce del test"});
  };

  const chiudiModal = () => {
    dispatch({ type: CHIUDI_MODAL });
  };
  // const openModal = (e) => {
  //   setIsModalOpen(!state.isModalOpen);
  // };
  return (
    <>
      <div>
        <h3>apri qui</h3>
        <button className="button" onClick={apriModal}>
          Show Modal
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        isModalOpen={state.isModalOpen}
        openModal={chiudiModal}
      />
    </>
  );
};

export default Index;
