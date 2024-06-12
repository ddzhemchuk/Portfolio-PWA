import { Link as DefaultLink } from "react-router-dom";
import styled from "styled-components";
import RING from "../../assets/images/ring.svg";

const Link = styled(DefaultLink)`
  display: flex;
  align-items: center;
  gap: clamp(0.4rem, 0.8333333333vw, 0.75rem);

  flex-grow: 1;

  @media only screen and (min-width: 62rem) {
    flex-grow: 0;
  }

  &:is(:hover, :focus) {
    transform: scale(0.98);
  }

  .logo__text {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p {
      margin: 0;
      line-height: 1;
    }
  }

  .logo__name {
    font-weight: 600;
    font-size: clamp(1.15rem, 1.6666666667vw, 1.5rem);
  }

  .logo__title {
    font-size: clamp(0.9rem, 1.11vw, 1rem);
  }

  .logo__img {
    width: clamp(3.5rem, 4.8611111111vw, 4.375rem);
    aspect-ratio: 1/1;
    border-radius: 50%;
    padding: 0.375rem;
    position: relative;
    flex-shrink: 0;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: url(${RING}) no-repeat center center/contain;
      animation: spinner 5s linear infinite;
    }

    @keyframes spinner {
        from {
          transform: rotate(0deg);
        }
        from {
          transform: rotate(-360deg);
        }
    }
`;

export default function Logo() {
  return (
    <Link to="/" aria-label="Go to the home page">
      <div className="logo__img">
        <picture>
          <source
            srcSet="/assets/logo/logo.webp 58w, /assets/logo/logo_2x.webp 116w, /assets/logo/logo_3x.webp 174w"
            type="image/webp"
          />
          <img
            src="/assets/logo/logo.jpg"
            srcSet="/assets/logo/logo.jpg 58w, /assets/logo/logo_2x.jpg 116w, /assets/logo/logo_3x.jpg 174w"
            sizes="(min-width: 1440px) 58px, 44px"
            alt="Dmytro Dzhemchuk"
            decoding="async"
            width="56"
            height="56"
          />
        </picture>
      </div>
      <div className="logo__text">
        <span className="logo__name">Dmytro Dzhemchuk</span>
        <span className="logo__title">JavaScript Developer</span>
      </div>
    </Link>
  );
}
