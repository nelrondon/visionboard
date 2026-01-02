import { useRef, useState } from "react";

export function useModal() {
  const modalRef = useRef(null);
  const [contentModal, setContentModal] = useState(null);
  const [modalProps, setModalProps] = useState({});

  const componentToRender = (Component, props = {}) => {
    setContentModal(Component);
    setModalProps(props);
  };

  const openModal = () => {
    if (!modalRef.current) return;
    modalRef.current.showModal();
  };

  const closeModal = () => {
    if (!modalRef.current) return;
    modalRef.current.close();
    setModalProps({});
  };

  return {
    contentModal,
    modalRef,
    modalProps,
    componentToRender,
    openModal,
    closeModal,
  };
}
