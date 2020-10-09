import styled, { createGlobalStyle } from "styled-components";

export const breakpoints = {
  tablet: "@media screen and (min-width: 768px)",
  laptop: "@media screen and (min-width: 1024px)",
  desktop: "@media screen and (min-width: 1440px)",
};

export const BaseStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;

  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    max-width: 1000px;
  }
`;
