import { useRef } from "react";
import { useOverlay } from "./context/OverlayContext";

export const AddHabit = ({ setHabits }) => {
  const { modal } = useOverlay();
  const formRef = useRef();

  const modalClose = () => {
    if (formRef.current) formRef.current.reset();
    modal.closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newHabit = {
      ...data,
      quarter: data.quarter ? Number(data.quarter) : null,
      checked: false,
      info: "",
    };

    console.log(newHabit);

    setHabits((prev) => {
      const newH = [...prev, newHabit];
      console.log({ prev, newH });
      return newH;
    });
    modalClose();
  };

  return (
    <main className="add-habit">
      <header>
        <h2>Nuevo Objetivo</h2>
        <p>Ingresa el objetivo que deseas agregar</p>
      </header>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label>
          <span>Fija la Meta</span>
          <div className="quarters">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((q) => (
              <label key={q}>
                <input type="radio" name="quarter" value={q} />
                <span>T{q}</span>
              </label>
            ))}
          </div>
        </label>
        <label>
          <span>Objetivo</span>
          <input
            type="text"
            name="text"
            placeholder="Caminar, meditar, etc."
            required
          />
        </label>

        <div className="buttons">
          <button type="submit">Añadir</button>
          <button type="reset" className="ghost">
            Limpiar
          </button>
          <button type="button" className="ghost" onClick={modalClose}>
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
};
