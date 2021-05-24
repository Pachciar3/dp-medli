import React from "react";

import FooterHeading from "../../atoms/Headings/FooterHeading";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Buttons/Button";
import './NewsletterInfo.scss';

function NewsletterInfo({ label, placeholder, buttonText }) {

  return (
    <form className="m-newsletterInfo">
      <FooterHeading><label for="newsletter-input">{label}</label></FooterHeading>
      <div className="m-newsletterInfo__input">
        <Input placeholder={placeholder} id="newsletter-input" name="newsletter-input" />
      </div>
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default NewsletterInfo;
