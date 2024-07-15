import React, {useContext, useState } from "react";
import searchImg from "/assets/Search.svg";
import locationImg from "/assets/Location.svg";
import DataContext from "../context/DataContext";

const Search = () => {
  const {getLocationByPostCode, nearLocation } =useContext(DataContext);
  const [pincode , setPinCode] = useState("");

const getPincodeFromUser = (e)=>{
  if(e.target.value.length > 6){
    e.preventDefault();
    alert('Pincode Must Be 6 Digits');
  }else{
    setPinCode(e.target.value.slice(0,6));
  }
}

const SearchNearLocation = (pincode)=>{
  if(pincode.length == 0){
    alert('Enter PinCode')
  }else{
    getLocationByPostCode(Number(pincode));
  }
}
console.log(pincode);
console.log(nearLocation);
  return (
    <>
    <div className="search-container">
      <div className="search-div">
        <img src={locationImg} alt="location" className="location" />
        <input
          type="number"
          maxLength={6}
          max={6}
          className="search"
          placeholder="Enter Your PinCode"
          onChange={(e)=> getPincodeFromUser(e)}
          value= {pincode ? pincode : ''}
        />
      </div>
      <div className="search-btn" onClick={()=> SearchNearLocation(pincode)}>
        <img src={searchImg} alt="search-btn" />
      </div>
    </div>
    { nearLocation.length  ? (nearLocation.map((location) => (
    <p key={location}>{location}</p>))) : <div></div>}
    </>
  );
};
React.memo(Search)
export default Search;
