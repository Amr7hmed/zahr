import axios from "axios";
import { Api } from "./index.js";

// Post Function Api 
export const login = async (state, setMessage,) => {
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
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.data.access_token);
    localStorage.setItem("token", JSON.stringify(response.data.access_token));
    window.location.pathname = "/";
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.messge)
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

export const Singup = async (state, setMessage) => {

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
  axios(options).then(function (response) {
    console.log("handle success");
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        setMessage(error.response.data.messge)
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
  axios(options).then(function (response) {
    console.log("handle success");
    setToggole(true)
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message)
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

export const SingupCodecomplete = async (state, setMessage, setToggole) => {
  const options = {
    method: "post",
    url: `${Api}signup/step3`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    setToggole(true)
    console.log(response);
    window.location.pathname = "/";
  })
    .catch(function (error) {
      if (error.response) {
        setToggole(false)
        console.log(error.response.data);
        setMessage(error.response.data.message)
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
  axios(options).then(function (response) {
    console.log("handle success");
    setToggole(true)
    console.log(response);
  })
    .catch(function (error) {
      if (error.response) {
        setToggole(false)
        console.log(error.response.data);
        setMessage(error.response.data.message)
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
  axios(options).then(function (response) {
    console.log("handle success");
    setToggole(true)
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.message);
        setMessage(error.response.data.message)
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

export const AddNewPassword = async (state, setMessage, setToggole,Code) => {
  const options = {
    method: "post",
    url: `${Api}reset-password`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: JSON.stringify({
      email: JSON.parse(localStorage.getItem("email")),
      code: Code,
      ...state,
    }),
  };
  axios(options).then(function (response) {
    console.log("handle success");
    setToggole(true)
    console.log(response);
    window.location.pathname = "/";
  })
    .catch(function (error) {
      if (error.response) {
        setToggole(false)
        console.log(error.response.data);
        setMessage(error.response.data.message)
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

export const GetDataHome = async (setLoading,setCategories,setProducts) => {
 
  const  options = {
    method: "get",
    url: `${Api}home`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
   axios(options).then(function (response) {
     setLoading(true);
    console.log("handle success");
    console.log(response.data);
    setCategories(response.data.categories);
    setProducts(response.data.products)
  })
  .catch(function (error) {
    setLoading(true);
    console.log("handle error");
    console.log(error.response.data);
  });

};


export const GetProductsCategories = async (id,setLoading,setResults,setProducts) => {
 
  const  options = {
    method: "get",
    url: `${Api}products?category=${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
   axios(options).then(function (response) {
     setLoading(true);
    console.log("handle success");
    console.log(response.data);
    console.log(response.data.results);
    console.log(response.data.products.data);
    setResults(response.data.results);
    setProducts(response.data.products.data)
  })
  .catch(function (error) {
    setLoading(true);
    console.log("handle error");
    console.log(error.response.data);
  });

};


export const GetProductsAll = async (setLoading,setProducts) => {
 
  const  options = {
    method: "get",
    url: `${Api}products`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
   axios(options).then(function (response) {
     setLoading(true);
    console.log("handle success");
    console.log(response.data);
    setProducts(response.data.products.data)
  })
  .catch(function (error) {
    setLoading(true);
    console.log("handle error");
    console.log(error.response.data);
  });

};

export const Getfavourites = async (setLoading,setProducts,setFavoriteitems) => {
  
const  options = {
  method: "get",
  url: `${Api}favourites`,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
  },
};
  axios(options).then(function (response) {
    setLoading(true);
  console.log("handle success");
  console.log(response.data);
  setProducts(response.data)
  //setFavoriteitems(response.data);
})
.catch(function (error) {
  console.log("handle error");
  console.log(error.response.data);
  setLoading(true);
});
};

export const Getcart = async (setLoading ,setProducts ,setCartid ) => {
  const  options = {
    method: "get",
    url: `${Api}order/products`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
    },
  };
    axios(options).then(function (response) {
      setLoading(true);
    console.log("handle success");
    console.log(response.data);
    //setCartid(response.data.cart.id);
    //setProducts(response.data.cart_products);
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
    setLoading(true);
  });
};

export const Getprofile = async () => {
 
  const  options = {
    method: "get",
    url: `${Api}profile`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
    },
  };
   axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.data.user);
    //setName(response.data.user.name)
    //setEmail(response.data.user.email)
    //setPhone(response.data.user.phone)
    //setFile(response.data.user.image)
  })
  .catch(function (error) {
    console.log("handle error");
    console.log(error.response.data);
  });
};