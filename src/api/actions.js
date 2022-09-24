import axios from "axios";
import swal from "sweetalert";
import { Api } from "./index.js";

// Post Function Api
export const login = async (state, setMessage) => {
  const options = {
    method: "post",
    url: `${Api}login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.access_token);
      localStorage.setItem("token", JSON.stringify(response.data.access_token));
      window.location.pathname = "/";
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.messge);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const Singup = async (state, setMessage,setToggole) => {
  localStorage.setItem("email", JSON.stringify(state.email));
  const options = {
    method: "post",
    url: `${Api}signup/step1`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      setToggole(true);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const SingupCode = async (state, setMessage, setToggole) => {
  const options = {
    method: "post",
    url: `${Api}signup/step2`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      email: JSON.parse(localStorage.getItem("email")),
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      setToggole(true);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const ResetPasswordRequest = async (state, setMessage, setToggole) => {
  localStorage.setItem("email", JSON.stringify(state.email));
  const options = {
    method: "post",
    url: `${Api}reset-password-request`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      setToggole(true);
      console.log(response);
    })
    .catch(function (error) {
      if (error.response) {
        setToggole(false);
        console.log(error.response.data);
        setMessage(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const ResetPasswordCode = async (state, setMessage, setToggole) => {
  const options = {
    method: "post",
    url: `${Api}reset-password-code`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      email: JSON.parse(localStorage.getItem("email")),
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      setToggole(true);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const PaymentPay = (Id, data) => {
  const options = {
    method: "post",
    url: `${Api}order/payment/${Id}`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      "payment": data
    })
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.messge);
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export const AddAddress = (data,location_lat,location_lng) => {
  const options = {
    method: "post",
    url: `${Api}address/save`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },

    data: JSON.stringify({
      ...data,
      "location_lat": location_lat,
      "location_lng": location_lng,
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.messge);
    //window.location.pathname = "/addresses";
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export const EditeAddress = (id,data) => {
  const options = {
    method: "put",
    url: `${Api}address/${id}`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },

    data: JSON.stringify({
      ...data,
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.messge);
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export const EditeProfile = (file,name,email,phone,city) => {
  const options = {
    method: "put",
    url: `${Api}update-profile`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },

    data: JSON.stringify({
      image:file,
      name:name,
      email:email,
      phone:phone,
      city:city
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.messge);
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export const ConnectUsapi = async (state) => {
  const options = {
    method: "post",
    url: `${Api}contact`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response);
    window.location.pathname = "/";
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

// Get Function Api

export const GetDataHome = async (setLoading, setCategories, setProducts) => {
  const options = {
    method: "get",
    url: `${Api}home`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data.products);
      console.log(response.data.categories);
      setCategories(response.data.categories);
      setProducts(response.data.products);
    })
    .catch(function (error) {
      setLoading(true);
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const GetProductsCategories = async (
  id,
  setLoading,
  setResults,
  setProducts
) => {
  const options = {
    method: "get",
    url: `${Api}products?category=${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response);
      console.log(response.data.results);
      console.log(response.data.products.data);
      setResults(response.data.results);
      setProducts(response.data.products.data);
    })
    .catch(function (error) {
      setLoading(true);
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const GetProductsAll = async (setLoading, setProducts ,setPerpage) => {
  const options = {
    method: "get",
    url: `${Api}products`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response);
      setProducts(response.data.products.data)
      setPerpage(Math.ceil(response.data.products.total / response.data.products.per_page));
    })
    .catch(function (error) {
      setLoading(true);
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const Getfavourites = async (
  setLoading,
  setProducts,
  setWishlist
) => {
  const options = {
    method: "get",
    url: `${Api}favourites`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data);
      setProducts(response.data);
      setWishlist(response.data);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
      setLoading(true);
    });
};

export const Getcart = async (setLoading, setProducts, setCartid ,setCart) => {
  const options = {
    method: "get",
    url: `${Api}order/products`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data);
      setCartid(response.data.cart.id);
      setProducts(response.data.cart_products);
      if(response.data.cart_products === undefined){
        setCart([]);
      }else{
        setCart(response.data.cart_products);
      }
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
      setLoading(true);
    });
};

