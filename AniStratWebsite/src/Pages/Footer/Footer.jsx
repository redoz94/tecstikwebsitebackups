import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
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
      <footer
        class="text-center text-lg-start text-white"
        style={{ background: "#1c2331" }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ background: "#6351ce" }}
        >
          <div class="me-5"></div>
          <div>
            <a href={() => false} class="text-white me-3">
              {" "}
              Find us online :
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087185961853"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/Tec_Stik"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/tecstik/about/?viewAsMember=true"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="fw-bold text-white">TecStik</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  Ignite your business & personal life with cutting-edge fintech
                  apps available on popular app stores. Experience tailored
                  solutions for growth too.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold text-white">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <Link to="/TecStik-Product" class="text-white">
                    KollectIt
                  </Link>
                </p>
                <p>
                  <Link to="/TecStik-Product" class="text-white">
                    Ijma
                  </Link>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold text-white ">Services </h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <Link to="/TecStik-Blockchain" class="text-white">
                    Blockchain Development
                  </Link>
                </p>
                <p>
                  <Link to="/TecStik-WebDevelopment" class="text-white">
                    Web Development
                  </Link>
                </p>
                <p>
                  <Link to="/TecStik-mobileApp" class="text-white">
                    Mobile Apps Development
                  </Link>
                </p>
                <p>
                  <Link to="/TecStik-Cloud" class="text-white">
                    Cloud Computing
                  </Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold text-white">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Business Centre, II
                  Chundrigar Road
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  <a href="mailto:info@tecstik.com" class="text-white">
                    info@tecstik.com
                  </a>
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> (92-21) 32442392-93
                </p>
                <Link to="/#" class="text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright :
          <a class="text-white ml-2" href={() => false}>
            TecStik.com
          </a>
        </div>
      </footer>
    </div>
  );
}
