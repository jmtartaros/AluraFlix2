import styled from "styled-components";
import VideoIframe from "../../../Pages/Videos";
import { useContext } from "react";
import { VideoContext } from "../../../Context";

const Container = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  width: 100%;
  color: #fff;
  padding: 24px;
  font-size: 2rem;
  justify-content: space-around;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CardBanner = () => {
  const { showVideo } = useContext(VideoContext);
  return (
    <>
      {!showVideo && (
        <Container>
          <Content>
            <h1>Descubre nuevos sonidos, comparte tus favoritos.</h1>
          </Content>
        </Container>
      )}
      <Container>{showVideo && <VideoIframe video={showVideo} />}</Container>
    </>
  );
};
export default CardBanner;
