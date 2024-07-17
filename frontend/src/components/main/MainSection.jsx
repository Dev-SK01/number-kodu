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
  const { nearLocation, data, isLoading } = useContext(DataContext);

  return (
    <section className="main col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
      <Search />
      {isLoading ? (
        <Loading />
      ) : !nearLocation.length ? (
        // shows the default home while user loads the app
        <div style={{ marginBlock: "5rem" }}>
          <img src={homeImg} alt="Home Image" className="img-fluid" />
        </div>
      ) : data.length ? (
        <>
          <ResultCount />
          <Results />
        </>
      ) : (
        <NearLocations />
      )}
    </section>
  );
};

export default MainSection;
