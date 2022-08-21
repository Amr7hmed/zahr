import React, { useState } from "react";
import Modelone from "./modelone.jsx";
import ModelonePassword from "../password/ModelonePassword.jsx";
import ModelthreePassword from "../password/ModelthreePassword.jsx";
import ModelSingup from "../singup/modelsingup.jsx";
import ModeltwoSingup from "../singup/modeltwosingup.jsx";
import ModelThreeSingup from "../singup/modelthreesingup.jsx";

function Login() {
  const [code, setCode] = useState("");
  return (
    <>
      <Modelone />
      <ModelonePassword setCode={setCode} codedata={code}/>
      <ModelthreePassword code={code} />
      <ModelSingup />
<ModeltwoSingup/>
<ModelThreeSingup/>
    </>
  );
}

export default Login;

/*
      <ModelthreePassword code={code} />
      <ModelSingup />
*/