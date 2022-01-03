import React from "react";
import { ImCross } from "react-icons/im";

const Modal = () => {
  return (
    <div>
      <div className="cross-container">
        <ImCross className="cross" />
      </div>

      <h1 className="modal-heading">Modal Content</h1>
      <p className="modal-content">
        One Piece is a Japanese manga series written and illustrated by Eiichiro
        Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly
        Shōnen Jump since July 1997, with its individual chapters compiled into
        101 tankōbon volumes as of December 2021
      </p>
    </div>
  );
};

export default Modal;
