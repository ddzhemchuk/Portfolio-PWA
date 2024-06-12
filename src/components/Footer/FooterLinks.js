import MenuLink from "../UI/MenuLink";

const LINKS = [
  {
    title: "Site content",
    links: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Portfolio",
        to: "/portfolio",
      },
      {
        title: "Contacts",
        to: "/contact",
      },
    ],
  },
  {
    title: "Contacts & info",
    links: [
      {
        title: "K2C 3L9, Ottawa, Canada 🇨🇦",
        to: "https://maps.app.goo.gl/diRJLckcBuZ8nESx7",
        rel: "nofollow noopener noreferrer",
        target: "_blank",
      },
      {
        title: "hello@dzhemchuk.dev",
        to: "mailto:hello@dzhemchuk.dev",
      },
      {
        title: "Download CV",
        to: "/files/CV.pdf",
      },
    ],
  },
];

export default function FooterLinks() {
  return LINKS.map((group, groupIndex) => (
    <div className="footer__group" key={groupIndex}>
      <h3 className="footer__group-title">{group.title}</h3>
      <ul className="footer__group-list">
        {group.links.map((link, linkIndex) => (
          <MenuLink key={linkIndex} {...link} />
        ))}
      </ul>
    </div>
  ));
}
