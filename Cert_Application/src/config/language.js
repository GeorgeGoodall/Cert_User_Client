import {English} from "./Languages/English";
import {German} from "./Languages/German";
import {LanguageClass} from "./LanguageClass.js";
import axios from 'axios';


let language;
let ageType = "adolescent";

function setLanguage(_language = null){
    if(_language != null){
        try {
            localStorage.setItem('language', _language);
        } catch (e){
            console.log(e);
        } 
    }
    else{
        _language = localStorage.getItem('language');
    }

    switch (_language) {
        case "English":
            language = LanguageClass(English);
            break;
        case "German":
            language = LanguageClass(German);
            break;
        case "Dutch":
            language = LanguageClass(English);
            break;
        default:
            break;
    }
}

if(localStorage.getItem('language') == null){
    setLanguage("English")
}


function getLanguage() {
    setLanguage();
    return language;
}

function setAgeType(_ageType){
    const name = localStorage.getItem("username");
    console.log(_ageType)
    if(_ageType != null){
        try {
            localStorage.setItem(name+'_ageType', _ageType);
        } catch (e){
            console.log(e);
        } 
    }
    else{
        _ageType = localStorage.getItem(name+'_ageType');
    }
    ageType = _ageType;
}

function getAgeType() {
    const name = localStorage.getItem("username");
    return localStorage.getItem(name+'_ageType') || ageType;
}


export {getLanguage, setLanguage, setAgeType, getAgeType};