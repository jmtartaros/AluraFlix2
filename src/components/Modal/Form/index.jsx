import styled from "styled-components";
import ListOpciones from "../../ListOpcion";
import Btn from "../../Botones";
import { useState } from "react";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 600px;
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    width: 100%;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
  }
`;
const Section = styled.section`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    width: 100%;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
  }
`;
const DivSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 573px;
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
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    height: 45px;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    height: 40px;
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
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    height: 45px;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    height: 40px;
  }
`;
const DivBtn = styled.div`
  display: flex;
  width: 600px;
  gap: 1rem;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    width: 100%;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
  }
`;
const FormStyle = () => {
  const [formValues, setFormValues] = useState({
    titulo: "",
    gen: "",
    img: "",
    url: "",
    artist: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  const validacion = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );
  const prevent = (e) => {
    e.preventDefault();
    console.log(validacion);
    return alert("Esto todavia esta en proceso...");
  };
  return (
    <>
      <Formulario onSubmit={prevent}>
        <Section>
          <DivSection>
            <label htmlFor="titulo">Titulo</label>
            <Input
              type="text"
              id="titulo"
              value={formValues.titulo}
              onChange={handleChange}
            />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="gen">Genero</label>
            <Select id="gen" value={formValues.gen} onChange={handleChange}>
              <ListOpciones />
            </Select>
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="img">Imagen</label>
            <Input
              type="url"
              id="img"
              value={formValues.img}
              onChange={handleChange}
            />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="url">Video</label>
            <Input
              type="url"
              id="url"
              value={formValues.url}
              onChange={handleChange}
            />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="artist">Artist</label>
            <Input
              type="text"
              id="artist"
              value={formValues.artist}
              onChange={handleChange}
            />
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
