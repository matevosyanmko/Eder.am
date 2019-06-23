import React, { Component } from "react";
import Header from "../layouts/header";
import { AboutUsItems } from "../imagesArray";
import Footer from "../layouts/footer";
import Img from "react-image";
import AboutUsBg from "../assets/images/aboutUsBG.jpg";
import "./style.scss";
// layout components
export default class AboutUs extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
  };
  render() {
    const { langChange, lang } = this.props;
    return (
      <>
        <Header lang={lang} langChange={langChange} secondRow={true} />
        <div className="containerLayout">
          <div
            className="bgImage"
            children={<Img src={AboutUsBg} alt="eder" />}
          />
          <div className="overlay">
            <div className="aboutUsHeader">
              <h2 children={lang.aboutUsText} />
            </div>
          </div>
        </div>
        <div className="aboutUsBody">
          {AboutUsItems.map(item => (
            <Img src={item} className="aboutUsItem" alt="ardavmart" />
          ))}
        </div>
        <Footer lang={lang} />
      </>
    );
  }
}
