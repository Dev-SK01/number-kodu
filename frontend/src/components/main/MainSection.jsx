import React, { useContext } from "react";
import "./main.css";
import Search from "./Search";
import ResultCount from "./ResultCount";
import Results from "./Results";
import homeImg from "/assets/home.svg";
import DataContext from "../context/DataContext";
import NearLocations from "./NearLocations";
import Loading from "./Loading";

const MainSection = () => {
  const { nearLocation, data, isLoading, locationError } =
    useContext(DataContext);
  return (
    <section className="main col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
      <Search />
      {/* checking if the loading true */}
      {isLoading ? (
        <Loading />
        // initally checking the nearlocation to show the home image
      ) : !nearLocation.length ? (
        !locationError ? (
          // shows the default home while user loads the app
          <div style={{ marginBlock: "5rem" }}>
            <img src={homeImg} alt="Home Image" className="img-fluid" />
          </div>
        ) : (
          // if location error nearlocation error shows
          <NearLocations />
        )
        // if nearlocation has length we check the data for show the results 
      ) : data.length || data?.error ? (
        <>
          {/* if the data true shows the results or the if we find error */}
          <ResultCount />
          <Results />
        </>
      ) : (
        // if no data or data error found we show the nearlocations
        <NearLocations />
      )}
    </section>
  );
};

export default MainSection;
