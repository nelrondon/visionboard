import { getDateString } from "../utils/libs";

export default function Title() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="header-title">
      <h1>VISIONBOARD {currentYear}</h1>
      <span>{getDateString()}</span>
    </div>
  );
}
