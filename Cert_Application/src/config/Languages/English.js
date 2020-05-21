export const English = {
	name: "English",
	nameNative: "English",

	taskNames: {
        introduction: "Introduction",
        howDoTheyFeel: "How do they feel?",
        chooseTheEmotion: "Choose the emotion",
        whenHaveYouFeltThisWay: "When have you felt this way?",
		emotionVideos: "Emotion Videos", //
		copyTheFace: "Copy the face",
		makeAFace: "Make a face",
		partsOfTheFace: "Parts of the face",
		importantFeatures: "Important Features",
		emotionalStories: "Emotional stories",
		talkingToYourFriend: "Talking to your friend",
		respondingToEmotions: "Responding to emotions",
        review: "Review",
        quiz: "Quiz",
    },
	emotions: {
		happy: "happy",
		sad: "sad",
		angry: "angry",
		scared: "scared",
		noEmotion: "no emotion"
	},
	featureDescriptions: {
		mouth: {
			curvedUp: "Curved up", 
			curvedDown: "Curved down", 
			staightAccross: "Straight across",
			strechedAcrossAndOpen: "Stretched across and open",
			closedInALine: "Closed, in a straight line",
			closed: "Closed",
			open: "Open",
			tensed: "Tensed",
		},
		eyebrows: {
			slopingUp: "Sloping up", 
			pulledUp: "Pulled up",
			pulledTogether: "Pulled together",
			lowered: "Lowered",
			raised: "Raised",
			scrunchedTogether: "Scrunched together",
		},
		eyes: {
			closed: "Closed",
			narrowed: "Narrowed",
			wideOpen: "Wide open",
		}
	},

	whatEmotionLooksLikeThis: "What emotion looks like this?", // needs translating
	incorrect_alert: "That's not right. Try again!",
	correct_alert: "Well done, that's right!",//"Well done, that's right! Press the Next button",
	correctStrings: {
		child: {
			angry_male: {
				opener: "We know he is angry because",
				eyes : " - His eyes are narrowed",
				eyebrows : " - His eyebrows are pulled together",
				mouth : " - His mouth is closed and might be in a straight line",
			},
			angry_female: {
				opener: "We know she is angry because",
				eyes : " - Her eyes are narrowed",
				eyebrows : " - Her eyebrows are pulled together",
				mouth : " - Her mouth is closed and might be in a straight line",
			},
			angry_both: {
				opener: "We know they are angry because",
				eyes : " - Their eyes are narrowed",
				eyebrows : " - Their eyebrows are pulled together",
				mouth : " - Their mouths are closed and might be in a straight line",
			},
			happy_male: {
				opener: "We know he is happy because",
				eyes : "",
				eyebrows : "",
				mouth : " - His mouth is curved up",
			},
			happy_female: {
				opener: "We know she is happy because",
				eyes : "",
				eyebrows : "",
				mouth : " - Her mouth is curved up",
			},
			happy_both: {
				opener: "We know they are happy because ",
				eyes : "",
				eyebrows : "",
				mouth : " - Their mouth is curved up",
			},
			sad_male: {
				opener: "We know he is sad because",
				eyes : "",
				eyebrows : " - His eyebrows might be sloping up",
				mouth : " - His mouth is either already curved down or beginning to curve down",
			},
			sad_female: {
				opener: "We know she is sad because",
				eyes : "",
				eyebrows : " - Her eyebrows might be sloping up",
				mouth : " - Her mouth is either already curved down or beginning to curve down",
			},
			sad_both: {
				opener: "We know they are sad because ",
				eyes : "",
				eyebrows : " - Their eyebrows might be sloping up",
				mouth : " - Their mouth is either already curved down or beginning to curve down",
			},
			scared_male: {
				opener: "We know he is scared because ",
				eyes : " - His eyes are wide open  ",
				eyebrows : " - His eyebrows are pulled up",
				mouth : " - His mouth is stretched across and slightly open",
			},
			scared_female: {
				opener: "We know she is scared because ",
				eyes : " - Her eyes are wide open  ",
				eyebrows : " - Her eyebrows are pulled up",
				mouth : " - Her mouth is stretched across and slightly open",
			},
			scared_both: {
				opener: "We know they are scared because ",
				eyes : " - Their eyes are wide open",
				eyebrows : " - Their eyebrows are pulled up",
				mouth : " - Their mouths are stretched across and slightly open ",
			},
		},
		adolescent: {
			angry_male: {
				opener: "We know he is angry because",
				eyes : " - His eyes are narrowed",
				eyebrows : " - His eyebrows are scrunched together",
				mouth : " - His mouth and jaw are tense",
			},
			angry_female: {
				opener: "We know she is angry because",
				eyes : " - Her eyes are narrowed",
				eyebrows : " - Her eyebrows are scrunched together",
				mouth : " - Her mouth and jaw are tense",
			},
			angry_both: {
				opener: "We know they are angry because",
				eyes : " - Their eyes are narrowed",
				eyebrows : " - eyebrows are scrunched together",
				mouth : " - Their mouth and jaw are tense",
			},
			happy_male: {
				opener: "We know he is happy because",
				eyes : "",
				eyebrows : "",
				mouth : " - His mouth is curved up",
				extra : " - He looks relaxed"
			},
			happy_female: {
				opener: "We know she is happy because",
				eyes : "",
				eyebrows : "",
				mouth : " - Her mouth is curved up",
				extra : " - She looks relaxed"
			},
			happy_both: {
				opener: "We know they are happy because ",
				eyes : "",
				eyebrows : "",
				mouth : " - Their mouth is curved up",
				extra : " - they look relaxed"
			},
			sad_male: {
				opener: "We know he is sad because",
				eyes : "",
				eyebrows : " - His eyebrows might be pulled up",
				mouth : " - His mouth is either already curved down or beginning to curve down",
			},
			sad_female: {
				opener: "We know she is sad because",
				eyes : "",
				eyebrows :  " - Her eyebrows are pulled up", //" - Her eyebrows are pulled up towards the middle of her face", // from intro
				mouth : " - Her mouth is either already curved down or beginning to curve down",
			},
			sad_both: {
				opener: "We know they are sad because ",
				eyes : "",
				eyebrows : " - Their eyebrows might be sloping up",
				mouth : " - Their mouth is either already curved down or beginning to curve down",
			},
			scared_male: {
				opener: "We know he is scared because ",
				eyes : " - His eyes are wide open  ",
				eyebrows : " - His eyebrows are raised",
				mouth : " - His mouth is stretched across and slightly open",
			},
			scared_female: {
				opener: "We know she is scared because ",
				eyes : " - Her eyes are wide open",
				eyebrows : " - Her eyebrows are raised",
				mouth : " - Her mouth is stretched and across and could be slightly open",
			},
			scared_both: {
				opener: "We know they are scared because ",
				eyes : " - Their eyes are wide open",
				eyebrows : " - Their eyebrows are raised",
				mouth : " - Their mouths are stretched across and slightly open ",
			},
		},
	},
	incorrectStrings: {
		child: {
			angry: {
				opener: "An angry face looks like this:",
				eyes: " - The eyes are narrowed",
				eyebrows: " - The eyebrows are pulled together",
				mouth: " - The mouth is closed and might be in a straight line",
			},
			sad: {
				opener: "A sad face looks like this:",
				eyes: "",
				mouth: " - The mouth is either already curved down or starting to curve down",
				eyebrows: " - Their eyebrows might be sloping up",
			},
			scared: {
				opener: "A scared face looks like this:",
				mouth: " - The mouth is stretched across and slightly open",
				eyes: " - The eyes are wide open ",
				eyebrows: " - The eyebrows are pulled up ",
			},
			happy: {
				opener: "A happy face looks like this:",
				mouth: " - The mouth is curved up",
				eyebrows: "",
				eyes: "",
			},
		},
		adolescent: {
			angry: {
				opener: "An angry face looks like this:",
				eyes: " - The eyes are narrowed",
				eyebrows: " - The eyebrows are scrunched together",
				mouth: " - The mouth and jaw are tense",
			},
			sad: {
				opener: "A sad face looks like this:",
				eyes: "",
				mouth: " - The mouth is either already curved down or starting to curve down",
				eyebrows: " - Their eyebrows might be pulled up",
			},
			scared: {
				opener: "A scared face looks like this:",
				mouth: " - The mouth is stretched across and slightly open",
				eyes: " - The eyes are wide open ",
				eyebrows: " - The eyebrows are raised",
			},
			happy: {
				opener: "A happy face looks like this:",
				mouth: " - The mouth is curved up",
				eyebrows: "",
				eyes: "",
			},
		}
	},
	peronIsEmotion: {
		happy: "{0} is happy",
		sad: "{0} is sad",
		scared: "{0} is scared",
		angry: "{0} is angry",
	},
	HowDoTheyFeel: {
		HowDoTheyFeel: "How do they feel?",
		HowDoTheyFeelHint: "Look at the eyes \n Look at the mouth",
		KnowingHowSomeoneFeels: "Knowing how someone feels",
		youWillSeeFacesShowingDifferentEmotions: "You will see faces showing different emotions.\nChoose how you think they feel",
	},
	howDoesNameFeelString: "How does {0} feel here?",
	whoIs: {
		happy: "Who is happy?",
		angry: "Who is angry?",
		sad: "Who is sad?",
		scared: "Who is scared?",
	},
	whichFaceIs: {
		happy: "Which face is happy?",
		angry: "Which face is angry?",
		sad: "Which face is sad?",
		scared: "Which face is scared?",
	},

	IntroFirstHeader: "Today, we are going to teach you about emotions. \n To help us, we have our friend called Alex.",
	IntroFirstHeaderAdolescent: "Today, we are going to talk through how to identify different emotions on different faces",
	whatAreEmotions: "What are emotions?",
	letsLookAtWhoIsHelpingUs: "Thanks so much for your help, Alex! Let's take a look at who else will be helping us today",
	IntroSecondHeader: "Alex has come back to help us!\nLet's go over what we learned last time. Before that, Alex wants to let you know that the pictures will be a bit more difficult this time.",
	IntroSecondHeaderAdolescent: "Let's go over what we learned last time. The pictures will be a bit more difficult this time. \nWhat are emotions?",
	letsLookAtAlexWhenHeIs: {
		happy: "Let's look at how Alex looks when he is happy",
		sad: "Let's look at how Alex looks when he is sad",
		angry: "Let's look at how Alex looks when he is angry",
		scared: "Let's look at how Alex looks when he is scared",
	},
	letsLookAtSomeoneElseWhenTheyAre: {
		happy: "Let's look at how someone else looks when they are happy",
		sad: "Let's look at how someone else looks when they are sad",
		angry: "Let's look at how someone else looks when they are angry",
		scared: "Let's look at how someone else looks when they are scared",
	},
	session1AlexBubbles: {
		greeting: "Hello, I'm Alex. I am going to help you today.",
		emotionsExplenations: "Emotions are feelings. Being happy, sad, scared or angry are all different emotions.\nWe feel these emotions at different times. You might be happy when you are playing with your friends.",
		whatWeAreDoingToday: "Today we are going to be explain how you can tell that someone is happy, sad, scared or angry from looking at their face.",
		whatWeAreDoingToday2: "We know how people are feeling because we all make similar faces when we are feeling emotions.\nWe will show you what faces people make when they are feeling these emotions.",
		whatWeAreDoingToday3: "Sometimes the face might be really obvious, but sometimes it might be more difficult. \nIt's really important to look at the whole face to know what someone feels.",
		letsLookAtSomeExamples: "Let's look at the faces that people make when they have these different emotions.",
		letsStartOurFirstGame: "Great! Let's start our first game.",

		emotionsExplenationsAdolescent: "Emotions are feelings, such as being happy or sad. We feel these emotions at different times. \n\nWe can tell what emotion someone is feeling from their facial expression.",
		emotionsExplenationsAdolescent2: "Emotions are feelings, such as being happy or sad. You might feel an emotion for a short time or you might feel it for a long time.\n\nWe can tell what emotion someone is feeling from their facial expression.",
	},
	iAm: {
		happy: "I am happy.\nWhen I am happy:\n - My mouth is curved up",
		sad: "I am sad.\nWhen I am sad:\n - My mouth is curved down\n - My eyebrows could be sloping up",
		angry: "I am angry.\n When I am angry\n - My eyes are narrowed\n - My eyebrows are pulled together\n - My mouth is closed and might be in a straight line",
		scared: "I am scared.\nWhen I am scared:\n - My eyes are wide open\n - My eyebrows are pulled up\n - My mouth is stretched across and could be slightly open",
	},
	thisPersonIsWithReasoning: { // todo needs splitting into male and femail
		happy: "This person is happy.\n - His mouth is curved up",
		sad: "This person is sad.\n - Her mouth is curved down\n - Her eyebrows could be sloping up",
		angry: "This person is angry.\n - His eyes are narrowed\n - His eyebrows are pulled together\n - His mouth is in closed and might be in a straight line",
		scared: "This person is scared.\n - Her eyes are wide open\n - Her eyebrows are pulled up\n - Her mouth is stretched and across and could be slightly open",
	},
	thisPersonIs: { // todo needs splitting into male and femail
		happy: "This person is happy.",
		sad: "This person is sad.",
		angry: "This person is angry.",
		scared: "This person is scared.",
	},
	hiImString: "Hi, I'm {0}",


	makeAFace: "Make a face",
	makeAFaceBubble: "Match the photos to make a face",
	makeAFaceBubbleAdolescent: "You will see different features of the face. <br> You have to match the facial features to create a face displaying a certain emotion",
	makeAFaceInstructionString: "Drag the eyebrows, mouth and eyes to make a face showing an emotion",

	makeAFaceInstructionWithEmotionString: {
		happy : "Drag the eyebrows, eyes and mouth to make a happy face. Keep going until you get it right.",
		sad : "Drag the eyebrows, eyes and mouth to make a sad face. Keep going until you get it right.",
		scared : "Drag the eyebrows, eyes and mouth to make a scared face. Keep going until you get it right.",
		angry : "Drag the eyebrows, eyes and mouth to make a angry face. Keep going until you get it right.",
	},

	copyTheFace: "Copy the face",
	copyThePhotoOnScreen: "Copy the photo on the screen",
	copyThePhotoOnScreenAdolescent: "Identify each emotion then you will see your picture on the screen. Try to copy the face on the screen",
	letsSeeHowYourPhotoLooks: "Let's see how your photo looks and compare it to {0}'s picture. You can take another photo if you want to.", // TODO
	tryToCopyTheFace: "Try your best to copy the face",

	emotionalExperianceHeaderString: {
		happy: "Tell us about a time you were happy",
		sad: "Tell us about a time you were sad",
		scared: "Tell us about a time you were scared",
		angry: "Tell us about a time you were angry",
	},
	anotherEmotionalExperianceHeaderString: {
		happy: "Tell us about another time you were happy",
		sad: "Tell us about another time you were sad",
		scared: "Tell us about another time you were scared",
		angry: "Tell us about another time you were angry",
	},

	emotionVideoTopHeader: "Emotion videos",
	emotionalVideoFirstHeader: 'Say "stop" when you think you know how they feel. Let\'s practice together.',
	emotionalVideoFirstHeaderAdolescent: 'Press ‘stop’ when you think you can recognise an emotion on the person’s face then choose which emotion is correct',
	emotionVideoHeader: "Let's do the same thing again",
	emotionalVideoEndHeader: "Great! Now let's see how they look if you had not stopped the video",
        videoPlayer: {
        play: "Play",
        pause: "Pause",
        reset: "Reset",
    },


	partsOfTheFaceIntroHeader: "Parts of the face",
	partsOfTheFaceIntroBubble: "Look at different parts of the face to know how someone feels",
	partsOfTheFaceIntroBubbleAdolescent: "Identify what are the important features for each emotion",
	partsOfTheFace: {
        happy: {
            mouth: "{0} and {1} are happy here. How do their mouths look?",
        },
        sad: {
			mouth: "{0} and {1} are sad here. How do their mouths look?",
			eyebrows: "{0} and {1} are sad here. How do their eyebrows look?",
        },
        angry: {
            mouth: "{0} and {1} are angry here. How do their mouths look?",
            eyebrows: "{0} and {1} are angry here. How do their eyebrows look?",
        },
        scared: {
            mouth: "{0} and {1} are scared here. How do their mouths look?",
            eyebrows: "{0} and {1} are scared here. How do their eyebrows look?",
            eyes: "{0} and {1} are scared here. How do their eyes look?", 
        },
	},

	reviewHeader: "Let's have a look at what we have learned today",
	youToldUsAboutTheTimeYouWere: {
		happy: "You told us about a time when you were happy:",
		sad: "You told us about a time when you were sad:",
		angry: "You told us about a time when you were angry:",
		scared: "You told us about a time when you were scared:",
	},
	weLearnedHowEachPartOfTheFaceLooksWhen: {
		scared: "We learned how each part of the face looks when someone is scared.",
		sad: "We learned how each part of the face looks when someone is sad.",
		happy: "We learned how each part of the face looks when someone is happy.",
		angry: "We learned how each part of the face looks when someone is angry.",
	},
	theTopHalfOfTheirFaceLooksLikeThis:{
		male: "The top half of his face looks like this:",
		female: "The top half of her face looks like this:",
	},
	theBottomHalfOfTheirFaceLooksLikeThis: {
		male: "The bottom half of his face looks like this:",
		female: "The bottom half of her face looks like this:",
	},
	youHaveLearnedThatYouMightFeel: {
		happy: "You have learned that you might feel happy:",
		sad: "You have learned that you might feel sad:",
		angry: "You have learned that you might feel angry:",
		scared: "You have learned that you might feel scared:",
	},

	endGameMessage: "Well done, you have finished this game. You did a great job! Close this message to return to the menu.",

	chooseTheEmotionHeader: "Choose the emotion",
	chooseTheEmotionBubble: "Choose who is feeling a certain emotion",

	whenHaveYouFeltThisWay: "When have you felt this way?",
	whenHaveYouFeltThisWayBubble: "Tell us about a time when you had one of these emotions.",
	whenHaveYouFeltThisWayAdolescentBubble: "Choose the correct emotion then write about a time that you have felt that way.",

	quiz: "Quiz",
	howWellCanYouTellHowSomeoneFeels: "How well can you tell how someone feels?",
	quizStartAdolescent : "You will be presented with some photos focused on just people’s faces. \n You have to choose what emotion you think the person is displaying. This time there is a ‘neutral’ option – you should choose this option if you think the person isn’t displaying any emotion at all. \n You won’t be given any feedback.",
	quizEnd: "Well done! You have finished all the games for this session. Let's take a look at what we will look at in more detail next time:",
	weWillWorkOn: {
		angry : "We will work on angry in more detail.",
		happy : "We will work on happy in more detail.",
		sad : "We will work on sad in more detail.",
		scared : "We will work on scared in more detail.",
	},
	youDidReallyWellAt: {
		happy : "You did really well at happy!",
		sad : "You did really well at sad!",
		scared : "You did really well at scared!",
		angry : "You did really well at angry!",
	},

	EmotionStories: "Emotion stories",
	howWouldYouFeelInThisStory: "How would you feel in this story?",
	emotionStoriesBubble: {
		intro: "Read an emotion story and tell us how you would feel if this were to happen to you.",
		movedAway: "Your friend, whom you really liked to play with, has moved away. You can't play with this friend anymore.",
		breaksToy: "When someone breaks your favorite toy on purpose.",
		getToy: "When you get a toy you really wanted.",
		nightmare: "When you have a nightmare about a monster.",
		drivingTest: "You have just passed your driving test and you have to drive on the fast motorway for the first time by yourself",
		concertParty: "You have won a ticket to see your favourite band in concert, but it means missing your best friend's birthday party",
		notInvited: "You find out that you are the only one out of your friends who isn't invited to a party",
		missedTheBus: "You just watched a horror movie in the cinema. You have to walk home by yourself because your friend made you miss the last bus. ",
	},
	emotionStoriesForReview: {
		concert :"- If you won a ticket to see your favourite band in concert",
		driving: "- When you have to drive on the fast motorway for the first time by yourself.",
		missedTheBus: "- If your friend made you miss the last bus home",
		notInvited: "- If you were the only one of your friends not invited to a party",

	},
	WellDoneYouCouldFeel: {
		sad: "Well done, you could feel sad in this scenario!",
		angry: "Well done, you could feel angry in this scenario!",
		happy: "Well done, you could feel happy in this scenario!",
		scared: "Well done, you could feel scared in this scenario!",
	},
	youMightFeelThisWay: "You might feel this way, but it's likely you will also feel another emotion. How else might you feel?",

	talkingToYourFriend: "Talking to your friend",
	talkingToYourFriendIntroBubble: "What should you do if your friend has one of these emotions?",
	talkingToYourFriendIntroBubbleAdolescent: "Describe how you would respond to someone displaying an emotion.\nThen choose the correct response from 3 options",
	
	whatElseCouldYouDo: "What else could you do?",
	nameIsEmotionWhatShouldYouDo: {
		angry: "{0} is angry here, what should you do?",
		sad: "{0} is sad here, what should you do?",
		scared: "{0} is scared here, what should you do?",
		happy: "{0} is happy here, what should you do?",
	},
	talkingToFriendAnswers: {
		laughAtHim: "Laugh at him",
		laughAtHer: "Laugh at her",
		tellHimToHitSomeone: "Tell him to hit someone",
		talkToHimAskIfHeOk: "Talk to him and ask if he's OK",
		talkToHerAskIfHeOk: "Talk to her and ask if he's OK",
		teaseHim: "Tease Him",
		teaseHer: "Tease Her",
		beHappyToo: "Be happy too",
		makeHerSad: "make her sad"
	},
	talkingToFriendCorrectFeedback: {
		angry: "Well done, that is the right thing to do when your friend is feeling angry. It would be nice to talk to them and ask if they are OK.",
		scared: "Well done, that is the right thing to do when your friend is feeling scared. It would be nice to talk to them and ask if they are OK.",
		sad: "Well done, that is the right thing to do when your friend is feeling sad. It would be nice to talk to them and ask if they are OK.",
		happy: "Well done, that is the right thing to do when your friend is feeling happy. It would be nice to be happy too.",
	},
	talkingToFriendIncorrectFeedback: {
		angry: "No, that's not the right thing to do when your friend is feeling angry. Try again.",
		scared: "No, that's not the right thing to do when your friend is feeling scared. Try again.",
		happy: "No, that's not the right thing to do when your friend is feeling happy. Try again.",
		sad: "No, that's not the right thing to do when your friend is feeling sad. Try again.",
	},
	moreTalkingToFriendIncorrectFeedback: {
		angry: "{0} is angry. It wouldn't be very nice to laugh at him. It wouldn't be very nice to tell him to hit someone because they will get hurt. It would be nice to talk to him and ask if he's OK.",
		scared: "{0} is scared. It wouldn't be very nice to laugh at him or tease him. It would be nice to talk to him and ask if he's OK.",
		happy: "{0} is happy. It wouldn't be very nice to make her sad or tease her. Feeling happy is really nice so it's good to be happy with her",
		sad: "{0} is sad. It wouldn't be very nice to call her a wimp or laugh at her. It would be nice to talk to her and ask if she's OK.",
	},

	pleaseSelectASession: "Please select a session or the help module to start:",
	sessionMenuHeader: "Session {0} menu",
	sessionId: "Session {0}",
	pretest: "Pretest",
	posttest: "Posttest",
	home: "Home",
    help: "Help",

	pleaseCompletePrevious: "Please complete all the previous tasks before the review.",
	printReport: "Print report",
	printHeader: "CERT Session 1 Report",
	hereAreYourQuizScores: "Here are your quiz scores:",
	webcamMessage: "You must have a webcam connected to be able to play this game. If you are using Internet Explorer, please switch to a different web browser.If you are using another web browser, try updating to the latest version. Press OK to return to the menu.",
	capture: "Capture",
	retake: "Retake",
	
	settings: "Settings",
	language: "Language",
};
