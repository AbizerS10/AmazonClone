import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CurrencyFormat from "react-currency-format";
 import { getBasketTotal } from "./reducer";
import Footer from './Footer';
import Header from './Header';
// import axios from './axios';
// import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    // const stripe = useStripe();
    //  const elements = useElements();

    return (
        <>
        <Header />
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        {basket?.length} items)
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123,Sector-C</p>
                        <p>Indrapuri,Bhopal</p>
                    </div>
                </div>

                {/* Payment section - Review Items*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
              
                {/* Payment section - Payment method */}
                 
            </div>
            <p className='p1'> Subtotal (
                        {basket?.length} items):    Rs.{getBasketTotal(basket)}</p>
        </div>
        <Footer />
        </>
    )
};

export default Payment