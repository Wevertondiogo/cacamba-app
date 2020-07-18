import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Routes from "./Routes.jsx";
import Menu from "./Menu.jsx";

const App = () => {
  return (
    <Router>
      <>
        <Menu />
        <Routes />
      </>
    </Router>
  );
};
export default App;
