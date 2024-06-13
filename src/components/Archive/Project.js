import styled from "styled-components";
import CustomIcon from "../UI/CustomIcon";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: clamp(1rem, 2.34375vw, 1.5rem);
  border-radius: 1rem;
  border: 0.0625rem solid var(--white-10);
  gap: clamp(0.75rem, 1.5625vw, 1rem);
  
  .top {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: flex-start;

    .project__data {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .project__date {
        margin: 0;
        font-size: 0.75rem;
        color: var(--white-50);
      }

      .project__title {
        font-size: clamp(1.15rem, 2.34375vw, 1.5rem);
        font-weight: 500;
        margin: 0;
      }
    }

    .project__links {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      a {
        fill: var(--white);
        width: clamp(0.75rem, 1.953125vw, 1.25rem);
        aspect-ratio: 1/1;
        opacity: 0.5;

        &:is(:hover, :focus) {
          opacity: 1;
        }

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .project__description {
    line-height: 1.5;
    margin: 0;
    font-size: clamp(0.85rem, 1.5625vw, 1rem);
  }

  .project__tech {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    flex-grow: 1;

    li {
      font-weight: 400;
      font-size: 0.75rem;
      padding: 0.5rem 1rem;
      background: var(--white-5);
      cursor: default;

      &:is(:hover, :focus) {
        background: var(--white-5);
      }
    }
  }
`;

export default function Project({
  name,
  description,
  links,
  date,
  technologies,
}) {
  return (
    <Li>
      <div className="top">
        <div className="project__data">
          <p className="project__date">{date}</p>
          <h3 className="project__title">{name}</h3>
        </div>
        <div className="project__links">
          {links.map(({ url, type }, key) => (
            <a
              key={key}
              href={url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              aria-label={`View project on ${type}`}
            >
              <CustomIcon icon={type} />
            </a>
          ))}
        </div>
      </div>
      <p className="project__description">{description}</p>
      <ul className="project__tech">
        {technologies.map((tech, key) => (
          <li key={key} className="cta white">
            {tech}
          </li>
        ))}
      </ul>
    </Li>
  );
}
