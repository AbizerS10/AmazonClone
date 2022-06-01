import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./home.css";
import Product from "./Product";
import { products } from "./products";

function Home() {
  const [prod, setProd] = useState(products);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const result = products.filter((elem) => {
      return elem.title.toLowerCase().includes(search.toLowerCase());
    });
    setProd(result);
  }, [search]);

  return (
    <>
    <Header setSea={setSearch}/>
      <div className="home">
        <div className="home_container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/MT1/1500x600_EN_JP._CB664063683_.jpg"
            alt="home_img"
            className="home_img"
          />
          <div className="prod_container">
            {prod.length ? (
              prod.map((elem, idx) => {
                return (
                  <div className="home_row">
                    <Product
                      id={elem.id}
                      title={elem.title}
                      price={elem.price}
                      image={elem.image}
                      rating={elem.rating}
                    />
                  </div>
                );
              })
            ) : (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  height: "10rem",
                }}
              >
                No match found
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
