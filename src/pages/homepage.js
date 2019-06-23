import React, { Component } from "react";

// layout components
import Header from "../layouts/header";
import Slider from "../layouts/carousel";
import Gallery from "../layouts/gallery";
import Footer from "../layouts/footer";

export default class HomePage extends Component {
  state = {
    activeView: 1
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "auto";
  };
  render() {
    const { activeView } = this.state;
    const { lang, langChange } = this.props;

    return (
      <>
        <Header lang={lang} langChange={langChange} secondRow={true} />
        <Slider lang={lang} />;
        <Gallery active={activeView} lang={lang} />
        <Footer lang={lang} />
      </>
    );
  }
}
