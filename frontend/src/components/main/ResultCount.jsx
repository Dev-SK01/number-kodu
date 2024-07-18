import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const ResultCount = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="count-container container">
      <div className="count">
        <span>
          <span style={{ color: "green" }}>
            {" "}
            {data.length ? data.length : "0"}{" "}
          </span>
          Results Found
          <span style={{ color: "green" }}>💚</span>
        </span>
      </div>
    </div>
  );
};

export default ResultCount;
