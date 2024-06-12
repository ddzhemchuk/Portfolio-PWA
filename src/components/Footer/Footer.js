import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding-bottom: 2rem;
  position: relative;
  z-index: 1;

  .container {
    display: flex;
    flex-direction: column;
    gap: clamp(4rem, 8.8888888889vw, 8rem);
  }

  .footer__row {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (min-width: 62rem) {
      flex-direction: row;
      gap: 0;
    }
  }

  .footer__cta {
    flex-grow: 1;
  }

  .footer__cta-title {
    max-width: 37.1875rem;
    font-size: clamp(1.802rem, 2.7222222222vw, 2.45rem);
    margin-bottom: clamp(1rem, 2.34375vw, 1.5rem);
    font-weight: 600;
    line-height: 1.5;
  }

  .footer__cta-link {
    display: inline-block;
  }

  @media only screen and (min-width: 62rem) {
    .footer__group:not(:last-of-type) {
      margin-right: 6.25rem;
    }
  }

  .footer__group-title {
    font-size: 1.25rem;
    color: var(--white-70);
    font-weight: 400;
    margin-bottom: clamp(1rem, 2.34375vw, 1.5rem);
  }

  .footer__group-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer__group-link {
    font-size: 1.25rem;
  }

  .copyright {
    font-size: clamp(0.9rem, 1.7578125vw, 1.125rem);
    color: var(--white-50);
    flex-grow: 1;
    text-align: center;

    @media only screen and (min-width: 62rem) {
      text-align: left;
    }
  }

  .socials {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media only screen and (min-width: 62rem) {
      justify-content: flex-end;
    }
  }

  .social__link {
    opacity: 0.5;
    height: 1.5rem;
    aspect-ratio: 1/1;
    display: block;

    &:is(:hover, :focus) {
      opacity: 1;
    }
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <div className="footer__row">
          <div className="footer__cta">
            <h2 className="footer__cta-title">
              Let's make something amazing together!
            </h2>
            <Link to="/contact" className="cta white footer__cta-link">
              Get in touch
            </Link>
          </div>

          <FooterLinks />
        </div>
        <div className="footer__row">
          <small className="copyright">
            © {new Date().getFullYear()} Dmytro Dzhemchuk. All rights reserved.
          </small>
          <SocialLinks />
        </div>
      </div>
    </FooterSection>
  );
}
