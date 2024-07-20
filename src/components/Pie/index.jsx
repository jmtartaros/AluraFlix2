import styled from "styled-components";

const PieStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 125px;
  background-color: var(--footer);
  color: #fff;
  gap: 1rem;
  span {
    font-size: 12px;
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    img {
      width: 100px;
    }
    span {
      font-size: 8px;
    }
  }
`;

const Pie = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return (
    <PieStyled>
      <img src="img/LogoMain.png" alt="Logo" />
      <span>Desarrollado por Jorge Tuchán {añoActual} </span>
    </PieStyled>
  );
};
export default Pie;
