import React, { useState } from "react";
import Modelone from "./modelone.jsx";
import ModelonePassword from "../password/ModelonePassword.jsx";
import ModelthreePassword from "../password/ModelthreePassword.jsx";
import ModelSingup from "../singup/modelsingup.jsx";
import ModeltwoSingup from "../singup/modeltwosingup.jsx";
import ModelThreeSingup from "../singup/modelthreesingup.jsx";
import ModeltwoPassword from "../password/ModeltwoPassword.jsx";

function Login() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Modelone />
      <ModelonePassword setEmail={setEmail}/>
      <ModeltwoPassword  setCode={setCode} codedata={code} />
      <ModelthreePassword Code={code} email={email}/>
      <ModelSingup />
      <ModeltwoSingup />
      <ModelThreeSingup />
    </>
  );
}

export default Login;
