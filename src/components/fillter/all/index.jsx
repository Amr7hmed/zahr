
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FilterDataAll, GetFiltersAll } from "../../../api/actions.js";
import { Authcontext } from "../../../store/context.js";
import Categories from "./categories.jsx";
import City from './city.jsx';
import Price from './price';

function Fillter(props) {
  const{  setProducts ,setLoading ,setPerpage ,ToggleFilterclass ,setTogglefilter}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [city, setCity] = useState("");
  const [categories, setCategories] = useState("");
  // get data 
  const [getcity, setGetCity] = useState([]);
  const [getCategories, setGetCategories] = useState([]);
  
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [Datafilter, setDatafilter] = useState("");
  const [loadingfilter, setLoadingfilter] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
    setLoading(false);
    setTogglefilter("hidefillter");
    scrollToTop();
  };

  useEffect(() => {
    GetFiltersAll(setLoadingfilter,setGetCategories,
        setDatafilter, set_minValue,set_maxValue,setGetCity)
    }, [loadingfilter]);

    const SearchData = () => {
      FilterDataAll(setPerpage, setProducts, categories, minValue, maxValue, city);
    };
  
  return (<>
  
    {loadingfilter === false ? (
            ""
          ) : (

    <section className='fillter'>
      <form>
        <Categories 
        setProducts={setProducts} 
        getCategories={getCategories}
         setCategories={setCategories}
          setPerpage={setPerpage}
          language={language}
          city={city}
          categories={categories}
          minValue={minValue}
          maxValue={maxValue} />
        <Price setProducts={setProducts} 
        maxValue={maxValue} 
        minValue={minValue} 
        Datafilter={Datafilter}
        set_minValue={set_minValue}
        set_maxValue={set_maxValue}
        city={city}
        setPerpage={setPerpage}
        categories={categories}/>
        <City
          Getcity={getcity}
          setProducts={setProducts}
          setPerpage={setPerpage}
          language={language}
          setCity={setCity}
          minValue={minValue}
          maxValue={maxValue}
          categories={categories} 
          city={city}/>

          <button className="btn btn_removeall" type="button" onClick={removeData}>
          {language === "En" ?"Remove All":"مسح الكل"}
          </button>
          <button className="btn btn_search" type="button" onClick={SearchData}>
          {language === "En" ? "Search" : "بحث "}
          </button>
      </form>

    </section>
        )}
  </>
  )
}

export default Fillter;