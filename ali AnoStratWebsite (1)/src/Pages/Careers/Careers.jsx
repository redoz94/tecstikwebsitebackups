import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import map from "../Images/map.PNG";
import axios from "axios";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer, toast } from 'react-toastify';
import { message, Spin } from 'antd';
import "./Careers.css";


const Careers = () => {
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const [expanded, setExpanded] = React.useState(false);
  const [loading, setloading] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let firstname = useRef()
  let firstEmail = useRef()
  let firstSubject = useRef()
  let firstMessage = useRef()

  function SndEmail(event) {
    event.preventDefault()
    setloading(false)

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
      }
    }).then((res) => {
      console.log(res);
      toast.success('🦄 Successfully Submit mail!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setloading(true)
    }).catch((err) => {
      console.log(err);
    })

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

  
  function maplink() {
    window.open("https://goo.gl/maps/GX3euzu28RpAkaPy6", "_blank");
  }

  return (
    <div>
      <Header />
      <ToastContainer />

      <section id="Careers">
        <div class="hero-content" data-aos="fade-up">
          <h2>Careers</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div id="CareersForm" class="Careers">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h3>Join The Journey of Innovative Fintech Innovation</h3>

              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '38%', flexShrink: 0 }}>
                    FullStack Web Developer:
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    MERN (MongoDB, Express, React.js, Node.js)  and MEAN (MongoDM, Express, React.js, Node.js) Developers
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Those who apply for this position are expected to have a visible experience of 2 years
                    with strong proficiency in JavaScript, MongoDB, Express, React.js, and Node.js. These
                    candidates need to send a link to their portfolio which shows their past performance
                    in such projects.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '38%', flexShrink: 0 }}>Full-Stack Content Writers:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Can you create outstanding pieces of content for Fintech?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    All Candidates must have one-year experience in building customer personas,
                    determining where prospects are in the customer journey, regulating customer needs,
                    deciding on trending topics to talk to about, have relevant industry expertise,
                    React-SEO experience, writing content variations, analyzing different content models,
                    repurposing content, using Hubspot CRM, adhering to structured content techniques.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '38%', flexShrink: 0 }}>
                    React Native Developers:
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    React Native developers will support and create high-end Smartphone apps for TecStik Clients.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    React Native developers will assume a senior position which will require them to mentor junior
                    developers, manage their teams’s efforts in building mobile versions of enterprise websites or
                    software, and have full proficiency in JavaScript.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '38%', flexShrink: 0 }}>Blockchain Developers:</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Solidity Ethereum Developers gather round.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    A Candidate must be a Solidity Ethereum developer; ideally  with expertise across Defi,
                    NFTs, Asset Tokenization and Decentralized Application(Dapps) with web3 integration.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* <div class="mb-3n">
                <h3>Send Us an Email</h3>
                <p>info@tecstik.com</p>
              </div> */}
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Send Us an Email</h3>
                <p><a href="mailto:info@tecstik.com" class="text-black">info@tecstik.com</a> </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+92-21 32442392-93</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 ">
              <br />
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
              <button type="button" class="btn btn-primary" id="googleMapbtn" onClick={maplink}>Open in Google Maps</button>

            </div>

            <div class="col-lg-6">
              <form
                onSubmit={SndEmail}
                role="form"
                class="email-form"
              >
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
                  {/* <button type="submit" class="btn btn-secondary" disabled>Send Message</button> */}
                  {loading ? <button type="submit" class="btn btn-secondary">Send Message</button> : <Spin size="large" />}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Careers Section --> */}
      <br />
      <br />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
