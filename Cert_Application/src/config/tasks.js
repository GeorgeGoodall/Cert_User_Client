import {getLanguage, getAgeType} from "./language";

export let getEmotionStrings = (withNone = false) => {
	let emotionArray = ["angry", "sad", "scared", "happy"];
	if(!withNone)
		emotionArray.push("noEmotion");
	return emotionArray;
};

let language = getLanguage();
let ageType = getAgeType();

let getTasks = () => {
	language = getLanguage();
	ageType = getAgeType();
	if(ageType == "child")
		return getChildTasks();
	else
		return getAdolescentTasks();
}

const getChildTasks = () => {
	return {
		Session1: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroFirstHeader,
							"AlexSpeechBubble": language.session1AlexBubbles.greeting,
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenations,
						}	
					},
					{
						index: 2,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday,
						}	
					},
					{
						index: 3,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday3,
						}	
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.letsLookAtSomeExamples,
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.happy,
							"AlexSpeechBubble": language.iAm.happy,
						}	
					},
					{
						index: 7,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.happy,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.happy,
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.sad,
							"AlexSpeechBubble": language.iAm.sad,
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 9,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.sad,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.sad,
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.angry,
							"AlexSpeechBubble": language.iAm.angry,
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 11,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.angry,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.angry,
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 12,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.scared,
							"AlexSpeechBubble": language.iAm.scared,
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 13,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.scared,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.scared,
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 14,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Laura"),
							"AlexImage": "laura.jpg"
						}	
					},
					{
						index: 15,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Emily"),
							"AlexImage": "emily.jpg"
						}	
					},
					{
						index: 16,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Tom"),
							"AlexImage": "tom.jpg"
						}	
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Jack"),
							"AlexImage": "jack.jpg"
						}	
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.session1AlexBubbles.letsStartOurFirstGame,
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.KnowingHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "tom",
							image: "tom_angry_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "sad",
							person: "laura",
							image: "laura_sad_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "scared",
							person: "jack",
							image: "jack_scared_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "happy",
							image: "emily_happy_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "sad",
							image: "tom_sad_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "happy",
							image: "jack_happy_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "angry",
							image: "laura_angry_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "scared",
							image: "emily_scared_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.chooseTheEmotion,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.chooseTheEmotion,
							"AlexSpeechBubble": language.chooseTheEmotionBubble,
						}
					},
					{
						index: 1,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","scared"],["emily","angry"],["jack","sad"],["laura","happy"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 2,
						type: "ChooseTheEmotion",
						params: {
							"options": [["emily","scared"],["tom","angry"],["jack","happy"],["laura","sad"]],
							"correctAnswer": 2,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 3,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","scared"],["tom","sad"],["laura","angry"],["emily","happy"]],
							"correctAnswer": 0,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 4,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","happy"],["emily","sad"],["laura","scared"],["jack","angry"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 5,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","sad"],["jack","scared"],["laura","angry"],["emily","happy"]],
							"correctAnswer": 3,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 6,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","angry"],["laura","scared"],["tom","happy"],["emily","sad"]],
							"correctAnswer": 0,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 7,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","sad"],["laura","happy"],["tom","scared"],["emily","angry"]],
							"correctAnswer": 2,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 8,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","happy"],["laura","sad"],["tom","angry"],["emily","scared"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 9,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.whenHaveYouFeltThisWay,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.whenHaveYouFeltThisWay,
							"AlexSpeechBubble": language.whenHaveYouFeltThisWayBubble,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalExperiencePage",
						params: {
							name: "tom",
							gender: "male",
							emotion: "angry",
							requiresInput:true, 
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalExperiencePage",
						params: {
							name: "emily",
							gender: "female",
							emotion: "scared", 
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalExperiencePage",
						params: {
							name: "jack",
							gender: "male",
							emotion: "sad", 
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalExperiencePage",
						params: {
							name: "emily",
							gender: "female",
							emotion: "happy", 
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "EmotionalExperiencePage",
						params: {
							name: "laura",
							gender: "female",
							emotion: "angry", 
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "EmotionalExperiencePage",
						params: {
							name: "tom",
							gender: "male",
							emotion: "happy", 
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "EmotionalExperiencePage",
						params: {
							name: "laura",
							gender: "female",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "EmotionalExperiencePage",
						params: {
							name: "jack",
							gender: "male",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 4,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeader
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "jack",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "jack",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "laura",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "laura",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "emily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "emily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 5,
				name: language.taskNames.partsOfTheFace,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.partsOfTheFace,
							"AlexSpeechBubble": language.partsOfTheFaceIntroBubble,
						}
					},
					{
						index: 1,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["emily", "tom"],
							emotion: "sad",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.staightAccross],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["emily", "tom"],
							emotion: "sad",
							answers: [language.featureDescriptions.eyebrows.slopingUp, language.featureDescriptions.eyebrows.pulledUp, language.featureDescriptions.eyebrows.pulledTogether],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["laura", "jack"],
							emotion: "happy",
							answers: [language.featureDescriptions.mouth.closed, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.mouth.strechedAcrossAndOpen, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.eyebrows.lowered, language.featureDescriptions.eyebrows.pulledUp, language.featureDescriptions.eyebrows.pulledTogether],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyes",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.eyes.closed, language.featureDescriptions.eyes.narrowed, language.featureDescriptions.eyes.wideOpen],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["jack", "emily"],
							emotion: "angry",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.closedInALine, language.featureDescriptions.mouth.open],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["jack", "emily"],
							emotion: "angry",
							answers: [language.featureDescriptions.eyebrows.pulledTogether, language.featureDescriptions.eyebrows.slopingUp, language.featureDescriptions.eyebrows.pulledUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 6,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session1ReviewPage",
						params: {
							emotion: "happy",
							person: "jack",
						}
					},
					{
						index: 1,
						type: "Session1ReviewPage",
						params: {
							emotion: "sad",
							person: "emily",
						}
					},
					{
						index: 2,
						type: "Session1ReviewPage",
						params: {
							emotion: "angry",
							person: "laura",
						}
					},
					{
						index: 3,
						type: "Session1ReviewPage",
						params: {
							emotion: "scared",
							person: "tom",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 7,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.howWellCanYouTellHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],
		Session2: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroSecondHeader,
							"AlexSpeechBubble": language.session1AlexBubbles.greeting
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenations,
						}	
					},
					{
						index: 2,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday,
						}	
					},
					{
						index: 3,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday3,
						}	
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.letsLookAtSomeExamples,
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.happy,
							"AlexSpeechBubble": language.iAm.happy,
						}	
					},
					{
						index: 7,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.happy,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.happy,
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.sad,
							"AlexSpeechBubble": language.iAm.sad,
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 9,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.sad,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.sad,
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.angry,
							"AlexSpeechBubble": language.iAm.angry,
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 11,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.angry,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.angry,
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 12,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.scared,
							"AlexSpeechBubble": language.iAm.scared,
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 13,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.scared,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.scared,
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 14,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Amy"),
							"AlexImage": "amy.jpg"
						}	
					},
					{
						index: 15,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Ryan"),
							"AlexImage": "ryan.jpg"
						}	
					},
					{
						index: 16,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Sarah"),
							"AlexImage": "sarah.jpg"
						}	
					},
					{
						index: 18,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Emma"),
							"AlexImage": "emma.jpg"
						}	
					},
					{
						index: 19,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Jacob"),
							"AlexImage": "jacob.jpg"
						}	
					},
					{
						index: 20,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Sophie"),
							"AlexImage": "sophie.jpg"
						}	
					},
					{
						index: 21,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Daniel"),
							"AlexImage": "daniel.jpg"
						}	
					},
					{
						index: 22,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Connor"),
							"AlexImage": "connor.jpg"
						}	
					},
					{
						index: 23,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": "Great! Let's start our first game.",
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.KnowingHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "emma",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "sad",
							person: "ryan",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emma",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sarah",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sarah",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.chooseTheEmotion,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.chooseTheEmotion,
							"AlexSpeechBubble": language.chooseTheEmotionBubble
						}
					},
					{
						index: 1,
						type: "ChooseTheEmotion",
						params: {
							"options": [["sophie","happy"],["matt","angry"],["amy","sad"],["ryan","scared"]],
							"correctAnswer": 0,
							"requiresInput":true,
						}
					},
					{
						index: 2,
						type: "ChooseTheEmotion",
						params: {
							"options": [["sarah","angry"],["matt","happy"],["daniel","sad"],["emma","scared"]],
							"correctAnswer": 2,
							"requiresInput":true,
						}
					},
					{
						index: 3,
						type: "ChooseTheEmotion",
						params: {
							"options": [["connor","angry"],["sarah","happy"],["jacob","scared"],["sophie","sad"]],
							"correctAnswer": 0,
							"requiresInput":true,
						}
					},
					{
						index: 4,
						type: "ChooseTheEmotion",
						params: {
							"options": [["emma","angry"],["ryan","sad"],["daniel","happy"],["amy","scared"]],
							"correctAnswer": 3,
							"requiresInput":true,
						}
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.partsOfTheFace,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.partsOfTheFace,
							"AlexSpeechBubble": language.partsOfTheFaceIntroBubble,
						}
					},
					{
						index: 1,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["sarah", "daniel"],
							emotion: "happy",
							answers: [
								language.featureDescriptions.mouth.closed, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.mouth.strechedAcrossAndOpen, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.eyebrows.slopingUp, 
								language.featureDescriptions.eyebrows.pulledUp, 
								language.featureDescriptions.eyebrows.pulledTogether],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyes",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.eyes.closed, 
								language.featureDescriptions.eyes.narrowed, 
								language.featureDescriptions.eyes.wideOpen],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["ryan", "amy"],
							emotion: "sad",
							answers: [
								language.featureDescriptions.mouth.curvedUp, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.closedInALine],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["ryan", "amy"],
							emotion: "sad",
							answers: [
								language.featureDescriptions.eyebrows.pulledTogether, 
								language.featureDescriptions.eyebrows.pulledUp, 
								language.featureDescriptions.eyebrows.slopingUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["sarah", "matt"],
							emotion: "angry",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.closedInALine, language.featureDescriptions.mouth.open],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["sarah", "matt"],
							emotion: "angry",
							answers: [language.featureDescriptions.eyebrows.pulledUp, language.featureDescriptions.eyebrows.slopingUp, language.featureDescriptions.eyebrows.pulledTogether],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 4,
				name: language.taskNames.copyTheFace,
				requiresWebcam: true,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.copyTheFace,
							"AlexSpeechBubble": language.copyThePhotoOnScreen,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 2,
						type: "CopyTheFacePage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 4,
						type: "CopyTheFacePage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 6,
						type: "CopyTheFacePage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 8,
						type: "CopyTheFacePage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 10,
						type: "CopyTheFacePage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 12,
						type: "CopyTheFacePage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 16,
						type: "CopyTheFacePage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
	
				],
			},
			{
				index: 5,
				name: language.taskNames.makeAFace,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.makeAFace,
							"AlexSpeechBubble": language.makeAFaceBubble, 
						}
					},
					{
						index: 1,
						type: "MakeAFace",
						params: {
							person: "matt",
							emotions: ["angry","happy"],
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "MakeAFace",
						params: {
							person: "ryan",
							emotions: ["sad","scared"],
							answer: 1,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "MakeAFace",
						params: {
							person: "sarah",
							emotions: ["happy","angry"],
							answer: 0,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "MakeAFace",
						params: {
							person: "daniel",
							emotions: ["happy","sad"],
							answer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "MakeAFace",
						params: {
							person: "emma",
							emotions: ["angry","scared"],
							answer: 0,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 6,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeader
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "ryan",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "connor",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "amy",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "sarah",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "daniel",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "daniel",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "emma",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "ryan",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "sophie",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 7,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session2ReviewPage",
						params: {
							emotion: "scared",
							person: "ryan",
						}
					},
					{
						index: 1,
						type: "Session2ReviewPage",
						params: {
							emotion: "sad",
							person: "daniel",
						}
					},
					{
						index: 2,
						type: "Session2ReviewPage",
						params: {
							emotion: "happy",
							person: "sarah",
						}
					},
					{
						index: 3,
						type: "Session2ReviewPage",
						params: {
							emotion: "angry",
							person: "emma",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 8,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.howWellCanYouTellHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "daniel",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "amy",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "jacob",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "ryan",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],
		Session3: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroSecondHeader,
							"AlexSpeechBubble": language.session1AlexBubbles.greeting
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenations,
						}	
					},
					{
						index: 2,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday,
						}	
					},
					{
						index: 3,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday3,
						}	
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.letsLookAtSomeExamples,
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.happy,
							"AlexSpeechBubble": language.iAm.happy,
						}	
					},
					{
						index: 7,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.happy,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.happy,
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.sad,
							"AlexSpeechBubble": language.iAm.sad,
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 9,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.sad,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.sad,
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.angry,
							"AlexSpeechBubble": language.iAm.angry,
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 11,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.angry,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.angry,
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 12,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtAlexWhenHeIs.scared,
							"AlexSpeechBubble": language.iAm.scared,
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 13,
						type: "InformationPageWithPicture",
						params: {
							"header": language.letsLookAtSomeoneElseWhenTheyAre.scared,
							"AlexSpeechBubble": language.thisPersonIsWithReasoning.scared,
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 14,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Lily"),
							"AlexImage": "lily.jpg"
						}	
					},
					{
						index: 15,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("James"),
							"AlexImage": "james.jpg"
						}	
					},
					{
						index: 16,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Alison"),
							"AlexImage": "alison.jpg"
						}	
					},
					{
						index: 18,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Ben"),
							"AlexImage": "ben.jpg"
						}	
					},
					{
						index: 19,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Ella"),
							"AlexImage": "ella.jpg"
						}	
					},
					{
						index: 20,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Alex"),
							"AlexImage": "alex.jpg"
						}	
					},
					{
						index: 21,
						type: "InformationPage",
						params: {
							"header": language.letsLookAtWhoIsHelpingUs,
							"AlexSpeechBubble": language.hiIm("Will"),
							"AlexImage": "will.jpg"
						}	
					},
					{
						index: 22,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": "Great! Let's start our first game.",
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.KnowingHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "scared",
							person: "alex",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "happy",
							person: "james",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "lily",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ella",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ella",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ella",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alex",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "will",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ella",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "will",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.emotionalStories,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionalStories,
							"AlexSpeechBubble": language.emotionStoriesBubble.intro,
						}
					},
					{
						index: 1,
						type: "EmotionStory",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							"AlexSpeechBubble": language.emotionStoriesBubble.movedAway,
							"options": [["will","happy"],["ella","sad"],["ben","angry"],["alison","scared"]],
							"correctAnswer": 1,
						}
					},
					{
						index: 2,
						type: "EmotionStory",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							"AlexSpeechBubble": language.emotionStoriesBubble.breaksToy,
							"options": [["alex","sad"],["ella","scared"],["james","happy"],["lily","angry"]],
							"correctAnswer": 3,
						}
					},
					{
						index: 3,
						type: "EmotionStory",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							"AlexSpeechBubble": language.emotionStoriesBubble.getToy,
							"options": [["james","scared"],["ella","angry"],["ben","sad"],["alison","happy"]],
							"correctAnswer": 3,
						}
					},
					{
						index: 4,
						type: "EmotionStory",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							"AlexSpeechBubble": language.emotionStoriesBubble.nightmare,
							"options": [["will","angry"],["ella","happy"],["alex","scared"],["lily","sad"]],
							"correctAnswer": 2,
						}
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeader
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "james",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "lily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "alison",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "ben",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "ella",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "alex",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "alison",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 4,
				name: language.taskNames.talkingToYourFriend,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.talkingToYourFriend,
							"AlexSpeechBubble": language.talkingToYourFriendIntroBubble
						}
					},
					{
						index: 1,
						type: "talkingToYourFriends",
						params: {
							name: "will",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "will",
							emotion: "angry",
							answers: [
								language.talkingToFriendAnswers.laughAtHim,
								language.talkingToFriendAnswers.tellHimToHitSomeone,
								language.talkingToFriendAnswers.talkToHimAskIfHeOk,
							],
							correctAnswer: 2,
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "talkingToYourFriends",
						params: {
							name: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "james",
							emotion: "scared",
							answers: [
								language.talkingToFriendAnswers.talkToHimAskIfHeOk,
								language.talkingToFriendAnswers.laughAtHim,
								language.talkingToFriendAnswers.teaseHim,
							],
							correctAnswer: 0,
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "talkingToYourFriends",
						params: {
							name: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "lily",
							emotion: "sad",
							answers: [
								language.talkingToFriendAnswers.teaseHer,
								language.talkingToFriendAnswers.talkToHerAskIfHeOk,
								language.talkingToFriendAnswers.laughAtHer,
							],
							correctAnswer: 1,
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "talkingToYourFriends",
						params: {
							name: "ella",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "ella",
							emotion: "happy",
							answers: [
								language.talkingToFriendAnswers.beHappyToo,
								language.talkingToFriendAnswers.makeHerSad,
								language.talkingToFriendAnswers.teaseHer
							],
							correctAnswer: 0,
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 5,
				name: language.taskNames.copyTheFace,
				requiresWebcam: true,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.copyTheFace,
							"AlexSpeechBubble": language.copyThePhotoOnScreen,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 2,
						type: "CopyTheFacePage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alex",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 4,
						type: "CopyTheFacePage",
						params: {
							person: "alex",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ella",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 6,
						type: "CopyTheFacePage",
						params: {
							person: "ella",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 8,
						type: "CopyTheFacePage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "will",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 10,
						type: "CopyTheFacePage",
						params: {
							person: "will",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 12,
						type: "CopyTheFacePage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "lily",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
	
				],
			},
			{
				index: 6,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session3ReviewPage",
						params: {
							emotion: "happy",
							person: "ella",
						}
					},
					{
						index: 1,
						type: "Session3ReviewPage",
						params: {
							emotion: "sad",
							person: "ben",
						}
					},
					{
						index: 2,
						type: "Session3ReviewPage",
						params: {
							emotion: "angry",
							person: "lily",
						}
					},
					{
						index: 3,
						type: "Session3ReviewPage",
						params: {
							emotion: "scared",
							person: "alex",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 7,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.howWellCanYouTellHowSomeoneFeels,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "lilly",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "ben",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "alison",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "will",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "lily",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "will",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],
	};
}

const getAdolescentTasks = () => {
	return {
		Session1: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroFirstHeaderAdolescent,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenationsAdolescent,
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.IntroFirstHeaderAdolescent,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 2,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.happy,
							"AlexSpeechBubble": language.getCorrectFeedback("happy","male","adolescent",false),
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 3,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.sad,
							"AlexSpeechBubble": language.getCorrectFeedback("sad","female","adolescent",false),
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 4,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.angry,
							"AlexSpeechBubble": language.getCorrectFeedback("angry","male","adolescent",false),
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 5,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.scared,
							"AlexSpeechBubble": language.getCorrectFeedback("scared","female","adolescent",false),
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.session1AlexBubbles.letsStartOurFirstGame,
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.youWillSeeFacesShowingDifferentEmotions,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "tom",
							image: "tom_angry_arrows.png",
							extraHelp: false, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "sad",
							person: "laura",
							image: "laura_sad_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "scared",
							person: "jack",
							image: "jack_scared_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "happy",
							image: "emily_happy_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "sad",
							image: "tom_sad_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "happy",
							image: "jack_happy_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "angry",
							image: "laura_angry_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "scared",
							image: "emily_scared_arrows.png",
							extraHelp: true, // specifies if the help button tells them the answer
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.chooseTheEmotion,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.chooseTheEmotion,
							"AlexSpeechBubble": language.chooseTheEmotionBubble,
						}
					},
					{
						index: 1,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","scared"],["emily","angry"],["jack","sad"],["laura","happy"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 2,
						type: "ChooseTheEmotion",
						params: {
							"options": [["emily","scared"],["tom","angry"],["jack","happy"],["laura","sad"]],
							"correctAnswer": 2,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 3,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","scared"],["tom","sad"],["laura","angry"],["emily","happy"]],
							"correctAnswer": 0,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 4,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","happy"],["emily","sad"],["laura","scared"],["jack","angry"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 5,
						type: "ChooseTheEmotion",
						params: {
							"options": [["tom","sad"],["jack","scared"],["laura","angry"],["emily","happy"]],
							"correctAnswer": 3,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 6,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","angry"],["laura","scared"],["tom","happy"],["emily","sad"]],
							"correctAnswer": 0,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 7,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","sad"],["laura","happy"],["tom","scared"],["emily","angry"]],
							"correctAnswer": 2,
							"requiresInput":true,
							"gender":"male",
						}
					},
					{
						index: 8,
						type: "ChooseTheEmotion",
						params: {
							"options": [["jack","happy"],["laura","sad"],["tom","angry"],["emily","scared"]],
							"correctAnswer": 1,
							"requiresInput":true,
							"gender":"female",
						}
					},
					{
						index: 9,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.whenHaveYouFeltThisWay,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.whenHaveYouFeltThisWay,
							"AlexSpeechBubble": language.whenHaveYouFeltThisWayAdolescentBubble,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalExperiencePage",
						params: {
							name: "tom",
							gender: "male",
							emotion: "angry",
							requiresInput:true, 
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalExperiencePage",
						params: {
							name: "emily",
							gender: "female",
							emotion: "scared", 
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalExperiencePage",
						params: {
							name: "jack",
							gender: "male",
							emotion: "sad", 
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emily",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalExperiencePage",
						params: {
							name: "emily",
							gender: "female",
							emotion: "happy", 
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "EmotionalExperiencePage",
						params: {
							name: "laura",
							gender: "female",
							emotion: "angry", 
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "EmotionalExperiencePage",
						params: {
							name: "tom",
							gender: "male",
							emotion: "happy", 
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "laura",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "EmotionalExperiencePage",
						params: {
							name: "laura",
							gender: "female",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jack",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "EmotionalExperiencePage",
						params: {
							name: "jack",
							gender: "male",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 4,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeaderAdolescent
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "jack",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "jack",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "laura",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "laura",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "emily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "tom",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "emily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 5,
				name: language.taskNames.importantFeatures,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.importantFeatures,
							"AlexSpeechBubble": language.partsOfTheFaceIntroBubbleAdolescent,
						}
					},
					{
						index: 1,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["emily", "tom"],
							emotion: "sad",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.staightAccross],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["emily", "tom"],
							emotion: "sad",
							answers: [language.featureDescriptions.eyebrows.pulledUp, language.featureDescriptions.eyebrows.lowered, language.featureDescriptions.eyebrows.scrunchedTogether],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["laura", "jack"],
							emotion: "happy",
							answers: [language.featureDescriptions.mouth.closed, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.mouth.strechedAcrossAndOpen, language.featureDescriptions.mouth.curvedDown, language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.eyebrows.lowered, language.featureDescriptions.eyebrows.raised, language.featureDescriptions.eyebrows.scrunchedTogether],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyes",
							people: ["tom", "laura"],
							emotion: "scared",
							answers: [language.featureDescriptions.eyes.closed, language.featureDescriptions.eyes.narrowed, language.featureDescriptions.eyes.wideOpen],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["jack", "emily"],
							emotion: "angry",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.tensed, language.featureDescriptions.mouth.open],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["jack", "emily"],
							emotion: "angry",
							answers: [language.featureDescriptions.eyebrows.scrunchedTogether, language.featureDescriptions.eyebrows.slopingUp, language.featureDescriptions.eyebrows.pulledUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 6,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session1ReviewPage",
						params: {
							emotion: "happy",
							person: "jack",
						}
					},
					{
						index: 1,
						type: "Session1ReviewPage",
						params: {
							emotion: "sad",
							person: "emily",
						}
					},
					{
						index: 2,
						type: "Session1ReviewPage",
						params: {
							emotion: "angry",
							person: "laura",
						}
					},
					{
						index: 3,
						type: "Session1ReviewPage",
						params: {
							emotion: "scared",
							person: "tom",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 7,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.quizStartAdolescent,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "tom",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "jack",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "emily",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "laura",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],
	
		Session2: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroSecondHeaderAdolescent,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenationsAdolescent2
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 2,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.happy,
							"AlexSpeechBubble": language.getCorrectFeedback("happy","male","adolescent",false),
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 3,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.sad,
							"AlexSpeechBubble": language.getCorrectFeedback("sad","female","adolescent",false),
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 4,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.angry,
							"AlexSpeechBubble": language.getCorrectFeedback("angry","male","adolescent",false),
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 5,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.scared,
							"AlexSpeechBubble": language.getCorrectFeedback("scared","female","adolescent",false),
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.session1AlexBubbles.letsStartOurFirstGame,
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.youWillSeeFacesShowingDifferentEmotions,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "emma",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "sad",
							person: "ryan",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emma",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sarah",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sarah",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.chooseTheEmotion,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.chooseTheEmotion,
							"AlexSpeechBubble": language.chooseTheEmotionBubble
						}
					},
					{
						index: 1,
						type: "ChooseTheEmotion",
						params: {
							"options": [["sophie","happy"],["matt","angry"],["amy","sad"],["ryan","scared"]],
							"correctAnswer": 0,
							"requiresInput":true,
						}
					},
					{
						index: 2,
						type: "ChooseTheEmotion",
						params: {
							"options": [["sarah","angry"],["matt","happy"],["daniel","sad"],["emma","scared"]],
							"correctAnswer": 2,
							"requiresInput":true,
						}
					},
					{
						index: 3,
						type: "ChooseTheEmotion",
						params: {
							"options": [["connor","angry"],["sarah","happy"],["jacob","scared"],["sophie","sad"]],
							"correctAnswer": 0,
							"requiresInput":true,
						}
					},
					{
						index: 4,
						type: "ChooseTheEmotion",
						params: {
							"options": [["emma","angry"],["ryan","sad"],["daniel","happy"],["amy","scared"]],
							"correctAnswer": 3,
							"requiresInput":true,
						}
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.importantFeatures,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.partsOfTheFace,
							"AlexSpeechBubble": language.partsOfTheFaceIntroBubbleAdolescent,
						}
					},
					{
						index: 1,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["sarah", "daniel"],
							emotion: "happy",
							answers: [
								language.featureDescriptions.mouth.closed, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.mouth.strechedAcrossAndOpen, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.curvedUp],
							correctAnswer: 0,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.eyebrows.slopingUp, 
								language.featureDescriptions.eyebrows.raised, 
								language.featureDescriptions.eyebrows.pulledTogether],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyes",
							people: ["ryan", "emma"],
							emotion: "scared",
							answers: [
								language.featureDescriptions.eyes.closed, 
								language.featureDescriptions.eyes.narrowed, 
								language.featureDescriptions.eyes.wideOpen],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["ryan", "amy"],
							emotion: "sad",
							answers: [
								language.featureDescriptions.mouth.curvedUp, 
								language.featureDescriptions.mouth.curvedDown, 
								language.featureDescriptions.mouth.closedInALine],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["ryan", "amy"],
							emotion: "sad",
							answers: [
								language.featureDescriptions.eyebrows.scrunchedTogether, 
								language.featureDescriptions.eyebrows.raised, 
								language.featureDescriptions.eyebrows.slopingUp],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "PartsOfTheFacePage",
						params: {
							feature: "mouth",
							people: ["sarah", "matt"],
							emotion: "angry",
							answers: [language.featureDescriptions.mouth.curvedUp, language.featureDescriptions.mouth.tensed, language.featureDescriptions.mouth.open],
							correctAnswer: 1,
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "PartsOfTheFacePage",
						params: {
							feature: "eyebrows",
							people: ["sarah", "matt"],
							emotion: "angry",
							answers: [language.featureDescriptions.eyebrows.pulledUp, language.featureDescriptions.eyebrows.slopingUp, language.featureDescriptions.eyebrows.scrunchedTogether],
							correctAnswer: 2,
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 4,
				name: language.taskNames.copyTheFace,
				requiresWebcam: true,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.copyTheFace,
							"AlexSpeechBubble": language.copyThePhotoOnScreenAdolescent,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 2,
						type: "CopyTheFacePage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 4,
						type: "CopyTheFacePage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 6,
						type: "CopyTheFacePage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 8,
						type: "CopyTheFacePage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 10,
						type: "CopyTheFacePage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 12,
						type: "CopyTheFacePage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 16,
						type: "CopyTheFacePage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
	
				],
			},
			{
				index: 5,
				name: language.taskNames.makeAFace,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.makeAFace,
							"AlexSpeechBubble": language.makeAFaceBubbleAdolescent, 
						}
					},
					{
						index: 1,
						type: "MakeAFace",
						params: {
							person: "matt",
							emotions: ["angry","happy"],
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "MakeAFace",
						params: {
							person: "ryan",
							emotions: ["sad","scared"],
							answer: 1,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "MakeAFace",
						params: {
							person: "sarah",
							emotions: ["happy","angry"],
							answer: 0,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "MakeAFace",
						params: {
							person: "daniel",
							emotions: ["happy","sad"],
							answer: 1,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "MakeAFace",
						params: {
							person: "emma",
							emotions: ["angry","scared"],
							answer: 0,
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 6,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeaderAdolescent,
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "ryan",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "connor",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "amy",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "sarah",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "daniel",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "daniel",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "emma",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "ryan",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "sophie",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 7,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session2ReviewPage",
						params: {
							emotion: "scared",
							person: "ryan",
						}
					},
					{
						index: 1,
						type: "Session2ReviewPage",
						params: {
							emotion: "sad",
							person: "daniel",
						}
					},
					{
						index: 2,
						type: "Session2ReviewPage",
						params: {
							emotion: "happy",
							person: "sarah",
						}
					},
					{
						index: 3,
						type: "Session2ReviewPage",
						params: {
							emotion: "angry",
							person: "emma",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 8,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.quizStartAdolescent,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "daniel",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "sophie",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "jacob",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "amy",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "jacob",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "ryan",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "amy",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "sophie",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "connor",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "sarah",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "daniel",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "matt",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],

		Session3: [
			{
				index: 0,
				name: language.taskNames.introduction,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.IntroSecondHeaderAdolescent,
							"AlexSpeechBubble": language.session1AlexBubbles.emotionsExplenationsAdolescent2
						}
					},
					{
						index: 1,
						type: "InformationPage",
						params: {
							"header": language.whatAreEmotions,
							"AlexSpeechBubble": language.session1AlexBubbles.whatWeAreDoingToday2,
						}	
					},
					{
						index: 2,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.happy,
							"AlexSpeechBubble": language.getCorrectFeedback("happy","male","adolescent",false),
							"exampleImage": "happy_example.jpg"
						}	
					},
					{
						index: 3,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.sad,
							"AlexSpeechBubble": language.getCorrectFeedback("sad","female","adolescent",false),
							"exampleImage": "sad_example.jpg",
							"AlexImage": "james_sad.png"
						}	
					},
					{
						index: 4,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.angry,
							"AlexSpeechBubble": language.getCorrectFeedback("angry","male","adolescent",false),
							"exampleImage": "angry_example.jpg",
							"AlexImage": "james_angry.png"
						}	
					},
					{
						index: 5,
						type: "InformationPageWithPicture",
						params: {
							"header": language.thisPersonIs.scared,
							"AlexSpeechBubble": language.getCorrectFeedback("scared","female","adolescent",false),
							"exampleImage": "scared_example.jpg",
							"AlexImage": "james_scared.png"
						}	
					},
					{
						index: 6,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.session1AlexBubbles.letsStartOurFirstGame,
						}	
					},
				]
			},
			{
				index: 1,
				name: language.taskNames.howDoTheyFeel,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.howDoTheyFeel,
							"AlexSpeechBubble": language.HowDoTheyFeel.youWillSeeFacesShowingDifferentEmotions,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "scared",
							person: "ryan",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "happy",
							person: "james",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							emotion: "angry",
							person: "lily",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sally",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sally",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sian",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ryan",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "HowDoTheyFeelPage",
						params: {
							person: "aron",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 12,
						type: "HowDoTheyFeelPage",
						params: {
							person: "emma",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 14,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 15,
						type: "HowDoTheyFeelPage",
						params: {
							person: "aron",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 16,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 17,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 2,
				name: language.taskNames.emotionalStories,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionalStories,
							"AlexSpeechBubble": language.emotionStoriesBubble.intro,
						}
					},
					{
						index: 1,
						type: "EmotionStoryAdolescent",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							storyText: language.emotionStoriesBubble.drivingTest,
							requiresInput: true,	
						}
						
					},
					{
						index: 2,
						type: "EmotionStoryAdolescent",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							storyText: language.emotionStoriesBubble.concertParty,
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "EmotionStoryAdolescent",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							storyText: language.emotionStoriesBubble.notInvited,
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "EmotionStoryAdolescent",
						params: {
							"header": language.howWouldYouFeelInThisStory,
							storyText: language.emotionStoriesBubble.missedTheBus,
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 3,
				name: language.taskNames.emotionVideos,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.emotionVideos,
							"AlexSpeechBubble": language.emotionalVideoFirstHeaderAdolescent
						}
					},
					{
						index: 1,
						type: "EmotionalVideo",
						params: {
							name: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "EmotionalVideo",
						params: {
							name: "james",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "EmotionalVideo",
						params: {
							name: "lily",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "EmotionalVideo",
						params: {
							name: "alison",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "EmotionalVideo",
						params: {
							name: "ben",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "EmotionalVideo",
						params: {
							name: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "EmotionalVideo",
						params: {
							name: "ella",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "EmotionalVideo",
						params: {
							name: "alex",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "EmotionalVideo",
						params: {
							name: "alison",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 10,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				]
			},
			{
				index: 4,
				name: language.taskNames.respondingToEmotions,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.respondingToEmotions,
							"AlexSpeechBubble": language.talkingToYourFriendIntroBubbleAdolescent
						}
					},
					{
						index: 1,
						type: "talkingToYourFriends",
						params: {
							name: "aron",
							emotion: "angry",
							requiresInput:true,
						}
					},
					{
						index: 2,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "aron",
							emotion: "angry",
							answers: [
								language.talkingToFriendAnswers.laughAtHim,
								language.talkingToFriendAnswers.tellHimToHitSomeone,
								language.talkingToFriendAnswers.talkToHimAskIfHeOk,
							],
							correctAnswer: 2,
							requiresInput:true,
						}
					},
					{
						index: 3,
						type: "talkingToYourFriends",
						params: {
							name: "james",
							emotion: "scared",
							requiresInput:true,
						}
					},
					{
						index: 4,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "james",
							emotion: "scared",
							answers: [
								language.talkingToFriendAnswers.talkToHimAskIfHeOk,
								language.talkingToFriendAnswers.laughAtHim,
								language.talkingToFriendAnswers.teaseHim,
							],
							correctAnswer: 0,
							requiresInput:true,
						}
					},
					{
						index: 5,
						type: "talkingToYourFriends",
						params: {
							name: "lily",
							emotion: "sad",
							requiresInput:true,
						}
					},
					{
						index: 6,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "lily",
							emotion: "sad",
							answers: [
								language.talkingToFriendAnswers.teaseHer,
								language.talkingToFriendAnswers.talkToHerAskIfHeOk,
								language.talkingToFriendAnswers.laughAtHer,
							],
							correctAnswer: 1,
							requiresInput:true,
						}
					},
					{
						index: 7,
						type: "talkingToYourFriends",
						params: {
							name: "sally",
							emotion: "happy",
							requiresInput:true,
						}
					},
					{
						index: 8,
						type: "talkingToYourFriendsMultiChoice",
						params: {
							name: "sally",
							emotion: "happy",
							answers: [
								language.talkingToFriendAnswers.beHappyToo,
								language.talkingToFriendAnswers.makeHerSad,
								language.talkingToFriendAnswers.teaseHer
							],
							correctAnswer: 0,
							requiresInput:true,
						}
					},
					{
						index: 9,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 5,
				name: language.taskNames.copyTheFace,
				requiresWebcam: true,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.copyTheFace,
							"AlexSpeechBubble": language.copyThePhotoOnScreenAdolescent,
						}
					},
					{
						index: 1,
						type: "HowDoTheyFeelPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 2,
						type: "CopyTheFacePage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 4,
						type: "CopyTheFacePage",
						params: {
							person: "ryan",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "HowDoTheyFeelPage",
						params: {
							person: "sian",
							emotion: "scared",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 6,
						type: "CopyTheFacePage",
						params: {
							person: "sian",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 8,
						type: "CopyTheFacePage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "HowDoTheyFeelPage",
						params: {
							person: "aron",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 10,
						type: "CopyTheFacePage",
						params: {
							person: "aron",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "HowDoTheyFeelPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 12,
						type: "CopyTheFacePage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "lily",
							emotion: "angry",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "lily",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "HowDoTheyFeelPage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
							noHint: true,
						}
					},
					{
						index: 14,
						type: "CopyTheFacePage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
	
				],
			},
			{
				index: 6,
				name: language.taskNames.review,
				slides: [
					{
						index: 0,
						type: "Session3ReviewPage",
						params: {
							emotion: "happy",
							person: "sally",
						}
					},
					{
						index: 1,
						type: "Session3ReviewPage",
						params: {
							emotion: "sad",
							person: "ben",
						}
					},
					{
						index: 2,
						type: "Session3ReviewPage",
						params: {
							emotion: "angry",
							person: "lily",
						}
					},
					{
						index: 3,
						type: "Session3ReviewPage",
						params: {
							emotion: "scared",
							person: "ryan",
						}
					},
					{
						index: 4,
						type: "InformationPage",
						params: {
							"header": "",
							"AlexSpeechBubble": language.endGameMessage,
						}
					},
				],
			},
			{
				index: 7,
				name: language.taskNames.quiz,
				slides: [
					{
						index: 0,
						type: "InformationPage",
						params: {
							"header": language.taskNames.quiz,
							"AlexSpeechBubble": language.quizStartAdolescent,
						}
					},
					{
						index: 1,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 2,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 3,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 4,
						type: "QuizPage",
						params: {
							person: "lily",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 5,
						type: "QuizPage",
						params: {
							person: "alison",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 6,
						type: "QuizPage",
						params: {
							person: "lily",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 7,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 8,
						type: "QuizPage",
						params: {
							person: "ben",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 9,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 10,
						type: "QuizPage",
						params: {
							person: "james",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 11,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 12,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 13,
						type: "QuizPage",
						params: {
							person: "alison",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 14,
						type: "QuizPage",
						params: {
							person: "will",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 15,
						type: "QuizPage",
						params: {
							person: "ben",
							emotion: "sad",
							requiresInput: true,
						}
					},
					{
						index: 16,
						type: "QuizPage",
						params: {
							person: "lily",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 17,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "angry",
							requiresInput: true,
						}
					},
					{
						index: 18,
						type: "QuizPage",
						params: {
							person: "ella",
							emotion: "no emotion",
							requiresInput: true,
						}
					},
					{
						index: 19,
						type: "QuizPage",
						params: {
							person: "will",
							emotion: "happy",
							requiresInput: true,
						}
					},
					{
						index: 20,
						type: "QuizPage",
						params: {
							person: "alex",
							emotion: "scared",
							requiresInput: true,
						}
					},
					{
						index: 22,
						type: "ResultsPage",
						params: {
							
						}
					},
				]
			}
		],
	
	
	};
}

const getTests = () => {
	return {
		Pretest: {
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
		},
		Posttest: {
			task_array: [
				{
					image: "B1",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B2",
					emotion: "sad", 
					temp_name: "low"
				},
				{
					image: "B3",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B4",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B5",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B6",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B7",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B8",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B9",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B10",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B11",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B12",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B13",
					emotion: "sad", 
					temp_name: "low"
				},
				{
					image: "B14",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B15",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B16",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B17",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B18",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B19",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B20",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B21",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B22",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B23",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B24",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B25",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B26",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B27",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B28",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B29",
					emotion: "sad", 
					temp_name: "low"
				},
				{
					image: "B30",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B31",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B32",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B33",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B34",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B35",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B36",
					emotion: "sad", 
					temp_name: "low"
				},
				{
					image: "B37",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B38",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B39",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B40",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B41",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B42",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B43",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B44",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B45",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B46",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B47",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B48",
					emotion: "angry", 
					temp_name: "high"
				},
				{
					image: "B49",
					emotion: "happy", 
					temp_name: "low"
				},
				{
					image: "B50",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B51",
					emotion: "scared", 
					temp_name: "low"
				},
				{
					image: "B52",
					emotion: "sad", 
					temp_name: "high"
				},
				{
					image: "B53",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B54",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B55",
					emotion: "no_emotion", 
					temp_name: "n/a"
				},
				{
					image: "B56",
					emotion: "sad", 
					temp_name: "low"
				},
				{
					image: "B57",
					emotion: "happy", 
					temp_name: "high"
				},
				{
					image: "B58",
					emotion: "angry", 
					temp_name: "low"
				},
				{
					image: "B59",
					emotion: "scared", 
					temp_name: "high"
				},
				{
					image: "B60",
					emotion: "sad", 
					temp_name: "low"
				},
            ]
		},
	}
}

export default getTasks
export {language, ageType, getTests}
