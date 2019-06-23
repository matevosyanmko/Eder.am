import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./layouts.scss";
import Img from "react-image";
import { Link } from "react-router-dom";
// logo
import Logo from "../assets/images/logoBrand.png";
import LogoText from "../assets/images/logo.png";
// localizaton/images
import ARM from "../assets/images/localization/arm.svg";
import RUS from "../assets/images/localization/rus.svg";
import ENG from "../assets/images/localization/eng.svg";
// contact icon
import Viber from "../assets/images/header/contact/viber.svg";
import Phone from "../assets/images/header/contact/phone.svg";
import Email from "../assets/images/header/contact/email.svg";
import Facebook from "../assets/images/header/contact/facebook.svg";

// menu toggle assets
import Menu from "../assets/images/menu.svg";
import CloseMenu from "../assets/images/close-menu.svg";

const LangList = [
  {
    value: "ՀԱՅ",
    img: ARM,
    id: 0
  },
  {
    value: "РУС",
    img: RUS,
    id: 1
  },
  {
    value: "ENG",
    img: ENG,
    id: 2
  }
];

const contactIconText = (text1, text2, img) => (
  <div className="contactItem">
    <Img src={img} />
    <div>
      <p children={text1} />
      {text2 ? <p children={text2} /> : null}
    </div>
  </div>
);

export default class Header extends React.Component {
  state = {
    isOpen: false
  };

  componentDidMount = () => {
    // header show hide
    let header = this.refs.header;
    let logo = this.refs.logo;
    let logoNav = this.refs.logoNav;
    if (logo) logo.style.display = "none";
    if (window.innerWidth < 767) {
      return null;
    }
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0px";
        logo.style.display = "none";
        logoNav.style.display = "block";
      } else {
        header.style.top = "-65px";
        logo.style.display = "block";
        logoNav.style.display = "none";
      }
      prevScrollpos = currentScrollPos;
    };
  };
  toggle = () => {
    const { isOpen } = this.state;
    this.setState(
      {
        isOpen: !isOpen
      },
      () => (document.body.style.overflowY = isOpen ? "visible" : "hidden")
    );
  };
  render() {
    const { lang, langChange, secondRow } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="header wood-bg shadow-lg" ref="header">
        <Navbar light expand="md">
          <Link to="/">
            <div ref="logoNav">
              <NavbarBrand>
                <div id="logo">
                  <Img src={Logo} className="logoNav" />
                  <Img src={LogoText} className="logoNav" />
                </div>
              </NavbarBrand>
            </div>
          </Link>
          <NavbarToggler
            onClick={this.toggle}
            children={<Img src={isOpen ? CloseMenu : Menu} />}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Link to="/">
                <NavItem>
                  <NavLink className="text-white">{lang.mainPage}</NavLink>
                </NavItem>
              </Link>
              <Link to="/master_services">
                <NavItem>
                  <NavLink className="text-white">
                    {lang.masterServices}
                  </NavLink>
                </NavItem>
              </Link>
              <Link to="/about_us">
                <NavItem>
                  <NavLink className="text-white">{lang.aboutUs}</NavLink>
                </NavItem>
              </Link>
              <Link to="/contact_us">
                <NavItem>
                  <NavLink className="text-white">{lang.contactUs}</NavLink>
                </NavItem>
              </Link>
              <NavItem className="langGroup">
                {LangList.map((item, key) => (
                  <React.Fragment key={key}>
                    <div
                      onClick={() => langChange(item.id)}
                      children={
                        <>
                          {/* {item.value} */}
                          <img src={item.img} />
                        </>
                      }
                      className="listItem"
                    />
                  </React.Fragment>
                ))}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {secondRow && (
          <Navbar light expand="md">
            <Link to="/">
              <div ref="logo">
                <NavbarBrand>
                  <div id="logo">
                    <Img src={Logo} className="logoNav" />
                    <Img src={LogoText} className="logoNav" />
                  </div>
                </NavbarBrand>
              </div>
            </Link>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto " navbar>
                <NavItem className="headerContact">
                  <div>
                    {contactIconText("ar.dav.mart@gmail.com", null, Email)}

                    <a
                      href="https://www.facebook.com/EDER-1018016015061138"
                      target="_blank"
                    >
                      <div className="contactItem">
                        <Img src={Facebook} />
                        <p children="Facebook" />
                      </div>
                    </a>
                  </div>
                  <div>
                    {contactIconText(
                      "+374-(96)-430-010​",
                      "+374-(41)-211-444",
                      Viber
                    )}
                    {contactIconText(
                      "+374-(94)-430-010​",
                      "+374-(94)-211-444",
                      Phone
                    )}
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}
