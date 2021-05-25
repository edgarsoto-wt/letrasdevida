import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
