// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../img/room-1.png";
import image2 from "../../../img/toilet-1.png";
import image3 from "../../../img/palour-1.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Junior/Junior.css";
import Nav from "../Nav"
import Footer from "../Footer"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "react-router-dom";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Orthodox() {
    let facilities = [
        { text: "Wifi Service.", id: crypto.randomUUID() },
        { text: "Flat-Screen TV.", id: crypto.randomUUID() },
        { text: "High-Speed Internet.", id: crypto.randomUUID() },
        { text: "Premium Toiletries.", id: crypto.randomUUID() },
        { text: "24-hour room service.", id: crypto.randomUUID() },
        { text: "Work desk and chair.", id: crypto.randomUUID() }
    ]

    return (
        <>
            <Nav />
            <div className="junior-title">
                <h2> Orthodox Room</h2>
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
                    Room  Facilities
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
                <Link to="/Executive">   <div className="previous-page">
                    <span> <FaAngleDoubleLeft /> </span>
                    <p> Executive Suite</p>
                </div> </Link>
                <Link to="/Presidential"> <div className="next-page">
                    <span> <FaAngleDoubleRight /> </span>
                    <p>Presidential Suite</p>
                </div> </Link>
            </div>
            <Footer />
        </>
    );
}