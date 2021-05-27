import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useStyles } from "./Layout.styles";

export default function Layout(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className="layout">
      <Header />
      <div className={classes.main_content}>{children}</div>
      <Footer />
    </div>
  );
}
