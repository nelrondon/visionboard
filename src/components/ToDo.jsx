import { useOverlay } from "../context/OverlayContext";
import { Backspace, BookMark, Check } from "./Icons";
import { ToDoNote } from "./ToDoNotes";

export default function ToDo({ habit, handler, setHabits }) {
  const { modal } = useOverlay();
  const { text, info, checked } = habit;
  const handleNote = () => {
    modal.componentToRender(<ToDoNote />, { habit, handler });
    modal.openModal();
  };

  const handleDelete = () => {
    setHabits((prev) => {
      return prev.filter((p) => p.text !== text);
    });
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            handler(e, text, info);
          }}
        />
        <div className="check">
          <Check />
        </div>
        <span>{text}</span>
      </label>
      <div className="buttons">
        <button className="btn-sec" onClick={handleNote}>
          <BookMark />
        </button>
        <button className="btn-sec" onClick={handleDelete}>
          <Backspace />
        </button>
      </div>
    </li>
  );
}
