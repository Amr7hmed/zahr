/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Star from "../../images/icon/star.svg";
import Share from "../../images/icon/share.png";
import PoupeRevewe from './pouperevewe';
import { Authcontext } from '../../store/context';
import { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Data(props) {
  const { Proudect ,Id ,Rates} = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [linkurl, setLinkurl] = useState(false);
  console.log(Rates);
  const NewArray=[];
  let i;
  for(i = 0 ; i < Rates.length; i++){
    NewArray.push(parseInt(Rates[i].rate));
  }

  const initialValue = 0;
  const sumWithInitial = NewArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  
  console.log(sumWithInitial);
  const count = sumWithInitial/NewArray.length;
console.log(count);


  return (
    <div className='proudect__data'>
      <span className='over'>
          {language === "En" ? "Dg522 Coupon - Extra 25% Off" : "كوبون Dg522 - خصم إضافي 25%"} 
        </span>
      <div className='revewe'>
        <span className='star'>
          <span>
          {Rates.length === 0 ?0 :count} {" "}
          </span>
          <img src={Star} alt="Star" />
        </span>
        <a href="#" className='text'>

          {Rates.length === 0 ?0 :Rates.length} {" "}
          {language === "En" ? "Reviews" : "تقييمات"}
        </a>

      </div>

      <div className="title">
        <span className="left">
          {Proudect.title}
        </span>

        <span className="right">
          <CopyToClipboard text={window.location.href}
            onCopy={() => setLinkurl(true)} className="btn">
          <img src={Share} alt="Share" />
          </CopyToClipboard>
          {linkurl === true ? <span className="share_content">
            {language === "En" ? "link copied" : "تم نسخ الرابط"}
          </span>
            : ""}
        </span>

      </div>
      <div className="price">
        <span>
          SAR {Proudect.price}
        </span>
        <span className="btn-revewe" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {language === "En" ? "Product Rating" : "تقييم المنتج"}
        </span>
        <PoupeRevewe Id={Id} />
      </div>

      <div className="color">
        <span>
          {language === "En" ? "Color" : "اللون"} 
        </span>{" "}
        {Proudect.colors.map((item, index) =>
          <span key={index}>
            {item}
          </span>
        )}
      </div>


      <div className="size">
        <span>
          {language === "En" ? "Weight" : "الوزن"}
          
        </span>{" "}<span>{Proudect.weight} kg </span>
      </div>


      <div className="description">
        <div className="title_description">
          {language === "En" ? "Product Description" : "وصف المنتج"}
        </div>

        <ul>
          <li>
            <span>
          {language === "En" ? "Basic Materials" : "المواد الأساسية"}
            </span>
            <span>
              null 
            </span>
          </li>


          <li>
            <span>
          {language === "En" ? "Color Name" : "أسم اللون"} 
              </span>

            {Proudect.colors.map((item, index) =>
              <span key={index}>
                {item}
              </span>)}
          </li>



          <li>
            <span>
          {language === "En" ? "Country of Origin" : "بلد المنشأ"} 
            </span>
            <span> null </span>
          </li>


          <li>
            <span>           
          {language === "En" ? "Model Name" : "أسم الموديل"} 
          </span>
            <span> {Proudect.brand}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Data;