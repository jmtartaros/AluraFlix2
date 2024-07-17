/* eslint-disable react/prop-types */
import styled from "styled-components";
import CardBanner from "./CardBanner";
// import Card from "./Card";

const BannerStyles = styled.div`
  width: 100%;
  height: 832px;
  background-image: url("img/banner2.png");
  background-size: cover;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 255, 0.2);
    z-index: 1;
  }
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1220px) {
    height: 500px;
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <CardBanner />
    </BannerStyles>
  );
};
export default Banner;
