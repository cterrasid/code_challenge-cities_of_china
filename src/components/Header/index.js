import React from "react";
import "./styles.scss";

const header = {
  title: "Cities of China",
};

export default function Header() {
  return (
    <header className="header__container">
      <h1 className="header__title">{header.title}</h1>
    </header>
  );
}
