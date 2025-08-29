import React from "react";

import { ModalProps } from "../../types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  videoUrl,
}) => {
  if (!isOpen) return null; // Don't render anything if modal is closed

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        
      }}
      onClick={onClose} // close modal when clicking outside content
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "300px",
          maxWidth: "90%",
          paddingTop: "40px",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div style={{ display: "flex", position: "relative" }}>
          {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
          <button
            style={{
              position: "absolute",
              top: -35,
              right: -10,
              marginBottom: "20px",
              backgroundColor: "inherit",
              cursor: "pointer",
              border: "none",
              fontSize: 20,
            }}
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
