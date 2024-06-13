import "./Footer.css"
import { FaAngleDoubleUp } from "react-icons/fa"
import Image1 from "../../img/logo.png"

const Footer = () => {
    let top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-logo">
                    <img src={Image1} alt="" />
                </div>
                <div className="section-5-main">
                    <div className="text"> <span>GET IN</span> <span className="span-2">TOUCH</span>  </div>
                    <div className="details">
                        <div className="address">  6 William Jumbo Street OLD GRA, Portharcourt, <br />
                            River State, Nigeria</div>
                        <a href="mailto: gm@crechelon.com" className="mail"> gm@crechelon.com</a>
                        <a href="tel:+2349034000068" className="call">+2349034000068</a>
                    </div>
                </div>

            </div>
            <div className="final-footer" >
                <div className="copy">Copyright © COOPERATE RESIDENCE by ECHELON 2023 </div>
                <div className="us">WEBSITE BY <a href="https://www.instagram.com/ausdauer_co/"> AUSDAEUR.CO</a></div>
                <div className="btt" onClick={top} >  <FaAngleDoubleUp />  </div>

            </div>
        </footer>
    );
}

export default Footer;