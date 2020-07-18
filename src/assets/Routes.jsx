import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./../components/Home.jsx";
import Service from "./../components/Service.jsx";
import About from "./../components/About.jsx";
import Contact from "./../components/Contact.jsx";

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Routes;
