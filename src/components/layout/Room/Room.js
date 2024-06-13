import './Room.css'
import image1 from "../../../img/room-2.png";
import image2 from "../../../img/room-3.png";
import image3 from "../../../img/room-5.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react"

const Room = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // preload the images before rendering the component
        const loadedImages = [image1, image2, image3].map((image) => {
            const img = new Image();
            img.src = image;
            return img;
        });

        Promise.all(loadedImages.map((img) => img.decode())).then(() =>
            setImages(loadedImages)
        );
    }, []);

    const handleButtonClick = (event) => {
        const index = event.target.dataset.index;
        setCurrentImage(index);
    };
    return (
        <div className="section-2">
            <div className='img'>
                {images.length > 0 && (
                    <img
                        src={images[currentImage].src}
                        alt="rooms"
                    />
                )}
            </div>

            <div className="room-det">
                <div className="room-header">Our Apartments</div>
                <p className="room-text">Our suites and rooms are furnished with your comfort and leisure in mind. The setting on the property is tranquil, quiet, and soothing.
                    It is ideal for families but even more so for a personal break away.</p>
                <div className="room-list">
                    <div className="room-a room" data-index={0} onClick={handleButtonClick} >Junior Suite</div>
                    <div className="room-b room" data-index={1} onClick={handleButtonClick} >Executive Suite</div>
                    <div className="room-c room" data-index={2} onClick={handleButtonClick} > Presidential Suite</div>
                </div>
                <Link to={"/Apartment"}><button class="custom-btn btn-11">See More</button></Link>
            </div>
        </div >
    );
}

export default Room;