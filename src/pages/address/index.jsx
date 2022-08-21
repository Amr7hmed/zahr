import React from 'react'
import CardAddress from '../../components/address/card';
import CardButton from '../../components/address/cardbutton';

function Address() {
  return (
    <section className='address'>
      <div className="container">
          <div className="section__header">
            <h3> 
            العناوين
            </h3>
          </div>

          <div className="address__row">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
          <CardAddress Title={"المنزل"} Nameuser={"محمد علي اسماعيل"} 
          Addres={"الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12"} Phone={"+9665559164782"} ShowButtons={true}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
          <CardAddress Title={"العمل"} Nameuser={"محمد علي اسماعيل"} 
          Addres={"الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12"} Phone={"+9665559164782"} ShowButtons={true}/>

                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <CardButton/>
                </div>
            </div>
          </div>
        </div>
        </section>
  )
}

export default Address;