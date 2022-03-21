import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 text-start">
              <h6>About</h6>
              <p className="text-justify">
                DOCPoint.com <i>SERVICES WANT TO BE SIMPLE </i> At HCA Florida
                Sarasota Hospital, our radiology department focuses on providing
                excellent care and advanced medical imaging and diagnostic
                tools. This allows us to offer you the type of diagnostic care
                that’s right for you. Additionally, our imaging department is
                conveniently located to serve patients throughout Sarasota,
                Lakewood Ranch and Venice.
              </p>
            </div>

            <div className="col-xs-6 col-md-3 text-start">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Dentist
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Gastrologist
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Neurologist
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Medicine Expert
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">
                    Surgery Expert
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Pathologist
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 text-start">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#about/">About Us</a>
                </li>
                <li>
                  <a href="#contact/">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 text-start">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="#">DOCPoint</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa-brands fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
