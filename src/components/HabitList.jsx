import { AddHabit } from "../AddHabit";
import { useOverlay } from "../context/OverlayContext";
import { PlusCircle } from "./Icons";
import ToDo from "./ToDo";

export default function HabitList({
  title,
  icon,
  habits = [],
  setHabits,
  ...props
}) {
  const { modal } = useOverlay();

  const handleToDoChange = (e, text, info) => {
    // if (!e.target) return;
    console.log("Manejador del checkbox");

    const checked = e.target.checked;
    setHabits((prev) => {
      const newHabits = prev.map((habit) => {
        if (habit.text === text) {
          return { ...habit, checked, info };
        }
        return habit;
      });
      return newHabits;
    });
  };

  const handleAddHabit = () => {
    modal.componentToRender(<AddHabit />, { setHabits });
    modal.openModal();
  };

  return (
    <section {...props}>
      <header>
        {icon}
        <h3>
          {title} ({habits.length})
        </h3>
        <button className="btn-sec" onClick={handleAddHabit}>
          <PlusCircle />
        </button>
      </header>
      <ul>
        {habits.map((habit, index) => (
          <ToDo
            key={index}
            habit={habit}
            handler={handleToDoChange}
            setHabits={setHabits}
          />
        ))}
      </ul>
    </section>
  );
}
