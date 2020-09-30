import React from "react";
import "./styles.scss";

const footer = {
  text: "Created by Clarette",
  year: "2020",
};

export default function Footer() {
  return (
    <footer className="footer__container">
      <strong>{footer.text}</strong>
      <small>{footer.year}</small>
    </footer>
  );
}
