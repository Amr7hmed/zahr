
import React from "react";
import Categories from './categories';
import City from './city';
import Price from './price';

function Fillter() {


  return (
    <section className='fillter'>
      <form>
        <Categories/>


        <Price/>


        <City />

          <button className="btn btn_removeall" type="submit" >
            مسح الكل
          </button>
      </form>

    </section>
  )
}

export default Fillter;