import styled from "styled-components";
import Formulario from "../../components/Formulario";

// import { useContext } from "react";
// import { VideoContext } from "../../Context";

const PageVideo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 1rem;
  padding: 24px 0;
`;

const DivEncabezado = styled.div`
  background: none;
  width: 500px;
  text-align: center;
  h1 {
    font-size: 60px;
    font-weight: bold;
  }
  span {
    font-size: 20px;
    font-weight: lighter;
  }
  h1,
  span {
    color: white;
  }
`;

const DivFormContainer = styled.div`
  width: 1170px;
  height: 867px;
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
`;

const NewVideo = () => {
  //   const { addVideo } = useContext(VideoContext);

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
