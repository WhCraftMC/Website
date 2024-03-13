import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CancelIcon } from "../../assets/images/icons/cancel.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/logos/Logo_128x128.png";
import "./index.scss";
import SideNavbar from "./components/SideNavBar";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSideBarOpen = () => {
    if (searchOpen && !navOpen) setSearchOpen(false);
    setNavOpen(!navOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo" onClick={() => window.scroll(0, 0)}>
          <img src={logo} alt="logo"/>
          WhCraft
        </Link>
        <nav className="header-nav">
          <ul>
            <button className="hamburger-btn" onClick={handleSideBarOpen}>
              {!navOpen ? (
                <HamburgerIcon />
              ) : (
                <CancelIcon className="cancel-icon" />
              )}
            </button>

            <SideNavbar
              isOpen={navOpen}
              closeNav={() => setNavOpen(false)}
              onClose={handleSideBarOpen}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;