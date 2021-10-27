import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/MT1/1500x600_EN_JP._CB664063683_.jpg"
          alt="home_img"
          className="home_img"
        />
        <div className="home_row">
          <Product
            id="123213341"
            title="The lean startup Lorema askjcblak lkackla alksncka js oska ioan aoclkansc"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={5}
          />
          <Product
            id="123213341"
            title="Gaming Headset Xbox One Headset with Stereo Surround Sound,PS4 Gaming Headset with Mic."
            price={17.88}
            image="https://images-na.ssl-images-amazon.com/images/I/71YoAHYSL7L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="123213341"
            title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C"
            price={329}
            image="https://images-na.ssl-images-amazon.com/images/I/61ViOMIUhmL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="123213341"
            title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U"
            price={600}
            image="https://images-na.ssl-images-amazon.com/images/I/81AbJXWCxXL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123213341"
            title="Acer Swift 3 Thin & Light Laptop, 14 Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics"
            price={629}
            image="https://images-na.ssl-images-amazon.com/images/I/71W5ZdS%2BsEL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="123213341"
            title="TCL 43-inch 4K UHD Smart LED TV - 43S435, 2021 Model"
            price={100}
            image="https://images-na.ssl-images-amazon.com/images/I/714hn7q7WxL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
