import React from "react";
import { StyledButton } from "./styles";

export default function Button({ children, id = children, click }) {
  return (
    <StyledButton className="city__close" id={id} onClick={click} type="button">
      {children}
    </StyledButton>
  );
}
