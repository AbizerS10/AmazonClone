import React, { useState } from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import Header from "./Header";
import Footer from "./Footer";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
            alt=""
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <div className="checkout_right1">
              <Subtotal />
            </div>
            <h2 className="checkout_title">Your Shopping Cart</h2>

            {/* CheckoutProduct */}
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
          <p>
            {" "}
            Subtotal ({basket?.length} items): Rs.{getBasketTotal(basket)}
          </p>
        </div>

        <div className="checkout_right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
