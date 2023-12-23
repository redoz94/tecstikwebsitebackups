import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import StoreContext from "../../ContextApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BlogOne from "./Blogs/BlogTwo";
import BlogTwo from "./Blogs/BlogsOne";
import BlogThree from "./Blogs/BlogThree";

export default function BlogContent({ copyText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

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
  console.log(window.location.pathname.slice(1), "link ali");

  return (
    <>
      <div style={{ marginTop: "5%" }}>
        <Header />
      </div>

      {window.location.pathname.slice(1) === "TecStik-Blog/Unleashing-the-Power-of-TecStik%E2%80%99s-Cutting-Edge-Solutions" ? (
        <BlogTwo />
      ) : window.location.pathname.slice(1) === "TecStik-Blog/Navigating-Pakistani-Finance" ? (
        <BlogOne />
      ) : window.location.pathname.slice(1) === "TecStik-Blog/The-Future-of-Fintech-in-Pakistan;-The-Next-frontier" ? (
        <BlogThree /> // You should import BlogThree if it's not already imported
      ) : (
        <h1>Coming Soon</h1>
      )}

      <div>
        <Footer />
      </div>
    </>
  );
}
