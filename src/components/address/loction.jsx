import React, { useState, Fragment } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import LoctionIcon from '../../images/icon/location-icon.png';


function Loction(props) {
const {clickedLatLng , setClickedLatLng}=props;
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
      <div className='mab'>
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

        </div>
    );
  };

  return isLoaded ? renderMap() : null;
}

export default Loction;


/*
  <div className='mab'>
  <div className='mab-overload'>

    <button type='button' className='btn-editeloction'>
      <img src={LoctionIcon} alt="" />
    الحصول على موقعي
    </button>
  </div>

</div>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12
!1m3!1d13788.372957626496!2d31.4570335!3d30.234417500000003!
2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458055aaec
067c9%3A0xb83c9abd72c94ed7!2z2YbYp9iv2Yog2KfZhNi52KjZiNixINin2YTY
sdmK2KfYttmKINin2YTYp9is2KrZhdin2LnZig!5e0!3m2!1sar!2seg!4v16631
75339910!5m2!1sar!2seg"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
*/