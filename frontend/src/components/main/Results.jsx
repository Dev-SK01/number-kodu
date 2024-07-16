import React, { useContext } from "react";
import "./result.css";
import autoImg from "/assets/auto.svg";
import carImg from "/assets/car.png";
import busImg from "/assets/bus.png";
import vanImg from "/assets/minicar.png";
import whatsApp from "/assets/WhatsApp.svg";
import phone from "/assets/Phone.svg";
import sorryImg from '/assets/sorry.svg';
import DataContext from "../context/DataContext";

const Results = () => {
  const {data,locationError} = useContext(DataContext);
  return (
    <div className="result-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      {
        (data.length ? (
          data.map((res) => (
            <div className="results container" key={res.vehicleId}>
              <div className="image">
                <img
                  src={
                    res.vehicleId == 1001
                      ? autoImg
                      : res.vehicleId == 1002
                      ? carImg
                      : res.vehicleId == 1003
                      ? vanImg
                      : res.vehicleId == 1004
                      ? busImg
                      : undefined
                  }
                  alt="VehiclesImage"
                />
              </div>
              <div className="details">
                <p className="name">{res.ownerName}</p>
                <p className="address">{res.location}</p>
                <div className="type">
                  <div>
                    <p>Type : {res.type.toLocaleUpperCase()}</p>
                  </div>
                  <div>
                    <a
                      href={`https://wa.me/${res.number}`}
                      className="whatsapp"
                      target="_blank"
                    >
                      <img src={whatsApp} alt="WhatsApp" />
                    </a>
                    <a
                      href={`tel:${res.number}`}
                      className="whatsapp phone"
                      target="_blank"
                    >
                      <img src={phone} alt="phone" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="error container">
            <img src={sorryImg} alt="Sorry Image" className="img-fluid"/>
            <p>No Vehicles found ):</p>
          </div>)
    )
      }
      
    </div>
  );
};

export default Results;
