import { useContext } from "react";
import DockBar from "./DockBar";
import { DockBarContext } from "../contexts/DockBarContext";

const Layout = ({ children }) => {
  const { dockBar } = useContext(DockBarContext);
  return (
    <div style={{ maxWidth: "640px", width: "100%", margin: "0 auto" }}>
      {children}
      {dockBar === true ? <DockBar /> : null}
    </div>
  );
};

export default Layout;
