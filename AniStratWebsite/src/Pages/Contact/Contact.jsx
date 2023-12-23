import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Contact.css";
import map from "../Images/map.PNG";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { message, Spin } from "antd";

const Contact = () => {
  const [loading, setloading] = useState(true);
  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

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

  //   function emailSnd(doc) {

  // }
  let firstname = useRef();
  let firstEmail = useRef();
  let firstSubject = useRef();
  let firstMessage = useRef();

  function SndEmail(event) {
    event.preventDefault();
    setloading(false);

    let userName = firstname.current.value;
    // let userEmail = firstEmail.current.value;
    let userSubject = firstSubject.current.value;
    let userMessage = `message from this ${firstEmail.current.value} ${firstMessage.current.value}`;

    axios({
      method: "post",
      url: "https://sign-api-boiler-plate.vercel.app/tecstikSndmail",
      data: {
        userName: userName,
        userSubject: userSubject,
        userMessage: userMessage,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("🦄 Successfully Submit mail!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <section id="Contact">
        <div class="hero-content" data-aos="fade-up">
          <h2>Let's Talk about Fintech</h2>
        </div>
      </section>

      <br />
      <br />

      <div id="CareersForm" class="Careers">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h3>Let’s work together</h3>
              <p>Thank you for being so awesome and thinking about us.</p>

              <div class="mb-3n">
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" class="text-black">
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p>
                  <a href="mailto:info@tecstik.com" class="text-black">
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p> +92-21 32442392-93</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 ">
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                // height="200"
                class="mb-4 mb-lg-0"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
              />
              <br />
              <br />
              <button
                type="button"
                class="btn btn-primary"
                id="googleMapbtn"
                onClick={maplink}
              >
                Open in Google Maps
              </button>
            </div>

            <div class="col-lg-6">
              <form onSubmit={SndEmail} role="form" class="email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      ref={firstname}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      ref={firstEmail}
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    ref={firstSubject}
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                    ref={firstMessage}
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  {loading ? (
                    <button type="submit" class="btn btn-secondary">
                      Send Message
                    </button>
                  ) : (
                    <Spin size="large" />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
