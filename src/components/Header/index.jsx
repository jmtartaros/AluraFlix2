/* eslint-disable react/prop-types */
import styled from "styled-components";
import BtnNav from "./Botones";
import Banner from "../Banner";
import { useLocation } from "react-router-dom";

const Navbar = styled.nav`
  width: 100%;
  min-height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: ${(props) => (props.Home ? "#1A1A1A" : "#03070B")};
`;

const Header = () => {
  // const { cambiarEstado } = props;
  const location = useLocation();
  return (
    <>
      <Navbar Home={location.pathname === "/"}>
        <img src="img/LogoMain.png" alt="logo" />
        <BtnNav />
      </Navbar>
      {location.pathname === "/" ? <Banner /> : null}
    </>
  );
};

export default Header;
