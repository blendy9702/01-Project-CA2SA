import DockBar from "./DockBar";

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "640px", width: "100%", margin: "0 auto" }}>
      {children}
      <DockBar />
    </div>
  );
};

export default Layout;
