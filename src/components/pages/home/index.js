import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import color from "../../../styles/colors";

const Container = styled("div")`
  background-color: ${color.primary};
`;

const Title = styled("p")`
  color: ${color.secondary};
  &:hover {
    text-decoration: underline;
  }
`;

const Spin = keyframes`
form {
    transform: rotate(0deg)
}

to {
    transform: rotate(360deg)
}
`;

const SpyLine = styled("span")`
  display: inline-block;
  animation: ${props => props.speed}s ${Spin} linear infinite;
`;

const Home = () => {
  return (
    <Container>
      <Title>Home Page</Title>
      <SpyLine speed={0.5}>|</SpyLine>
    </Container>
  );
};

export default Home;
