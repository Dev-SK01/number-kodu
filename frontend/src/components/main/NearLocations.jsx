import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import sorryImg from "/assets/sorry.svg";
import './nearlocations.css'

const NearLocations = () => {
  const { nearLocation, locationError , getVehicleDataFromServer ,setIsLoading ,setDataError} = useContext(DataContext);
// function for disable the location clicked by the user
  const disable =(e) => {
  //  console.dir(e.target)
   e.target.disabled = true
  }
  const getDataFromServer = (e) => {
    const location = e.target.textContent;
    setIsLoading(true);
    setDataError(false);
    disable(e);
    setTimeout(()=>{
      getVehicleDataFromServer(location)
    } ,1500);
    
  }
  return (
    <>
      {!locationError ? (
        <div className="locations container">
            <h2 style={{textAlign : 'center' , marginTop :'2rem' , fontWeight : 'bolder'}}>Select Your Post Office</h2>
            {nearLocation.map((location) => (
                <button key={location} onClick={(e) =>getDataFromServer(e)}>{location}</button>
            ))}
        </div>
      ) : (
        <div className="error container">
          <p style={{marginBlock :'2rem'}}>Please Enter Correct PinCode 🥺</p>
          <img src={sorryImg} alt="Sorry Image" className="img-fluid" />
        </div>
      )}
    </>
  );
};

export default NearLocations;
