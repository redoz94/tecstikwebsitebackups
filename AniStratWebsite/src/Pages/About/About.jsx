import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import "./About.css";
import AboutSlider from "./aboutSlider.jpg";
import Footer from "../Footer/Footer";
import logo from "./logo3.png";

const About = () => {


  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <div>
      <Header />

      <section
        id="about"
        style={{
          backgroundImage: `url(${AboutSlider})`,
        }}
      >
        <div class="hero-content">
          <h4 class="">Committed to Your Financial Productivity</h4>
        </div>
      </section>

      <section>
        <div class="container" data-aos="fade-up">
          <div class="row" id="cardTextImage">
            <div class="col-lg-6 content" id="dollarText">
              <br />
              <br />
              <br />
              <h2>
                INVIGORATING FINANCIAL TECHNOLOGY

              </h2>

              <p>
                <br />
                When a Company’s Business Strategy and Technology Strategy are intertwined, The Company Prospers. As The Technology Arm of Pacific Financial Services PVT. LTD. – a company operating in the international financial market for over 20 years, TecStik conducts meticulous efforts to build Fintech for Business Owners and The Mass Market.
                <br />
                <br />
                By applying Fintech for Business Owners, TecStik Supports your Finance Processes by using Cloud-Computing, Blockchain Development, Web Development and App Development. Prepare for  your financial efficiency to surpass customary methods.  Build a Legacy of your Company’s Financial operations with TecStik.
              </p>
              <p>TecStik's expertise extensively lie in creating Fintech that supports and actively revolutionize how the global market handle their personal finances.</p>
            </div>

            <div class="col-lg-6 cardTextImage">

              <img
                id="aboutImage"
                src={logo}
                alt=""
                // height={600}
                // width={400}
              />

            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
