import {English} from "./Languages/English";
import {German} from "./Languages/German";
import {LanguageClass} from "./LanguageClass.js";


let language;
let ageType = "adolescent";

function setLanguage(_language){
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

setLanguage("English");

function getLanguage() {
    return language;
}

function setAgeType(_ageType){
    ageType = _ageType;
}

function getAgeType() {
    return ageType;
}


export {getLanguage, setLanguage, setAgeType, getAgeType};