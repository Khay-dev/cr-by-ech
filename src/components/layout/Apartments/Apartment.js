// stylesheet
import Nav from "../Nav";

// helmet
import { Helmet } from "react-helmet";

// components
import Footer from "../Footer";
import image1 from "../../../img/room-1.png";
import image2 from "../../../img/room-3.png";
import image3 from "../../../img/room-2.png";
import image5 from "../../../img/room-5.png";

// React Link
import { Link } from "react-router-dom";

import "./Apartment.css";
const Apartment = () => {
  let apartments = [
    {
      image: image3,
      title: "Junior Suite",
      details:
        "Our Junior Suites are designed to provide you with the perfect blend of comfort and sophistication, featuring tasteful decor and a spacious seating area that allows you to unwind and relax after a long day of exploring",
      id: crypto.randomUUID(),
      link: "/Junior",
    },
    // {
    //   image: image4,
    //   title: "Imperial Suite",
    //   details:
    //     "Experience the ultimate in lavish living in our Imperial Suite, where opulent furnishings, breathtaking city views, and unparalleled luxury await to make your stay an unforgettable one.",
    //   id: crypto.randomUUID(),
    //   link: "/Imperial",
    // },
    {
      image: image2,
      title: "Executive Suite",
      details:
        "Elevate your stay to new heights in our Executive Suites, featuring sophisticated decor, spacious living areas, and exclusive amenities designed to cater to your every need.",
      id: crypto.randomUUID(),
      link: "/Executive",
    },
    {
      image: image1,
      title: "Orthodox Room",
      details:
        "Experience a blend of tradition and luxury in our Orthodox Suites, where opulent furnishings and ornate decor pay homage to the culture of our destination, while modern amenities ensure your comfort and convenience.",
      id: crypto.randomUUID(),
      link: "/Orthodox",
    },
    {
      image: image5,
      title: "Presidential Suite",
      details:
        "Live like royalty in our Presidential Suite, boasting unparalleled luxury, bespoke furnishings, and stunning views of the city skyline. Enjoy an exclusive and indulgent experience that will leave you feeling pampered and rejuvenated.",
      id: crypto.randomUUID(),
      link: "/Presidential",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Apartments | Corporate Residence</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="section-6">
        <div className="apartment-title">
          <Nav />
          <h2> Our Rooms & Suites</h2>
          <p className="apartment-title-p">
            Welcome to our collection of rooms & suites! Whether you're
            traveling solo, with a partner, or with a group, we have a variety
            of apartments to suit your needs. All of our apartments are
            carefully designed and furnished to make your stay as comfortable
            and enjoyable as possible.
          </p>
        </div>
        <div id="apartment">
          <div className="apartment-card">
            {apartments.map((apartment) => (
              <div className="room-card" key={apartment.id}>
                <div className="room-img">
                  <img src={apartment.image} alt="Room" />
                </div>
                <div className="room-details">
                  <div className="room-name">{apartment.title}</div>
                  <div className="main-dets">{apartment.details}</div>
                  <Link to={apartment.link}>
                    {" "}
                    <button class="custom-btn btn-11">View Room</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Apartment;
