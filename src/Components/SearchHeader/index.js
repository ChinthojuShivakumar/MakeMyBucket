import React from "react";
import "./searchheader.css";

export default function SearchHeader({ item }) {
  return (
    <div className="SearchHeader font-nunito">

      <div>Home/India</div>
      <h1 className="text-header font-nunito">
        India Tours, Activities & Excursions
      </h1>
      <div className="tags">
        <span>Cruises & Sailing</span>
        <span>Water Tours</span>
        <span>City Tours</span>
        <span>Half-day Tours</span>
        <span>Full-day Tours</span>
        <span>Safaris</span>
        <span>Water Parks</span>
        <span>Private and Luxury</span>
        <span>Bus Tours</span>
        <span>Trekking</span>
        <span>Nature and Wildlife Tours</span>

      </div>
    </div>
  );
}
