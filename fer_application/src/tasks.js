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
				emotion: "scared",
				temp_name: "low"
			},
			{
				imageName: "A3.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A4.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A5.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A6.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A7.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A8.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A9.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A10.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A11.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A12.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A13.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A14.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A15.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A16.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A17.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A18.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A19.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A20.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A21.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A22.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A23.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A24.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A25.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A26.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A27.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A28.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A29.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A30.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A31.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A32.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A33.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A34.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A35.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A36.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A37.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A38.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A39.jpg",
				emotion: "sad", 
				temp_name: "high"
			},
			{
				imageName: "A40.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A41.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A42.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A43.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A44.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A45.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A46.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A47.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A48.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A49.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A50.jpg",
				emotion: "happy", 
				temp_name: "low"
			},
			{
				imageName: "A51.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A52.jpg",
				emotion: "happy", 
				temp_name: "high"
			},
			{
				imageName: "A53.jpg",
				emotion: "sad", 
				temp_name: "low"
			},
			{
				imageName: "A54.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A55.jpg",
				emotion: "scared", 
				temp_name: "low"
			},
			{
				imageName: "A56.jpg",
				emotion: "angry", 
				temp_name: "low"
			},
			{
				imageName: "A57.jpg",
				emotion: "no_emotion", 
				temp_name: "n/a"
			},
			{
				imageName: "A58.jpg",
				emotion: "scared", 
				temp_name: "high"
			},
			{
				imageName: "A59.jpg",
				emotion: "angry", 
				temp_name: "high"
			},
			{
				imageName: "A60.jpg",
				emotion: "happy",
				temp_name: "low",

			}
		
		]    
	}
}

export default getTests
export {language}

