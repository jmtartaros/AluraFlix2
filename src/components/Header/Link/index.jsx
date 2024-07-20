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
    border: 1px solid purple;
    color: purple;
    font-weight: 700;
    box-shadow: inset 0 0 18px rgba(128, 0, 128, 0.8);
  }
  @media screen and (min-width: 330px) and (max-width: 768px) {
    border: none;
    &.active {
      border: none;
      box-shadow: none;
    }
    img {
      display: block;
      width: 50px;
    }
    span {
      display: none;
    }
  }
`;

const LinkBtn = ({ url, children }) => {
  return <StyledNavLink to={url}>{children}</StyledNavLink>;
};
export default LinkBtn;
