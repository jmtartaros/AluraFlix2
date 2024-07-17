import styled from "styled-components";
import ListOpciones from "../../ListOpcion";
import Btn from "../../Botones";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 600px;
`;
const Section = styled.section`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 573px;
  /* height: 108px; */
  gap: 1rem;
  label {
    color: white;
    font-size: 18px;
  }
  .imgLabel,
  .imgInput {
    color: red;
    border-color: red;
    &::placeholder {
      color: red;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #626262;
  padding: 10px;
  height: 62px;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  background: none;
  color: #ffff;
  font-size: 1.5rem;
  &:focus {
    border-color: white;
    outline: none;
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #626262;
  height: 62px;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  background: none;
  color: #fff;
  &:focus {
    border-color: #fff;
    outline: none;
  }
  &.error {
    border-color: red;
  }
`;
const DivBtn = styled.div`
  display: flex;
  width: 600px;
  gap: 1rem;
  justify-content: space-between;
`;
const FormStyle = () => {
  const prevent = (e) => {
    e.preventDeFault();
  };
  return (
    <>
      <Formulario onSubmit={prevent}>
        <Section>
          <DivSection>
            <label htmlFor="titulo">Titulo</label>
            <Input type="text" id="titulo" />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="gen">Genero</label>
            <Select>
              <ListOpciones />
            </Select>
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="img">Imagen</label>
            <Input type="url" id="img" />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="url">Video</label>
            <Input type="url" id="url" />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="artist">Artist</label>
            <Input type="text" id="artist" />
          </DivSection>
        </Section>
        <DivBtn>
          <Btn type="submit">Guardar</Btn>
          <Btn type="reset">Limpiar</Btn>
        </DivBtn>
      </Formulario>
    </>
  );
};
export default FormStyle;
