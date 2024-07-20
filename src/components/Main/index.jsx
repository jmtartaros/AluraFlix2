import styled from "styled-components";
import Card from "../Card";
import { useContext } from "react";
import { VideoContext } from "../../Context";
import Tag from "./Tag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import Modal from "../Modal";

const MainContainer = styled.main`
  width: 100%;
  height: auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;
const ContainerCard = styled.div`
  width: 100%;
  height: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    border: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffffff;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: red;
  }
  /* @media screen and (min-width: 330px) and (max-width: 768px) {
    .swiper-slide {
      border: 1px solid red;
      padding: 5rem;
    }
  } */
`;

const Main = () => {
  const {
    videos,
    colorDelFondo,
    colores,
    handleShow,
    setEstadoBtn,
    estadoBtn,
  } = useContext(VideoContext);

  const { deleteVideo } = useContext(VideoContext);

  const generoDeVideos = videos.reduce((acc, video) => {
    (acc[video.genero] = acc[video.genero] || []).push({
      ...video,
      colorFondo: colorDelFondo(video.genero), // Asignar el color de fondo
    });
    return acc;
  }, {});

  const openModal = () => {
    setEstadoBtn(true);
  };
  const closeModal = () => {
    setEstadoBtn(false);
  };

  return (
    <>
      <MainContainer>
        {Object.keys(generoDeVideos).map((genero) => {
          const { colorFondo, colorLetra } =
            colores.find((color) => color.genero === genero) || {};
          return (
            <Container key={genero}>
              <Tag colorFondo={colorFondo} colorLetra={colorLetra}>
                <h2>{genero.toUpperCase()}</h2>
              </Tag>
              <ContainerCard>
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    500: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  scrollbar={true}
                  navigation={true}
                  loop={true}
                >
                  {generoDeVideos[genero].map((video) => (
                    <SwiperSlide key={video.id}>
                      <Card
                        {...video}
                        videoUrl={video.url}
                        handleShow={handleShow}
                        onDelete={deleteVideo}
                        open={openModal}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ContainerCard>
            </Container>
          );
        })}
      </MainContainer>
      <Modal isOpen={estadoBtn} onClose={closeModal} />
    </>
  );
};
export default Main;
