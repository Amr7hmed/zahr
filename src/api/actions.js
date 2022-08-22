import axios from "axios";
import { Api } from "./index.js";



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