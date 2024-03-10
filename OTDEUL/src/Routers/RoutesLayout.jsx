import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarLayout from "../Components/Sidebar/SidebarLayout";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Dashboard from "../Components/Dashboard.jsx/Dashboard";
import MenuBar from "../Components/MenuBar/MenuBar";

function RoutesLayout() {

  return (
    <>
      <div className="md:flex">
        <SidebarLayout/>
        <div className="md:flex-1 md:ml-[100px]">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
          <div className="z-[99999] md:hidden block bg-white w-[100%] sticky bottom-0">
            <MenuBar/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default RoutesLayout;
