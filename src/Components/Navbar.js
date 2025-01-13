import React, { useState, useRef, useEffect } from 'react';
import { RiMenu3Line } from "react-icons/ri";

const Navbar = ({ onScrollToSection, refs }) => {
  const { homeRef, aboutRef, productsRef, blogRef, contactRef } = refs;

  const [isNavOpen, setIsNavOpen] = useState(false); // Navbar toggle state
  const navbarRef = useRef(null);

  // Toggle navbar open/close
  const handleToggleNavbar = () => {
    setIsNavOpen((prevState) => !prevState);
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
      className="custom-navbar"
      style={{
        backgroundColor: '#233871',
        padding: '0.5rem 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand Name */}
        <a
          href="/"
          className="custom-navbar-brand"
          style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textDecoration: 'none',
          }}
        >
          Royal Aqua
        </a>

        {/* Toggler button (hidden on large screens) */}
        <div
          className="custom-navbar-toggler d-lg-none"
          onClick={handleToggleNavbar}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            background: "none",
            cursor: "pointer",
            zIndex: '900000'
           
          }}
          role="button"
          aria-expanded={isNavOpen ? "true" : "false"}
        >
            <RiMenu3Line size={30} color="#c59756" />
        </div>

        {/* Navbar Links */}
        <div
          className={`custom-navbar-links ${
            isNavOpen ? 'd-block' : 'd-none'
          } d-lg-flex`}
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem',
            backgroundColor: '#233871',
            padding: '1rem',
            position: isNavOpen ? 'absolute' : 'unset',
            top: '100%',
            right: 0,
            width: isNavOpen ? '100%' : 'unset',
            borderRadius: isNavOpen ? '0 0 8px 8px' : 'unset',
          }}
        >
          <ul
            className="list-unstyled w-100 d-lg-flex mb-0 gap-lg-4"
            style={{
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: isNavOpen ? 'column' : 'row',
              gap: '1rem',
              alignItems: isNavOpen ? 'flex-start' : 'center',
            }}
          >
            <li>
              <button
                className="custom-nav-link btn btn-link w-100"
                style={{ color: '#c59756', textDecoration: 'none', fontWeight: "600" }}
                onClick={() => onScrollToSection(homeRef)}
              >
                HOME
              </button>
            </li>
            <li>
              <button
                className="custom-nav-link btn btn-link w-100"
                style={{ color: '#c59756', textDecoration: 'none', fontWeight: "600"}}
                onClick={() => onScrollToSection(productsRef)}
              >
                PRODUCTS
              </button>
            </li>
            <li>
              <button
                className="custom-nav-link btn btn-link w-100"
                style={{ color: '#c59756', textDecoration: 'none', fontWeight: "600" }}
                onClick={() => onScrollToSection(aboutRef)}
              >
                ABOUT
              </button>
            </li>
            
            <li>
              <button
                className="custom-nav-link btn btn-link w-100"
                style={{ color: '#c59756', textDecoration: 'none', fontWeight: "600" }}
                onClick={() => onScrollToSection(blogRef)}
              >
                BLOG
              </button>
            </li>
            <li>
              <button
                className="custom-nav-link btn btn-link w-100"
                style={{ color: '#c59756', textDecoration: 'none', fontWeight: "600" }}
                onClick={() => onScrollToSection(contactRef)}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
