/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import FormStyle from "./Form";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(07, 13, 29, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContenedorModal = styled.div`
  width: 800px;
  min-height: 600px;
  background-color: #03122f;
  position: relative;
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Boton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    background-color: red;
  }
`;

const Modal = (props) => {
  const { isOpen, onClose } = props;
  if (!isOpen) return null;
  return (
    <>
      <Overlay>
        <ContenedorModal onClick={(e) => e.stopPropagation()}>
          <Boton onClick={onClose}>
            <img src="/src/assets/remove.png" alt="delete" />
          </Boton>
          <FormStyle />
        </ContenedorModal>
      </Overlay>
    </>
  );
};
export default Modal;
