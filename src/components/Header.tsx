import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import vaccineLogo from "../assets/images/hero/vac-navbar-logo.webp";
import headToggle from "../assets/images/hero/toggle-icon.webp";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };
  const toggleNav = () => {
    setCollapsed(!collapsed);
  };

  const [scrollY, setScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once when component mounts

  useEffect(() => {
    // Change background color based on scroll position
    if (scrollY > 100) {
      setNavbarBackground("#0B153C"); // Change to desired color when scrolled past 100px
    } else {
      setNavbarBackground("transparent"); // Change to initial background color
    }
  }, [scrollY]); // Update effect when scrollY changes

  return (
    <>
      <div
        className="nav-section"
        style={{ backgroundColor: navbarBackground, zIndex: 999 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="nav-content">
                <div className="logo">
                  <img src={vaccineLogo} alt="" />
                </div>
                <div className="nav-links">
                  <ul>
                    <li>
                      <HashLink
                        //  onClick={toggleNav}
                        to="/#home-section"
                        smooth
                        scroll={(el: any) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                          })
                        }
                      >
                        Home
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        //  onClick={toggleNav}
                        to="/#services-section"
                        smooth
                        scroll={(el: any) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                          })
                        }
                      >
                        Services
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        //  onClick={toggleNav}
                        to="/#Schedule-section"
                        smooth
                        scroll={(el: any) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                          })
                        }
                      >
                        Schedule
                      </HashLink>
                    </li>
                    <li>
                      <HashLink
                        // onClick={toggleNav}
                        to="/#Contact-us-section"
                        smooth
                        scroll={(el: any) =>
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "end",
                          })
                        }
                      >
                        Contact us
                      </HashLink>
                    </li>
                  </ul>
                </div>
                <div className="nav-button">
                  <button>Check Status</button>
                </div>
                {/* Mobile res */}
                <nav className="navbar">
                  <div className="navbar-container">
                    <button className="navbar-toggle" onClick={toggleNav}>
                      <span className="toggle-icon">
                        <img src={headToggle} alt="" />
                      </span>
                    </button>

                    <div
                      className={`navbar-collapse ${collapsed ? "" : "show"}`}
                    >
                      <ul
                        className={
                          !collapsed ? "navbar-menu active" : "navbar-menu"
                        }
                      >
                        <li>
                          <HashLink
                            onClick={toggleNav}
                            to="/#home-section"
                            smooth
                            scroll={(el: any) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "end",
                              })
                            }
                          >
                            Home
                          </HashLink>
                        </li>

                        <li>
                          <HashLink
                            onClick={toggleNav}
                            to="/#services-section"
                            smooth
                            scroll={(el: any) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "end",
                              })
                            }
                          >
                            Services
                          </HashLink>
                        </li>

                        <li>
                          <HashLink
                            onClick={toggleNav}
                            to="/#Schedule-section"
                            smooth
                            scroll={(el: any) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "end",
                              })
                            }
                          >
                            Schedule
                          </HashLink>
                        </li>

                        <li>
                          <HashLink
                            onClick={toggleNav}
                            to="/#Contact-us-section"
                            smooth
                            scroll={(el: any) =>
                              el.scrollIntoView({
                                behavior: "smooth",
                                block: "end",
                              })
                            }
                          >
                            Contact us
                          </HashLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
