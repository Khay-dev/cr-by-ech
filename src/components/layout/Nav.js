import "./nav.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaConciergeBell } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Logo from "../../img/logo.png";
import newLogo from "../../img/single-log.png";


const Nav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    return (
        <nav
            style={{
                backgroundColor: scrollPosition > 50 ? "#d48c46" : "transparent",
                transition: "background-color 300ms ease-in-out",
            }}
        >
            <div className="nav-holder-one">
                <div className={scrollPosition > 50 ? "new-logo" : "logo-div"}>
                    <Link to="/">
                        <img src={scrollPosition > 50 ? newLogo : Logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="nav-holder-two">
                <button className="nav-btn " onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>

            <div className="main-nav" ref={navRef}>
                <div className="first-main">
                    <div className="logo-div">
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="bottom">
                        <p>
                            6 William Jumbo Street OLD GRA, Portharcourt,  <br />
                            River State, Nigeria
                        </p>
                        <div className="bottom-details">
                            <div className="mail-cal">
                                <a href="mailto:gm@crechelon.com" className="bottom-mail">
                                    gm@crechelon.com
                                </a>
                                <a href="tel: +2349034000068" className="bottom-call">
                                    +2349034000068
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-menu">
                    <button className=" nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <div className="nav-menu-main">
                        <Link to="/" className="nav-1">
                            <div className="nav-22">
                                <span>01</span>
                                <p> Home</p>
                            </div>
                        </Link>
                        <Link to="/Apartment" className="nav-2">
                            <div className="nav-22">
                                <span>02</span>
                                <p> Rooms & Suites</p>
                            </div>
                        </Link>
                        <Link to="/gallery" className="nav-3">
                            <div className="nav-22">
                                <span>03</span>
                                <p>Gallery</p>
                            </div>
                        </Link>
                        <Link to="/contact" className="nav-3">
                            <div className="nav-22">
                                <span>04</span>
                                <p>Contact Us</p>
                            </div>
                        </Link>
                        <div className="nav-22">
                            <a href="mailto:xxxxxxxxxxxx.com">
                                <span>05</span>
                                <p>Booking</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-holder-three">
                <a href="mailto:xxxxxxxxxxxx.com">
                    <div className="book">
                        <FaConciergeBell />
                        <p>BOOKING</p>
                    </div>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
