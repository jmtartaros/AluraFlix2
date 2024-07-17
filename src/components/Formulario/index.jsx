/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Btn from "../Botones";
import ListOpciones from "../ListOpcion";
import { useContext, useState } from "react";
import { VideoContext } from "../../Context";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const DivBtn = styled.div`
  display: flex;
  width: 573px;
  gap: 1rem;
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
const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
`;

// eslint-disable-next-line react-refresh/only-export-components
export const convertToEmbedUrl = (url) => {
  let embedUrl = url;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    embedUrl = `https://www.youtube.com/embed/${match[2]}`;
  }
  return embedUrl;
};

const Formulario = () => {
  const { addVideo, addGenero } = useContext(VideoContext);
  const [title, setTitle] = useState("");
  const [selection, setSelection] = useState("");
  const [image, setImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [artist, setArtist] = useState("");
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [error, setError] = useState(false);

  const manejoDeEnvio = (e) => {
    e.preventDefault();

    if (!selection && !nuevaCategoria.trim()) {
      setError(true);
      return;
    }

    const categoriaFinal =
      nuevaCategoria.trim() !== "" ? nuevaCategoria : selection;

    console.log({ title, selection, image, videoLink, artist });
    const videoData = {
      title,
      artist,
      genero: categoriaFinal,
      img: image,
      url: videoLink,
    };
    addVideo(videoData);

    if (nuevaCategoria.trim()) {
      addGenero(nuevaCategoria);
    }

    limpiarCampos();
  };
  console.log(manejoDeEnvio);
  const limpiarCampos = () => {
    setTitle("");
    setSelection("");
    setImage("");
    setVideoLink("");
    setArtist("");
    setNuevaCategoria("");
    setError(false);
  };
  const handleVideoLinkChange = (e) => {
    const inputUrl = e.target.value;
    const embedUrl = convertToEmbedUrl(inputUrl);
    setVideoLink(embedUrl);
  };
  return (
    <>
      <Form onSubmit={manejoDeEnvio}>
        <Section>
          <DivSection>
            <label htmlFor="titulo">Titulo</label>
            <Input
              type="text"
              id="titulo"
              placeholder="Ingrese un titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </DivSection>
          <DivSection>
            <label htmlFor="categoria">Genero</label>
            <Select
              value={selection}
              onChange={(e) => setSelection(e.target.value)}
              className={
                error && !selection && !nuevaCategoria.trim() ? "error" : ""
              }
            >
              <ListOpciones />
            </Select>
            {error && !selection && !nuevaCategoria.trim() && (
              <ErrorMessage>
                Seleccione un genero o ingrese uno nuevo
              </ErrorMessage>
            )}
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="img" className="imgLabel">
              Imagen
            </label>
            <Input
              type="url"
              id="img"
              className="imgInput"
              value={image}
              placeholder="El enlace es requerido"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </DivSection>
          <DivSection>
            <label htmlFor="video">Video</label>
            <Input
              type="url"
              id="video"
              value={videoLink}
              placeholder="Ingrese el enlace del video"
              onChange={handleVideoLinkChange}
            />
          </DivSection>
        </Section>
        <Section>
          <DivSection>
            <label htmlFor="artist">Artista</label>
            <Input
              required
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </DivSection>
          <DivSection>
            <label htmlFor="newcategory">Nueva Categoria</label>
            <Input
              type="text"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
            />
          </DivSection>
        </Section>
        <DivBtn>
          <Btn type="submit">Guardar</Btn>
          <Btn type="reset" onClick={limpiarCampos}>
            Limpiar
          </Btn>
        </DivBtn>
      </Form>
    </>
  );
};
export default Formulario;
