import React from "react";

import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          {title && <h2 className="modal__title">{title}</h2>}
          <button className="modal__close-button" onClick={onClose}>
            ✖
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
