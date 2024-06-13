import styled from "styled-components";
import ProjectBtn from "./ProjectBtn";

const Li = styled.li`
  background: var(--white-10);
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2.22vw, 2rem);
  align-items: center;

  .project {
    padding: clamp(1.5rem, 3.125vw, 2rem) clamp(1.5rem, 3.125vw, 2rem) 0
      clamp(1.5rem, 3.125vw, 2rem);
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2.22vw, 2rem);
    position: relative;
    z-index: 2;

    .project__top {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media only screen and (min-width: 30rem) {
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        gap: 1rem;
      }

      .project__name {
        margin: 0;
        font-size: clamp(1.5rem, 2.22vw, 2rem);
        font-weight: 500;
      }

      .project__links {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        @media only screen and (max-width: 30rem) {
          .project__btn {
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
          }
        }

        .project__btn.disabled {
          position: relative;
          overflow: visible;
          cursor: not-allowed;

          &::after {
            content: "Private project";
            position: absolute;
            background: var(--white-15);
            border-radius: 1rem;
            white-space: nowrap;
            bottom: calc(100% + 0.25rem);
            left: 50%;
            transform: translateX(-50%);
            padding: 0.15rem 0.5rem;
            font-size: 0.75rem;
            font-weight: 400;
            opacity: 0;
            transition: 0.3s;
          }

          &:is(:hover, :focus) {
            background: var(--white-15);

            &::after {
              opacity: 1;
            }
          }
        }
      }
    }

    .project__description {
      line-height: 1.5;
      font-size: clamp(1rem, 1.67vw, 1.5rem);
      margin: 0;

      .year {
        color: var(--white-50);
      }
    }

    .project__technologies {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;

      .project__tech {
        font-weight: 400;
        padding: 0.5rem 1rem;
        cursor: initial;

        @media only screen and (max-width: 30rem) {
          font-size: 0.75rem;
          padding: 0.5rem 0.75rem;
        }

        &:is(:hover, :focus) {
          background: var(--white-15);
        }
      }
    }
  }

  .project__image {
    position: relative;
    z-index: 1;
    flex-grow: 1;
    width: calc(100% + 4rem);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: rotate(-5deg);
      object-position: top center;
    }
  }
`;

export default function Project({
  name,
  description,
  technologies,
  image,
  date,
  links,
}) {
  return (
    <Li>
      <div className="project">
        <div className="project__top">
          <h3 className="project__name">{name}</h3>
          <div className="project__links">
            {links.map((link, key) => (
              <ProjectBtn key={key} {...link} />
            ))}
          </div>
        </div>
        <p className="project__description">
          {description} <span className="year">{date}</span>
        </p>
        <ul className="project__technologies">
          {technologies.map((tech, key) => (
            <li key={key} className="project__tech cta white">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="project__image">
        <picture>
          <source
            src={image.webp}
            srcSet={`${image.webp} 982w`}
            type="image/webp"
          />
          <img
            src={image.png}
            srcSet={`${image.png} 982w`}
            alt={name}
            decoding="async"
            sizes="(min-width: 728px) 850px, (min-width: 1024px) 580px, (min-width: 1440px) 800px, 470px"
          />
        </picture>
      </div>
    </Li>
  );
}
