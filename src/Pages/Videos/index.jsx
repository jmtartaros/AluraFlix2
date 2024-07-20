/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import Error404 from "../../components/Error";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
    height: 300px;
    flex-direction: column;
  }
`;
const Section = styled.section`
  width: 50%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  iframe {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
const DivContenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(1px 1px 10px white);
  @media screen and (min-width: 330px) and (max-width: 768px) {
    h1,
    h3 {
      display: none;
    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 10px 0;
  font-weight: bold;
`;
const Artist = styled.h3`
  font-size: 32px;
  margin: 5px 0;
  font-weight: normal;
`;

const Genero = styled.h3`
  font-size: 24px;
  margin: 5px 0;
  font-style: italic;
`;

const VideoIframe = ({ video }) => {
  return !video ? (
    <Error404 />
  ) : (
    <Container>
      <DivContenido>
        <Title> {video.title} </Title>
        <Artist> {video.artist} </Artist>
        <Genero> {video.genero} </Genero>
      </DivContenido>
      <Section>
        <iframe
          src={`${video.url}`}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          auto
        ></iframe>
      </Section>
    </Container>
  );
};
export default VideoIframe;
