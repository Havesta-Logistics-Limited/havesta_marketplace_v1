import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Banner";
import Features from "../Features";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Banner />
        <Features />
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
