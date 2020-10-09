import React from "react";
import { Wrapper, BaseStyles } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <BaseStyles />
      <Wrapper direction="column">{children}</Wrapper>
    </>
  );
}
