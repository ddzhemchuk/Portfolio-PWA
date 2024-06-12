import styled from "styled-components";
import Video from "./Video";

const Section = styled.section`
  height: 100vh;
  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: clamp(2.4rem, 5.33vw, 4.8rem);

    width: 100%;
    height: 100vh;
  }

  * > * {
    position: relative;
    z-index: 2;
  }

  .header {
    width: 100%;
  }

  .hero_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110vh;
    object-position: center center;
    object-fit: cover;
    z-index: 1;
    opacity: 1;
    animation: videoIntro 2s forwards;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @keyframes videoIntro {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::after {
    content: "";
    z-index: 2;
    position: absolute;
    height: 10vh;
    left: 0;
    right: 0;
    bottom: -10vh;
    background: linear-gradient(180deg, rgba(5, 2, 13, 0) 0%, #05020d 55.5%);
  }

  .hero__wrapper {
    text-align: center;
    line-height: initial;
  }

  .hero__title {
    font-size: clamp(3rem, 5.55vw, 5rem);
    padding: 0 1rem;
    margin-bottom: 1rem;
    font-weight: 600;

    @media only screen and (min-width: 37.5rem) {
      br {
        display: none;
      }
    }
  }

  .hero__subtitle {
    font-size: clamp(1rem, 2.22vw, 2rem);
    margin: 0;
  }

  .hero__scroll {
    background: transparent;
    outline: none;
    aspect-ratio: 24/32;
    width: 1.5rem;
    border: none;
    padding: 0;
    cursor: pointer;
    animation: floating 1s ease-in-out infinite alternate;

    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }

  @keyframes floating {
    from {
      transform: translateY(-0.5rem);
    }
    to {
      transform: translateY(0.5rem);
    }
  }
`;

export default function Hero({ children }) {
  const scrollToContent = () => {
    const main = document.querySelector(".hero_bg");

    if (main) {
      window.scrollBy(0, main.offsetHeight);
    }
  };

  return (
    <Section className="hero">
      <div className="content">
        {children}

        <div className="hero__wrapper">
          <h2 className="hero__title" aria-label="Where Ideas Take Flight">
            Where Ideas <br />
            Take <span className="text-cta">Flight</span>
          </h2>
          <p className="hero__subtitle">
            building web apps that make a difference
          </p>
        </div>

        <button
          className="hero__scroll"
          type="button"
          aria-label="Click to scroll to the main content"
          onClick={scrollToContent}
        >
          <svg
            width="25"
            height="32"
            viewBox="0 0 25 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 0H10.5C4.97625 0 0.5 4.47687 0.5 10V22C0.5 27.5238 4.97687 32 10.5 32H14.5C20.0238 32 24.5 27.5231 24.5 22V10C24.5 4.47625 20.025 0 14.5 0ZM22.5 22C22.4922 26.4144 18.9137 29.9937 14.5 30H10.5C6.08563 29.9922 2.50625 26.4137 2.5 22V10C2.50781 5.58563 6.08625 2.00625 10.5 2H14.5C18.9144 2.00781 22.4937 5.58625 22.5 10V22ZM12.5 5.94375C11.9473 5.94375 11.5 6.391 11.5 6.94375V10.9438C11.5 11.55 11.95 12 12.5 12C13.05 12 13.5 11.5527 13.5 11V7C13.5 6.45 13.05 5.94375 12.5 5.94375Z"
              fill="white"
              fillOpacity="0.75"
            />
          </svg>
        </button>
      </div>
      <Video />
    </Section>
  );
}
