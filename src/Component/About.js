import React from "react";
import Style from "../Style/About.module.css";
import Slider from "./Slider";

export default function About() {
  return (
    <>
      <div className={Style.About}>
        <div className={Style.ImgBox}></div>
        <h2>Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.0557363652113!2d76.35661449811293!3d21.82159940688755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd81bbc0b04e8e5%3A0xba340ea776e6cbd8!2sFresh%20Flavour%20Fresh%20Bite!5e1!3m2!1shi!2sin!4v1674924131479!5m2!1shi!2sin"
          width="600"
          height="450"
          title="Location"
          style={{ border: "0" }}
          loading="lazy"
          className={Style.Location}
        ></iframe>
        <h2>Gallery</h2>
        <Slider />
      </div>
    </>
  );
}
