import CustomIcon from "../UI/CustomIcon";

const LINKS = [
  {
    href: "https://www.instagram.com/ddzhemchuk/",
    "aria-label": "Dmytro Dzhemchuk on Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.linkedin.com/in/ddzhemchuk/",
    "aria-label": "Dmytro Dzhemchuk on LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://github.com/dzhe0001",
    "aria-label": "Dmytro Dzhemchuk on GitHub",
    icon: "github",
  },
  {
    href: "https://www.facebook.com/ddzhemchuk",
    "aria-label": "Dmytro Dzhemchuk on Facebook",
    icon: "facebook",
  },
];

export default function SocialLinks() {
  return (
    <ul className="socials">
      {LINKS.map(({ icon, ...link }, index) => (
        <li className="social" key={index}>
          <a
            {...link}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="social__link"
          >
            <CustomIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
