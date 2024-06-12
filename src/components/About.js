import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    @media only screen and (min-width: 62rem) {
      flex-direction: row;
    }
  }

  .about__photo {
    max-width: 29.3125rem;
    flex-shrink: 0;
    position: relative;
    aspect-ratio: 469/569;
    width: 100%;

    &::before {
      content: "";
      z-index: 1;
      position: absolute;
      width: calc(100% + 2rem);
      aspect-ratio: 1/1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        270deg,
        #ff67b8 0%,
        #911aef 52%,
        #7ea7c3 100%
      );
      opacity: 0.5;
      filter: blur(12.5rem);
      border-radius: 60rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: 2;
      border-radius: 1rem;
      position: relative;
    }
  }

  .about__content {
    position: relative;
    z-index: 2;

    .title-group {
      margin-bottom: 0;

      @media only screen and (max-width: 62rem) {
        align-items: center;
        text-align: center;
      }
    }
  }

  .about__text {
    margin: clamp(2rem, 3.3333333333vw, 3rem) 0;

    p {
      margin: 0;
      line-height: 1.5;

      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }
  }

  .about__links {
    display: flex;
    gap: 1.5rem;
  }
`;

export default function About() {
  return (
    <Section className="about">
      <div className="container">
        <div className="about__photo">
          <picture>
            <source
              srcSet="/assets/portrait/dmytro_dzhemchuk.webp 469w, /assets/portrait/dmytro_dzhemchuk.webp 938w, /assets/portrait/dmytro_dzhemchuk.webp 1407w"
              type="image/webp"
            />
            <img
              src="/assets/portrait/dmytro_dzhemchuk.jpg"
              alt="Dmytro Dzhemchuk"
              decoding="async"
              loading="lazy"
              width="469"
              height="569"
              srcSet="/assets/portrait/dmytro_dzhemchuk.jpg 469w, /assets/portrait/dmytro_dzhemchuk.jpg 938w, /assets/portrait/dmytro_dzhemchuk.jpg 1407w"
              sizes="(max-width: 500px) 100vw, 469px"
            />
          </picture>
        </div>
        <div className="about__content">
          <div className="title-group left">
            <h2
              className="title-group__title"
              aria-label="From Static to Dynamic "
            >
              From Static to <span>Dynamic </span>
            </h2>
            <p className="title-group__subtitle">My Web Development Journey</p>
          </div>
          <div className="about__text">
            <p>
              I'm a passionate and driven software developer with a strong
              foundation in web development and a focus on mobile application
              design and development. I recently graduated with a Bachelor's
              degree in Computer Science from Odesа Polytechnic National
              University (Odesa, Ukraine) in 2021 and am currently pursuing a
              program in "Mobile Application Design and Development" at
              Algonquin College in Ottawa, Canada, with an expected graduation
              date of mid-2025.
            </p>
            <p>
              In my 2+ years of experience as a Full Stack Developer, I've honed
              my skills in building and maintaining web applications. I possess
              a strong command of HTML, CSS, and JavaScript, and I'm adept at
              leveraging frameworks like React.js, Next.js, and Express.js to
              create clean, scalable, and user-friendly web experiences.
              Fostering a collaborative work environment and continuously
              expanding my JavaScript knowledge are core aspects of my approach.
              I'm confident that my skills and dedication will make me a
              valuable asset to any team.
            </p>
          </div>
          <div className="about__links">
            <Link to="/portfolio" className="cta about__cta">
              Explore portfolio
            </Link>
            <Link
              to="/contact"
              className="cta white about__cta"
              aria-label="Send a message to get in touch"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
