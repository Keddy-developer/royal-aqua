import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons

const Navbar = ({ onScrollToSection, refs }) => {
  const { homeRef, aboutRef, productsRef, blogRef, contactRef } = refs;

  // State to control navbar toggler
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Reference to the navbar
  const navbarRef = useRef(null);

  // Toggle navbar open/close
  const handleToggleNavbar = () => {
    setIsNavOpen(prevState => !prevState);
  };

  // Close navbar when clicking outside
  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to close navbar on outside click
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">Royal Aqua</a>

        {/* Toggler button with custom icons */}
        <button
          className="navbar-toggler"
          style={{border: "none"}}
          type="button"
          onClick={handleToggleNavbar}
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          {/* Conditional rendering of FaBars (hamburger) or FaTimes (close) */}
          {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link active"
                onClick={() => onScrollToSection(homeRef)}
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onScrollToSection(aboutRef)}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onScrollToSection(productsRef)}
              >
                Products
              </button>
            </li>  
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onScrollToSection(blogRef)}
              >
                Blog
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onScrollToSection(contactRef)}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
