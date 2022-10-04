import React, { useContext, useEffect, useState } from 'react'
import { GetAddress } from '../../api/actions';
import CardAddress from '../../components/address/card';
import CardButton from '../../components/address/cardbutton';
import Loading from '../../layout/loading/loading';
import Imagrempity from "../../images/empty/location-icon.svg";
import EmptyAddress from '../../components/empty/EmptyAddress';
import { Authcontext } from '../../store/context';

function Address() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    GetAddress(setLoading,setAddress)
  }, [loading]);

  return (<>
  
  {loading === false ? (
        <Loading/>): address.length === 0 ? <>
        <EmptyAddress Image={Imagrempity} 
         Showbutton={true} ButtonTitle={language === "En" ? ("Add Address"): ("اضافة عنوان")}
        Title={language === "En" ? ("Addresses "): ("العناوين")}
        />
        </>
        :
    <section className='address'>
      <div className="container">
        <div className="section__header">
          <h3>{language === "En" ? ("Addresses "): ("العناوين")}</h3>
        </div>

        <div className="address__row">
          <div className="row">
            {address.map((item,index) =>
              
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <CardAddress Index={index} Nameuser={item.name}
                Addres={`${item.city} ${" - "} ${item.address}`}  
                setLoading={setLoading}
                Phone={item.phone} ShowButtons={true} Id={item.id} Item={address}/>
            </div>
                )}
            <div className="col-12 col-md-6 col-lg-4">
              <CardButton setLoading={setLoading}/>
            </div>
          </div>
        </div>
      </div>
    </section>
              }
                </>
  )
}

export default Address;