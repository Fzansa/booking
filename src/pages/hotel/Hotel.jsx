import Navbvar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/583656351.jpg?k=e7597eed1894120f783f6a4b7d49db55c73868eaa9e462f5afa3a94330d87ab7&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/583656737.jpg?k=989d97f58790f8f00106dd7746e979fcb3a73b4bdbf0bc528dcca21ab765ac90&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/583656741.jpg?k=8b419555645718d7ea9ae2c10658e0a4cfb96d7c9274f60a2bad7134884c9e3f&o=&hp=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/583656745.jpg?k=b3b534a5b7d4e624bd535cdff08c015bef9b9a4d1c1df12926420375c4a5a615&o=&hp=1'

    }
  ]
  return (
    <div className="hotel">
      <Navbvar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Raghunath mandir chowk Jammu city, 180001 Jammu, India</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">EL old 2356 town New York</span>
          <div className="hotelImages">
            {
              photos.map(img => (
                  <div className="hotelImgWrapper">
                    <img src={img.src} alt='kuch' className="hotelImg"/>
                  </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">stay in my heart</h1>
              <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam ut qui accusantium, odio provident corporis, incidunt sequi accusamus eligendi aliquam doloribus suscipit inventore eaque, commodi voluptate reiciendis minima est.</p>
            </div>
            <div className="hotelDetailPrice">
              <h1>perfect for 9-night stay!</h1>
              <span>Located in the real heart of your mind in kashmir in kanada.</span>
              <h2><b>₹942</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
