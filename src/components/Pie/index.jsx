import styled from "styled-components";

const PieStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 125px;
  background-color: var(--footer);
  color: #fff;
  position: relative;
  span {
    position: absolute;
    right: 5px;
  }
`;
const Pie = () => {
  return (
    <PieStyled>
      <img src="img/LogoMain.png" alt="Logo" />
      <span>Desarrollado por Jorge Tuchán</span>
    </PieStyled>
  );
};
export default Pie;
