/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  width: 180.4px;
  height: auto;
  border: 1px solid #fff;
  border-radius: 25px;
  background-color: var(--backColor);
  color: #fff;
  line-height: 2.5;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    border: 1px solid blue;
    color: blue;
    font-weight: 700;
    box-shadow: inset 0 0 18px rgba(0, 0, 255, 0.8);
  }
`;

const LinkBtn = ({ url, children }) => {
  return <StyledNavLink to={url}>{children}</StyledNavLink>;
};
export default LinkBtn;
