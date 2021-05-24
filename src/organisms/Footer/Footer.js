import React from "react";

import FooterLinksGroup from "../../molecules/FooterLinksGroup/FooterLinksGroup";
import NewsletterInfo from "../../molecules/NewsletterInfo/NewsletterInfo";
import "./Footer.scss";
import Logo from "../../atoms/Logo/Logo";
import FooterTerms from "../../atoms/FooterTerms/FooterTerms";


function Footer({ logoUrl, links, newsletter }) {
  const footerLinks = links.map(({ title, links, id }) => <FooterLinksGroup
    key={`footer-${id}-${title}`} title={title} links={links} />);
  return (
    <footer className="o-footer">
      <div className="o-footer__con">
        <div className="o-footer__logo">
          <Logo url={logoUrl} />
        </div>
        <div className="o-footer__form">
          <NewsletterInfo
            placeholder={newsletter.placeholder}
            buttonText={newsletter.buttonText}
            label={newsletter.label}
          />
        </div>
        <div className="o-footer__links">
          {footerLinks}
        </div>
        <div className="o-footer__terms">
          <FooterTerms>Terms & Conditions</FooterTerms>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
