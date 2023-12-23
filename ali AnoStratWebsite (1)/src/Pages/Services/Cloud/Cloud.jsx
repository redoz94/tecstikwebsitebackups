import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Cloud.css";
import CloudComputing from './cloudcomputing.png'


const DigitalMarketing = () => {

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
      <section id="DigitalMarketing"
        style={{ backgroundImage: `url(${CloudComputing})` }}
      >
        <div class="hero-DigitalMarketing" data-aos="fade-up" >
          <h2>Cloud Computing</h2>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* <!-- End Contact Section --> */}
      <section id="DigitalContain">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="DigitalContainText">
              <h2>Cloud Computing</h2>
              <p id="DigitalContainText">
                Cloud Computing at <b>TecStik</b>  involves building software applications using AWS (Amazon Web
                Services) and Kubernetes Frameworks. Our Cloud Computing teams apply their Expertise in
                Either Technology to build your Software with Databases on The Cloud. This allows your
                team to gain access to Real-Time Information when they are looking to Make Adjustments
                or even wish to View Financial Data for checking its Credibility.
              </p>
            </div>

            <div class="col-lg-6">
              <img
                id="DigitalAppImage"
                // src={DigitalM}
                src="https://res.cloudinary.com/codersociety/image/fetch/w_1200,h_900,c_fill/https://cdn.codersociety.com/uploads/cloud-native.png"
                alt=""
                height={280}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />


      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DigitalMarketing;
