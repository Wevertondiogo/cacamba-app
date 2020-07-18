import React, { useState } from "react";
import Modal from "react-modal";
import Form from "./Form.jsx";
Modal.setAppElement("#root");
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <main className="main-home">
      <div className="banner">
        <div className="banner__content">
          <h1 className="banner__content__title">Um site mestre!</h1>
          <div className="btn-group">
            <a
              href="#"
              className="btn-cadastro"
              onClick={() => setModalIsOpen(true)}
            >
              Cadastre-se
            </a>
            <a href="#" className="btn-contact">
              Contate-nos
            </a>
          </div>
          <Modal
            closeTimeoutMS={1000}
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="modal-x" onClick={() => setModalIsOpen(false)}>
              x
            </div>
            <Form />
            <button
              className="modal-btn-close"
              onClick={() => setModalIsOpen(false)}
            >
              fechar
            </button>
          </Modal>
        </div>
      </div>
    </main>
  );
};
export default Home;
