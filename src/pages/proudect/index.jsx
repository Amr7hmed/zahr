import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetDataProduct } from '../../api/actions';
import Ditels from '../../components/proudect/ditels';
import Links from '../../components/proudect/links';
import Loading from '../../layout/loading/loading';
import { Authcontext } from '../../store/context';

function Proudect() {
  const { id } = useParams();
  const [proudect, setProudect] = useState([]);
  const [similarproducts, setSimilarproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  useEffect(() => {
    GetDataProduct(id,setLoading,setProudect,setSimilarproducts);
  }, [loading,id]);


  return (<>
    {loading === false ? (
      <Loading />
    ) : (

      <section className="proudect">
      <div className="container">
        <Links
        Category={language === "En" ? "All Products" : "كل المنتجات"} 
        Title={language === "En" ? proudect.title: proudect.title_ar}/>
        <Ditels proudect={proudect} Similarproducts={similarproducts} Id={id}/>
      </div>
      </section>
      )}
      </>
  )
}

export default Proudect;