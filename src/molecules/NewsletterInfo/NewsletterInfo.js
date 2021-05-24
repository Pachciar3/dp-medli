import React from "react";

import FooterHeading from "../../atoms/Headings/FooterHeading";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Buttons/Button";
import './NewsletterInfo.scss';

function NewsletterInfo({ label, placeholder, buttonText }) {

  return (
    <form className="m-newsletterInfo">
      <FooterHeading><label htmlFor="newsletter-input">{label}</label></FooterHeading>
      <fieldset className="m-newsletterInfo__field">
        <div className="m-newsletterInfo__input">
          <Input placeholder={placeholder} id="newsletter-input" name="newsletter-input" />
        </div>
        <div className="m-newsletterInfo__button">
          <Button type="submit" smallOnDesktop>{buttonText}</Button>
        </div>
      </fieldset>
    </form>
  );
}

export default NewsletterInfo;
