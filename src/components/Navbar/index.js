import "./index.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  const [activeItem, setActiveItem] = useState("Architecture"); 

  const handleItemClick = (item) => {
    setActiveItem(item);
    hideNavbarList();
  };

  const handleCheckboxChange = (e) => {
    const navbarList = document.querySelector(".navbar-list");
    if (e.target.checked) {
      navbarList.classList.add("checked");
    } else {
      navbarList.classList.remove("checked");
    }
  };

  const hideNavbarList = () => {
    const navbarList = document.querySelector(".navbar-list");
    navbarList.classList.remove("checked");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src="/logopng.png" alt="logo" className="logo" />
      </Link>

      <ul className="navbar-list">
        <Link to="/" className="nav-link">
          <li
            className={activeItem === "Architecture" ? "active" : "nav-list"}
            onClick={() => handleItemClick("Architecture")}
          >
            Architecture
          </li>
        </Link>
        <Link to="/contractors" className="nav-link">
          <li
            className={activeItem === "Contractors" ? "active" : "nav-list"}
            onClick={() => handleItemClick("Contractors")}
          >
            Contractors
          </li>
        </Link>
        <li
          className={activeItem === "Projects" ? "active" : "nav-list"}
          onClick={() => handleItemClick("Projects")}
        >
          Projects
        </li>
        <li
          className={activeItem === "About" ? "active" : "nav-list"}
          onClick={() => handleItemClick("About")}
        >
          About
        </li>
        <li
          className={activeItem === "Contact" ? "active" : "nav-list"}
          onClick={() => handleItemClick("Contact")}
        >
          Contact
        </li>
      </ul>
      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu className="nav-icon"/>
      </label>
    </nav>
  );
};

export default Navbar;
