import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Project from "../components/Projects/Project";

const Section = styled.section`
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 4rem;

    @media only screen and (min-width: 48rem) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .project {
    display: flex;
    flex-direction: column;
  }

  .project__image {
    background: var(--white-10);
    border-radius: 1rem;
    padding: 1rem;

    @media only screen and (min-width: 31.25rem) {
      padding: clamp(1rem, 4.44vw, 4rem) clamp(1rem, 2.22vw, 2rem);
    }

    img {
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
      border-radius: 0.25rem;
      width: 100%;
      aspect-ratio: 16/9;
      height: auto;
    }
  }

  .project__body {
    padding: clamp(1rem, 2.22vw, 2rem) clamp(1rem, 2.22vw, 2rem) 0;
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2.22vw, 2rem);
    flex-grow: 1;
  }

  .project__info {
    display: flex;
    align-items: center;

    flex-direction: column-reverse;
    gap: 0.5rem;

    @media only screen and (min-width: 48rem) {
      flex-direction: row;
      gap: 0;
    }
  }

  .project__title {
    flex-grow: 1;
    margin: 0;
    font-size: clamp(1.5rem, 3.125vw, 2rem);
    font-weight: 500;
  }

  .project__tags {
    display: flex;
    gap: 0.5rem;
  }

  .project__tag {
    font-weight: 400;
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
  }

  .project__description {
    font-size: clamp(1rem, 2.34375vw, 1.5rem);
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    text-align: center;
    flex-grow: 1;

    @media only screen and (min-width: 48rem) {
      text-align: left;
    }
  }

  .project__actions {
    display: flex;
    gap: clamp(0.5rem, 1.5625vw, 1rem);
    justify-content: center;

    @media only screen and (min-width: 48rem) {
      justify-content: flex-start;
    }
  }
`;

export default function PortfolioPage() {
  const projects = useLoaderData();

  return (
    <Section>
      <div className="container">
        <div className="title-group">
          <h2
            className="title-group__title"
            aria-label="What I've Been Building: Recent Projects "
          >
            What I've Been Building: <span>Recent Projects </span>
          </h2>
          <p className="title-group__subtitle">
            Showcasing my expertise in web development and design
          </p>
        </div>
        {!projects || !Array.isArray(projects) || projects.length === 0 ? (
          <p style={{textAlign: "center"}}>Error while fetching the data. Try later :(</p>
        ) : (
          <ul className="projects">
            {projects.map((project, key) => (
              <Project key={key} {...project} />
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
