// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../img/room-2.png";
import image2 from "../../../img/toilet-2.png";
import image3 from "../../../img/palour-2.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Junior.css";
import Nav from "../Nav"
import Footer from "../Footer"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "react-router-dom";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Junior() {
    let facilities = [
        { text: " Flat-Screen TV.", id: crypto.randomUUID() },
        { text: "High-Speed Internet.", id: crypto.randomUUID() },
        { text: "Premium Toiletries.", id: crypto.randomUUID() },
        { text: "Living Room", id: crypto.randomUUID() },
        { text: "24-hour room service.", id: crypto.randomUUID() },
        { text: " Privacy for meetings", id: crypto.randomUUID() }
    ]

    return (
        <>
            <Nav />
            <div className="junior-title">
                <h2> Junior Suite</h2>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="slide-main-img">
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-main-img">
                        <img src={image2} alt="sliders" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-main-img">
                        <img src={image3} alt="sliders" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slide-facilities">
                <div className="facility-title">
                    Suite Facilities
                </div>
                <div className="main-facility">
                    <ul >
                        {

                            facilities.map((facility) => (
                                <li key={facility.id}>{facility.text}</li>
                            ))

                        }
                    </ul>
                </div>
            </div>
            <div className="page">
                <Link to="/Presidential">  <div className="previous-page">
                    <span>  <FaAngleDoubleLeft /></span>
                    <p>Presidential Suite</p>
                </div></Link>
                <Link to="/Executive">   <div className="next-page">
                    <span> <FaAngleDoubleRight /> </span>
                    <p>Executive Suite</p>
                </div> </Link>
            </div>
            <Footer />
        </>
    );
}
