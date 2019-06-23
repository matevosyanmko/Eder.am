import React from "react";
import Email from "../assets/images/header/contact/email.svg";
import Img from "react-image";
//
const contactIconText = (text1, text2, img) => (
  <div className="contactItem">
    <Img src={img} />
    <div>
      <p children={text1} />
      {text2 ? <p children={text2} /> : null}
    </div>
  </div>
);

export default class Footer extends React.Component {
  render() {
    const { lang } = this.props;
    const DateNow = new Date();
    const Year = DateNow.getFullYear();
    return (
      <div className="footer wood-bg">
        {contactIconText("ar.dav.mart@gmail.com", null, Email)}
        <div className="bankDetails">
          <div>
            <p className="footerSubHeading" children={lang.uniBank} />
            <p>24139003177100 AMD</p>
            <p>24139003177101 USD</p>
          </div>
          <div>
            <p className="footerSubHeading" children={lang.economBank} />
            <p>ՀՎՀՀ 09421901</p>
            <p>ՀՀ 163078310022</p>
          </div>
        </div>
        <p className="text-right">
          {" "}
          <a
            href="https://www.facebook.com/matevosyanmko"
            className="text-white"
            target="_blank"
          >
            {lang.creator} M.M
          </a>
        </p>
        <p className="copyright"> &#9400; {Year}</p>
      </div>
    );
  }
}
