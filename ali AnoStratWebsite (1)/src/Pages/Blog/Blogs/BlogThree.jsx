import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import StoreContext from "../../../ContextApi";

import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
// import "./Blog";
// new import image
import BlogThreeStyle from "./BlogThree.module.css";
// new images import
import fbImg from "../BlogImages/blog2images/facebook/facebook.png";
import linImg from "../BlogImages/blog2images/linkedin/linkedin.png";
import TwiImg from "../BlogImages/blog2images/twitter/twitter.png";
import CircleImg from "../BlogImages/blog2images/circle.png";
import tabletImg from "../BlogImages/blog2images/tablet.png";
import chartImg from "../BlogImages/blog2images/Untitled--1.png";

export default function BlogOne({ copyText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const [copySuccess, setCopySuccess] = React.useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const textArea = document.querySelector("textarea");
    textArea.select();
    document.execCommand("copy");
    textArea.blur();
    setCopySuccess("Copied!");
  };

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };
  let ContextData = useContext(StoreContext);
  let data = ContextData.BlogData;
  // console.log(data.metaDescription, "raza=====>");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);
  // console.log(window.location.pathname.slice(1), "link raza");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div>
          <Modal
            // title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div>
              <input type="text" value={copyText} readOnly />
              {/* Bind our handler function to the onClick button property */}
              <button>
                <span>{isCopied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </Modal>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className=" blog-main m-auto">
                <div className={BlogThreeStyle.three_container}>
                  <h1 id="heading" className={BlogThreeStyle.future_heading}>
                    The Future of Fintech in Pakistan: The Next Frontier
                  </h1>
                  <br />

                  <p
                    className="w3-text-grey"
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    Enhance earnings by exploring Pakistan's financial realm
                  </p>
                  <br />
                  <p class="w3-text-grey">By Azfar Bilal - xx-xx-xxxx</p>
                  <div className={BlogThreeStyle.socialImg}>
                    <img src={fbImg} alt="fb" />
                    <img src={linImg} alt="linkedin" />
                    <img src={TwiImg} alt="twitter" />
                  </div>
                  <br />
                  <div>
                    <img
                      src={CircleImg}
                      alt="circle"
                      className={BlogThreeStyle.CircleImg}
                    />
                  </div>
                  <div className={BlogThreeStyle.main___conatiner}>
                    <div className={BlogThreeStyle.firstpara}>
                      <p className="w3-text-grey">
                        “The future belongs to those who can rise above the
                        technology and master it.” – Jamie Dimon, CEO of
                        JPMorgan Chase.
                      </p>
                      <p className="w3-text-grey">
                        Fintech or financial technology is among the latest
                        trends consumers and businesses are applying to enhance
                        their fiscal processes. Users build financial success
                        with its convenient, streamlined and cost-efficient
                        features.
                      </p>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">What is Fintech?</h3>
                        <p>
                          A driving force behind thriving businesses and
                          individuals, fintech brings:
                        </p>
                        <ul>
                          <li>Financial inclusion, </li>
                          <li>Financial freedom,</li>
                          <li>Reduces costs,</li>
                          <li>Decreased operational expenses,</li>
                          <li>Convenient transactions. </li>
                        </ul>
                        <p>
                          It is becoming increasingly important for the
                          advancement of emerging economies like Pakistan, to
                          adopt the latest fintech to enhance financial
                          improvement. Fintech in Pakistan is poised to change
                          the lives of the population.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          Fintech’s Impact on Pakistan
                        </h3>
                        <p>
                          Fintech in Pakistan comes with notable financial
                          advancement for local businesses and residents.
                          Keeping an authoritative eye on fintech in Pakistan,
                          the country’s government introduces numerous{" "}
                          <a
                            href="https://www.sbp.org.pk/dfs/Fintech.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            policies
                          </a>{" "}
                          to promote the use of fintech applications. Promoting
                          fintech bodies to innovate additional products and
                          services.
                        </p>
                        <p>
                          Owing to the government’s support, educational
                          campaigns and regulatory policies have been introduced
                          in Pakistan for fintech. These steps have enabled the
                          mass proliferation of fintech in business and the
                          daily routines of nationals. Bringing the current
                          state of fintech in Pakistan to productive levels and
                          a promising future of fintech in Pakistan.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          Future of Fintech in Pakistan: Key Drivers
                        </h3>
                        <p>
                          Pakistan has witnessed an upsurge in a young
                          technology-proficient young adult population. Coupled
                          with government support and rising internet
                          penetration, the south-Asian nation is home to a
                          society of 6.84 billion smartphone owners. On the
                          business side: skilled tech talent and low operational
                          costs are also compelling reasons behind the vibrant
                          future of fintech in pakistan.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          The Current State of Fintech in Pakistan
                        </h3>
                        <p>
                          Fintech has begun to have a positive influence on the
                          Pakistani economy. By the end of 2023,{" "}
                          <a
                            href="https://www.statista.com/outlook/dmo/fintech/pakistan#key-market-indicators"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            65 million
                          </a>{" "}
                          folks in the country will be using fintech through
                          their smartphones or computers. Apps like EasyPaisa
                          are now even levelling the financial services playing
                          field, for people of all walks of life.
                        </p>
                        <p>
                          Fintech outfits are providing traditional financial
                          services to underserved Pakistani countrymen they can
                          avail from the smart-devices in their pockets and
                          their desktops. Mobile banking, mobile lending and
                          mobile payments are a few of the services that can be
                          conveniently accessed by locals.
                        </p>
                        <p>
                          Lowering costs of financial services and promoting
                          financial education are key advantages of prolific
                          fintech use in the country. Owing to the increasing
                          affordability of smartphones, there were{" "}
                          <a
                            href="https://www.statista.com/outlook/dmo/fintech/pakistan#key-market-indicators"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            87.35 million internet users
                          </a>{" "}
                          in Pakistan in the beginning of 2023 - a significant
                          chunk of the population. Inhabitants of the region are
                          swiftly becoming digitally-savvy, financially literate
                          and suitably collaborative: resulting in wide-use of
                          fintech among the corresponding masses.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          Fintech Success Stories in Pakistan
                        </h3>
                        <p>
                          Due to widespread fintech use, there are various
                          fintech platforms flourishing in Pakistan. Digital
                          payments, branchless banking and peer-to-peer lending
                          are among popular fintech subdomains functioning
                          today.
                        </p>
                        <p>
                          Assisting users to pay bills, make payments and send
                          money: digital payment platforms including EasyPaisa
                          by Telenor Pakistan are pioneers of online payment
                          gateways facilitating exchanges of remittances.
                          EasyPaisa and similar platforms have seen their user
                          bases{" "}
                          <a
                            href="https://insights.datadarbar.io/easypaisa-losses-and-the-heavy-cost-of-growing-digital-payments/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            skyrocket
                          </a>{" "}
                          , thanks to extensively available and affordable
                          mobile phones. Such fintech systems have significantly{" "}
                          <a
                            href="https://journals.pakistanreview.com/index.php/PRSS/article/download/180/115"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            expanded
                          </a>{" "}
                          financial inclusion, since electronic fintech
                          instalments allow ease of transferring money to
                          external accounts all around the country.
                        </p>
                        <p>
                          Mobile money used in branchless banking apps is
                          gaining popularity in Pakistan. With well-built
                          banking apps, several traditional banks are now
                          offering the majority(ies) of their services via
                          mobile-software. Visiting a bank’s branch was the only
                          way to gain access to banking services in the past,
                          now banks’ customers can easily login to their
                          corresponding bank’s application and receive services
                          offered to them at physical bank outlets remotely.
                        </p>
                        <p>
                          As per peer-2-peer lending applications, Finja has
                          emerged as the first hybrid application serving as a
                          practical medium for people to send and receive loans
                          for their purposes. With Fijma, SMEs and the
                          underbanked can acquire loans from banks like Bank
                          Alfalah after relevant details are verified.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.img_container}>
                        <img src={tabletImg} alt="logo" />
                      </div>
                      <div className={BlogThreeStyle.main___conatiner2}>
                        <h3 className="w3-text-grey">
                          Regulations Affecting Fintech in Pakistan
                        </h3>
                        <p>
                          Regulatory fintech frameworks have been built by the
                          administration of Pakistan, as supportive mechanisms
                          that encourage the use and creation of fintech
                          solutions. It is challenging for interested parties to
                          obtain necessary licences that lead to
                          lagging-development of fintech endeavours. If
                          regulations or licences do exist for fintech
                          establishments, the lack of their awareness is a tough
                          reality for fintech cooperatives.
                        </p>
                        <p>
                          With these demanding obstacles, fintech institutions
                          can capitalise on a number of enticing opportunities,
                          namely:
                        </p>
                        <ol>
                          <li>A burgeoning fintech market,</li>
                          <li>Price-friendly infrastructure,</li>
                          <li>
                            Launch of a fintech regulatory sandbox and national
                            fintech policy by the regime,
                          </li>
                          <li>Digital-native civilians.</li>
                        </ol>
                        <p>
                          Exploring the benefits and challenges of introducing,
                          operating or utilising fintech will ensure fintech
                          stakeholders realise the possibilities they can
                          leverage. Along with the potential rewards when they
                          streamline fintech from both the consumer(s) and
                          developer(s) perspectives.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner2}>
                        <h3 className="w3-text-grey">
                          Traditional Finance and Fintech
                        </h3>
                        <p>
                          Armed with the edge of innovation and agility, fintech
                          startups have come across as remarkably valuable to
                          existing banks to help them reach their
                          customer-base(s). Customary finance institutions
                          partnering up with fintech providers is still in its
                          early stages, but the upsides are clearly visible.
                          Just like Bank Alfalah and Finja’s partnership.
                        </p>
                        <p>More notable examples are:</p>
                        <ol>
                          <li>
                            Partnering up with Telenor Microfinance Bank, The
                            National Bank of Pakistan(NBP) now offers mobile
                            banking services. This move is allowing The NBP to
                            provide its huge customer base with mobile banking
                            services through the Telenor Microfinance Bank’s
                            functionalities.
                          </li>
                          <li>
                            Takaful Pakistan and{" "}
                            <span style={{ fontWeight: "bold" }}>
                              Roshan Digital Account -
                            </span>
                            launched by The State Bank of Pakistan have
                            partnered to distribute shariah-compliant
                            (islamically legal) loans and additional banking
                            services to customers online.
                          </li>
                          <li>
                            With{" "}
                            <span style={{ fontWeight: "bold" }}>
                              Easypaisa,
                            </span>
                            Pakistanis can easily pay relevant entities on the
                            internet according to its partnership with State
                            Bank of Pakistan’s bringing increased cashless
                            transactions.
                          </li>
                        </ol>
                        <p>
                          Partnerships between traditional financial
                          institutions of Pakistan and fintech are soaring. A
                          huge share of the future of fintech in Pakistan is
                          likely to feature fintech meeting finance.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          Anticipated Future of Fintech in Pakistan
                        </h3>
                        <p>
                          The future fintech in Pakistan is optimistic. As
                          outlined above, the strengths of conducting fintech
                          companies and usage of their fintech applications
                          undoubtedly outweigh its drawbacks.
                        </p>
                        <p>
                          Digital payments contribute primarily to the spread of
                          fintech from one end of Pakistan to the other. The
                          scant prevalence of credit and debit cards has
                          prompted the use of digital wallets, which have made
                          their users capable of efficient money movement needs.
                        </p>
                        <div className={BlogThreeStyle.img_container1}>
                          <img src={chartImg} alt="logo" />
                        </div>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3 className="w3-text-grey">
                          Investing in The Future of Fintech in Pakistan
                        </h3>
                        <p>
                          Projected to have a market volume of{" "}
                          <a
                            href="https://www.statista.com/outlook/dmo/fintech/pakistan"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            US$4.95 billion in 2027,
                          </a>{" "}
                          the future of fintech in Pakistan shows promise of
                          becoming energetically exciting.{" "}
                          <a
                            href="https://www.forbes.com/sites/forbesbusinesscouncil/2023/08/17/the-fintech-startup-environment-in-pakistan-from-idea-to-execution/?sh=4e7f1d3372bc"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Striking returns
                          </a>{" "}
                          can be achieved by foreign and domestic financers once
                          they have invested in the industry.
                        </p>
                        <p>
                          The Pakistani demographic is large and proliferating.
                          With a majority of the citizenry owning smartphones,
                          including a rapidly multiplying middle class that have
                          created a fertile landscape for the future of fintech
                          in Pakistan.
                        </p>
                        <p>
                          A staggering $200 Million was raised{" "}
                          <a
                            href="https://www.bloomberg.com/news/features/2021-11-17/pakistan-startups-draw-record-money-helped-by-covid-and-china-s-tech-crackdown?embedded-checkout=true"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            in 2021
                          </a>{" "}
                          alone, by startups in the fintech domain of Pakistani
                          territory. With dwellers of Pakistan showcasing
                          exceptional abilities of ingenious modernisation, the
                          interests of international parties are distinctly
                          ascending. Along with considerations of those within
                          the homeland too.
                        </p>
                        <p>
                          As per peer-2-peer lending applications, Finja has
                          emerged as the first hybrid application serving as a
                          practical medium for people to send and receive loans
                          for their purposes. With Fijma, SMEs and the
                          underbanked can acquire loans from banks like Bank
                          Alfalah after relevant details are verified.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner2}>
                        <h3 className="w3-text-grey">Key Takeaways</h3>
                        <p>
                          The fintech landscape of Pakistan is prepared for
                          creating digital financial transformations, as can be
                          observed in the following key takeaways of the
                          information mentioned above:
                        </p>
                        <ol>
                          <li>
                            The young digital enthusiasts of Pakistan making
                            into an ultimate breeding space to nurture fintech
                            catering to a briskly emerging market.
                          </li>
                          <li>
                            It is apparent in the success of startups like
                            Easypaisa, Finja and Zindigi that the locale is ripe
                            for revolutionary computerised changes.
                          </li>
                          <li>
                            The economy of Pakistan is being impacted strongly
                            with underserved Pakistanis given access to digital
                            wallets - boosting financial inclusion.
                          </li>
                          <li>
                            The government is supportive of fintech, introducing
                            policies to promote its growth.
                          </li>
                          <li>
                            The future of fintech in Pakistan is very favourable
                            with highly-renowned worldwide resources forecasting
                            the fintech market’s volume in Pakistan to be $4.95
                            in 2027.
                          </li>
                        </ol>
                        <p>
                          Financial technology is leading to equivalent,
                          convenient services to distant occupants while
                          reducing the costs of financial services. Namely,
                          digital wallets for paying bills, investing in stocks
                          or just plainly transferring cash without extra
                          charges.
                        </p>
                        <p>
                          Internet users in Pakistan are tactically implementing
                          fintech in their daily lives. To make the most out of
                          routine financial procedures, fintech is availed for
                          automating arduous tasks, refining efficiency and
                          reducing costs. The future of fintech in Pakistan{" "}
                        </p>
                      </div>
                    </div>
                    <div className={BlogThreeStyle.border__line}></div>
                    <div className={BlogThreeStyle.second__para_container}>
                      <p>
                        The Future of Fintech in Pakistan: The Next frontier
                      </p>
                      <div className={BlogThreeStyle.second__para_container1}>
                        <p>What is Fintech?</p>
                        <p>Fintech’s Impact on Pakistan</p>
                        <div
                          className={
                            BlogThreeStyle.second__para_container1__left
                          }
                        >
                          <p>Future of Fintech in Pakistan: Key Drivers</p>
                          <p>The Current State of Fintech in Pakistan</p>
                          <p>Fintech Success Stories in Pakistan</p>
                          <p>Regulations Affecting Fintech in Pakistan</p>
                          <p>Traditional Finance and Fintech</p>
                        </div>
                        <p>Anticipated Future of Fintech in Pakistan</p>
                        <div
                          className={
                            BlogThreeStyle.second__para_container1__left
                          }
                        >
                          <p>Future of Fintech in Pakistan: Investment</p>
                        </div>
                        <p>Key Takeaways</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div id="LinkIconMain">
                <div id="BoxPointer">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div id="BoxPointer">
                  <i class="fab fa-twitter"></i>
                </div>
                <div id="BoxPointer">
                  <i class="material-icons">email</i>
                </div>
                <div id="BoxPointer">
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
              <p className="text-center ">
                Share across your favourite social media!
              </p>
            </div>

            <hr />
            <div class="d-flex flex-wrap justify-content-center">
              <div
                class="card m-2 p-2 col-sm-3"
                style={{
                  background: "#81AFD9",
                  color: "white",
                  textAlign: "center",
                  borderRadius: "13px",
                }}
              >
                <div class="container">
                  <h4>
                    <b className="text-white">TecStik</b>
                  </h4>
                  <p>
                    Managing Physical Cash Payment Risks in Pakistan's Cash
                    Economy
                  </p>
                </div>
                <img
                  src={whitepaper}
                  alt="Avatar"
                  // style={{ width: "40vh", height: "50vh" }}

                  className="m-2"
                />
              </div>
              <div class="col-sm-4">
                <br />
                <div class="container">
                  <h4>
                    <b>Get your free white paper.</b>
                  </h4>
                  {/* <p>Architect & Engineer</p> */}
                  {/* <br /> */}
                  <div class="form-outline">
                    <input
                      type="email"
                      // id="typeNumber"
                      class="form-control mt-3"
                      style={{ background: "#F1F1F1" }}
                      placeholder="Your Email Address"
                    />
                    {/* <label class="form-label" for="typeNumber">
                        Email
                      </label> */}
                  </div>
                  <br />
                  <span type="button" class="btn btn-warning btn-rounded">
                    SUBMIT
                  </span>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
