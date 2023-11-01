import { Outlet } from "react-router-dom";
import "../../src/index.css";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
