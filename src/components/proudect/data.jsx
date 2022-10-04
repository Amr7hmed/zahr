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
console.log(Proudect.price_before_discount);
var Over;
if(Proudect.price_before_discount === Proudect.price){
  Over= 0;
}else{
  Over= (parseInt(Proudect.price_before_discount) / parseInt(Proudect.price) - 1) *100;
}
console.log(Over);

  return (
    <div className='proudect__data'>
      <span className='over'>
        {Proudect.code === null? "":<>
          {language === "En" ? `Coupon ${Proudect.code} - Extra Off - ${" "} ${Over}% ` 
          : `كوبون ${Proudect.code} - خصم إضافي  - ${" "} ${Over}% `} 
        </>
        }
        </span>
      <div className='revewe'>
        <span className='star'>
          <span>
          {Rates.length === 0 ?0 :
          count >= 5 ? 5
          :
          count.toFixed(1)
          } 
          {" "} 
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
          {language === "En" ? Proudect.title: Proudect.title_ar}
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
        {Proudect.price_before_discount > Proudect.price ?
          <>
          <span className='overprice'>
            {Proudect.price_before_discount}  {" "} 
                {language === "En" ? "SAR": " ر.س "}  {" "} 
            </span>
            {" "}
          <span>
            {Proudect.price}  {" "} 
            {language === "En" ? "SAR": "ر.س"}  {" "} 
          </span>
          </>
          :
          <span>
            {Proudect.price}  {" "} 
            {language === "En" ? "SAR": "ر.س"}  {" "} 
          </span>
          
          }



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
          
        </span>{" "}<span>
          {Proudect.weight}
          {" "}
          {language === "En" ? "Kg": "كجم"}
        </span>
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
          {language === "En" ? Proudect.description: Proudect.description_ar}
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
            <span> 
          {language === "En" ? Proudect.city: Proudect.city_ar}
           </span>
          </li>


          <li>
            <span>           
          {language === "En" ? "Model Name" : "أسم الموديل"} 
          </span>
            <span>
          {language === "En" ? Proudect.brand: Proudect.brand_ar}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Data;