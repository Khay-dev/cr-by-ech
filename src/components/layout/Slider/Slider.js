// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../img/bar-1.png";
import image2 from "../../../img/lobby.png";
import image3 from "../../../img/conf-room.png";
import image4 from "../../../img/hallway.png";
import image5 from "../../../img/store.png";
import image6 from "../../../img/swimming.png";
import image7 from "../../../img/reception-2.png";
import image8 from "../../../img/gym-1.png";
import image9 from "../../../img/rest.png";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
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
                    <div className="slide">
                        <div className="slide-img">
                            <img src={image1} alt="" />
                        </div>{" "}
                        <div className="slide-text">Bar.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image3} alt="sliders" />
                        </div>
                        <div className="slide-text">Conference Hall.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image8} alt="sliders" />
                        </div>
                        <div className="slide-text">Fitness Center.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image4} alt="sliders" />
                        </div>
                        <div className="slide-text">HallWay.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image2} alt="sliders" />
                        </div>
                        <div className="slide-text">Lobby.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image6} alt="sliders" />
                        </div>
                        <div className="slide-text">Swimming Pool.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image7} alt="sliders" />
                        </div>
                        <div className="slide-text">Reception.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image9} alt="sliders" />
                        </div>
                        <div className="slide-text">Restaurant.</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        {" "}
                        <div className="slide-img">
                            <img src={image5} alt="sliders" />
                        </div>
                        <div className="slide-text">Store.</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
