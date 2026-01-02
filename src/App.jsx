import { useBoard } from "./context/BoardContext";

import { Flag, Plus } from "./components/Icons";
import Title from "./components/Title";
import QuarterSelector from "./components/QuarterSelector";
import ProgressBar from "./components/ProgressBar";
import HabitList from "./components/HabitList";
import { Modal } from "./components/Modal";
import { Footer } from "./components/Footer.jsx";

function App() {
  const {
    currentGoals,
    setDailyHabits,
    setQuarterlyGoals,
    quarterlyGoals,
    dailyRef,
    quarterlyRef,
  } = useBoard();

  return (
    <>
      <main className="board">
        <header className="header">
          <Title />
          <QuarterSelector />
          <ProgressBar
            ref={dailyRef}
            title="Hábitos Diarios"
            data={currentGoals.daily}
          />
          <ProgressBar
            ref={quarterlyRef}
            title={`Progreso ${new Date().getFullYear()}`}
            data={quarterlyGoals}
          />
        </header>
        <main className="habits">
          <HabitList
            ref={dailyRef}
            title="Hábitos Diarios"
            icon={<Plus />}
            habits={currentGoals.daily}
            setHabits={setDailyHabits}
            className="daily-habits"
          />
          <HabitList
            ref={quarterlyRef}
            title="Objetivos"
            icon={<Flag />}
            habits={currentGoals.quarterly}
            setHabits={setQuarterlyGoals}
            className="quarterly-habits"
          />
        </main>
      </main>
      <Footer />
      <Modal />
    </>
  );
}

export default App;
