import React, { Component } from "react";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Img from "react-image";
import MasterAsset from "../assets/images/masteServicesBG.jpg";

const serviceList = [
  " Повесить шкафчики, зеркало, полочки в ванной комнате или на кухне",
  " Монтаж раковин, унитазов, смесителей, слива в ванной",
  " Повесить карнизы, картины, ковры, турники, зеркала, полки и т.п",
  " Установка дверных замков, сушилки для белья",
  " Монтаж люстр, розеток, выключателей, автоматов, счётчиков или всей электрики"
];

// layout components
export default class MasterServices extends Component {
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
            children={<Img src={MasterAsset} alt="master services" />}
          />
          <div className="overlay">
            <h1 children={lang.masterHeader} />
            <h2 children={`${lang.masterSubHeader}: 094-43-00-10`} />
            <ul
              children={lang.services.map(item => (
                <li children={item} />
              ))}
            />
          </div>
        </div>
        <Footer lang={lang} />
      </>
    );
  }
}
