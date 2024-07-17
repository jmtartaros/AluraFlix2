/* eslint-disable react/prop-types */
import styled from "styled-components";
import Main from "../../components/Main";
//import Modal from "../../components/Modal";
//import Formulario from "../../components/Formulario";
// import BtnNav from "../../components/Header/Botones";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Inicio = () => {
  //  const { cambiarEstado, estadoBtn } = props;
  return (
    <>
      {/* <BtnNav cambiarEstado={cambiarEstado} /> */}
      {/* <Modal estadoBtn={estadoBtn} cambiarEstado={cambiarEstado}>
          <Formulario />
        </Modal> */}
      <HomeContainer>
        <Main />
      </HomeContainer>
    </>
  );
};
export default Inicio;
