import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Style from "../Style/Contact.module.css";
import Profile from "../Assets/Profile.png";

export default function Contact() {
  return (
    <div className={Style.Contact}>
      <div className={Style.CardBox}>
        <div className={Style.Card}>
          <div className={Style.Lines}></div>
          <div className={Style.ImgBox}>
            <LazyLoadImage src={Profile} alt="Profile" className={Style.ProfileImg} />
          </div>
          <div className={Style.Content}>
            <div className={Style.Details}>
              <h2>
                Pankaj Singh <br />
                <span>Founder of F3 Bites</span>{" "}
              </h2>
              <div className={Style.Btn}>
                <a type="button" href="tel:+917880233728">
                  Call
                </a>
                <a type="button" href="https://wa.link/pk54dh">
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.ContactInfo}>
        <div className={Style.Tagline}>
          <span>
            We Serve Delicious Food,
            <br />
            For You,
            <br />
            With A Smile
          </span>
          <p>Contact for your order</p>
        </div>
        <div className={Style.SmilePng}></div>
      </div>
    </div>
  );
}
