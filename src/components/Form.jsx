import React from "react";

const Form = () => {
  return (
    <div className="container">
      <h2 className="modal-title">Cadastre-se</h2>
      <div className="row100">
        <div className="col">
          <div className="inputBox">
            <input type="text" required />
            <span className="text">First Name</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="col">
          <div className="inputBox">
            <input type="text" required />
            <span className="text">Last Name</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <div className="inputBox">
            <input type="text" required />
            <span className="text">Email</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="col">
          <div className="inputBox">
            <input type="password" required />
            <span className="text">Password</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </div>
  );
};

export default Form;
