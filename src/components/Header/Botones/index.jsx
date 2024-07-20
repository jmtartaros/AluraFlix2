/* eslint-disable react/prop-types */
import styled from "styled-components";
import LinkBtn from "../Link";

const DivContainer = styled.div`
  width: 385.5px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  img {
    display: none;
  }

  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 150px;
    height: auto;
    img {
      display: block;
      width: 50px;
    }
    span {
      display: none;
    }
  }
`;

const BtnNav = () => {
  return (
    <DivContainer>
      <LinkBtn url="/">
        <img src="/img/home.png" alt="Home" />
        <span>Home</span>
      </LinkBtn>
      <LinkBtn url="newvideo">
        <img src="/img/add.png" alt="add" />
        <span>Nuevo Video</span>
      </LinkBtn>
    </DivContainer>
  );
};
export default BtnNav;
