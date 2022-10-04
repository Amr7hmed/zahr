import React, { useState, Fragment, useContext } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import LoctionIcon from '../../images/icon/location-icon.png';
import { Authcontext } from "../../store/context";


function Loction(props) {
const {clickedLatLng , setClickedLatLng ,validation}=props;
const authcontext = useContext(Authcontext);
const language = authcontext.language;
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: 23.392899070336068 , lng: 42.86244913615009 });
  const [toggolestyle,setToggolestyle]=useState("")
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ""
  });

  const onClick=(e)=>{
    const value=e.latLng.toJSON();
    setClickedLatLng(value);
    console.log(clickedLatLng.lat);
    console.log(clickedLatLng.lng);
  }
  const Hidestyle=()=>{
    setToggolestyle("hide")
    console.log("test");
  }

  const renderMap = () => {
    return (
      <div
      className={validation === false && clickedLatLng === null ? "mab position-relative" : "mab"}>
      <div className={'mab-overload ' + toggolestyle}>
    
        <button type='button' className='btn-editeloction' onClick={Hidestyle}>
          <img src={LoctionIcon} alt="" />
        الحصول على موقعي
        </button>
      </div>
        <GoogleMap
          // Store a reference to the google map instance in state
          //onLoad={map => setMapRef(map)}
          // Save the current center position in state
         // onCenterChanged={() => mapRef && setCenter(mapRef.getCenter().toJSON())}
          // Save the user's map click position
          onClick={e => onClick(e)}
          center={center}
          zoom={5}
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
        />

<div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
        </div>
    );
  };

  return isLoaded ? renderMap() : null;
}

export default Loction;

