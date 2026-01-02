export default function ProgressBar({ ref, title, progress = 0, data = [] }) {
  const numsChecked = data.filter((habit) => habit.checked).length;
  const progressData = data.length > 0 ? (numsChecked / data.length) * 100 : 0;

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="progress-bar" onClick={handleClick}>
      <header>
        <span>
          {title} ({numsChecked}/{data.length})
        </span>
        <output>{(progressData || progress).toFixed(1)}%</output>
      </header>
      <div className="bar">
        <div
          className="progress"
          style={{ width: `${progressData || progress}%` }}
        ></div>
      </div>
    </div>
  );
}
