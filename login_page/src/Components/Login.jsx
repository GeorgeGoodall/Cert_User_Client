import Dropdown from "react-dropdown";
import LoginArea from "./loginArea";
import React, { useState, useEffect } from "react";
import "react-dropdown/style.css";
import "./style.css";

import getCurrentLanguage, {
  languageArray,
  setCurrentLanguage,
} from "./Languages/currentLanguage";


const Login = () => {
  const [institutionLoggedIn, setInstitutionLoggedIn] = useState(false);
  const [lang, setlang] = useState(getCurrentLanguage());

  const insLoginCallback = () => {};

  useEffect(()=>{
    //get the language from cookies
  },[])

  const onLanguageChange = (value) => {
    // set the language
    setCurrentLanguage(value.value)
    setlang(getCurrentLanguage());
  }

  console.log(lang)

  return (
    <div>
      <div className="login">
        <h1>{lang.login}</h1>
        <div className={"dropdownContainer languageSetting"}>
          <div className="dropdownLable">{lang.language}:</div>
          <Dropdown
            className="dropdown"
            style={{ float: "left" }}
            options={languageArray}
            value={lang.native} /* ToDo: get this from cookie */ 
            placeholder={lang.selectALanguage}
            onChange={onLanguageChange}
          />
        </div>
        <div className="loginMain">
          <LoginArea type="institution" loginCallback={insLoginCallback} lang={lang}/>
        </div>
      </div>
    </div>
  );
};

export default Login;
