"use client";
import "./Footer.css";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Button/Button";
import { IoMail } from "react-icons/io5";
import Copy from "../Copy/Copy";

gsap.registerPlugin(useGSAP);

const Footer = () => {
  const footerRef = useRef(null);
  const [torontoTime, setTorontoTime] = useState("");

  useEffect(() => {
    const updateTorontoTime = () => {
      const options = {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const torontoTimeString = formatter.format(new Date());
      setTorontoTime(torontoTimeString);
    };

    updateTorontoTime();
    const timeInterval = setInterval(updateTorontoTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="container">
        <div className="footer-header-content">
          <div className="footer-header">
            <Copy animateOnScroll={true} delay={0.2}>
              <h1>Let's build something that feels alive</h1>
            </Copy>
          </div>
          <div className="footer-link">
            <Button
              animateOnScroll={true}
              delay={0.5}
              variant="light"
              icon={IoMail}
              href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="footer-byline">
          <div className="footer-time">
            <span>
              <i>Premium creations made accessible</i>
            </span>
          </div>

          <div className="footer-copyright">
            <span>UnderFive Studios &copy; 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
