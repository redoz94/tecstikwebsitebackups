import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Blog.css";
import BlogBanner from "./BlogImages/Blog.jpg";
// import BlogContent from "./BlogFile";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import data from "./BlogData.json";
import StoreContext from "../../ContextApi";
import Navig from "./BlogImages/NavigPakistan.jpg";
// new image import here
import secondBlogImg from "./BlogImages/blog2images/Untitled--1.png";
import oneBlogImg from "./BlogImages/blog3images/two.png";
import fourBlogImg from "./BlogImages/Blog4Images/Blog.png";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  let ContextData = useContext(StoreContext);

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  console.log("aliData ===>", data?.length);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  const handler = (item) => {
    ContextData.setBlogData(item);
  };

  return (
    <div>
      <Header />
      {/* <!-- ======= hero Section ======= --> */}

      <section
        id="blog"
        style={{
          backgroundImage: `url(${BlogBanner})`,
        }}
      >
        <div class="hero-content" data-aos="fade-up">
          <h2>Blog</h2>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      <section id="why-us" class="why-us section-bg">
        <div class="container">
          <div class="row">
            {data.map((item, i) => {
              return (
                <>
                  <div
                    class="col-lg-4 col-md-6 d-flex align-items-stretch"
                    key={i}
                  >
                    <div class="card" id="BlogCard">
                      <img
                        src={
                          i === 0
                            ? oneBlogImg
                            : i === 1
                            ? Navig
                            : i === 2
                            ? secondBlogImg
                            : i === 3
                            ? fourBlogImg
                            : Navig
                        }
                        class="card-img-top"
                        alt="Blog Image"
                      />

                      <div class="card-body">
                        <h5 class="card-title" onClick={() => handler(item)}>
                          <Link
                            to={
                              "/TecStik-Blog/" +
                              item.heading.replaceAll(" ", "-")
                            }
                            target="_blank"
                          >
                            {item.heading}
                          </Link>
                        </h5>
                        <p class="card-text">{item.metaDescription}</p>
                        <p class="card-text">{item.pargraf}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img
                  src="https://www.codingdojo.com/blog/wp-content/uploads/codelaptop.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-icon">
                  <i class="bx bx-calendar-edit"></i>
                </div>
                <div class="card-body">
                  <br></br>
                  <h5 class="card-title">
                    <a href={() => false}>Our Plan</a>
                  </h5>
                  <p class="card-text">
                    Owing to widespread government lockdowns, modern Fintech
                    Applications are regularly being rolled out in Pakistan.
                    They are modern alternatives to physical financial services,
                    and the Pakistani market is increasingly embracing fintech
                    adoption into their daily routines.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img
                  src="https://appdevcon.nl/wp-content/uploads/2020/03/ADVANTAGES-AND-DISADVANTAGES-OF-BEING-A-DEVELOPER-.jpeg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-icon">
                  <i class="bx bx-landscape"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href={() => false}>Our Vision</a>
                  </h5>
                  <p class="card-text">
                    The impact of Financial Technology has triggered various
                    benefits for people and businesses alike. Namely, Financial
                    Technology is promoting innovation, facilitating financial
                    inclusion, making financial services more budget-friendly,
                    reducing embezzlement and enriching customer-experience for
                    consumers of Financial Services through technology.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

// {
//   "heading": "haeding 2",
//   "pargraf": "Owing to widespread government lockdowns, modern Fintech Applications are regularly being rolled out in Pakistan. They are modern alternatives to physical financial services, and the Pakistani market is increasingly embracing fintech adoption into their daily routines.",
//   "Image": "https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg"
// },
// {
//   "heading": "haeding 3",
//   "pargraf": "The impact of Financial Technology has triggered various benefits for people and businesses alike. Namely, Financial Technology is promoting innovation, facilitating financial inclusion, making financial services more budget-friendly, reducing embezzlement and enriching customer-experience for consumers of Financial Services through technology.",
//   "Image": "https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg"
// },
// {
//   "heading": "haeding 4",
//   "pargraf": "Developing economies like Pakistan are gradually becoming accustomed to digital financial services. Incumbent Pakistani Technology Outfits recognise the ever-growing importance of Fintech Tools for firms and individuals, as they actively pursue innovative developments in The Financial Services Domain of the country.",
//   "Image": "image"
// },
// {
//   "heading": "haeding 5",
//   "pargraf": "Efficient Fintech encompasses both desktop and smartphone applications. These software apps provide enhanced accessibility, efficient transaction processing and more streamlined financial services",
//   "Image": "image"
// },
// {
//   "heading": "haeding 6",
//   "pargraf": "The availability of skilled talent in the fields of artificial intelligence (AI), data sciences, and software development in Pakistan is being leveraged by Fintech Collectives.",
//   "Image": "image"
// },
// {
//   "heading": "haeding 7",
//   "pargraf": "Following, we shed light on the state of Pakistan’s contemporary fintech landscape, the opportunities and challenges to be faced if Pakistan adopts new technologies like Blockchain, The regulatory challenges being faced by Pakistani Fintech Enterprises and developers today, along with the possibilities Fintech has brought and will continue to bring for The Pakistani Population.",
//   "Image": "image"
// }
