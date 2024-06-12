import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  a {
    font-size: clamp(1rem, 1.3888888889vw, 1.25rem);

    &:is(:hover, :focus) {
      text-decoration: underline;
    }

    &.active {
      font-weight: 600;

      &:is(:hover, :focus) {
        text-decoration: none;
      }
    }
  }
`;

export default function MenuLink({ title, ...link }) {
  return (
    <Li>
      <NavLink {...link}>{title}</NavLink>
    </Li>
  );
}
