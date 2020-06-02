
const languages = {};
const languageArray = [];
importAll(require.context('./', false, /\.(json)$/));
function importAll(r) {
  return r.keys().forEach((key) => {
  	let k = key.substring(2,key.length-5); // remove the ./ from the start
    languages[k] = r(key)
    languageArray.push({label: r(key).native, value: k})  
  });
}

let currentLanguage = languages.English;

const getCurrentLanguage = () => {
  let _currentLang = localStorage.getItem("language");
  if(Object.keys(languages).includes(_currentLang))
    setCurrentLanguage(_currentLang)
  return currentLanguage;
}

const setCurrentLanguage = (language) => {
    localStorage.setItem("language", language);
    currentLanguage=languages[language];
}

export default getCurrentLanguage
export {setCurrentLanguage, languageArray}