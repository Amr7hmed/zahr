import React, { useContext, useState } from 'react';
import ReviewItem from './reviewitem';
import User from "../../../images/icon/user-revewe.svg";
import { Authcontext } from '../../../store/context';

function ReviewsList(props) {
  const { Rates } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  console.log(Rates);
  const [toggole, setToggole] = useState(false);

  const Toggoleaction = () => {
    setToggole(!toggole)

  }
  return (<>
    {Rates.length === 0 ? "" :

      <div className='proudect__reviewslist'>
        <h5>
          {language === "En" ? "Reviews" : "التقييمات"}

        </h5>
        {Rates.length === 1 ? <>
          <div className={"list"}>
            <ReviewItem Image={User} Title={"محمد على"} Description={Rates[0].comment} Rate={Rates[0].rate}/>
          </div>
        </> : Rates.length === 2 ? <>
          <div className={"list"}>
            <ReviewItem Image={User} Title={"محمد على"} Description={Rates[0].comment} Rate={Rates[0].rate}/>
            <ReviewItem Image={User} Title={"محمد على"} Description={Rates[1].comment} Rate={Rates[1].rate}/>
          </div>

        </>:<>
        <div className={toggole === false ? "show list" : "hide list"}>
        
          <ReviewItem Image={User} Title={"محمد على"} Description={Rates[0].comment} Rate={Rates[0].rate}/>
          <ReviewItem Image={User} Title={"محمد على"} Description={Rates[1].comment} Rate={Rates[1].rate}/>

        </div>
        <div className={toggole === false ? "hide list-all" : "show list-all"}>
        {Rates.map(item=><>
          <ReviewItem Image={User} Title={"محمد على"} Description={item.comment} Rate={item.rate} key={item.id}/>
        </>
        )}
        </div>

        <div className="button">
          {language === "En" ? <>
          <button className='show-all' type='button' onClick={Toggoleaction}>
            {toggole === false ?"View all reviews":"Less Show"}
          </button>
          </>:
          <>
          <button className='show-all' type='button' onClick={Toggoleaction}>
            {toggole === false ?"عرض كل التقيمات":"عرض اقل"}
          </button>
          </>}
        </div>
        
        </>
        }

      </div>
    }
  </>
  )
}

export default ReviewsList;