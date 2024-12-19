import { createContext, useState } from "react";

export const DockBarContext = createContext();

export const DockBarProvider = ({ children }) => {
  const [dockBar, setDockBar] = useState(true);
  return (
    <DockBarContext.Provider value={{ dockBar, setDockBar }}>
      {children}
    </DockBarContext.Provider>
  );
};
