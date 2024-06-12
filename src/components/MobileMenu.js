import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import MobileButton from "./UI/MobileButton";
import MenuLink from "./UI/MenuLink";
import { Link } from "react-router-dom";

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
    title: "Contacts",
    to: "/contact",
    "aria-label": "Contacts and feedback form",
  },
];

const Dialog = styled.dialog`
  background: transparent;
  border: none;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  .menu {
    display: none;
    gap: clamp(1rem, 3.4722222222vw, 3.125rem);
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .mobile-menu__content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(100%, 16rem);
    z-index: 10;
    background: var(--white-25);
    -webkit-backdrop-filter: blur(3rem);
    backdrop-filter: blur(3rem);
    color: var(--white);
    padding: 3rem 2rem 2rem 2rem;
    transform: translateX(100%);
    transition: 0.3s;

    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    &.slide-in {
      transform: translateX(0);
      transition: 0.3s;
    }

    .menu {
      display: flex;
      flex-direction: column;
    }
  }

  .menu__contact {
    text-align: center;
  }

  .mobile-menu__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export default function MobileMenu({ showMenu, setShowMenu }) {
  const ref = useRef();

  useEffect(() => {
    if (showMenu) {
      ref.current.showModal();
      ref.current
        .querySelector(".mobile-menu__content")
        .classList.add("slide-in");
    } else {
      ref.current
        .querySelector(".mobile-menu__content")
        .classList.remove("slide-in");

      const id = setTimeout(() => ref.current.close(), 300);

      return () => clearTimeout(id);
    }
  }, [showMenu]);

  return createPortal(
    <Dialog
      ref={ref}
      onCancel={(e) => {
        e.preventDefault();
        setShowMenu(false);
      }}
      onClick={(e) => {
        if (Array.from(e.target.classList).includes("mobile-menu")) {
          setShowMenu(false);
        }
      }}
      className="mobile-menu"
    >
      <div className="mobile-menu__content">
        <menu className="menu">
          {menuLinks.map((link, index) => (
            <MenuLink {...link} key={index} />
          ))}
        </menu>
        <MobileButton
          type="button"
          aria-label="Click to close the menu"
          className="mobile-menu__close"
          onClick={() => setShowMenu(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z" />
          </svg>
        </MobileButton>
        <Link
          to="/contact"
          className="cta white menu__contact"
          aria-label="Send a message to get in touch"
        >
          Get in touch
        </Link>
      </div>
    </Dialog>,
    document.getElementById("mobile-menu")
  );
}
