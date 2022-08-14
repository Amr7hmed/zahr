
import React from 'react'

function Links(props) {
  const {Stylebulteone,Stylebultetwo,Stylebultethree}=props;
  return (
    <div className='checkout__links'>
        <span className={"bultes " + Stylebulteone}>
            <span>1</span>
        </span>

        <span className="text">عنوان الشحن </span>
        <span className="line"></span>


        <span className={"bultes " + Stylebultetwo}>
            <span>2</span>
        </span>

        <span className="text">تحديد وقت الشحن  </span>
        <span className="line"></span>


        <span className={"bultes " + Stylebultethree}>
            <span>3</span>
        </span>

        <span className="text">طريقة الدفع</span>
        <span className="line"></span>
    </div>
  )
}

export default Links;