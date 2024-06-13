import { IoRestaurantSharp, IoBarbellSharp, IoStorefrontSharp } from "react-icons/io5"
import { HiLightBulb } from "react-icons/hi";
import { MdSecurity, MdWifi, MdRoomService } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa"
import './Amenities.css'


const Amenities = () => {
    let cards = [
        { name: "Restaurant", icon: <IoRestaurantSharp />, id: crypto.randomUUID() },
        { name: "Store", icon: <IoStorefrontSharp />, id: crypto.randomUUID() },
        { name: "Fitness Center", icon: <IoBarbellSharp />, id: crypto.randomUUID() },
        { name: "24 Hours Power", icon: <HiLightBulb />, id: crypto.randomUUID() },
        { name: "Security", icon: <MdSecurity />, id: crypto.randomUUID() },
        { name: " Pool", icon: <FaSwimmingPool />, id: crypto.randomUUID() },
        { name: "High Speed Wifi", icon: <MdWifi />, id: crypto.randomUUID() },
        { name: "24 Hours Service", icon: <MdRoomService />, id: crypto.randomUUID() }
    ]


    return (
        <div className="section-3">
            <div className="title" >Our Facilities</div>
            <div className="section-3-a">  {
                cards.map((card) => (

                    <div className="card" key={card.id}>
                        <div className="icon">
                            {card.icon}
                        </div>
                        <div className="text">
                            {card.name}
                        </div>
                    </div>
                ))
            }</div>

        </div>
    );
}

export default Amenities;