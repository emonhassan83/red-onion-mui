import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <h1>FOOTER</h1>
    </>
  );
};

export default Layout;
