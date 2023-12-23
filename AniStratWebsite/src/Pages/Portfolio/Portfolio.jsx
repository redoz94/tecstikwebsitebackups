import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Portfolio.css";
import scam from "../Images/scam.png";
import Jindo from "../Images/jindo.png";
import Santa from "../Images/santa.png";
import Zikopika from "../Images/Zikopika.jpg";
import KollectIt from "../Images/K-icon.png";
import Ijma from "../Images/Ijma.png";



const Portfolio = () => {
  const [trigger, setTrigger] = useState(0);


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
      <section id="portfolio">
        <div class="hero-content" data-aos="fade-up">
          <h2>Portfolio</h2>
          <div></div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      <br />
      <br />
      <br />
      <br />
      <section id="" class="specials">
        <div class="container">
          <div class="specials-title">
            <h3>
            Check out our previous projects!

            </h3>
            {/* <p>
            The Team at TecStik is responsible for several Fintech Endeavors
            </p> */}
          </div>

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(0)}  > JINDO SWAP
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(1)}>
                  <a class="nav-link "
                    // data-bs-toggle=""
                    onClick={() => setTrigger(1)}>SANTA COIN
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(2)}>
                  <a class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(2)} > ZIKOPIKA
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(3)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(3)}>ANTI-SCAM DAPP
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content ">
                {trigger === 0 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>JINDO SWAP</h3>
                          <p class="fst-italic">
                            <ul>
                              <li>A deflationary, community-owned utility token.</li>
                              <li>Supported by a Defi Ecosystem, comprising of
                                <ul>
                                  <li>Moderated Decentralized Exchange</li>
                                  <li>Liquidity mining pools</li>
                                  <li>Yield farming</li>
                                  <li>Lottery</li>
                                </ul>
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jindo}
                            alt="Ijma"
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 1 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>SantaCoin</h3>
                          <p class="fst-italic">
                            Santa coin is a Memecoin that makes its holders money while they are asleep. Santa awards its users
                            in BUSD just by holding it.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Santa}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 2 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Zikopika Mythical art an NFT Market place </h3>
                          <p class="fst-italic">
                            A Mythical art NFT Marketplace with minting engine.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Zikopika}
                            alt=""
                            class="img-fluid"
                            width={200}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 3 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Anti scam Dapp.</h3>
                          <p class="fst-italic">
                            A community governed Decentralized app to Fight scams, while making it educational and rewarding,
                            to meet the goal of educating the community and providing a means of judging a project as a scam or
                            not, the project offers the community a scam spotting dApp(Decentralize App) integrated with staking.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={scam}
                            alt=""
                            class="img-fluid"
                            width={200}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : <></>}
              </div>
            </div>



          </div>
        </div>
      </section >

      <br />
      <br />
      <br />
      <br />

      {/* <!-- End Services Section --> */}

      <div>
        <Footer />
      </div>
    </div >
  );
};

export default Portfolio;
