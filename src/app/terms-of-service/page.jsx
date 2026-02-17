"use client";
import "./terms.css";
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
    <div className="tos-page">

      <section className="tos-content-wrapper">
        <div className="header">
            <Copy delay={0.8}>
              <h1>Terms of Service</h1>
            </Copy>
        </div>

        <div className="tos-content">
            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">1. Acceptance of Terms</p>
                    <p className="lg">
                    Welcome to UnderFive Studios! By accessing or using our website and services, you
                    agree to comply with and be bound by the following terms and conditions. Please 
                    read these Terms of Service carefully before using our platform. If you do not agree 
                    to these terms, please do not use our services.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">2. Eligibility</p>
                    <p className="lg">
                    By using our services, you confirm that you are at least 13 years of age or meet the 
                    minimum age requirement in your jurisdiction to enter into a legally binding agreement. 
                    If you are under 18, you confirm that you have permission from a parent or legal guardian.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">3. Products and Services</p>
                    <p className="lg">
                    UnderFive Studios provides digital products including but not limited to plugins, 
                    builds, website templates, textures, and other downloadable assets. Some of our products 
                    are completely free and open-sourced, while others may require payment.
                    </p>

                    <div className="lg">
                      <ul>
                        <li><p className="lg">All products are provided in digital format only, no physical goods are shipped.</p></li>
                        <li><p className="lg">Product descriptions are provided to the best of our ability but may evolve over time.</p></li>
                      </ul>
                    </div>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">4. Licensing and Usage</p>
                    <p className="lg">
                    Upon purchase or download, you are granted a non-exclusive, non-transferable license 
                    to use the product for its intended purpose.
                    </p>

                    <div className="lg">
                      <ul>
                        <li><p className="lg">You may not resell, redistribute, leak, or claim ownership of our paid products.</p></li>
                        <li><p className="lg">You may not repackage or redistribute free assets unless explicitly permitted by their license.</p></li>
                        <li><p className="lg">Open-source products must comply with their respective license terms.</p></li>
                        <li><p className="lg">Commercial use is allowed for all open-sourced/free products unless otherwise stated in the product description. All paid products qualify for commercial usage except for conflictions with the points stated above under this Section.</p></li>
                      </ul>
                    </div>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">5. Payments</p>
                    <p className="lg">
                    All payments must be completed through official payment channels specified by UnderFive 
                    Studios. Products will only be delivered after full payment has been confirmed.
                    </p>

                    <div className="lg">
                      <ul>
                        <li><p className="lg">Prices are subject to change at any time without prior notice.</p></li>
                        <li><p className="lg">Failure to complete payment will result in no product delivery.</p></li>
                        <li><p className="lg">Attempted payment fraud will result in permanent service restriction.</p></li>
                        <li><p className="lg">We may make mistakes in listing the price of a product. In such case, we have complete control over selling the products at their actual price instead of the mistakenly listed price.</p></li>
                      </ul>
                    </div>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">6. Refund Policy</p>
                    <p className="lg">
                    Due to the digital nature of our products, all sales are generally final. 
                    Refunds may only be granted at our sole discretion in cases of verified technical issues 
                    that cannot be resolved.
                    </p>

                    <div className="lg">
                      <ul>
                        <li><p className="lg">Refund requests must be submitted within a reasonable timeframe.</p></li>
                        <li><p className="lg">Proof of purchase is required.</p></li>
                        <li><p className="lg">Chargebacks without prior communication may result in permanent access revocation.</p></li>
                      </ul>
                    </div>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">7. Client Responsibilities</p>
                    <p className="lg">
                    Clients are responsible for ensuring compatibility with their server environment before 
                    purchase or installation.
                    </p>

                    <div className="lg">
                      <ul>
                        <li><p className="lg">You are responsible for backing up your server before installing any plugin or asset.</p></li>
                        <li><p className="lg">You must not use our products for unlawful, abusive, or malicious purposes.</p></li>
                        <li><p className="lg">You are responsible for maintaining proper configuration and permissions.</p></li>
                      </ul>
                    </div>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">8. Modifications and Updates</p>
                    <p className="lg">
                    We reserve the right to update, modify, or discontinue products at any time. 
                    Updates may be provided for free or as separate releases depending on the product.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">9. Limitation of Liability</p>
                    <p className="lg">
                    UnderFive Studios is not liable for any direct, indirect, incidental, or consequential 
                    damages arising from the use or inability to use our products. All products are 
                    provided "as is" without warranties of any kind.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">10. Termination</p>
                    <p className="lg">
                    We reserve the right to suspend or terminate access to our services if a user 
                    violates these Terms of Service, engages in fraudulent activity, or distributes 
                    our products without authorization.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">11. Changes to Terms</p>
                    <p className="lg">
                    These Terms of Service may be updated periodically. Continued use of our services 
                    after changes are posted constitutes acceptance of the revised terms.
                    </p>
                </div>
            </Copy>

            <Copy animateOnScroll={true}>
                <div className="content-group">
                    <p className="xl">12. Contact</p>
                    <p className="lg">
                    For questions regarding these Terms of Service, please contact us through our 
                    official Discord server or the contact methods listed on our website.
                    </p>
                </div>
            </Copy>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;