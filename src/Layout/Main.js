import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
  return (
    <div className="lg:w-[90%] mx-auto lg:mt-3 relative">
      <div className="fixed top-0 left-0 right-0 lg:w-[90%] mx-auto">
        <Navber></Navber>
      </div>
      <div className="lg:w-[93%] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
