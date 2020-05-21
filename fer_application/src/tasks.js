import {getLanguage, getAgeType} from "./language";

export let getEmotionStrings = (withNone = false) => {
	let emotionArray = ["angry", "sad", "scared", "happy"];
	if(!withNone)
		emotionArray.push("noEmotion");
	return emotionArray;
};

let language = getLanguage();
let ageType = getAgeType();

const getTests = () => {
	return {
		task_array: [
			{
				imageName: "A1.jpg",
				emotion: "sad",
				temp_name: "high"
			},
			{
				imageName: "A2.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A3.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A4.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A5.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A6.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A7.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A8.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A9.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A10.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A11.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A12.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A13.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A14.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A15.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A16.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A17.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A18.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A19.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A20.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A21.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A22.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A23.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A24.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A25.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A26.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A27.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A28.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A29.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A30.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A31.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A32.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A33.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A34.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A35.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A36.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A37.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A38.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A39.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A40.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A41.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A42.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A43.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A44.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A45.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A46.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A47.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A48.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A49.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A50.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A51.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A52.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A53.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A54.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A55.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A56.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A57.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A58.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A59.jpg",
				emotion: "happy",
				temp_name: "low",

			}
		
		]    
	}
}

export default getTests
export {language}