export const Getprofile = async (setLoading, setName ,setFile,setEmail,setPhone,setCity) => {
  const options = {
    method: "get",
    url: `${Api}profile`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.user);
      setLoading(true);
      setName(response.data.user.name);
      setEmail(response.data.user.email)
      setPhone(response.data.user.phone)
      setFile(response.data.user.image)
      setCity(response.data.user.city)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const GetDataProduct = async (id, setLoading, setProudect, setSimilarproducts) => {
  const options = {
    method: "get",
    url: `${Api}product/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options)
    .then(function (response) {
      setLoading(true);
      console.log("handle success");
      console.log(response.data.product);
      console.log(response.data.similarproducts);
      setProudect(response.data.product);
      setSimilarproducts(response.data.similarproducts)
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response);
    });
};

export const AddToCart = (Id, number) => {
  const options = {
    method: "post",
    url: `${Api}order/product`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      product_id: Id,
      count: number,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.messge);
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const AddToFavourite = (Id) => {
  const options = {
    method: "get",
    url: `${Api}favourite/${Id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data);
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const AddRevwe = (Id,rate,comment) => {
  const options = {
    method: "post",
    url: `${Api}rate`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      product_id: Id,
      rate: rate,
      comment: comment,
      //"product_id": 2
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response);
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};

export const AddCoupon = (setDataCoupon,codedata) => {
  const options = {
    method: "post",
    url: `${Api}order/code`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      code: codedata 
    }),
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response);
      setDataCoupon(true)
    })
    .catch(function (error) {
      setDataCoupon(false)
      if (error.response) {
        console.log("error");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};


export const deleteCart = (Cartid, Id, setLoading) => {
  const options = {
    method: "DELETE",
    url: `${Api}order/products/${Cartid}/${Id}`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response)
    setLoading(false)
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export const deleteFavorite = (Id, setLoading) => {
  const options = {
    method: "get",
    url: `${Api}favourite/${Id}`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.data);
    setLoading(false);
  })
    .catch(function (error) {
      if (error.response) {
        console.log("error");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });


};

export const GetOrdersAll = async (setLoading, setOrders) => {
  const options = {
    method: "get",
    url: `${Api}order/all`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.orders[0].orderProducts[0]);
      setLoading(true);
      setOrders(response.data.orders)
    })
    .catch(function (error) {
      console.log("handle error");
      setLoading(true);
      console.log(error.response.data);
    });
};

export const GetAddress = async (setLoading, setAddress) => {
  const options = {
    method: "get",
    url: `${Api}address`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.address);
      setLoading(true);
      setAddress(response.data.address)
    })
    .catch(function (error) {
      console.log("handle error");
      //setLoading(true);
      console.log(error.response.data);
    });
};

export const GetLastAddress = async (setLoading, setAddress) => {
  const options = {
    method: "get",
    url: `${Api}last_address`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.last_address);
      setLoading(true);
      setAddress(response.data.last_address);
    })
    .catch(function (error) {
      console.log("handle error");
      setLoading(true);
      console.log(error.response.data);
    });
};

export const Getsummery = async (setPrice, setDelivery, setTotal) => {
  const options = {
    method: "get",
    url: `${Api}order/summary`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.data.summary);
    setPrice(response.data.summary.price);
    setDelivery(response.data.summary.delivery_price);
    setTotal(response.data.summary.total);
  })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const GetDatapages = async (setLoading,setPages) => {
  const options = {
    method: "get",
    url: `${Api}pages`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      setPages(response.data.pages)
      setLoading(true);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
      setLoading(true);
    });
};

