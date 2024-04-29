import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "./../../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
