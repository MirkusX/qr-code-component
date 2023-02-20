import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: blue;
  width: 25%;
  padding: 1em;
  border-radius: 10px;
  color: gray;
  box-shadow: 0px 0px 39px -14px rgba(0, 0, 0, 0.75);
  @media (max-width: 811px) {
    width: 90%;
  }
  ${(props) => {
    if (props.innerDiv)
      return `
    box-shadow: none;
    width: 70%;
    margin: 0 auto;
    padding: 0;
    @media (max-width: 811px) {
        width: 70%;
    }`;
  }}
`;

export const StyledImg = styled.img`
  border-radius: 10px;
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 811px) {
    align-items: flex-start;
    margin-top: 1em;
  }
`;

export const StyledH1 = styled.h1`
  color: white;
`;
