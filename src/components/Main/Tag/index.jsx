/* eslint-disable react/prop-types */
import styled from "styled-components";

const Div = styled.div`
  width: 350px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorFondo || "gray"};
  color: ${(props) => props.colorLetra || "black"};
  border: none;
  border-radius: 1rem;
  margin: 0 5rem;
  padding: 2rem;
`;

const Tag = ({ children, colorFondo, colorLetra }) => {
  return (
    <>
      <Div colorFondo={colorFondo} colorLetra={colorLetra}>
        {children}
      </Div>
    </>
  );
};
export default Tag;
