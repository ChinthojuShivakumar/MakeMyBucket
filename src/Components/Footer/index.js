import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TermsAndCondition from "../TermsAndCondition";
import { useEffect } from "react";



export default function Footer() {
  useEffect(() => {
    const handleLinkClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const links = document.querySelectorAll('.footer-link');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  const navigate = useNavigate();
  return (
    <footer className="w-full font-nunito bg-whitesmoke">
      <div className=" w-full flex justify-between items-center flex-col gap-5 ">

        <div className=" md:footer-main flex   justify-around items-start gap-6  w-[100%] max-sm:flex-col max-sm:justify-center max-sm:items-center" >
          <div className="footer-logo my-5 ">
            <img
              className="footer-logo overflow-hidden cursor-pointer  "
              alt=""
              src="/LOGO_MAKE_MY_BUCKET.png"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          {/* <div className="footer-lists"> */}

          <div className="flex flex-col justify-start items-start mt-5 h-48 gap-5">
            <h2 className=" w-full text-start">About</h2>
            <ul className="flex flex-col justify-start items-start w-full gap-3">
              <li>
                {" "}
                <Link to="/aboutus" className=" footer-link">Company</Link>
              </li>
              <li>
                <Link to="/contactus" className=" footer-link">Contact Us</Link>
              </li>

              <li><Link to="/termsandconditions" className=" footer-link">Terms and Conditions</Link> </li>
            </ul>
            {/* </div> */}
          </div>
          <div className="flex flex-col justify-start items-start my-5 h-48 gap-5">
            <h2 className="w-full">Activities</h2>
            <ul className="flex flex-col justify-start items-start w-full gap-3">
              <li className=" footer-link"
                onClick={() => {
                  navigate(
                    `/search?category=&location=&activity=outdoor activities`
                  );
                }}
              >
                <Link to="/search?category=&location=&activity=outdoor activities">
                  Outdoor Activities
                </Link>
              </li>
              <li className=" footer-link"
                onClick={() => {
                  navigate(`/search?category=trekking&location=&activity=`);
                }}
              >
                <Link to="/search?category=trekking&location=&activity=">
                  Trekking
                </Link>
              </li>
              <li className=" footer-link"
                onClick={() => {
                  navigate(`/search?category=skydiving&location=&activity=`);
                }}
              >
                <Link to="/search?category=skydiving&location=&activity=" className=" footer-link">
                  Skydiving
                </Link>
              </li>
              <li className=" footer-link"
                onClick={() => {
                  navigate(`/search?category=tree ziplining&location=&activity=`);
                }}
              >
                <Link to="/search?category=tree ziplining&location=&activity=" className=" footer-link">
                  Tree Ziplining
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex  flex-col justify-start items-start h-48 my-5 gap-5">
            <h2>Quick Link</h2>
            <ul className="flex flex-col justify-start items-start w-full gap-3">
              <li className=" footer-link"
                onClick={() => {
                  navigate(`/destinations`);
                }}
              >
                <Link to="/destinations" className=" footer-link">Destinations</Link>
              </li>

              <li><Link to="/privacypolicy" className=" footer-link">Privacy</Link> </li>

              <li className=" footer-link"> <a href="/Refund Policy for Online Adventure.docx" download="/Refund Policy for Online Adventure.docx">Refund Policy</a> </li>

              
              

            </ul>
          </div>

          <div className="w-[25%] my-5 max-sm:text-start max-sm:w-[60%]">
            <h3 className="font-bold footer_header">Pay Safely With US</h3>
            <p>
              Experience hassle-free payments with our seamless and secure payment
              gateway.
            </p>
          </div>
        </div>

        <div className="bg-white w-full p-3">
          <div className="w-full font-semibold ">
            © 2023 Make My Bucket, All rights reserved.
          </div>
          <div className="font-nunito font-semibold">Powered by Manipro IT Services (OPC) Pvt Ltd</div>
        </div>


      </div>
      {/* <div className="">
        © 2023 Make My Bucket, All rights reserved.
      </div> */}
    </footer>
  );
}
