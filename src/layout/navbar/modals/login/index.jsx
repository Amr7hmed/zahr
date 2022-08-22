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
  return (
    <>
      <Modelone />
      <ModelonePassword/>
      <ModeltwoPassword  setCode={setCode} codedata={code} />
      <ModelthreePassword Code={code} />
      <ModelSingup />
      <ModeltwoSingup />
      <ModelThreeSingup />
    </>
  );
}

export default Login;

/*
      <ModelthreePassword code={code} />
      <ModelSingup />
*/