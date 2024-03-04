import React from "react";

// import "./company.css";
import "../Components/Company/company.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function AboutUs() {
  return (
    <div className="font-nunito w-full">
      <div className=" mb-[-50px] md:mt-7  Poster w-full h-[400px] bg-[url(/public/image114@2x.png)] bg-cover bg-no-repeat bg-[top] font-nunito">
        <div className="font-semibold  [text-shadow:0px_2px_3px_rgba(0,_0,_0,_0.25)]">
          About us
        </div>
      </div>
   
      <br />
      <br />
      <div>
      <div className="Company mb-10 md:ml-24 ml-5 font-nunito mt-3">
      <div className="mt-2">
        <LazyLoadImage className=" rounded w-[660px] h-[477px] object-cover ml-40" src="/image8@2x.png" lazy="lazy" />
      </div>

      <div className=" company-card  py-2 md:w-full flex flex-col items-start justify-start">
        <div className="w-[50%] ml-64 max-sm:ml-0 max-sm:w-full">
          <h2 className=" text-[37px]">Our Company</h2>
          <div className=' bg-orange-600 p-[2px] w-48  mb-10 ml-5' ><hr /></div>

          <div className=" text-3xl  font-medium inline-block h-[158.85px]">
            Make My Bucket is an adventure tourism company founded in 20YY. Our
            vision is to be the most recognised and respected adventure business
            in India and in all over the world.
          </div>
          <div className="rounded-md ml-12 md:ml-0 bg-darkslateblue-100 mb-4 shadow-[0px_2px_6px_rgba(0,_0,_0,_0.14)] box-border  h-[65.96px] flex flex-row py-4 px-10 items-center justify-center w-56 text-xl border-[1px] border-solid border-button-stroke max-sm:mt-10 max-sm:-ml-0 max-sm:px-5 max-sm:py-2">
            <div className=" text-[25px] max-sm:text-xl">About Us</div>
          </div>
        </div>
      </div>
    </div>
      </div>
      
     
    </div>
  );
}
