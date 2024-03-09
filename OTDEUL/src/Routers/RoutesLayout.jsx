import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarLayout from "../Components/Sidebar/SidebarLayout";
import { useOpen } from "../ContextApi/OpenProvider";
import Footer from "../Components/Footer/Footer";
import Dashboard from "../Components/Dashboard/Dashboard";
import Header from "../Components/Header/Header";

function RoutesLayout() {
  const { open, setOpen } = useOpen();

  return (
    <>

      <div className="md:flex">
        
        <SidebarLayout open={open} setOpen={setOpen} />
        <div className="md:flex-1 md:ml-[100px]">
      <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RoutesLayout;
