import React from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import "./styles.scss";

export default function App() {
  return (
    <div className="app__container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
