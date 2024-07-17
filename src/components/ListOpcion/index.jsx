import { useContext } from "react";
import styled from "styled-components";
import { VideoContext } from "../../Context";

const Option = styled.option`
  background: var(--footer);
`;

const ListOpciones = () => {
  const { generos } = useContext(VideoContext);
  return (
    <>
      <Option value="" disabled defaultValue="" hidden>
        Seleccione una categoria
      </Option>
      {generos.map((genero, i) => (
        <Option key={i} value={genero}>
          {genero}
        </Option>
      ))}
    </>
  );
};
export default ListOpciones;
