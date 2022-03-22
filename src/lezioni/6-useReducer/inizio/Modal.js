import React from "react";

const Modal = ({ modalContent, isModalOpen, openModal }) => {
  return (
    <section className={`modal-section ${isModalOpen ? "show-modal" : ""}`}>
      <div className="container modal-content">
        <h4>{modalContent || 'se sono vuoto'}</h4>
        <button className="button delete-button" onClick={openModal}>
          X
        </button>
      </div>
    </section>
  );
};

export default Modal;
