import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
