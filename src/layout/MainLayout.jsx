import { Outlet } from "react-router";
import Navbar from "../page/shared/Navbar";
import Footer from "../page/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
