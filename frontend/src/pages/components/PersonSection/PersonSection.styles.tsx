import styled from "styled-components";

export const PersonContainer = styled.div`
  padding-right: 10vw;
`;

export const StyledFaPlus = styled.p`
  display: flex;
  flex-direction: row;
  fill: rgb(43, 43, 43);
  background-color: #d2d2ff;
  border-radius: 50%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  :hover {
    cursor: pointer;
    box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    fill: rgb(33, 33, 33);
    background-color: #ededed;
  }
`;
