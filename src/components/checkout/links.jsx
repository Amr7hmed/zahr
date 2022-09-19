import React from 'react';
import Imageone from '../../images/icon/number-1.svg';
import ImageTwo from '../../images/icon/number-2.svg';
import ImageThree from '../../images/icon/number-3.svg';

function Links(props) {
  const {Stylebultes}=props;
  return (
    <div className={'checkout__links '+ Stylebultes}>
        <span className={"bultes bultes-one"}>
              <img src={Imageone} alt="" />
        </span>

        <span className="text">عنوان الشحن </span>
        <span className="line"></span>


        <span className={"bultes bultes-two"}>
              <img src={ImageTwo} alt="" />
        </span>

        <span className="text">تحديد وقت الشحن  </span>
        <span className="line"></span>


        <span className={"bultes bultes-three"}>
              <img src={ImageThree} alt="" />
        </span>

        <span className="text">طريقة الدفع</span>
    </div>
  )
}

export default Links;