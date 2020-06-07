import React, {useRef, useEffect} from 'react';
import classes from "./Settings.css";
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.css';

import {setLanguage, getLanguage, setAgeType, getAgeType} from "../../config/language";
import languageList from "../../config/Languages/languageList";

const Settings = (props) => {

    let langnuageDropdownRef = useRef();
    let ageDropdownRef = useRef();


    let languageChange = (e,res) => {
        setLanguage(langnuageDropdownRef.current.value)
        props.getTasks();
    }
    
    let ageChange = (e,res) => {
        setAgeType(ageDropdownRef.current.value);
        props.getTasks();
    }


    let language = getLanguage();
    let selectedLanguage = language.name;
    let selectedAgeType = getAgeType().toLowerCase();

    

    return (
        <div className={classes.container}>
            <div className={classes.setting}>
                <h1 className={classes.settingString}>{language.language}: </h1>
                <select ref={langnuageDropdownRef} id="Languages" name="languages" className={classes.dropdown} onChange={languageChange} value={selectedLanguage}>
                    {
                       
                        Object.keys(languageList).map((key)=>{
                            const {nativeName} = languageList[key];
                            return (<option key={key} value={key} >{nativeName}</option>)
                        })
                    }
                </select>
               
            </div>
            <div className={classes.setting}>
                <h1 className={classes.settingString}>AgeType (translation neede): </h1>
                <select ref={ageDropdownRef} id="ageTypes" name="ageTypes" className={classes.dropdown} onChange={ageChange} value={selectedAgeType}>
                    {
                        languageList[selectedLanguage].ageTypes.map((ageType)=>{
                            return (<option key={ageType} value={ageType} >{ageType}</option>)
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default Settings;