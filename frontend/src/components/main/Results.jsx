import React from "react";
import "./result.css";
import autoImg from "/assets/auto.svg";
import carImg from "/assets/car.png";
import busImg from "/assets/bus.png";
import vanImg from "/assets/minicar.png";
import whatsApp from "/assets/WhatsApp.svg";
import phone from "/assets/Phone.svg";
const Results = () => {
  const data = [
    {
      id: 1,
      vehicleId: 1001,
      type: "auto",
      ownerName: "Number Kodu",
      location:"1271,anna university college of enginering , ramanathapuram-623513",
      nearLocation: ["Athiyuhtu", "Chitharkottai", "Peruvayal", "Pullangudi"],
      number: "+917094295944",
    },
    {
      id: 2,
      vehicleId: 1002,
      type: "car",
      ownerName: "Number Kodu",
      location:
        "1271,anna university college of enginering , ramanathapuram-623513",
      nearLocation: ["Athiyuhtu", "Chitharkottai", "Peruvayal", "Pullangudi"],
      number: "+917094295944",
    },
    {
      id: 3,
      vehicleId: 1003,
      type: "van",
      ownerName: "Number Kodu",
      location:
        "1271,anna university college of enginering , ramanathapuram-623513",
      nearLocation: ["Athiyuhtu", "Chitharkottai", "Peruvayal", "Pullangudi"],
      number: "+917094295944",
    },
    {
      id: 4,
      vehicleId: 1004,
      type: "bus",
      ownerName: "Number Kodu",
      location:
        "1271,anna university college of enginering , ramanathapuram-623513",
      nearLocation: ["Athiyuhtu", "Chitharkottai", "Peruvayal", "Pullangudi"],
      number: "+917094295944",
    },
  ];
  return (
    <div className="result-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      {data.map((res) => (
        <div className="results container" key={res.vehicleId}>
        <div className="image">
          <img 
          src={res.vehicleId == 1001 ? autoImg : res.vehicleId == 1002 ? carImg : res.vehicleId == 1003 ? vanImg : res.vehicleId == 1004 ? busImg : undefined} 

          alt="AutoImage" 
          />
        </div>
        <div className="details">
          <p className="name">{res.ownerName}</p>
          <p className="address">
            {res.location}
          </p>
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
              <a href={`tel:${res.number}`} className="whatsapp phone" target="_blank">
                <img src={phone} alt="phone" />
              </a>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Results;
