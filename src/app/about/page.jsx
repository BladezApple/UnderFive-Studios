"use client";
import "./about.css";
import TeamCards from "@/components/TeamCards/TeamCards";
import Spotlight from "@/components/Spotlight/Spotlight";
import Footer from "@/components/Footer/Footer";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="studio-page">
      <section className="studio-header">
        <div className="container">
          <div className="studio-header-row">
            <Copy delay={0.8}>
              <h1>We are</h1>
            </Copy>
          </div>

          <div className="studio-header-row">
            <Copy delay={0.95}>
              <h1>UnderFive Studios</h1>
            </Copy>
          </div>
        </div>
      </section>

      <section className="studio-copy">
        <div className="container">
          <div className="studio-copy-img">
            <img src="/studio/studio-header.png" alt="" />
          </div>

          <Copy animateOnScroll={true}>
            <p className="lg">
              At UnderFive Studios, we have always dreamt of a place where
              digital assets are made affordable without compromising on quality.
              Such a place would be a haven for creators, a hub for innovation, and a
              catalyst for creativity. We are proud to say that we have built
              that place, with the help of the amazing team of artists, designers, and
              developers who share our vision.
            </p>

            <p className="lg">
              Our work explores the edges of digital expression, from utility
              plugins to breathtaking builds. We collaborate with brands
              and creators who share our passion for pushing the boundaries of
              what's possible in the digital realm. Most of our work is completely
              free to use, and open-sourced so that anyone can learn from it and build
              upon it. Some of our more premium work is available for purchase, but we
              always strive to keep it affordable and accessible to everyone. This ensures
              a fair compensation for our team while also fostering a vibrant community of
              creators who can benefit from our work.
            </p>
          </Copy>
        </div>
      </section>

      <TeamCards />

      <Spotlight />

      <Footer />
    </div>
  );
};

export default Page;
