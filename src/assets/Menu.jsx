import React, { Component } from "react";
import { Link } from "react-router-dom";
// Links E Nomes DAs Rotas
const links = [
  { route: "/service", label: "Service", key: 0 },
  { route: "/about", label: "About", key: 1 },
  { route: "/contact", label: "Contact", key: 2 },
];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.refHome = React.createRef();
    this.state = { width: "", left: "", isOpen: false };
    this.handleMove = this.handleMove.bind(this);
  }
  // FIXANDO MARKET NA HOME
  fixedMarket() {
    const setWidth = this.refHome.current.offsetWidth;
    const setLeft = this.refHome.current.offsetLeft;
    this.setState({ width: setWidth, left: setLeft });
  }

  // MOVENDO MARKET
  handleMove(e) {
    const setWidth = e.target.offsetWidth;
    const setLeft = e.target.offsetLeft;

    this.setState({ width: setWidth, left: setLeft });
  }

  showNav() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  linkCloseNav() {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 10);
  }
  // FUNÇÂO GERADORA DOS LINKS
  renderLink() {
    return links.map((link) => (
      <Link
        key={link.key}
        className={`navbar__link ${
          this.state.isOpen ? "open-link" : "close-link"
        }`}
        onClick={this.handleMove}
        onMouseDown={() => this.linkCloseNav()}
        to={link.route}
      >
        {link.label}
      </Link>
    ));
  }
  render() {
    const changeMarketWidth = this.state.width;
    const changeMarketLeft = this.state.left;
    return (
      <header>
        <nav className="navbar">
          <div
            className="market"
            style={{ width: changeMarketWidth, left: changeMarketLeft }}
          ></div>
          <div
            className={`menu-btn ${this.state.isOpen ? "x" : ""}`}
            onClick={() => this.showNav()}
          >
            <div className="menu-btn__burger"></div>
          </div>
          <ul className={this.state.isOpen ? "show" : "close"}>
            {/* PRENCHENDO A LISTA COM OS LINKS */}
            <Link
              to="/"
              className={`navbar__link ${
                this.state.isOpen ? "open-link" : "close-link"
              }`}
              onClick={this.handleMove}
              onMouseDown={() => this.linkCloseNav()}
              ref={this.refHome}
            >
              Home
            </Link>
            {this.renderLink()}
          </ul>
        </nav>
        {/*  CHAMANDO A FUNÇÃO FIXEDMARKET  */}
        {window.addEventListener("load", () => this.fixedMarket())}
      </header>
    );
  }
}
export default Menu;
