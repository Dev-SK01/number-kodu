import React from "react";
import "./nearlocations.css";


const Loading = () => {
  return (
    <div className="loading-container container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <div class="loader"></div> */}
    </div>
  );
};

export default Loading;

