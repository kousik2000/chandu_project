import "./index.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  const location = useLocation();

  const getActiveItemFromPathname = (pathname) => {
    if (pathname === "/") {
      return "Architecture";
    } else if (pathname === "/contractors") {
      return "Contractors";
    } else if (pathname === "/gallery") {
      return "Projects";
    } else if (pathname === "/not-found") {
      return "About";
    } else {
      return "Contact";
    }
  };

  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || getActiveItemFromPathname(location.pathname)
  );

  const handleItemClick = (item) => {
    setActiveItem(item);
    hideNavbarList();
    localStorage.setItem("activeItem", item);
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

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
    const handleBeforeUnload = () => {
      localStorage.setItem("activeItem", activeItem);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      localStorage.setItem("activeItem", "Architecture");
    };
  }, [activeItem]);

  useEffect(() => {
    setActiveItem(getActiveItemFromPathname(location.pathname));
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <img src="/logopng.png" alt="logo" className="logo" />
      </Link>

      <ul className="navbar-list">
        {/* Navigation items */}
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

      {/* Hamburger menu and other components */}
      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu className="nav-icon" />
      </label>
    </nav>
  );
};

export default Navbar;
