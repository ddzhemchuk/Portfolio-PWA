import styled from "styled-components";
import TechCard from "./TechCard";
import ToolCard from "./ToolCard";

const TECHNOLOGIES = [
  {
    title: "HTML 5",
    description:
      "Strong foundation in HTML ensures well-structured, SEO optimized, and accessibility-friendly code",
    icon: "html",
    type: "core",
  },
  {
    title: "CSS 3 & SASS",
    description:
      "Proficient in modern CSS, with the ability to utilize SASS/SCSS for efficient styling workflows",
    icon: "css",
    type: "core",
  },
  {
    title: "JavaScript",
    icon: "js",
    description:
      "Thrive in JavaScript, especially ES6+, building scalable and performant applications",
    type: "core",
  },
  {
    title: "Tailwind & Bootstrap",
    icon: "tailwind",
    description:
      "Tailwind & Bootstrap: My toolkit for sleek, consistent, modern and aesthetic UI",
    type: "css",
  },
  {
    title: "React & Next.js",
    icon: "react",
    description:
      "Breathing life into web with React and Next.js, ensuring optimal rendering and a seamless user journey",
    type: "js",
  },
  {
    title: "Node.js & Express.js",
    icon: "nodejs",
    description:
      "Node.js at the core, Express.js as the architect - building APIs that power next-level applications",
    type: "js",
  },
  {
    title: "MongoDB & MySQL",
    icon: "mongodb",
    description:
      "Versatility in relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases",
    type: "db",
  },
  {
    title: "PHP",
    icon: "php",
    description:
      "Working knowledge of PHP for backend tasks, with primary focus on JavaScript development",
    type: "extras",
  },
];

const TOOLS = [
  {
    aria: "Visual Studio code editor",
    icon: "vscode",
  },
  {
    aria: "GIT version control system",
    icon: "git",
  },
  {
    aria: "Figma design tool",
    icon: "figma",
  },
  {
    aria: "Adobe Photoshop raster graphics editor",
    icon: "ps",
  },
  {
    aria: "Adobe Illustrator vector graphics editor",
    icon: "ai",
  },
];

const Section = styled.section`
  .technologies {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media only screen and (min-width: 48rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 62rem) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 90rem) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .technology {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1e1c26;
    padding: 2rem;
    border-radius: 1rem;
    gap: 1.5rem;

    position: relative;
    overflow: hidden;
    cursor: pointer;

    transition: 0.3s;

    @media only screen and (min-width: 62rem) {
      &:is(:hover, :focus) {
        transform: scale(0.95);
      }
    }

    &::after {
      text-align: center;
      font-size: 0.625rem;
      font-weight: 500;
      text-transform: uppercase;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0.125rem 0;
    }

    &.core::after {
      content: "Core Technology";
      background: linear-gradient(90deg, #1688f9 51.5%, #c1e0ff 100%);
    }

    &.css::after {
      content: "CSS Tools";
      background: linear-gradient(90deg, #f237ef 0%, #fc5252 78.5%);
    }

    &.js::after {
      content: "JavaScript Stack";
      background: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
    }

    &.db::after {
      content: "databases";
      background: linear-gradient(90deg, #11998e 49%, #38ef7d 100%);
    }

    &.extras::after {
      content: "extras";
      background: linear-gradient(90deg, #868f96 49%, #596164 100%);
    }
  }

  .technology__icon {
    height: 6rem;

    img {
      width: auto;
      height: 100%;
      object-fit: contain;
    }
  }

  .technology__name {
    font-size: 1.125rem;
    font-weight: 400;

    padding: 0.625rem 1.25rem;
    border-radius: 5rem;
    background: var(--white-5);
    margin: 0;
  }

  .technology__description {
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }

  .tech-stack__tools-tilte {
    color: var(--white-70);
    font-size: 1rem;
    font-weight: 400;
    margin: 2.625rem 0 1.25rem;
    text-align: center;
    text-transform: lowercase;
  }

  .tools {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tool {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: transparent;

    &:not(:last-of-type)::after {
      content: "";
      width: 0.25rem;
      aspect-ratio: 1/1;
      flex-shrink: 0;
      background: var(--white-25);
      border-radius: 50%;
    }
  }
`;

export default function TechStack() {
  return (
    <Section className="tech-stack">
      <div className="container">
        <div className="title-group">
          <h2
            className="title-group__title"
            aria-label="Battle-Tested Arsenal: My Tech Stack "
          >
            Battle-Tested Arsenal: <span>My Tech Stack </span>
          </h2>
          <p className="title-group__subtitle">
            A curated selection of technologies I leverage to build exceptional
            web applications
          </p>
        </div>
        <ul className="technologies">
          {TECHNOLOGIES.map((tool, index) => (
            <TechCard {...tool} key={index} />
          ))}
        </ul>

        <h3 className="tech-stack__tools-tilte">Design & Development Tools:</h3>
        <ul className="tools">
          {TOOLS.map((tool, index) => (
            <ToolCard {...tool} key={index} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
