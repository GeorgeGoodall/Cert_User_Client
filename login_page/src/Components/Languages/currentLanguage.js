
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
    return currentLanguage;
}

const setCurrentLanguage = (language) => {
    currentLanguage=languages[language];
}

export default getCurrentLanguage
export {setCurrentLanguage, languageArray}