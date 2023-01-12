import { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const PartyContext = createContext(null);

const PartyProvider = ({ children }) => {
  // In a production app, you should check the accessibility settings to make sure we respect the reduced-motion preferences.
  const [animationsEnabled, toggleAnimationsEnabled] = useToggle(true);

  return (
    <PartyContext.Provider
      value={{
        animationsEnabled,
        toggleAnimationsEnabled,
      }}
    >
      {children}
    </PartyContext.Provider>
  );
};

export default PartyProvider;
