import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Routes } from "../config/routes";
import { Localization } from "../config/localization";
// layout components
export default class App extends Component {
  state = {
    lang: Localization[0]
  };

  componentDidMount = () => {
        // check if language set
    let key = "activeLangID";
    let localKey = window.localStorage.getItem(key);
    if (localKey) {
      this.setState({ lang: Localization[localKey] });
      // document.body.style.fontFamily = localKey === 0 ? "Armenian" : "EngRus";
    } else {
      this.setState({ lang: Localization[0] }, () => {
        window.localStorage.setItem(key, 0);

        document.body.style.fontFamily = "Armenian";
      });
    }
    
  };
  onLanguageChange = id => {
    this.setState(
      {
        lang: Localization[id]
      },
      () => {
        window.localStorage.setItem("activeLangID", id);
        // document.body.style.fontFamily = id === 0 ? "Armenian" : "EngRus";
        document.body.className = id === 0 ? "arm" : "engRus";
      }
    );
  };
  render() {
    const { lang } = this.state;
    
        return (
      <>
        {Routes.map((route, key) => (
          <Route
            exact
            path={route.path}
            render={() => (
              <route.component lang={lang} langChange={this.onLanguageChange} />
            )}
            key={key}
          />
        ))}
      </>
    );
  }
}
