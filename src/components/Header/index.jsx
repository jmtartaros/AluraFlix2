/* eslint-disable react/prop-types */
import styled from "styled-components";
import BtnNav from "./Botones";
import Banner from "../Banner";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = styled.nav`
  width: 100%;
  min-height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  cursor: pointer;
  background-color: ${(props) => (props.Home ? "#1A1A1A" : "#03070B")};
  @media screen and (min-width: 330px) and (max-width: 768px) {
    .logo {
      width: 100px;
    }
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar Home={location.pathname === "/"}>
        <img
          src="img/LogoMain.png"
          alt="logo"
          onClick={handleClick}
          className="logo"
        />
        <BtnNav />
      </Navbar>
      {location.pathname === "/" ? <Banner /> : null}
    </>
  );
};

export default Header;
