import React, { useState, useEffect } from "react";
import InstitutionControls from "./InstitutionControls";
import LoginForm from "./loginForm";
import Spinner from "./Spinner"
import axios from 'axios';

const LoginArea = (props) => {

  const {lang} = props;

  let [spinner, setSpinner] = useState(false);
  let [iLoggedIn, setILoggedIn] = useState(false);
  const [authData, setauthData] = useState({});

  useEffect(async()=>{
    getAuthData();
  },[])

  let header = lang.InstitutionResearcherLogin;
  let idLable = lang.id + ": ";

  const getAuthData = async() => {
    const _authData = await axios.get("/checkCookies");
    setauthData(_authData.data);
    if(_authData.data.institution != null && typeof _authData.data.institution.name != "undefined")
      setILoggedIn(true)
  }

  const onLoginCallback = (status) => {
    setILoggedIn(status);
  };

  return (
    <div className="loginArea">
        <h1 className={"LoginArea_Header"}>{header}</h1>
        <Spinner active={spinner}/>
        <LoginForm
            idLable={idLable}
            APILoginCall={"/institution/login"}
            setSpinner={setSpinner}
            onLoginCallback={onLoginCallback}
            authData={authData.institution}
            lang={lang}
        />

      <div className={"userLogin"} style={iLoggedIn ? { display: "block" } : { display: "none" }}>
        <InstitutionControls setSpinner={setSpinner} authData={authData} getAuthData={getAuthData} lang={lang}/>
      </div>
    </div>
  );
};

export default LoginArea;
