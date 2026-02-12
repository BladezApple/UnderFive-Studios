"use client";
import "./contact.css";
import { useEffect, useRef } from "react";
import Button from "@/components/Button/Button";
import Copy from "@/components/Copy/Copy";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const existingScreensavers = container.querySelectorAll(".screensaver");
    existingScreensavers.forEach((el) => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    let isDesktop = window.innerWidth >= 1000;

    const handleResize = () => {
      const wasDesktop = isDesktop;
      isDesktop = window.innerWidth >= 1000;

      if (isDesktop && !wasDesktop) {
        startAnimation();
      } else if (!isDesktop && wasDesktop) {
        stopAnimation();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="contact screensaver-container" ref={containerRef}>
        <div className="contact-copy">
          <div className="contact-col">
            <Copy delay={0.8}>
              <h2>Let us handle your projects!</h2>
            </Copy>
          </div>

          <div className="contact-col">
            <div className="contact-group">
              <Copy delay={0.8}>
                <p className="sm">Our Focus</p>
                <p>Minecraft Plugins</p>
                <p>Minecraft Builds</p>
                <p>Discord Bots</p>
                <p>Websites</p>
                <p>Texture Packs / Icons</p>
                <p>And more...</p>
              </Copy>
            </div>

            <div className="contact-group">

              <div className="contact-mail">
                <p className="sm">Contact and Socials</p>

                <Button delay={1.3} href="mailto:underfivestudios@gmail.com">
                  Email
                </Button>

                <Button delay={1.3} href="https://www.youtube.com/@UnderFiveStudios">
                  YouTube
                </Button>

                <Button delay={1.3} href="https://www.instagram.com/underfivestudios/">
                  Instagram
                </Button>

                <Button delay={1.3} href="https://discord.gg/FQqnur9cG2">
                  Discord
                </Button>
              </div>

              <Copy delay={1.4}>
                <p className="sm">Credits</p>
                <p>Developed by @ItzSteveefr and @BladeZ</p>
                <p>Brought to you by the UnderFive Team</p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
