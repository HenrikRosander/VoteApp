import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
  box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
`;

export const ImageContainer = styled.div`
  height: 10rem;
  width: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
`;

export const StyledImg = styled.img`
  object-fit: contain;
  width: 300px;
  padding-left: 10%;
  padding-top: 5%;
  border-radius: 1vh;
`;

export const VoteContainer = styled.div`
  display: flex;
  padding-left: 5%;
  padding-top: 2%;
`;
