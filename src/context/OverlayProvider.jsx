import { useModal } from "../hooks/useModal.js";
import { OverlayContext } from "./OverlayContext.jsx";

export const OverlayProvider = ({ children }) => {
  const modal = useModal();

  return (
    <OverlayContext.Provider value={{ modal }}>
      {children}
    </OverlayContext.Provider>
  );
};
