import React from "react";
import { Link } from "react-scroll";
import Style from "../Style/Navbar.module.css";
import Logo from "../Assets/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav className={Style.Navbar}>
        <div className={Style.Menu}>
          <img src={Logo} alt="Logo" className={Style.Logo} />
        </div>
        <ul className={Style.Links}>
          <li className={Style.Item}>
            <Link className={Style.Link} to="Home" spy={true} smooth={false}>
              <box-icon
                type="solid"
                name="home-alt-2"
                color="black"
                size={"2.5em"}
              ></box-icon>
            </Link>
          </li>
          <li className={Style.Item}>
            <Link className={Style.Link} to="About" spy={true} smooth={false}>
              <box-icon
                type="solid"
                name="info-circle"
                color="black"
                size={"2.5em"}
              ></box-icon>
            </Link>
          </li>
          <li className={Style.Item}>
            <Link
              className={Style.Link}
              to="Contact"
              spy={true}
              smooth={false}
              offset={50}
            >
              <box-icon
                type="solid"
                name="user"
                color="black"
                size={"2.5em"}
              ></box-icon>
            </Link>
          </li>
          <li className={Style.Item}>
            <Link
              className={Style.Link}
              to="/"
              spy={true}
              smooth={false}
              offset={50}
            >
              <box-icon
                type="solid"
                name="food-menu"
                color="black"
                size={"2.5em"}
              ></box-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
