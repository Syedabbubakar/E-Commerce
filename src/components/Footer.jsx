import React from "react";
import logo from "../assets/images/WhatsApp Image 2023-12-22 at 4.03.45 PM.jpeg";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaMobile } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="cx-footer bg-dark">
      <div className="wrapper container">
        <div className="f-first">
          <h5>About</h5>
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea
            molestiae mollitia iure veniam, nobis reiciendis? Illum aperiam
            eligendi corrupti asperiores ipsam! Vero distinctio voluptatum
            suscipit eos cum nulla aliquam?
          </p>
        </div>
        <div className="f-second">
          <h5>Pages</h5>
          <div className="mb-3"><Link to="/home">Home</Link></div>
          <div className="mb-3"><Link to="/">All Products</Link></div>
          <div className="mb-3"><Link to="/">Category</Link></div>
          <div className="mb-3"><Link to="/">About</Link></div>
        </div>
        <div className="f-third">
          <h5>Contact</h5>
          <div className="d-flex text-light mb-2">
            <span className="me-2"><FaLocationArrow /></span>
            <span>Degloor Naka <br /> Nanded 431604</span>
          </div>
          <div className="d-flex text-light  mb-2">
            <span className="me-2"><FaMobile /></span>
            <span>+91 8421048203</span>
          </div>
          <div className="d-flex text-light">
            <span className="me-2"><MdAttachEmail /></span>
            <span>syed8040@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;