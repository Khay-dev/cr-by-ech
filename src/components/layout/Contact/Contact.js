// stylesheet
import "./Contact.css";

// components
import Nav from "../Nav";

// helmet
import { Helmet } from "react-helmet";

const Contact = () => {
  // implement email.js for the form ......
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Corporate Residence</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Nav />
        <div className="section-5">
          <div className="main-contact">
            <div className="contact-text">
              WE ARE HERE TO HELP  CONTACT US ANYTIME
            </div>
            <div className="contact-dets">
              <div className="name">CORPORATE RESIDENCE BY ECHELON</div>
              <div className="address">
                6 William Jumbo Street OLD GRA, Portharcourt,  <br />
                River State, Nigeria
              </div>
              <a href="gm@crechelon.com" class="mail">
                gm@crechelon.com
              </a>
              <a href="tel:+2349034000068" class="call">
                +2349034000068
              </a>
              <div className="name">ECHELON HEIGHTS</div>
              <div className="address">
                {" "}
                No 73 Ken Saro-Wiwa Road, Port Harcourt, Rivers State, Nigeria.
              </div>
              <a href=" https://echelonheights.com" target="_blank">
                {" "}
                echelonheights.com{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
