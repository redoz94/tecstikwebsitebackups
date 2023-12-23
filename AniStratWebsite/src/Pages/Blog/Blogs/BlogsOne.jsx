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
import CircleImg from "../BlogImages/blog3images/One.png";
import chartImg from "../BlogImages/blog2images/Untitled--1.png";
import islamicImg from "../BlogImages/blog3images/islamic.png";
import kollectImg from "../BlogImages/kollectit.png";
import TwoImg from "../BlogImages/blog3images/two.png";

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
                  <h1
                    id="heading"
                    className={BlogThreeStyle.Unleashing_heading}
                  >
                    Unleashing the Power of TecStik’s Cutting-Edge Solutions
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
                        In the contemporary worldwide landscape of finance,
                        Fintech or Financial Technology is being adopted as a
                        driving force behind highly productive businesses and
                        individuals.
                      </p>
                      <p className="w3-text-grey">
                        Modernising and democratising financial services are key
                        roles of Fintech Applications. Modern Fintech brings an
                        array of benefits for all. Top fintech establishments
                        operating in the fintech landscape in Pakistan, are
                        striving to help everyone reach new heights of
                        prosperity, financial freedom, empowerment,
                        accessibility, speed and ease too.
                      </p>
                      <p className="w3-text-grey">
                        Fintech companies - the ones building Fintech
                        Applications and Software play a pivotal role in
                        advancing The Fintech landscape in Pakistan. Innovative
                        Fintech Outfits are consistently building corresponding
                        applications, providing favourable circumstances for the
                        Pakistani population.
                      </p>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.4rem" }}
                        >
                          Unveiling TecStik
                        </h3>
                        <p className="w3-text-grey">
                          TecStik is among the latest fintech companies
                          operating within the fintech landscape in Pakistan.
                          Bringing you the power of enhanced financial
                          workflows. With TecStik’s proprietary fintech apps
                          delivering you greater convenience, tecstik is
                          committed to bringing convenient technology for the
                          fintech landscape in pakistan.
                        </p>
                        <p className="w3-text-grey">
                          {" "}
                          Whether TecStik’s mobile applications and software are
                          used in your personal lives or business, the
                          collective’s unique hybrid applications with projects
                          for external organisations are consistently developed
                          and utilised: to reduce the hassles of your financial
                          lives. The TecStik team’s passion lies in using
                          cutting-edge technology for re-imagining your
                          customary corporate or personal financial routines.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.8rem" }}
                        >
                          Renovating Islamic Banking
                        </h3>
                        <div className={BlogThreeStyle.islamicImg_container}>
                          <img
                            src={islamicImg}
                            alt="circle"
                            className={BlogThreeStyle.islamicImg}
                          />
                        </div>
                        <p className="w3-text-grey">
                          According to several Islamic Fatwas and Muslim
                          Scholars, Islamic Banking does not adhere to True
                          Shariah Law (Islamic Law) in Pakistan and
                          internationally. There is a prominent need to revisit
                          how Islamic Banks operate.
                        </p>
                        <p className="w3-text-grey">
                          The latest Blockchain Technology offers an optimal
                          solution for enhancing and transforming Islamic
                          Banking. Blockchain Technology is distributed ledger
                          technology that records and retains transactions
                          across numerous databases in a transparent and
                          immutable manner, due to the need of a consensus
                          between the computers parallel data is stored in.
                        </p>
                        <p className="w3-text-grey">
                          {" "}
                          As a first, The IJMA Platform by TecStik brings the
                          Murabaha product of The Islamic Banking Domain on
                          Blockhain. With more Islamic Products in the pipeline,
                          The creators of IJMA have built the Murabaha Product
                          on a Blockchain Network that allows the digitalisation
                          and automation of relative processes swiftly:
                        </p>

                        <ol className={BlogThreeStyle.islamic__ul}>
                          <li>
                            Less documentation is required for Murabaha
                            showcased on The IJMA Platform.
                          </li>
                          <li>
                            IJMA presents The Murabaha Product with improved
                            accountability and transparency.
                          </li>
                          <li>
                            Murabaha on The IJMA Blockchain Network instantly
                            verifies goods from Takaful Operators.
                          </li>
                          <li>
                            IJMA’s Murabaha brings upgraded Shariah Compliance.
                          </li>
                          <li>
                            When a Murabaha deal is carried out with IJMA,
                            ownership of goods(s) is genuinely transferred to
                            the partnering bank.
                          </li>
                          <li>
                            Banks essentially own goods, before engaging in a
                            Murabaha Sale.
                          </li>
                        </ol>
                        <p>
                          Murabaha on IJMA ensures Shariah-Compliance with
                          sincere intent. A bank or government can apply the
                          blockchain technology to align with Shariah-Compliant
                          Services. For Islamic Financial Services and Islamic
                          Banks to reassure their customers: about their
                          dedication to true Islamic Banking, Murabaha available
                          on IJMA is an ideal solution. Empowering current
                          non-compliant Islamic Banking to utilise a substitute
                          for Murabaha, that seamlessly conforms with
                          Shariah-Law.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.4rem" }}
                        >
                          Enabling Accuracy in Paper Cash Payments
                        </h3>
                        <div className={BlogThreeStyle.islamicImg_container}>
                          <img
                            src={kollectImg}
                            alt="circle"
                            className={BlogThreeStyle.kollectImg}
                          />
                        </div>
                        <p>
                          A large number of Pakistani businesses are cash-based
                          due to an unfair taxation system that prevails in the
                          country.These organisations rely on Physical Currency
                          or Paper Cash transactions for payments. However, it
                          is highly challenging for these ventures to
                          authenticate transactions based on Physical Currency.
                          The team at TecStik recognised the need for effortless
                          authentication of Paper Cash Payments. Solutions for
                          the authentication of Paper Cash Payments that easily
                          integrate with records, is also vital.
                        </p>
                        <p>
                          Companies operating in Pakistan prefer to keep timely
                          records of their business transactions. KollectIt has
                          been successfully launched on The Android App Store,
                          with a paid desktop admin panel. The app has been
                          primarily created to facilitate official cash
                          remittances between organisations. With KollectIt:
                          users can overcome Payment Inconsistency, conquer
                          Common Problems of Remittances, achieve Performance
                          Enhancement in Payment Scenarios, Reduce Disparity
                          between Them and Their Customers. In addition, they
                          also need not worry about Delayed Reconciliation,
                          ensure Cash has exchanged hands faithfully, Diminish
                          Errors in Payment Entries, and minimise several other
                          problems faced when payments are concluded. Your
                          accounts receivable entries will never conflict when
                          you bring The KollectIt hybrid software into play.
                        </p>
                        <p>
                          Users just registered on the KollectIt Mobile App are
                          empowered to conduct authentic financial transactions
                          in paper cash. With limited reach to commercial banks
                          for Pakistanis, KollectIt stands as a convenient
                          mobile app that allows Pakistanis in far flung areas
                          to verify payments received in hard cash, trim down
                          discrepancies leading to disagreements and keep
                          accurate records of their tangible cash transactions.
                        </p>
                      </div>

                      <div className={BlogThreeStyle.main___conatiner2}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.4rem" }}
                        >
                          TecStik’s Technological Edge
                        </h3>
                        <p>
                          TecStik’s ensemble of Fintech Experts have had their
                          hands in numerous Fintech Projects across the world.
                          Carefully studying Blockchain Technology, the ensemble
                          is regularly achieving massive popularity as an agency
                          responsible for giving birth to mammoth international
                          projects.
                        </p>
                        <p>
                          Composed of Blockchain Experts, experienced Finance
                          Specialists, proficient MERN (Mongo-
                          Express-React-Node.js) Developers and React-Native
                          professionals, the TecStik organisation brings
                          expertise together for giving outstanding performance
                          to external clients too. Such as the recently crafted
                          Software instalments, below:
                        </p>
                        <div className={BlogThreeStyle.img_container1}>
                          <img src={TwoImg} alt="logo" />
                        </div>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner1}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.4rem" }}
                        >
                          JINDO SWAP
                        </h3>
                        <p>
                          JINDO SWAP is a Blockchain exchange on The BSC
                          (Binance Smart Chain) constructed by TecStik’s team,
                          which is well-versed in Blockchain Technology. The
                          exchange offers users rewards in cryptocurrency using
                          The JINDO FEED, if users provide liquidity. The JINDO
                          FEED tokens are issued with the swap launch and are
                          distributed to all of the liquidity providers.
                        </p>
                      </div>
                      <div className={BlogThreeStyle.main___conatiner2}>
                        <h3
                          className="w3-text-grey"
                          style={{ fontSize: "2.4rem" }}
                        >
                          SANTA COIN
                        </h3>
                        <p>
                          TecStik’s fintech enthusiasts engaged in a project
                          founded on Blockchain Technology. With the company's
                          sustained persistence, The Santa Coin was born. It is
                          a New Yield Generation Token that rewards BUSD
                          (Binance USD) to its holders. When you hold Santa
                          Coin(s), you receive rewards in the form of USD. Santa
                          Coin Crypto has a unique feature of 8% redistribution
                          in BUSD. All Token Holders will earn a considerable 8%
                          of all trade transactions.
                        </p>
                        <p>
                          TecStik’s projects for external clients and its
                          proprietary hybrid applications underline the firm's
                          remarkable expertise in the world of Financial
                          Technology. TecStik’s regular work on Fintech
                          Applications is prominently apparent in different
                          parts of the globe, ontributing to innovations and
                          fostering the growth of advanced products.
                        </p>
                      </div>
                    </div>
                    <div className={BlogThreeStyle.border__line1}></div>
                    <div className={BlogThreeStyle.second__para_container}>
                      <p>
                        Revolutionising The Fintech Landscape: Unleashing the
                        Power of TecStik’s Cutting-Edge Solutions
                      </p>
                      <div className={BlogThreeStyle.second__para_container1}>
                        <p>Unveiling TecStik</p>
                        <p>Renovating Islamic Banking</p>
                        <p>Enabling Accuracy in Paper Cash Payments </p>
                        <p>TecStik’s Technological Edge</p>
                        <p>JINDO SWAP</p>
                        <p>SANTA COIN</p>
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
