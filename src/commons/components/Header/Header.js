import React from "react";
import logo from "./img/logo.svg";
import phone from "./img/phone.png";
import mail from "./img/mail.png";
import out from "./img/out.png";

const content = {
  logo: {
    src: logo,
    alt: "logo",
  },
  phone: {
    icon: phone,
    alt: "phone",
    text: "+7(795663-71-07)",
  },
  email: {
    icon: mail,
    alt: "email",
    text: "support@promrg.ru",
  },
  user: {
    fullName: "Быковская Мария Евгеньевна",
    company: "Быковская Мария Евгеньевна",
    iconOut: out,
    alt: "out",
  },
};

const Header = () => {
  return (
    <div>
      <div>
        <img src={content.logo.src} alt={content.logo.alt} />
      </div>
      <div>
        <img src={content.email.icon} alt={content.email.alt} />
        {content.email.text}
      </div>
      <div>
        <img src={content.phone.icon} alt={content.phone.alt} />
        {content.phone.text}
      </div>
      <div>
        <div>
          <div>{content.user.fullName}</div>
          <div>
            <img src={content.user.iconOut} alt={content.user.alt} />
          </div>
        </div>
        <div>{content.user.company}</div>
      </div>
    </div>
  );
};

export default Header;
