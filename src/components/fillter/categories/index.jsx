import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { FilterDataCategoryPage, GetFiltersCategories } from "../../../api/actions.js";
import { Authcontext } from "../../../store/context.js";
import Categories from "./categories.jsx";
import City from './city.jsx';
import Price from './price';

function Fillter(props) {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const{  Id ,setProducts ,setLoading ,setPerpage ,ToggleFilterclass ,setTogglefilter}=props;
  const [cities,setCities]=useState([]);
  const [maxprice,setMaxprice]=useState("");
  const [minprice,setMinprice]=useState("");
  const [Datafilter, setDatafilter] = useState("");
  const [city, setCity] = useState("");
  
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);

  const [isVisible, setIsVisible] = useState(false);
  const [listcategories,setlistcategories]=useState([]);
  
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const removeData = () => {
    setLoading(false)
    setTogglefilter("hidefillter");
    scrollToTop();
  };

  useEffect(() => {
    GetFiltersCategories(setCities,setDatafilter,set_minValue,set_maxValue,setlistcategories)
  }, []);

  const SearchData = () => {
    FilterDataCategoryPage(Id,setProducts,minValue,maxValue,city)
  };

  return (
    <section className='fillter'>
      <form>
        <Categories 
        listcategories={listcategories} 
        CategoriesId={Id}/>
        <Price Id={Id} 
        setProducts={setProducts}
        Datafilter={Datafilter}
        city={city} 
        setCity={setCity}
        maxValue={maxValue} 
        minValue={minValue} 
        set_minValue={set_minValue}
        set_maxValue={set_maxValue}/>

        <City 
        Id={Id} 
        setProducts={setProducts} 
        cities={cities}
        setCity={setCity}
        minValue={minValue}
        maxValue={maxValue}/>
        
          <button className="btn btn_removeall" type="button" onClick={() => removeData()}>
          {language === "En" ?"Remove All":"?????? ????????"}
          </button>
          <button className="btn btn_search" type="button" onClick={SearchData}>
          {language === "En" ? "Search" : "?????? "}
          </button>
      </form>

    </section>
  )
}

export default Fillter;