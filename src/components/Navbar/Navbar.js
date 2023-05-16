import React, { Component } from "react";
import { menuData } from "./MenuData";
import "../../assets/css/Navbar.css";
import Logo from "../../assets/images/avvic-logo.png";

export class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="logo">
          <img src={Logo} alt="logo icon" className="logo-image"></img>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          {" "}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
