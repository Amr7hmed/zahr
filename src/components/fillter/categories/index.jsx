import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { GetFiltersCategories } from "../../../api/actions.js";
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
    GetFiltersCategories(setCities,setMaxprice,setMinprice,setlistcategories)
  }, []);


  return (
    <section className='fillter'>
      <form>
        <Categories listcategories={listcategories} CategoriesId={Id}/>
        <Price Id={Id} setProducts={setProducts} maxprice={maxprice} minprice={minprice}/>
        <City Id={Id} setProducts={setProducts} cities={cities}/>
          <button className="btn btn_removeall" type="button" onClick={() => removeData()}>
          {language === "En" ?"Remove All":"مسح الكل"}
          </button>
      </form>

    </section>
  )
}

export default Fillter;