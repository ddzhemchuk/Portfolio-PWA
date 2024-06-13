import styled from "styled-components";
import Project from "./Project";

const Section = styled.section`
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;

    @media only screen and (min-width: 64rem) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function Projects({ projects }) {
    console.log(projects)
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

        <ul className="projects">
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
