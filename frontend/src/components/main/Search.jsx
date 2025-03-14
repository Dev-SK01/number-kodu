import React, { useContext, useState } from "react";
import searchImg from "/assets/Search.svg";
import locationImg from "/assets/Location.svg";
import DataContext from "../context/DataContext";

const Search = () => {
  const { getLocationByPostCode, setIsLoading, setData  } = useContext(DataContext);
  const [pincode, setPinCode] = useState("");

  const getPincodeFromUser = (e) => {
    if (e.target.value.length > 6) {
      e.preventDefault();
      alert("Pincode Must Be 6 Digits");
    } else {
      setPinCode(e.target.value.slice(0, 6));
    }
  };

  const SearchNearLocation = (pincode) => {
    if (pincode.length == 0) {
      alert("Please Enter PinCode");
    } else if (pincode.length == 6) {
      setIsLoading(true);
      setData([]);
      setTimeout(() => {
        getLocationByPostCode(Number(pincode));
      }, 1500);
    } else {
      alert("Pincode Must Be 6 Number");
    }
  };

  const searchOnPressEnter = (e) => {
    if (e.keyCode == 13) {
      if (pincode.length == 0) {
        alert("Please Enter PinCode");
      } else if (pincode.length == 6) {
        setIsLoading(true);
        setData([]);
        setTimeout(() => {
          getLocationByPostCode(Number(pincode));
        }, 1500);

      } else {
        alert("Pincode Must Be 6 Number");
      }
    }
  };
  // console.log(pincode);
  // console.log(nearLocation);
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
            onChange={(e) => getPincodeFromUser(e)}
            value={pincode ? pincode : ""}
            onKeyDown={(e) => searchOnPressEnter(e)}
          />
        </div>
        <div className="search-btn" onClick={() => SearchNearLocation(pincode)}>
          <img src={searchImg} alt="search-btn" />
        </div>
      </div>
      {/* <div style={{ marginBlock: "5rem" }}>
        <img src={homeImg} alt="Home Image" className="img-fluid" />
      </div> */}
    </>
  );
};
React.memo(Search);
export default Search;
