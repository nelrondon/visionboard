import { useEffect, useMemo } from "react";
import { useBoard } from "../context/BoardContext";

export default function QuarterSelector() {
  const actualQuarter = useMemo(
    () => Math.ceil((new Date().getMonth() + 1) / 3),
    []
  );
  const { setCurrentQuarter } = useBoard();

  useEffect(() => {
    console.log(`Trimestre actual: ${actualQuarter}`);
    setCurrentQuarter(actualQuarter);
  }, [actualQuarter, setCurrentQuarter]);

  return (
    <form className="select-quarters">
      <span>trimestres</span>
      <div className="quarters">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((q) => (
          <label key={q}>
            <input
              type="radio"
              name="quarter"
              value={q}
              defaultChecked={q === actualQuarter}
              onChange={() => setCurrentQuarter(q)}
            />
            <span>T{q}</span>
          </label>
        ))}
      </div>
    </form>
  );
}
