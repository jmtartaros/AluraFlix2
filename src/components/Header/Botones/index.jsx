/* eslint-disable react/prop-types */
import styled from "styled-components";
import LinkBtn from "../Link";

const DivContainer = styled.div`
  width: 385.5px;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

const BtnNav = () => {
  // const handleNuevoVideoClick = () => {
  //   cambiarEstado(true); // Abre el modal
  // };
  return (
    <DivContainer>
      {/* <Btn>Inicio</Btn> */}
      {/* <Btn onClick={handleNuevoVideoClick}>Nuevo Video</Btn> */}

      <LinkBtn url="/">Home</LinkBtn>
      <LinkBtn url="newvideo">Nuevo Video</LinkBtn>
    </DivContainer>
  );
};
export default BtnNav;
