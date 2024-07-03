import React from "react";
import searchImg from "/assets/Search.svg";
import locationImg from "/assets/Location.svg";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-div">
        <img src={locationImg} alt="location" className="location" />
        <input
          type="text"
          className="search"
          placeholder="Enter Your Location"
        />
      </div>
      <div className="search-btn">
        <img src={searchImg} alt="search-btn" />
      </div>
    </div>
  );
};

export default Search;
