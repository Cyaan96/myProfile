import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import web from "./assets/images/Web.png";
import titleStyle from "./assets/images/title-style-white.png";
import java from "./assets/images/java.png";
import ipv6 from "./assets/images/ipv6.png";
import webDesign from "./assets/images/website-design.png";
import androidDesign from "./assets/images/app.png";
import support from "./assets/images/support.png";

function App() {
  return (
    <div id="content-wrapper">
      {/*Header item. Break down and embedd in react comonent.  */}
      <header className="header header--bg">
        <div className="container">
          <nav className="navbar">
            <a className="navbar-brand" href="#">
              PORTFOLIO
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#"> About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Experiences</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Contact Info
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>                
              </ul>             
            </div> */}
          </nav>
          <div className="header__content text-center" id="intro">
            <span className="header__content__block">HEY</span>
            <h1 className="header__content__title">WELCOME TO MY PORTFOLIO</h1>
            <ul className="header__content__sub-title">
              <h6>
                <li>
                  UI/UX DESIGNER <span className="padding">-</span>
                </li>
                <li>
                  WEB DEVELOPER <span className="padding">-</span>
                </li>
                <li>Backend API Integration</li>
              </h6>
            </ul>
          </div>
        </div>
      </header>
      {/*Section to be also broken down and uilt in to the React App */}
      <section className="about">
        <div className="container about__container--narrow">
          <div className="page-section" id="about">
            <h2 className="page-section__title">ABOUT ME</h2>
            <img
              className="page-section__title-style"
              src="assets/images/title-style.png"
              alt=""
            />
            <p className="about__description">
              I am a softwarer developer who has majored in Applied Computer
              Technology and picked up an eccentric interest in the Art. I Have
              Concentrated in Networking in Telecommunication systems.
            </p>
            <div className="row gutters-80">
              <div className="col-md-4"></div>
              <div className="col-md-8 about__content">
                <div className="row row--margin-top">
                  <div className="col-md-4">
                    <p className="about__bio">
                      <strong>NAME :</strong> Newton N. kamau
                    </p>
                    <p className="about__bio">
                      <strong>AGE :</strong> 23
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className="about__bio">
                      <strong>JOB TITLE :</strong> UI/Web Developer
                    </p>
                    <p className="about__bio">
                      <strong>LOCATION :</strong> Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <a className="btn btn-outline-primary btn-lg" href="#">
                      RESUME
                    </a>
                  </div>
                  <div className="col-md-4">
                    <br />
                    <a className="btn btn-outline-warning btn-lg" href="#">
                      HIRE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section to be also broken down and uilt in to the React App */}
      <section className="skill skill--bg">
        <div className="container skill__container--narrow" id="skills">
          <div className="page-section">
            <h2 className="page-section__title page-section__title--white">
              MY SKILLS
            </h2>
            <img
              className="page-section__title-style"
              src={titleStyle}
              alt=""
            />
            <p className="page-section__paragraph page-section__paragraph--white">
              Below are the skills i have acquired from My Undergraduate Studies{" "}
            </p>
            <div className="row gutters-60">
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={web} alt="" />
                  <h4 className="skill__single-part__title">Web Design</h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%", backgroundColor: "#15DB95" }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={java} alt="" />
                  <h4 className="skill__single-part__title">
                    Java Programming
                  </h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%", backgroundColor: "#FFAC1B" }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={ipv6} alt="" />
                  <h4 className="skill__single-part__title">
                    Network Interconnectivity
                  </h4>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%", backgroundColor: "#7FB7FA" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section to be also broken down and uilt in to the React App */}
      <section className="service">
        <div className="container" id="experiences">
          <div className="page-section">
            <h2 className="page-section__title">MY EXPERIENCES</h2>
            <img
              className="page-section__title-style"
              src="assets/images/title-style.png"
              alt=""
            />
            <p className="page-section__paragraph">
              I have worked with a Internet Service Provider company and in tat
              period this are the services that i provided{" "}
            </p>
            <div className="row gutters-70">
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={webDesign} alt="" />
                  <h4 className="service__single-section__title">
                    WEBSITE DESIGN
                  </h4>
                  <p className="service__single-section__paragraph">
                  eep expertise and hands on experience with Web Applications and programming 
                  languages such as HTML, CSS, JavaScript, JQuery and API's.
                  i have Deep functional knowledge and hands on design experience with Web Services 
                  such as the MERN stack
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={androidDesign} alt="" />
                  <h4 className="service__single-section__title">
                    Android Designer
                  </h4>
                  <p className="service__single-section__paragraph">
                    I have over the years built Native Android applications and
                    worked with android databases
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail text-center">
                  <img src={support} alt="" />
                  <h4 className="service__single-section__title">SUPPORT</h4>
                  <p className="service__single-section__paragraph">
                    I also provide support for existing web pages and can edit
                    them in order to meet thre Market requirements and standards{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/*Footer section to be broken down into React App */}
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center" id>
          <h1 className="footer__title">CONTACT INFO</h1>
          <ul className="footer__contact-information">
            <li>
              <a href="tel:+254729622114">
                <i className="material-icons">phone</i> Mobile (+254) 729 62
                2114
              </a>
            </li>
            <li>
              <a href="mailto:kamaunewton19996@gmail.com">
                <i className="material-icons">email</i>{" "}
                kamaunewton19996@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <hr
          style={{
            border: 0,
            borderTop: "1px solid #525B60",
            display: "block",
            marginTop: "40px"
          }}
        />
        <div className="container text-center">
          <div className="social-icon">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="flaticon-facebook-letter-logo" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="flaticon-twitter-logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-behance-logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-dribbble-logo" />
                </a>
              </li>
            </ul>
          </div>
          <p className="footer__paragraph">
            Copyright © 2020, All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
