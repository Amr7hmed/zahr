import React, { useContext } from 'react';
import Imageone from '../../images/icon/number-1.svg';
import ImageTwo from '../../images/icon/number-2.svg';
import ImageThree from '../../images/icon/number-3.svg';
import { Authcontext } from '../../store/context';

function Links(props) {
  const {Stylebultes}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className={'checkout__links '+ Stylebultes}>
        <span className={"bultes bultes-one"}>
              <img src={Imageone} alt="" />
        </span>

        <span className="text">
            {language === "En" ? "Shipping Address" : " عنوان الشحن"}
      </span>
        <span className="line"></span>


        <span className={"bultes bultes-two"}>
              <img src={ImageTwo} alt="" />
        </span>

        <span className="text">
            {language === "En" ? "Determine The Shipping Time" : "تحديد وقت الشحن"} 
        </span>
        <span className="line"></span>


        <span className={"bultes bultes-three"}>
              <img src={ImageThree} alt="" />
        </span>

        <span className="text">
            {language === "En" ? "Payment Method" : "طريقة الدفع"}
      </span>
    </div>
  )
}

export default Links;