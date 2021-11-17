import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div class="footer_row1">
        <div class="col-1">
          <h4>Get to Know Us</h4>

          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a smile</p>
        </div>
        <div class="col-2">
          <h4>Connect with Us</h4>
          <p>Facebook</p>

          <p>Twitter</p>

          <p>Instagram</p>
        </div>
        <div class="col-3">
          <h4> Make Money With Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon accelerator</p>
          <p>Advertise your Products</p>
          <p>Amazon Global Selling</p>
          <p>Amazon pay on Merchants</p>
        </div>
        <div class="col-4">
          <h4> Let Us Help You</h4>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centrects</p>
          <p>100% Purchase Protection</p>
          <p>Help</p>
        </div>
        <div class="col-5">
          <p>Your Amazon.in</p>
          <p>Amazon Pay</p>
          <p>Your Account</p>
          <p>Returns </p>
          <p>Customer Service</p>
        </div>
        <div class="col-6">
          <p>Your Orders </p>
          <p>Amazon App Download</p>
          <p>Find a Wish List</p>
          <p>Your Recently Viewed Items</p>
          <p>Sell</p>
        </div>
        <div class="l1">
          <img
            src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
            className="header_logo"
            alt="amazon_logo"
            width="120px"
            height="50px"
          />
        </div>
      </div>

      <div class="bottom">
        <p>
          <a href="#">Conditions of Use & Sale </a>{" "}
          <a href="#"> Privacy Notice </a> <a href="#"> Intrest Based Ads </a> ©
          1996-2021, Amazon.com, Inc. or its affiliates{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
