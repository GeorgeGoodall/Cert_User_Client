import { getAgeType } from "./language";

export const LanguageClass = (language) => {
	language.getSessionMenuHeader = (sessionNumber) => {
		return language.sessionMenuHeader.replace("{0}", sessionNumber);
	};
	language.getSessionId = (sessionNumber) => {
		return language.sessionId.replace("{0}", sessionNumber);
	};
	language.getPartsOfTheFaceHeader = (names,emotion,feature) => {
		console.log(emotion, feature);
		console.log(language.partsOfTheFace[emotion][feature]);
		if(typeof language.partsOfTheFace[emotion][feature] == "string")
			return language.partsOfTheFace[emotion][feature]
				.replace("{0}",capitaliseFirstLetter(names[0]))
				.replace("{1}",capitaliseFirstLetter(names[1]));
		else{
			console.log("error: in finding parts of the face string for" + emotion + ", " + feature);
			return "";
		}
	};
	language.getTalkingToFriendHelp = (person, emotion) => {
		return language.moreTalkingToFriendIncorrectFeedback[emotion].replace("{0}",capitaliseFirstLetter(person))
	}
	language.getPersonIsEmotion = (person, emotion) => {
		return language.peronIsEmotion[emotion].replace("{0}",capitaliseFirstLetter(person))
	};
	language.getPersonIsEmotionWhatShouldYouDo = (person, emotion) => {
		return language.nameIsEmotionWhatShouldYouDo[emotion].replace("{0}",capitaliseFirstLetter(person))
	};
	language.getVideoheader = (atEnd, first) => { // should be done in the component
		let ageType = getAgeType();
		
		if(atEnd)
			return language.emotionalVideoEndHeader;
		else if(first){
			if(ageType == "adolescent")
				return language.emotionalVideoFirstHeaderAdolescent;
			else if (ageType == "child") 
				return language.emotionalVideoFirstHeader;
			else {
				console.log("age type error");
				return language.emotionalVideoFirstHeader;
			}
		}
		else
			return language.emotionVideoHeader;
	};
	language.getEmotionStrings = (withNone = false) => {
		let emotionArray = [language.emotions.angry, language.emotions.sad, language.emotions.scared, language.emotions.happy]
		if(withNone)
			emotionArray.push(language.emotions.noEmotion);
		return emotionArray;
	};
	language.getEmotionStringsEnglish = (withNone = false) => {
		let emotionArray = ["angry", "sad", "scared", "happy"]
		if(withNone)
			emotionArray.push("no emotion");
		return emotionArray;
	};
	language.getWhatEmotionHint = (emotion, gender, ageType = "child", featuresToReturn = ["eyes", "eyebrows", "mouth"]) => {
		let feedback = language.whatEmotionLooksLikeThis;
		feedback += "\n" + language.getCorrectFeedback(emotion, gender, ageType, false, featuresToReturn);
		return feedback;
		
	}
	language.getCorrectFeedback = (emotion, gender, ageCat = "child", includeOpener = true, featuresToReturn = ["eyes", "eyebrows", "mouth", "extra"]) => {
		let key = emotion + "_" + gender;

		let entry = language.correctStrings[ageCat][key];

		let feedback = "";
		if(includeOpener)
			feedback += entry.opener + "\n";

		let isFirst = true;
		for(let feature of featuresToReturn){
			let observation = entry[feature];
			if(observation != "" && typeof observation != "undefined"){
				if(!isFirst)
					feedback += "\n"
				else
					isFirst = false;
				feedback += observation;
			}
		}
		return normalizeNewLine(feedback);
	};
	language.getIncorrectFeedback = (emotion, opener = true, features = ["eyes", "mouth", "eyebrows"]) => {
		let toReturn = "";
		if(opener)
			toReturn += normalizeNewLine(language.incorrectStrings[getAgeType()][emotion].opener);

		let isFirst = true;
		for(const feature of features){
			let observation = language.incorrectStrings[getAgeType()][emotion][feature];
			if(observation != "" && typeof observation != "undefined"){
				
				if(!isFirst)
					toReturn += "\n"
				else
					isFirst = false;
				toReturn += observation;
			}
		}
		console.log(toReturn);
		return toReturn;
	};
	language.howDoesNameFeel = (name) => {
		return language.howDoesNameFeelString.replace("{0}",capitaliseFirstLetter(name));
	};

	language.PersonIs = (name, emotion) => {
		return language.peronIsEmotion[emotion].replace("{0}",capitaliseFirstLetter(name));
	};
	language.makeAFaceInstruction = (_emotion = null) => {
		if(_emotion == null)
			return language.makeAFaceInstructionString;
		else
			return language.makeAFaceInstructionWithEmotionString.replace("{0}", language.emotions[_emotion]);
	};
	language.copyTheFaceHeader = (afterCapture = false, name) => {
		if(afterCapture)
			return language.letsSeeHowYourPhotoLooks.replace("{0}", capitaliseFirstLetter(name));
		return language.tryToCopyTheFace;
	};
	language.getEmotionalExperianceHeader = (emotion, another = false) => {
		if(!another)
			return language.emotionalExperianceHeaderString[emotion];
		return language.anotherEmotionalExperianceHeaderString[emotion];
	};
	language.hiIm = (name) => {
		return language.hiImString.replace("{0}", name);
	}

	return language;
}

export function capitaliseFirstLetter(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function normalizeNewLine(str){
	let re = /<br>|<\/br>/gi;
	let text = str.replace(re,"\n");
	return text;
}

