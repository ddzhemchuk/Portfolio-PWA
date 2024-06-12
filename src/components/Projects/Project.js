export default function Project() {
  return (
    <li className="project">
      <div className="project__image">
        <img
          src="./img/projects/project1.jpg"
          alt="Design of mobile app for PLAY Airlines"
        />
      </div>
      <div className="project__body">
        <div className="project__info">
          <h3 className="project__title">Airline App design</h3>
          <ul className="project__tags">
            <li className="project__tag cta white">Figma</li>
            <li className="project__tag cta white">UI/UX</li>
          </ul>
        </div>
        <p className="project__description">
          The all-new Play App, designed to perfectly embody Play Airlines' fun
          and affordable spirit
        </p>
        <div className="project__actions">
          <a
            href="https://www.figma.com/proto/L2d0mv07r91zVSCXOowmfs/Part-1%3A-Wireframes?page-id=125%3A2&type=design&node-id=127-1541&viewport=1279%2C672%2C0.45&t=sNtsmkhArcwjCVEU-1&scaling=scale-down&mode=design"
            className="cta project__action"
            aria-label="View project demo"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Demo
          </a>
          <a
            href="https://www.figma.com/file/L2d0mv07r91zVSCXOowmfs/Part-1%3A-Wireframes?type=design&node-id=0%3A1&mode=design&t=GbZqq07du7a9CJgF-1"
            className="cta white project__action"
            aria-label="View project source code"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Figma Project
          </a>
        </div>
      </div>
    </li>
  );
}
