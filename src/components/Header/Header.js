import styled from "styled-components";
import Logo from "./Logo";
import MenuLink from "../UI/MenuLink";
import { Link } from "react-router-dom";
import MobileButton from "../UI/MobileButton";

const menuLinks = [
  {
    title: "Home",
    to: "/",
    "aria-label": "Home page",
  },
  {
    title: "Portfolio",
    to: "/portfolio",
    "aria-label": "Recent projects and portfolio",
  },
  {
    title: "Contact",
    to: "/contact",
    "aria-label": "Contact and feedback form",
  },
];

const HeaderContainer = styled.header`
  padding: clamp(0.5rem, 3.47vw, 3.125rem) clamp(0.5rem, 3.47vw, 3.125rem) 0;

  .container {
    display: flex;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    width: min(100%, 113.75rem);
    background: var(--white-10);
    border-radius: 10rem;
    -webkit-backdrop-filter: blur(3rem);
    backdrop-filter: blur(3rem);

    padding: 1rem;
    gap: 1rem;

    @media only screen and (min-width: 62rem) {
      display: grid;
    }
  }

  .header__contact {
    justify-self: flex-end;
    display: none;

    @media only screen and (min-width: 48rem) {
      display: block;
    }
  }

  .menu {
    display: none;
    gap: clamp(1rem, 3.4722222222vw, 3.125rem);
    padding: 0;
    margin: 0;

    @media only screen and (min-width: 62rem) {
      display: flex;
    }
  }
`;

export default function Header({ className = null, setShowMenu }) {
  return (
    <HeaderContainer className={className}>
      <div className="container">
        <Logo />

        <menu className="menu">
          {menuLinks.map((link, index) => (
            <MenuLink {...link} key={index} />
          ))}
        </menu>
        <MobileButton
          type="button"
          aria-label="Show site menu"
          onClick={() => setShowMenu(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M424 392H23.1C10.8 392 0 402.8 0 415.1C0 429.2 10.8 440 23.1 440H424c13.2 0 24-10.8 24-23.1C448 402.8 437.2 392 424 392zM424 72H23.1C10.8 72 0 82.8 0 95.1S10.8 120 23.1 120H424c13.2 0 24-10.8 24-23.1S437.2 72 424 72zM424 232H23.1C10.8 232 0 242.8 0 256c0 13.2 10.8 24 23.1 24H424C437.2 280 448 269.2 448 256S437.2 232 424 232z" />
          </svg>
        </MobileButton>
        <Link
          to="/contact"
          className="cta white header__contact"
          aria-label="Send a message to get in touch"
        >
          Get in touch
        </Link>
      </div>
    </HeaderContainer>
  );
}
