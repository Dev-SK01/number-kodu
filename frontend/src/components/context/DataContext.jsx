import { useState, createContext} from "react";
import axios from 'axios';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [location, setlocation] = useState(false);
    const [locationError , setlocationError] =useState(false);
    const [nearLocation, setNearLocation] = useState([]);
    const data =  [
        {
          id: 1,
          vehicleId: 1001,
          type: "auto",
          ownerName: "Number Kodu",
          location:
            "1271,anna university college of enginering , ramanathapuram-623513",
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
 function getLocation(pos) {
        const crd = pos.coords;
        const latitude = crd.latitude;
        const longitude = crd.longitude;
        setlocation({lat : latitude , lon : longitude});
        setlocationError(false);
    }
    function error(err) {
        setlocationError(true);
    }
async function getLocationByLatLong(location){
  try{
    const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${location.lat}&lon=${location.lon}&zoom=13&extratags=1&addressdetails=1&namedetails=1&polygon_svg=1`);
    postCode = await res.data.features[0].properties.address.postcode;
    console.log(res.data.features[0].properties.address);

  }catch(err){
      postCode = null;
  }
}
const getLocationByPostCode = async (postcode)=> {
  let offices= [];
  try{
    const res = await axios.get(`https://api.postalpincode.in/pincode/${postcode}`);
      // filtering the post office by name
      await res.data[0].PostOffice.forEach((postoffice)=>{
        offices.push(postoffice.Name);
      });
  //  console.log(offices)
   setNearLocation(offices);
   setlocationError(false)
  }catch(err){
    setlocationError(true)
  } 
}
    // data proider return data.
    return (
        <DataContext.Provider
            value={{data,location , locationError , getLocation , error , getLocationByLatLong, getLocationByPostCode ,nearLocation }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;