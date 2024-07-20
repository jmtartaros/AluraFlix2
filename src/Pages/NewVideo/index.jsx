import styled from "styled-components";
import Formulario from "../../components/Formulario";

const PageVideo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 1rem;
  padding: 24px 0;
  @media screen and (min-width: 330px) and (max-width: 768px) {
    padding: 0 1.3rem;
  }
`;

const DivEncabezado = styled.div`
  background: none;
  width: 500px;
  text-align: center;
  color: #fff;
  h1 {
    font-size: 60px;
    font-weight: bold;
  }
  span {
    font-size: 20px;
    font-weight: lighter;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 32px;
    }
    span {
      font-size: 18px;
    }
  }
`;

const DivFormContainer = styled.div`
  width: 1170px;
  height: 867px;
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    width: 768px;
    height: 670px;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
  }
`;

const Div = styled.div`
  padding: 24px 0;
  border-bottom: 4px solid #262626;
  border-top: 4px solid #262626;
  h2 {
    font-size: 36px;
    font-weight: bolder;
    color: #fff;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    h2 {
      font-size: 24px;
      text-align: center;
    }
  }
`;

const NewVideo = () => {
  return (
    <>
      <PageVideo>
        <DivEncabezado>
          <h1>NUEVO VIDEO</h1>
          <span>
            Complete el formulario para crear una nueva tarjeta de video
          </span>
        </DivEncabezado>
        <DivFormContainer>
          <Div>
            <h2>Crear Tarjeta</h2>
          </Div>
          <Formulario />
        </DivFormContainer>
      </PageVideo>
    </>
  );
};
export default NewVideo;
