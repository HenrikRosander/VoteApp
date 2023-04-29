import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const EmptyCircle = styled.circle`
  /* fill: white; */
  :hover {
    fill: rgb(230, 230, 230);
  }
`;

export const StyledFaPlus = styled(FaPlus)`
  fill: rgb(43, 43, 43);
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  font-size: 30px;
  :hover {
    box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 15px 17px -11px rgba(0, 0, 0, 0.75);
    fill: rgb(33, 33, 33);
    background-color: #ededed;
  }
`;