export const GetDatapage = async (id,setLoading,setPage) => {
  const options = {
    method: "get",
    url: `${Api}pages/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data.page);
      setPage(response.data.page)
      setLoading(true);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
      setLoading(true);
    });
};

export const GetSummary = async (setLoading,setSummary) => {
  const options = {
    method: "get",
    url: `${Api}order/summary`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data);
      setSummary(response.data.summary)
     setLoading(true);
    })
    .catch(function (error) {
      console.log("handle error");
      setLoading(true);
      console.log(error.response.data);
    });
};

export const GetCategories = async (setLoading,setcategories) => {
  const options = {
    method: "get",
    url: `${Api}filters`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      console.log(response.data);
      setcategories(response.data.categories);
      setLoading(true);
    })
    .catch(function (error) {
      setLoading(true);
      console.log("handle error");
      console.log(error.response.data);
    });
};
// Api Filter Data Categories

export const GetFiltersCategories = async (setCities ,setDatafilter,set_minValue,set_maxValue,setlistcategories) => {
  const options = {
    method: "get",
    url: `${Api}filters`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      //console.log(response.data);
      setDatafilter(response.data)
      set_minValue(parseInt(response.data.min_price))
      set_maxValue(parseInt(response.data.max_price)+1000)
      setlistcategories(response.data.categories);
      setCities(response.data.cities)
      //setLoading(true);
    })
    .catch(function (error) {
      //setLoading(true);
      console.log("handle error");
      console.log(error.response.data);
    });
};

export const FilterSortCategories = async (CategorieId,datasort ,setProducts ) => {
  const  options = {
    method: "get",
    url: `${Api}products?category=${CategorieId}&price=${datasort}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    console.log("handle success");
    //setPerpage(response.data.products.current_page);
    console.log(response.data.products.data);
  setProducts(response.data.products.data)
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};

export const FilterDataPrice = async (Id,setProducts,minvalue,maxvalue) => {
  const  options = {
    method: "get",
    url: `${Api}products?min_price=${minvalue}&max_price=${maxvalue}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.data.products);
    setProducts(response.data.products.data)
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};

export const FilterDataCategoryPage = async (Id,setProducts,minValue,maxValue,city) => {
  const  options = {
    method: "get",
    url: `${Api}products?
    ${Id === "" ? "":`category=${Id}`}
    ${minValue === "" ? "":`&min_price=${minValue}`}
    ${maxValue === "" ? "":`&max_price=${maxValue}`}
    ${city === "" ? "":`&city=${city}`}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    console.log("handle success");
    //setPerpage(response.data.products.current_page);
    console.log(response.data.products);
    setProducts(response.data.products.data)
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};


// Api Filter Data All
export const GetFiltersAll = async (setLoadingfilter,setGetCategories
  ,setDatafilter,set_minValue,set_maxValue,setGetCity) => {
  const  options = {
    method: "get",
    url: `${Api}filters`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    console.log(response.data);
   setDatafilter(response.data)
   set_minValue(parseInt(response.data.min_price))
   set_maxValue(parseInt(response.data.max_price)+1000)
   setGetCategories(response.data.categories)
   setGetCity(response.data.cities);
   setLoadingfilter(true);
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
    setLoadingfilter(true);
  });
};

export const FilterDataAll = async (setPerpage,setProducts,categories,minValue,maxValue,city) => {
  const  options = {
    method: "get",
    url: `${Api}products?
    ${categories === "" ? "":`category=${categories}`}
    ${minValue === "" ? "":`&min_price=${minValue}`}
    ${maxValue === "" ? "":`&max_price=${maxValue}`}
    ${city === "" ? "":`&city=${city}`}`,
    //url: `${Api}products?${categories === "" ? "":`category=${categories}`}${city === "" ? "":`&city=${city}`}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    setPerpage(response.data.products.current_page);
    setProducts(response.data.products.data)
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};

export const FilterSearchCategorey = async (datasearch) => {
  const  options = {
    method: "get",
    url: `${Api}products?categorey_keyword=${datasearch}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    window.location.pathname = `/Proudectssearchcategorey/${datasearch}`;
    console.log(response);
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};

export const FilterSearchInput = async (datasearch) => {
  const  options = {
    method: "get",
    url: `${Api}products?search=${datasearch}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
   window.location.pathname = `/Proudectssearch/${datasearch}`;
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};

export const FilterSearchData = async (setLoading,datasearch , setData,setPerpage,setResults) => {
  const  options = {
    method: "get",
    url: `${Api}products?search=${datasearch}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    setData(response.data.products.data);
    setPerpage(Math.ceil(response.data.products.total / response.data.products.per_page));
    setResults(response.data.results);
    
    setLoading(true);
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
    setLoading(true);
  });
};
export const FilterSearchDatacategorey = async (setLoading,datasearch , setData,setPerpage,setResults) => {
  const  options = {
    method: "get",
    url: `${Api}products?categorey_keyword=${datasearch}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  await axios(options).then(function (response) {
    setData(response.data.products.data);
    setPerpage(Math.ceil(response.data.products.total / response.data.products.per_page));
    setResults(response.data.results);
    
    
    setLoading(true);
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
    setLoading(true);
  });
};
// Get Data Icons

export const GetcartIcon = async (setCart) => {
  const options = {
    method: "get",
    url: `${Api}order/products`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      console.log("handle success");
      if(response.data.cart_products === undefined){
        setCart([]);
      }else{
        setCart(response.data.cart_products);
      }
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
};


export const GetfavouritesIcon = async (setWishlist) => {
  const options = {
    method: "get",
    url: `${Api}favourites`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      setWishlist(response.data);
    })
    .catch(function (error) {
      console.log("handle error");
      console.log(error.response.data);
    });
};
