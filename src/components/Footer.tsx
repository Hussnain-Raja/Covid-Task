import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import footLogo from "../assets/images/footer/footer-logo.webp";
import youtubeImage from "../assets/images/footer/foot-youtube.webp";
import instaImage from "../assets/images/footer/foot-insta.webp";
import twitterImage from "../assets/images/footer/foot-twitter.webp";
import facebookImage from "../assets/images/footer/foot-facebook.webp";
import quoteText from "../assets/images/footer/quote-message.webp";

const Footer = () => {
  return (
    <>
      {/* Quote */}
      <div className="quote-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="quote-content">
                <div className="sub-heading">Get a quote</div>
                <div className="content">
                  Please do enter your email address below
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="lenux.ng@gmail.com"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <img src={quoteText} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-content">
                <div className="logo">
                  <img src={footLogo} alt="" />
                </div>
                <div className="foot-links">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link to="/">Schedule</Link>
                    </li>
                    <li>
                      <Link to="/">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="foot-icons">
                  <img src={youtubeImage} alt="" />
                  <img src={instaImage} alt="" />
                  <img src={twitterImage} alt="" />
                  <img src={facebookImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
