import styled from "styled-components";
import Project from "./Project";

const Section = styled.section`
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media only screen and (min-width: 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 64rem) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .project {
    display: flex;
    flex-direction: column;
  }
`;

export default function Archive({ projects }) {
  return (
    <Section>
      <div className="container">
        <div className="title-group">
          <h2
            className="title-group__title"
            aria-label="Evolution in Code: Archived Projects "
          >
            Evolution in Code: <span>Archived Projects </span>
          </h2>
          <p className="title-group__subtitle">
            A look back. Code that helped me grow
          </p>
        </div>
        <ul className="projects">
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
