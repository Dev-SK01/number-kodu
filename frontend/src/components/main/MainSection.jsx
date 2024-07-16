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
  const { nearLocation, data, isLoading } =
    useContext(DataContext);

  return (
    <section className="main col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
      <Search />
      {isLoading ? (
        <Loading />
      ) : !nearLocation.length ? (
        <div style={{ marginBlock: "5rem" }}>
          <img src={homeImg} alt="Sorry Image" className="img-fluid" />
        </div>
      ) : data.length ? (
        <>
          <ResultCount />
          <Results />
        </>
      ) : (
        <NearLocations />
      )}
      {/* <ResultCount />
      <Results /> */}
    </section>
  );
};

export default MainSection;
