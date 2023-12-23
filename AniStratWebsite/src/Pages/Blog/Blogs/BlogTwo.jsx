import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import StoreContext from "../../../ContextApi";
import ecnomis from "../BlogImages/ecnomis.png";
import growth from "../BlogImages/growth.png";
import whitepaper from "../BlogImages/whitepaper.png";
import { Button, Modal } from "antd";
import "./BlogContent.css";

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
          <section
            id="blogContainImage"
            style={{
              backgroundImage: `url(${ecnomis})`,
            }}
          >
            {/* <div class="hero-content" data-aos="fade-up">
              <h2>Blog</h2>
            </div> */}
          </section>
          {/* <Button type="primary" onClick={showModal}>
              Open Modal
            </Button> */}
          <Modal
            // title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {/* {document.queryCommandSupported("copy") && (
                <div class="Linkcontainer">
                  <div class="Linkcopy-text">
                    <textarea
                      ref={(textarea) => textarea}
                      value="http://localhost:3000/TecStik-Blog/Navigating-Pakistani-Finance"
                      class="text"
                      id="txtArea"
                    />
                    <button onClick={copyToClipboard}>
                      <i class="fa fa-clone"></i>
                      {copySuccess}
                    </button>
                  </div>
                </div>
              )} */}
            {/* {
        document.queryCommandSupported('copy') &&
          <div>
            <button onClick={copyToClipboard}>Copy</button> 
            {copySuccess}
          </div>
      }
      <form>
        <textarea
          ref={(textarea) => textarea}
          value='Some text to copy'
        />
      </form> */}
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
              <div className="col-sm-12 col-md-3 col-lg-3 ">
                {/* <div
                    class="Leftcard p-2 border-top rounded"
                    style={{ background: "#81AFD9" }}
                  >
              
                    <div class="Leftcontainer">
                      <h5
                        className="w3-text-white"
                        style={{ color: "", fontSize: "18px" }}
                      >
                        Bite-Sized Information on Video Management Technologies
                        - Sign Up for Our Newsletter
                      </h5>
                      <div class="input">
                        <input
                          id="email-05386d7e-5dbc-43b5-8fef-866b1a72fd9a_8070"
                          name="email"
                          required=""
                          placeholder="Email Address"
                          type="email"
                          class="hs-input p-2 rounded mt-3"
                          inputmode="email"
                          autocomplete="email"
                          style={{ width: "100%" }}
                        />
                        <button
                          type="button"
                          class="btn btn-black mt-3 mb-2"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div> */}
                <br />
                <div class="social-sharing">
                  <div class="heading-container">
                    <h2
                      style={{
                        textAlign: "center",
                      }}
                    >
                      SHARE
                    </h2>
                    <hr />
                    <p className="mb-1">
                      Share across your favourite social media:
                    </p>

                    <div id="LinkIconMain">
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-facebook-f"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-twitter"></i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="material-icons">email</i>
                      </div>
                      <div id="BoxPointer" onClick={showModal}>
                        <i class="fab fa-linkedin-in"></i>
                      </div>
                    </div>

                    {/* {document.queryCommandSupported("copy") && (
                        <div class="Linkcontainer">
                          <div class="Linklabel">Link address</div>
                          <div class="Linkcopy-text">
                            <textarea
                              ref={(textarea) => textarea}
                              value="http://localhost:3000/TecStik-Blog/Navigating-Pakistani-Finance"
                              class="text"
                              id="txtArea"
                            />
                            <button onClick={copyToClipboard}>
                              <i class="fa fa-clone"></i>
                              {copySuccess}
                            </button>
                          </div>
                        </div>
                      )} */}
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 blog-main m-auto">
                <div className="blog-post">
                  <h1 id="heading">Revealing Pakistan’s Financial Structure</h1>
                  <br />

                  <p class="w3-text-grey" >
                    The climate in Pakistan may stir a mix of anxiety, uneasiness among its inhabitants. Nevertheless, thoroughly examined data by International Advisory Firms suggests: Pakistan’s financial future looks exceptionally <a href="#bright(1)" style={{ textDecoration: "none", color: "gray" }}>bright(1)</a>. Provided its government and citizens enrich its human resources to achieve long-term economic prosperity.
                  </p>
                  <br />
                  <p class="w3-text-grey">
                    Pakistanis are the backbone of their nation’s economy. By responsibly building their personal wealth too, Pakistan’s economy will <a style={{ textDecoration: "none", color: "gray" }} href="#flourish(2)">flourish(2)</a>.
                  </p>
                  <br />
                  <p class="w3-text-grey" >
                    Efficiently explore Pakistan’s financial landscape to gain insights into the country's financial operations while simultaneously boosting your income. Strengthen the country’s infrastructure to facilitate persistent economic development nationally.
                  </p>
                  <br />
                  <p class="w3-text-grey" >
                    Efficiently explore Pakistan’s financial landscape to gain insights into the country's financial operations, simultaneously boosting your income. While enhancing the country’s structure to facilitate persistent economic growth side by side.
                  </p>
                  <br />
                  <ul>
                    <li>
                      The Pakistani Economy holds the potential to become the 16th Largest economy globally (“The World in 2050” - <a style={{ textDecoration: "none", color: "gray" }} href="#PricewaterhouseCoopers(3)">PricewaterhouseCoopers(3))</a>
                    </li>
                    <br />
                    <li >
                      However, Pricewaterhousecoopers also states it is imperative for emerging economies to improve their infrastructure to realise their long-term growth
                    </li>
                    <br />
                    <li id="heading1" >
                      Sustained growth, remarkable financial benefits for citizens and an overall increase in the country’s GDP (Gross-Domestic-Product) can be achieved by the local population gaining comprehensive insight into the financial landscape of pakistan
                    </li>
                    <br />
                    <li>
                      To discover the thriving advantages, residents should familiarise themselves with the financial system in Pakistan.
                    </li>
                    <br />
                  </ul>
                  <h5 class="" >
                    Federal Government Shaping Pakistan’s Financial Structure
                  </h5>
                  <br />
                  <p class="w3-text-grey">
                    Pakistan's government sets fiscal and monetary policies, making it the primary authority of the financial sector. The regulation and supervision of banking institutions and Pakistan’s debt management, through The State Bank of Pakistan, are among the central roles of The Pakistani Administration. Understanding the economy of Pakistan requires crucial awareness of The government-sponsored State Bank of Pakistan or SBP.
                  </p>
                  <br />
                  <p class="w3-text-grey">
                    The State Bank of Pakistan regulates and advances financial services, improving Pakistani natives’ financial access. As a central organisation, it oversees The Nation’s economy and supervises the public and private Sector financial institutions of Pakistan. Insurance and commercial banks, investment banks, and individuals must comply with The SBP’s directives. According to The SBP website, its functions can be summarised as follows:
                  </p>
                  <br />
                  <ul>
                    <li>Liquidity regulation</li>
                    <br />
                    <li id="heading2">
                      Supervision and regulation of the financial system
                    </li>
                    <br />
                    <li>
                      Management of exchange rates and balance of payments
                    </li>
                    <br />
                    <li>
                      Optimising resource allocation among financial institutions in Pakistan.
                    </li>
                  </ul>
                  <br />
                  <h5 class="">
                    Banking System of Pakistan - Financial Inclusion and Growth.
                  </h5>
                  <br />
                  <p class="w3-text-grey">
                    Extensively, The SBP has authority over all financial affairs. Regulating both the public and private banking systems in the country too.
                  </p><br />
                  <p class="w3-text-grey">
                    Presently, Pakistani Public and Private Banking Systems consist of Commercial Banks, Foreign Banks, Islamic Banks, and Development Financial Institutions that play a huge part in The Financial System of Pakistan.
                  </p>
                  <br />
                  <p class="w3-text-grey">
                    Pakistan's banks offer deposit accounts and credit facilities to individuals and businesses, including loans, investments, Shariah-compliant and consumer financing options.
                  </p>
                  <br />
                  <p class="w3-text-grey" id="heading3">
                    Pakistani banks also use Fintech of Financial Technology for digital demand, such as online/mobile banking, digital wallets, and blockchain-based remittances. Increasing financial inclusion and contributing to economic growth.
                  </p>
                  <br />
                  <div class=" d-flex justify-content-center  mb-3">
                    <div class="p-2 ">
                      <img
                        src={growth}
                        alt=""
                        srcset=""
                        // id="BlogContenetImage"
                        style={{
                          width: "100%",
                          display: "block",
                          margin: "auto",
                          background: "red",
                        }}
                      />
                    </div>
                  </div>

                  <h5 class="">
                    Non-Banking Financial Institutions Opening Doors for Citizens
                  </h5>
                  <br />
                  <p class="w3-text-grey">
                    Pakistani Non-Banking Financial Institutions (NBFIs) support economic growth. NBFIs present the underserved with financial services.
                  </p>
                  <br />
                  <p class="w3-text-grey">NBFIs in Pakistan include:</p>
                  <ul>
                    <li>Mutual funds</li>
                    <br />
                    <li>Financiers</li>
                    <br />
                    <li>Investment Banks</li>
                    <br />
                    <li>Pension Funds</li>
                    <br />
                    <li>Insurance Companies</li>
                    <br />
                    <li>Private Equity Funds</li>
                    <br />
                    <li>Venture Capital Funds</li>
                    <br />
                    <li>Housing Finance Companies</li>
                    <br />
                    <li>Modarabas</li>
                    <br />
                    <li>Investment Advisory Companies</li>
                  </ul>
                  <br />
                  <p class="w3-text-grey" id="heading4">
                    Pakistan’s NBFIs have increased capital availability for businesses and individuals, facilitating investment in new projects for expanding operations. Causing prosperity and job creation.
                  </p>
                  <br />
                  <p class="p-2">
                    NBFIs have played a significant role in developing the capital markets in Pakistan. By providing access to a range of investment products and services: NBFIs have helped increase investment activity, leading to greater liquidity in the country’s capital markets.
                  </p>
                  <br />
                  <h5 class="p-2">
                    Profitable Investments in The Capital Markets of Pakistan
                  </h5>
                  <br />
                  <p class="p-2">
                    The Pakistani Federal Government and Regulatory Bodies promote the growth and development of nationwide capital markets. These markets deliver long-term instruments like bonds, stocks and other securities for trade. Pakistan’s government and financial regulatory bodies are striving to promote the growth and development of the capital markets. With a focus on increasing foreign investment and improving market infrastructure.
                  </p>
                  <br />
                  <p class="p-2">
                    The Pakistan Stock Exchange (PSX) is the leading stock exchange in the country, with three prime indices: KSE 100, KSE 30, and PSX Dividend 20 Index. The PSX has a market capitalization of over $60 billion, having more than 500 listed companies (PSX (Pakistan Stock Exchange)
                  </p>
                  <br />
                  <p class="p-2">
                    Additionally, the capital markets in Pakistan contain the debt market, which is overseen by the Securities and Exchange Commission of Pakistan (SECP). This borrowing market comes with The Government bond market, corporate bond market, and T-bill market. The SECP is a regulatory body that oversees the capital markets in Pakistan and protect’s interests of investors.
                  </p>
                  <br />
                  <p class="p-2">
                    “The SECP introduced the Securities Act, 2015 and Futures Market Act, 2016 with an aim to effectively regulate and supervise the securities market activities with an ultimate objective to ensure enhanced protection of rights of investing public at large.” - PSX Rulebook
                  </p>
                  <br />
                  <h5 class="p-2" id="heading5">Fintech Platforms in Pakistan</h5>
                  <p class="p-2">
                    Young and established Pakistani fintech firms are rapidly transforming the financial landscape for the nation. Fintech specifies software that utilises digital and online technologies for finance-related activities.
                  </p>
                  <br />
                  <p class="p-2">
                    Although there are fintech brands that have developed platforms – JazzCash, Easypaisa, Finja, Sadapay, etc. –, innovative fintech institutions in Pakistan focus on leveraging revolutionary technologies to power creative platforms. Like mobile apps backed with CRMs, for accurate collections of physical cash.
                  </p>
                  <br />
                  <p class="p-2" >
                    The Pakistani Economy is laying golden eggs. Be prepared to take maximum advantage of its eggs by using effective Fintech. Harnessing a holistic solution tailored to your businesses or personal goals has progressively become feasible. You can leverage payment collection software that seamlessly integrates with your existing physical cash collection processes and utilise it for personal or corporate purposes. Allowing you to take full advantage of technology.
                  </p>
                  <br />
                  <p>
                    Discover the keys to navigating Pakistan’s financial landscape and effectively managing physical cash payment risks in our nation's cash economy. Dive deeper with an exclusive whitepaper, 'Managing Physical Cash Payment Risks in Pakistan’s Cash Economy'. Enter your email below to access your copy and stay ahead in understanding the intricacies of our financial ecosystem.
                  </p>
                  <br />
                  <h5 class="">References</h5>
                  <br />
                  <ol>
                    <li id="bright(1)">
                      “The World in 2050.” PwC, https://www.pwc.com/gx/en/research-insights/economy/the-world-in-2050.html. Accessed 10 May 2023.
                    </li>
                    <br />
                    <li id="flourish(2)">
                      Higher Education Commission of Pakistan (HEC). “Welcome to Pakistan Research Repository: Non Banking Financial Institutions In Pakistan.” Pakistan Research Repository,{" "}
                      <p>
                        http://prr.hec.gov.pk/jspui/handle/123456789/15131. Accessed 10 May 2023.
                      </p>
                    </li>
                    <br />
                    <li id="PricewaterhouseCoopers(3)">
                      State Bank of Pakistan. “Chapter 6.2: Non-Bank Financial Institutions Asset Management (AM)139 Segment.” State Bank of Pakistan,
                    </li>
                    <br />
                    <p>
                      https://www.sbp.org.pk/FSR/2022/Chp-6.2.pdf. Accessed 25 August 2023.
                    </p>
                    <br />
                    <li>
                      4. PSX (Pakistan Stock Exchange). “Pakistan Stock Exchange Limited - | PSX | Product And Services | Indices.” Pakistan Stock Exchange,
                      <p>
                        https://www.psx.com.pk/psx/product-and-services/indices. Accessed 10 May 2023
                      </p>
                    </li>
                    <br />
                    <li>
                      PSX Rule Book. “Pakistan Stock Exchange Limited - | PSX | Regulations | Rulebook Archive.” Pakistan Stock Exchange,
                      <p>
                        https://psx.com.pk/psx/regulations/rulebook-archive. Accessed 10 May 2023.
                      </p>
                    </li>
                    <br />
                    <li>
                      The State Bank of Pakistan. “State Bank of Pakistan.” State Bank of Pakistan,
                      <p>
                        https://www.sbp.org.pk/FS/4.3.asp. Accessed 10 May 2023.
                      </p>
                    </li>
                  </ol>
                  {/* <p class="p-2"></p> */}
                  {/* <p class="p-2"></p> */}
                </div>
              </div>

              <div className="col-sm-12 col-md-3 col-lg-3 blog-sidebar">
                <div className="sidebar-module">
                  <h4>Table of Contents</h4>
                  <ol className="">
                    {/* <li>
                        <a href="#heading">Navigating Pakistani Finance</a>
                      </li> */}
                    <li>
                      <a href="#heading1">
                        The Federal Government Framing Pakistan's financial
                        system.
                      </a>
                    </li>
                    <li>
                      <a href="#heading2">
                        Banking System of Pakistan - Financial Inclusion and
                        Growth.
                      </a>
                    </li>
                    <li>
                      <a href="#heading3">
                        Non-Banking Financial Institutions Opening Doors for
                        Citizens.
                      </a>
                    </li>
                    <li>
                      <a href="#heading4">
                        Profitable Investments in The Capital Markets of
                        Pakistan
                      </a>
                    </li>
                    <li>
                      <a href="#heading5">Fintech Platforms in Pakistan</a>
                    </li>
                  </ol>
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
                  <p>Managing Physical Cash Payment Risks in Pakistan's Cash Economy</p>
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
