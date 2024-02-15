import React from "react";
import "./testimonial.css";

export default function Testimonial() {
  return (
    <div className="Testimonial mt-5 w-full font-nunito" id="testimonial">
      <div
        className="flex flex-col items-center justify-start w-full gap-2 my-2"
        data-scroll-to="titleContainer">
        <b className="inline-block font-outfit text-center w-[591px] text-black-100">

          <h3 className="text-ghumore-orange">Testimonials</h3>

        </b>
        <h1 className="Capitalize text-9xl">Satisfied <b className="text-ghumore-orange">Travellers</b> around the world</h1>

      </div>
      <div className="testimonoal-cards w-full flex justify-center items-center">
        <div className="testimonoal-card relative w-60 shadow-xl">
          <img
            className="rounded-[50%] w-20 h-20 object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <b className="">Eleanor Pena</b>
            <div className=" text-sm">UI/UX Designer</div>
            <div className="flex flex-row items-center justify-center">
              <img className=" w-4 h-4" alt="" src="/magicstar3.svg" />
              <img className=" w-4 h-4" alt="" src="/magicstar3.svg" />
              <img className=" w-4 h-4" alt="" src="/magicstar3.svg" />
              <img className=" w-4 h-4" alt="" src="/magicstar3.svg" />
              <img className=" w-4 h-4" alt="" src="/magicstar3.svg" />
            </div>
          </div>
          <div className=" text-sm leading-[133%] inline-block w-56">{`Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. `}</div>
          <img
            className="w-10 h-10 absolute top-3 end-3 "
            alt=""
            src="/vuesaxboldquotedowncircle.svg"
          />
        </div>
        <div className="testimonoal-card relative w-60 shadow-xl">
          <img
            className=" rounded-[50%] w-20 h-20 object-cover"
            alt=""
            src="/ellipse-11@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <b className="">Theresa Webb</b>
            <div className=" text-sm">Vlogger</div>
            <div className="flex flex-row items-center justify-center">
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar4.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar4.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar4.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar4.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar4.svg"
              />
            </div>
          </div>
          <div className="text-sm leading-[133%] inline-block w-56">
            In promotion and advertising, a testimonial or show consists of a
            person's written statement extolling the virtue of a product.
          </div>
          <img
            className=" w-10 h-10 absolute top-3 end-3"
            alt=""
            src="/vuesaxboldquotedowncircle.svg"
          />
        </div>

        <div className="testimonoal-card relative w-60 shadow-xl">
          <img
            className="rounded-[50%] w-20 h-20 object-cover"
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <b className="">Annette Black</b>
            <div className=" text-sm">Doctor</div>
            <div className="flex flex-row items-center justify-center">
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar3.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar3.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar3.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar3.svg"
              />
              <img
                className=" w-4 h-4"
                alt=""
                src="/magicstar3.svg"
              />
            </div>
          </div>
          <div className=" text-sm leading-[133%] inline-block w-56">
            Testimonials work because they aren''t strong sales pitches, they
            come across in an unbiased voice and establish trust
          </div>
          <img
            className="w-10 h-10 absolute top-3 end-3"
            alt=""
            src="/vuesaxboldquotedowncircle.svg"
          />
        </div>
      </div>
    </div>
  );
}
