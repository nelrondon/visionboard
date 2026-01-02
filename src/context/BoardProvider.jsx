import { useState, useMemo } from "react";
import { BoardContext } from "./BoardContext";
import { useRef } from "react";
import { useEffect } from "react";

export const BoardProvider = ({ children }) => {
  const dailyRef = useRef(null);
  const quarterlyRef = useRef(null);

  const getDay = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}`;
  };

  const [currentQuarter, setCurrentQuarter] = useState(null);
  const [dailyHabits, setDailyHabits] = useState(() => {
    const dailyHabits = JSON.parse(localStorage.getItem("dailyHabits"));
    const today = getDay();
    if (dailyHabits.date !== today) {
      return dailyHabits.habits.map((habit) => ({
        ...habit,
        checked: false,
      }));
    }
    return dailyHabits.habits;
  });
  const [quarterlyGoals, setQuarterlyGoals] = useState(() => {
    const quarterlyGoals = localStorage.getItem("quarterlyGoals");
    return quarterlyGoals ? JSON.parse(quarterlyGoals) : [];
  });

  const currentGoals = useMemo(() => {
    const daily = dailyHabits.filter(
      (habit) => habit.quarter === currentQuarter || !habit.quarter
    );
    const quarterly = quarterlyGoals.filter(
      (goal) => goal.quarter === currentQuarter || !goal.quarter
    );

    return {
      daily,
      quarterly,
    };
  }, [dailyHabits, quarterlyGoals, currentQuarter]);

  useEffect(() => {
    const dailyH = {
      date: getDay(),
      habits: dailyHabits,
    };
    localStorage.setItem("dailyHabits", JSON.stringify(dailyH));
    localStorage.setItem("quarterlyGoals", JSON.stringify(quarterlyGoals));
  }, [dailyHabits, quarterlyGoals]);

  return (
    <BoardContext.Provider
      value={{
        currentQuarter,
        dailyHabits,
        quarterlyGoals,
        currentGoals,
        dailyRef,
        quarterlyRef,
        setCurrentQuarter,
        setDailyHabits,
        setQuarterlyGoals,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
