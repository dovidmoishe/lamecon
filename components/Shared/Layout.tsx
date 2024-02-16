import { Children } from "react";
import NavBar from "./NavBar/NavBar";

interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;