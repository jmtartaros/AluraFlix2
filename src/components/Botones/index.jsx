/* eslint-disable react/prop-types */
import styled from "styled-components";

const BtnStyles = styled.button`
  width: 180px;
  height: 54px;
  border-radius: 6px;
  background: none;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid #fff;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    border: 1px solid purple;
    color: purple;
    font-weight: 700;
    box-shadow: 0px 0px 5px 3px purple;
  }
`;

const Btn = ({ onClick, children }) => {
  return (
    <>
      <BtnStyles onClick={onClick}>{children}</BtnStyles>
    </>
  );
};
export default Btn;
