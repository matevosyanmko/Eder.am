import React, { Component } from "react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Img from "react-image";
import ContactBg from "../assets/images/contactBG.jpg";
// contact icon
import Viber from "../assets/images/header/contact/viber.svg";
import Phone from "../assets/images/header/contact/phone.svg";
import Email from "../assets/images/header/contact/email.svg";

const contactIconText = (text1, text2 = null, img) => (
  <div className="columntItemRow">
    <Img src={img} />
    <div>
      <p children={text1} />
      {text2 ? <p children={text2} /> : null}
    </div>
  </div>
);

// layout components
export default class ContactUs extends Component {
  componentDidMount=()=>{
    window.scrollTo(0,0,);
    document.body.style.overflowY = "auto";
  }
  render() {
    const { langChange, lang } = this.props;
    return (
      <>
        <Header lang={lang} langChange={langChange} secondRow={true} />
        <div className="containerLayout contactUsLayout">
          <div
            className="bgImage"
            children={<Img src={ContactBg} alt="eder" />}
          />
          <div className="overlay contact">
            <div className="overlayColumn">
              <h2 children={lang.bankDetails} />
              <div className="columntItem">
                <p className="columnSubHeading" children={lang.uniBank} />
                <p>24139003177100 AMD</p>
                <p>24139003177101 USD</p>
              </div>
              <div className="columntItem">
                <p className="columnSubHeading" children={lang.economBank} />
                <p>ՀՎՀՀ 09421901</p>
                <p>ՀՀ 163078310022</p>
              </div>
            </div>
            <div className="overlayColumn">
              <h2 children={lang.contactDetails} />
              {contactIconText(
                "+374-(94)-430-010​",
                "+374-(94)-211-444",
                Phone
              )}
              {contactIconText(
                "+374-(96)-430-010​",
                "+374-(41)-211-444",
                Viber
              )}
              {contactIconText("ar.dav.mart@gmail.com", null, Email)}
            </div>
          </div>
        </div>
        <Footer lang={lang} />
      </>
    );
  }
}
