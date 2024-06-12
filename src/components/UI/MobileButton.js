import styled from "styled-components";

const Button = styled.button`
  display: block;
  width: clamp(1.75rem, 4.16vw, 2rem);
  aspect-ratio: 1/1;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--white);
    pointer-events: none;
  }

  @media only screen and (min-width: 62rem) {
    display: none;
  }
`;

export default function MobileButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}
