import React, { useState, useEffect } from "react";
import InstitutionControls from "./InstitutionControls";
import LoginForm from "./loginForm";
import Spinner from "./Spinner"
import axios from 'axios';

const LoginArea = (props) => {

  const {lang} = props;

  let [spinner, setSpinner] = useState(false);
  const [authData, setauthData] = useState({institution: null, user: null});
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(async()=>{
    getAuthData();
  },[])

  let header = lang.InstitutionResearcherLogin;
  let idLable = lang.id + ": ";

  const getAuthData = async() => {
    const _authData = await axios.get("/checkCookies");
    if(_authData.data.institution){
      setloggedIn(true)
    }
    setauthData(_authData.data);
  }

  const onLoginCallback = (status) => {
    getAuthData();
  };

  let institutionControls = <React.Fragment></React.Fragment>;
  if(authData.institution != null){
    institutionControls = (
      <div className={"userLogin"}>
        <InstitutionControls setSpinner={setSpinner} authData={authData} getAuthData={getAuthData} lang={lang}/>
      </div>
    )
  }

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
            setLoggedIn={setloggedIn}
            loggedIn={loggedIn}
        /> 
        {institutionControls}      
    </div>
  );
};

export default LoginArea;
