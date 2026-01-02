import { useEffect } from "react";
import { useOverlay } from "../context/OverlayContext";
import { useRef } from "react";

export const ToDoNote = ({ habit, handler }) => {
  const { modal } = useOverlay();
  const formRef = useRef(null);
  const infoRef = useRef();

  const handleModalClose = () => {
    modal.closeModal();
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = infoRef.current.value;
    handler(e, habit.text, newInfo);
    modal.closeModal();
    formRef.current.reset();
  };

  useEffect(() => {
    infoRef.current.value = habit?.info;
  }, [modal.modalProps]);

  return (
    <main>
      <header>
        <h2>Bitácora</h2>
        <p>Gestiona tus tareas, notas y progreso diario de forma organizada.</p>
      </header>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          <span>Nota</span>
          <textarea
            ref={infoRef}
            name="info"
            placeholder="Ej. Ejecutar 5 series de 15 repeticiones de sentadillas."
            required
          ></textarea>
        </label>
        <div className="buttons">
          <button type="submit">Guardar</button>
          <button type="button" className="ghost" onClick={handleModalClose}>
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
};
