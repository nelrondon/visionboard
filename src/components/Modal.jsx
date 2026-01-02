import React from "react";
import { useOverlay } from "../context/OverlayContext";
import "./Modal.css";

export const Modal = () => {
  const { modal } = useOverlay();
  const { modalRef, contentModal, modalProps } = modal;

  return (
    <dialog ref={modalRef} closedby="closerequest">
      {contentModal && React.cloneElement(contentModal, { ...modalProps })}
    </dialog>
  );
};
