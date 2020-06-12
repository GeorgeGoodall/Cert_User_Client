export const Dutch = {
	name: "dutch",
	nameNative: "Nederlands",

	taskNames: {
        introduction: "Introductie",
        howDoTheyFeel: "Hoe voelen ze zich?",
        chooseTheEmotion: "Kies de emotie",
        whenHaveYouFeltThisWay: "Wanneer heb jij je zo gevoeld?",
		emotionVideos: "Emotie videos", //
		copyTheFace: "Doe het gezicht na",
		makeAFace: "Maak het gezicht",
		partsOfTheFace: "Belangrijke kenmerken",
		importantFeatures: "Belangrijke kenmerken",
		emotionalStories: "Emotie verhalen",
		talkingToYourFriend: "Praten met je vriend",
		respondingToEmotions: "Reageren op emoties",
        review: "Terugblik",
        quiz: "Quiz",
    },
	emotions: {
		happy: "blij",
		sad: "verdrietig",
		angry: "boos",
		scared: "bang",
		noEmotion: "geen emotie"
	},
	featureDescriptions: {
		mouth: {
			curvedUp: "Naar boven getrokken", 
			curvedDown: "Naar beneden getrokken", 
			staightAccross: "Recht en uitgerekt",
			strechedAcrossAndOpen: "Horizontaal uitgerekt en open",
			closedInALine: "Gesloten, in een rechte lijn",
			closed: "Gesloten",
			open: "Open",
			tensed: "Gespannen",
		},
		eyebrows: {
			slopingUp: "Schuin omhoog", 
			pulledUp: "Schuin omhoog",
			pulledTogether: "Gefronst",
			lowered: "Verlaagd",
			raised: "Omhoog getrokken",
			scrunchedTogether: "Gefronst",
		},
		eyes: {
			closed: "Gesloten",
			narrowed: "Versmald",
			wideOpen: "Wijd open",
		}
	},

	whatEmotionLooksLikeThis: "Welke emotie ziet er zo uit?", // needs translating
	incorrect_alert: "Dat klopt niet. Probeer het opnieuw!",
	correct_alert: "Goed gedaan, dat klopt!",//"Well done, that's right! Press the Next button",   Goed gedaan, dat klopt! Druk op de knop Volgende
	correctStrings: {
		child: {
			angry_male: {
				opener: "We weten dat hij boos is omdat ",
				eyes : " - Zijn ogen versmald zijn",
				eyebrows : " - Zijn wenkbrauwen gefronst zijn",
				mouth : " - Zijn mond en kaak gespannen zijn",
			},
			angry_female: {
				opener: "We weten dat ze boos is omdat",
				eyes : " - Haar ogen versmald zijn",
				eyebrows : " - Haar wenkbrauwen gefronst zijn",
				mouth : " - Haar mond en kaak gespannen zijn",
			},
			angry_both: {
				opener: "We weten dat ze boos zijn omdat",
				eyes : " - Hun ogen versmald zijn",
				eyebrows : " - Hun wenkbrauwen gefronst zijn",
				mouth : " - Hun monden en kaken gespannen zijn",
			},
			happy_male: {
				opener: "We weten dat hij blij is omdat",
				eyes : "",
				eyebrows : "",
				mouth : " - Zijn mondhoeken omhoog getrokken zijn",
			},
			happy_female: {
				opener: "We weten dat ze blij is omdat",
				eyes : "",
				eyebrows : "",
				mouth : " - Haar mondhoeken omhoog getrokken zijn",
			},
			happy_both: {
				opener: "We weten dat ze blij zijn omdat",
				eyes : "",
				eyebrows : "",
				mouth : " - Hun mondhoeken omhoog getrokken zijn",
			},
			sad_male: {
				opener: "We weten dat hij verdrietig is omdat",
				eyes : "",
				eyebrows : " - Zijn wenkbrauwen schuin opgetrokken kunnen zijn",
				mouth : " - Zijn mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			sad_female: {
				opener: "We weten dat ze verdrietig is omdat",
				eyes : "",
				eyebrows : " - Haar wenkbrauwen schuin opgetrokken kunnen zijn",
				mouth : " - Haar mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			sad_both: {
				opener: "We weten dat ze verdrietig zijn omdat",
				eyes : "",
				eyebrows : " - Hun wenkbrauwen schuin opgetrokken kunnen zijn",
				mouth : " - Hun mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			scared_male: {
				opener: "We weten dat hij bang is omdat",
				eyes : " - Zijn ogen wijd open zijn",
				eyebrows : " - Zijn wenkbrauwen opgetrokken zijn",
				mouth : " - Zijn mond horizontaal uitgerekt is en een beetje open",
			},
			scared_female: {
				opener: "We weten dat ze bang is omdat",
				eyes : " - Haar ogen wijd open zijn",
				eyebrows : " - Haar wenkbrauwen opgetrokken zijn",
				mouth : " - Haar mond horizontaal uitgerekt is en een beetje open",
			},
			scared_both: {
				opener: "We weten dat ze bang zijn omdat",
				eyes : " - Hun ogen wijd open zijn",
				eyebrows : " - Hun wenkbrauwen opgetrokken zijn",
				mouth : " - Hun monden horizontaal uitgerekt zijn en een beetje open",
			},
		},
		adolescent: {
			angry_male: {
				opener: "We weten dat hij boos is omdat",
				eyes : " - Zijn ogen versmald zijn",
				eyebrows : " - Zijn wenkbrauwen gefronst zijn",
				mouth : " - Zijn mond en kaak gespannen zijn",
			},
			angry_female: {
				opener: "We weten dat ze boos is omdat",
				eyes : " - Haar ogen versmald zijn",
				eyebrows : " - Haar wenkbrauwen gefronst zijn",
				mouth : " - Haar mond en kaak gespannen zijn",
			},
			angry_both: {
				opener: "We weten dat ze boos zijn omdat",
				eyes : " - Hun ogen versmald zijn",
				eyebrows : " - Hun wenkbrauwen gefronst zijn",
				mouth : " - Hun monden en kaken gespannen zijn",
			},
			happy_male: {
				opener: "We weten dat hij blij is omdat",
				eyes : "",
				eyebrows : "",
				mouth : " - Zijn mondhoeken zijn omhoog getrokken",
				extra : " - Hij ziet er ontspannen uit"
			},
			happy_female: {
				opener: "We weten dat ze blij is omdat",
				eyes : "",
				eyebrows : "",
				mouth : " - Haar mondhoeken omhoog getrokken zijn",
			},
			happy_both: {
				opener: "We weten dat ze blij zijn omdat ",
				eyes : "",
				eyebrows : "",
				mouth : " - Hun mondhoeken omhoog getrokken zijn",
			},
			sad_male: {
				opener: "We weten dat hij verdrietig is omdat",
				eyes : "",
				eyebrows : " - Zijn wenkbrauwen schuin opgetrokken kunnen zijn",
				mouth : " - Zijn mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			sad_female: {
				opener: "We weten dat ze verdrietig is omdat",
				eyes : "",
				eyebrows :  " - Haar wenkbrauwen schuin opgetrokken kunnen zijn", //" - Her eyebrows are pulled up towards the middle of her face", // from intro
				mouth : " - Haar mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			sad_both: {
				opener: "We weten dat ze verdrietig zijn omdat",
				eyes : "",
				eyebrows : " - Hun wenkbrauwen schuin opgetrokken kunnen zijn",
				mouth : " - Hun mondhoeken al naar beneden getrokken zijn of naar beneden beginnen te trekken",
			},
			scared_male: {
				opener: "We weten dat hij bang is omdat ",
				eyes : " - Zijn ogen wijd open zijn ",
				eyebrows : " - Zijn wenkbrauwen opgetrokken zijn ",
				mouth : " - Zijn mond horizontaal uitgerekt is en een beetje open",
			},
			scared_female: {
				opener: "We weten dat ze bang is omdat ",
				eyes : " - Haar ogen wijd open zijn",
				eyebrows : " - Haar wenkbrauwen opgetrokken zijn",
				mouth : " - Haar mond horizontaal uitgerekt is en een beetje open",
			},
			scared_both: {
				opener: "We weten dat ze bang zijn omdat",
				eyes : " - Hun ogen wijd open zijn ",
				eyebrows : " - Hun wenkbrauwen opgetrokken zijn",
				mouth : " - Hun monden horizontaal uitgerekt zijn en een beetje open",
			},
		},
	},
	incorrectStrings: {
		child: {
			angry: {
				opener: "Een boos gezicht ziet er zo uit:",
				eyes: " - De ogen zijn versmald",
				eyebrows: " - De wenkbrauwen zijn gefronst",
				mouth: " - De mond en kaak zijn gespannen",
			},
			sad: {
				opener: "Een verdrietig gezicht ziet er zo uit:",
				eyes: "",
				mouth: " - De mondhoeken zijn of al naar beneden getrokken of beginnen naar beneden te trekken",
				eyebrows: " - Hun wenkbrauwen kunnen schuin opgetrokken zijn",
			},
			scared: {
				opener: "Een bang gezicht ziet er zo uit:",
				mouth: " - De mond is horizontaal uitgerekt en een beetje open",
				eyes: " - De ogen zijn wijd open",
				eyebrows: " - De wenkbrauwen zijn opgetrokken",
			},
			happy: {
				opener: "Een blij gezicht ziet er zo uit:",
				mouth: " - De mondhoeken zijn omhoog getrokken",
				eyebrows: "",
				eyes: "",
			},
		},
		adolescent: {
			angry: {
				opener: "Een boos gezicht ziet er zo uit:",
				eyes: " - De ogen zijn versmald",
				eyebrows: " - De wenkbrauwen zijn gefronst",
				mouth: " - De mond en kaak zijn gespannen",
			},
			sad: {
				opener: "Een verdrietig gezicht ziet er zo uit:",
				eyes: "",
				mouth: " - De mondhoeken zijn of al naar beneden getrokken of beginnen naar beneden te trekken",
				eyebrows: " - Hun wenkbrauwen kunnen schuin opgetrokken zijn",
			},
			scared: {
				opener: "Een bang gezicht ziet er zo uit:",
				mouth: " - De mond is horizontaal uitgerekt en een beetje open",
				eyes: " - De ogen zijn wijd open ",
				eyebrows: " - De wenkbrauwen zijn opgetrokken",
			},
			happy: {
				opener: "Een blij gezicht ziet er zo uit:",
				mouth: " - De mondhoeken zijn omhoog getrokken",
				eyebrows: "",
				eyes: "",
			},
		}
	},
	peronIsEmotion: {
		happy: "{0} is blij.",
		sad: "{0} is verdrietig.",
		scared: "{0} is bang.",
		angry: "{0} is boos.",
	},
	HowDoTheyFeel: {
		HowDoTheyFeel: "Hoe voelen zij zich?",
		HowDoTheyFeelHint: "Kijk naar de ogen\nKijk naar de mond",
		KnowingHowSomeoneFeels: "begrijpen hoe iemand zich voelt",
		youWillSeeFacesShowingDifferentEmotions: "Je zal gezichten zien die verschillende emoties laten zien. <br> Kies hoe je denkt dat ze zich voelen",
	},
	howDoesNameFeelString: "Hoe voelt {0} zich hier?",
	whoIs: {
		happy: "Wie is er blij?",
		angry: "Wie is boos?",
		sad: "Wie is er verdrietig?",
		scared: "Wie is er bang?",
	},
	whichFaceIs: {
		happy: "Welk gezicht is blij?",
		angry: "Welk gezicht is boos?",
		sad: "Welk gezicht is verdrietig?",
		scared: "Welk gezicht is bang?",
	},

	IntroFirstHeader: "Vandaag gaan we bespreken hoe we verschillende emoties op verschillende gezichten kunnen herkennen",
	IntroFirstHeaderAdolescent: "Vandaag gaan we bespreken hoe we verschillende emoties op verschillende gezichten kunnen herkennen",
	whatAreEmotions: "Wat zijn emoties?",
	letsLookAtWhoIsHelpingUs: "Heel erg bedankt voor je hulp, Alex! Laten we eens kijken wie ons vandaag nog meer zal helpen",
	IntroSecondHeader: "Laten we eens doornemen wat we de vorige keer hebben geleerd. De foto's worden deze keer wat moeilijker.<br>Wat zijn emoties?",
	IntroSecondHeaderAdolescent: "Laten we eens doornemen wat we de vorige keer hebben geleerd. De foto's worden deze keer wat moeilijker.\nWat zijn emoties?",
	letsLookAtAlexWhenHeIs: {
		happy: "Laten we eens kijken hoe Alex eruit ziet als hij gelukkig is",
		sad: "Laten we eens kijken hoe Alex eruit ziet als hij verdrietig is",
		angry: "Laten we eens kijken hoe Alex eruit ziet als hij boos is",
		scared: "Laten we eens kijken hoe Alex eruitziet als hij bang is",
	},
	letsLookAtSomeoneElseWhenTheyAre: {
		happy: "Laten we eens kijken hoe iemand anders eruit ziet als ze gelukkig zijn",
		sad: "Laten we eens kijken hoe iemand anders eruit ziet als ze verdrietig zijn",
		angry: "  Laten we eens kijken hoe iemand anders eruitziet als ze boos zijn",
		scared: "Laten we eens kijken hoe iemand anders eruitziet als ze bang zijn",
	},
	session1AlexBubbles: {
		greeting: "Hallo, ik ben Alex. Ik ga je vandaag helpen.",
		emotionsExplenations: "Emoties zijn gevoelens, zoals blij of verdrietig zijn. Je voelt een emotie misschien voor een korte tijd of misschien voor een lange tijd.<br><br>We kunnen aan een gezichtsuitdrukking zien welke emotie iemand voelt.",
		whatWeAreDoingToday: "Vandaag gaan we uitleggen hoe je kunt zien dat iemand blij, verdrietig, bang of boos is door naar hun gezicht te kijken.",
		whatWeAreDoingToday2: "We weten hoe mensen zich voelen omdat we allemaal soortgelijke gezichten maken wanneer we emoties voelen.\nWe zullen je laten zien welke gezichten mensen maken wanneer ze deze emoties voelen.",
		whatWeAreDoingToday3: "Soms is het gezicht misschien heel duidelijk, maar soms is het moeilijker. \ nHet is heel belangrijk om naar het hele gezicht te kijken om te weten wat iemand voelt.",
		letsLookAtSomeExamples: "Laten we eens kijken naar de gezichten die mensen maken als ze deze verschillende emoties hebben.",
		letsStartOurFirstGame: "Super! Laten we beginnen met ons eerste spel.",

		emotionsExplenationsAdolescent: "Emoties zijn gevoelens, zoals gelukkig of verdrietig zijn. We voelen deze emoties op verschillende momenten. \ n \ n Aan de gezichtsuitdrukking kunnen we zien welke emotie iemand voelt.",
		emotionsExplenationsAdolescent2: "Emoties zijn gevoelens, zoals blij of verdrietig zijn. Je voelt een emotie misschien voor een korte tijd of misschien voor een lange tijd.\n\nWe kunnen aan een gezichtsuitdrukking zien welke emotie iemand voelt.",
	},
	iAm: {
		happy: "Ik ben blij.<br>Als ik blij ben:<br> - Zijn mijn mondhoeken omhoog getrokken",
		sad: "Ik ben verdrietig.<br>Als ik verdrietig ben:<br> - Zijn mijn mondhoeken naar beneden getrokken<br> - Kunnen mijn wenkbrauwen schuin omhoog lopen",
		angry: "Ik ben boos.<br> Als ik boos ben<br> - Zijn mijn ogen versmald<br> - Zijn mijn wenkbrauwen gefronst<br> - Is mijn mond gesloten en kan deze in een rechte lijn zijn",
		scared: "Ik ben bang.<br>Als ik bang ben:<br> - Zijn mijn ogen wijd open<br> - Zijn mijn wenkbrauwen opgetrokken<br> - Is mijn mond horizontaal uitgerekt en kan deze een beetje open zijn",
	},
	thisPersonIsWithReasoning: { // todo needs splitting into male and femail
		happy: "Deze persoon is blij.<br> - Zijn mondhoeken zijn omhoog getrokken",
		sad: "Deze persoon is verdrietig. <br> - Haar mondhoeken zijn naar beneden getrokken<br> - Haar wenkbrauwen kunnen schuin omhoog staan",
		angry: "Deze persoon is boos.<br> - Zijn ogen zijn versmald<br> - Zijn wenkbrauwen zijn gefronst<br> - Zijn mond is gesloten en kan in een rechte lijn zijn",
		scared: "Deze persoon is bang.<br> - Haar ogen zijn wijd open<br> - Haar wenkbrauwen zijn opgetrokken<br> - Haar mond is ook horizontaal uitgerekt en kan een beetje open zijn",
	},
	thisPersonIs: { // todo needs splitting into male and femail
		happy: "Deze persoon is blij.",
		sad: "Deze persoon is verdrietig.",
		angry: "Deze persoon is boos.",
		scared: "Deze persoon is bang.",
	},
	hiImString: "Hoi, ik ben {0}",


	makeAFace: "Maak een gezicht",
	makeAFaceBubble: "Match the photos to make a face",
	makeAFaceBubbleAdolescent: "Je zal verschillende kenmerken van het gezicht zien. <br> Je moet de gezichtskenmerken aan elkaar koppelen om een gezicht te creëren dat een bepaalde emotie vertoont",
	makeAFaceInstructionString: "Sleep de wenkbrauwen, ogen en mond om een gezicht te maken dat een emotie laat zien.",

	makeAFaceInstructionWithEmotionString: {
		happy : "Sleep de wenkbrauwen, ogen en mond om een blij gezicht te maken. Blijf doorgaan tot je het goed hebt.",
		sad : "Sleep de wenkbrauwen, ogen en mond om een verdrietig gezicht te maken. Blijf doorgaan tot je het goed hebt.",
		scared : "Sleep de wenkbrauwen, ogen en mond om een bang gezicht te maken. Blijf doorgaan tot je het goed hebt.",
		angry : "Sleep de wenkbrauwen, ogen en mond om een boos gezicht te maken. Blijf doorgaan tot je het goed hebt.",
	},

	copyTheFace: "Doe het gezicht na",
	copyThePhotoOnScreen: "Copy the photo on the screen", //*** */
	copyThePhotoOnScreenAdolescent: "Identificeer elke emotie, dan zie je je foto op het scherm. Probeer het gezicht op het scherm na te doen.",
	letsSeeHowYourPhotoLooks: "Laten we eens kijken hoe je foto eruitziet en die vergelijken met deze foto. Je kan nog een foto maken als je dat wil.", // TODO
	tryToCopyTheFace: "Doe je best om het gezicht na te doen",

	emotionalExperianceHeaderString: {
		happy: "Tell us about a time you were happy", //*** */
		sad: "Tell us about a time you were sad", //*** */
		scared: "Tell us about a time you were scared", //*** */
		angry: "Tell us about a time you were angry", //*** */
	},
	anotherEmotionalExperianceHeaderString: {
		happy: "Tell us about another time you were happy", //*** */
		sad: "Tell us about another time you were sad", //*** */
		scared: "Tell us about another time you were scared", //*** */
		angry: "Tell us about another time you were angry", //*** */
	},

	emotionVideoTopHeader: "Emotie videos",
	emotionalVideoFirstHeader: 'Zeg "stop" als je denkt dat je weet hoe ze zich voelen. Laten we samen oefenen.',
	emotionalVideoFirstHeaderAdolescent: 'Druk op `stop` als je denkt dat je een emotie op het gezicht van de persoon herkent en kies dan welke emotie correct is',
	emotionVideoHeader: "Laten we hetzelfde nog eens doen",
	emotionalVideoEndHeader: "Super! Laten we nu eens kijken hoe ze eruit zouden zien als je de video niet had gestopt.",
        videoPlayer: {
        play: "Afspelen",
        pause: "Pauzeren",
        reset: "Reset",
    },


	partsOfTheFaceIntroHeader: "Parts of the face", //*** */
	partsOfTheFaceIntroBubble: "Look at different parts of the face to know how someone feels", //*** */
	partsOfTheFaceIntroBubbleAdolescent: "Geef aan wat de belangrijke kenmerken voor elke emotie zijn",
	partsOfTheFace: {
        happy: {
            mouth: "{0} en {1} zijn hier gelukkig. Hoe zien hun monden eruit?",
        },
        sad: {
			mouth: "{0} en {1} zijn hier verdrietig. Hoe zien hun monden eruit?",
			eyebrows: "{0} en {1} zijn hier verdrietig. Hoe zien hun wenkbrauwen eruit?",
        },
        angry: {
            mouth: "{0} en {1} zijn hier boos. Hoe zien hun monden eruit?",
            eyebrows: "{0} en {1} zijn hier boos. Hoe zien hun wenkbrauwen eruit?",
        },
        scared: {
            mouth: "{0} en {1} zijn hier bang Hoe zien hun monden eruit?",
            eyebrows: "{0} en {1} zijn hier bang Hoe zien hun wenkbrauwen eruit?",
            eyes: "{0} en {1} zijn hier bang Hoe zien hun ogen eruit?", 
        },
	},

	reviewHeader: "Laten we eens kijken naar wat we vandaag hebben geleerd",
	youToldUsAboutTheTimeYouWere: {
		happy: "You told us about a time when you were happy:", //*** */
		sad: "You told us about a time when you were sad:", //*** */
		angry: "You told us about a time when you were angry:", //*** */
		scared: "You told us about a time when you were scared:", //*** */
	},
	weLearnedHowEachPartOfTheFaceLooksWhen: {
		scared: "We learned how each part of the face looks when someone is scared.",  //*** */
		sad: "We learned how each part of the face looks when someone is sad.", //*** */
		happy: "We learned how each part of the face looks when someone is happy.", //*** */
		angry: "We hebben geleerd hoe elk deel van het gezicht eruitziet als iemand boos is.", //*** */
	},
	theTopHalfOfTheirFaceLooksLikeThis:{
		male: "De bovenste helft van zijn gezicht ziet er zo uit:",
		female: "De bovenste helft van haar gezicht ziet er zo uit:",
	},
	theBottomHalfOfTheirFaceLooksLikeThis: {
		male: "De onderste helft van zijn gezicht ziet er zo uit:",
		female: "De onderste helft van haar gezicht ziet er zo uit:",
	},
	youHaveLearnedThatYouMightFeel: {
		happy: "You have learned that you might feel happy:", //*** */
		sad: "You have learned that you might feel sad:", //*** */
		angry: "You have learned that you might feel angry:", //*** */
		scared: "You have learned that you might feel scared:", //*** */
	},

	endGameMessage: "Goed gedaan, je bent klaar met dit spel. Je hebt het super gedaan! Sluit dit bericht om terug te keren naar het menu.",

	chooseTheEmotionHeader: "Kies de emotie",
	chooseTheEmotionBubble: "Kies wie een bepaalde emotie voelt",

	whenHaveYouFeltThisWay: "When have you felt this way?", //*** */
	whenHaveYouFeltThisWayBubble: "Tell us about a time when you had one of these emotions.", //*** */
	whenHaveYouFeltThisWayAdolescentBubble: "Choose the correct emotion then write about a time that you have felt that way.", //*** */

	quiz: "Quiz",
	howWellCanYouTellHowSomeoneFeels: "How well can you tell how someone feels?", //*** */
	quizStartAdolescent : "Je krijgt enkele foto's te zien die zijn gericht op alleen de gezichten van mensen. <br> Je moet kiezen welke emotie je denkt dat de persoon laat zien. Deze keer is er een ‘neutrale’ optie - je moet deze optie kiezen als je denkt dat de persoon helemaal geen emotie laat zien. <br> Je krijgt geen feedback.",
	quizEnd: "Goed gedaan! Je hebt alle spellen voor deze sessie afgerond. Laten we eens kijken waar we de volgende keer wat gedetailleerder naar zullen kijken:",
	weWillWorkOn: {
		angry : "We zullen meer gedetailleerd aan boos werken.",
		happy : "We zullen meer gedetailleerd aan blij werken.",
		sad : "We zullen meer gedetailleerd aan verdrietig werken.",
		scared : "We zullen meer gedetailleerd aan bang werken.",
	},
	youDidReallyWellAt: {
		happy : "Je hebt het heel goed gedaan voor blij!",
		sad : "Je hebt het heel goed gedaan voor verdrietig!",
		scared : "Je hebt het heel goed gedaan voor bang!",
		angry : "Je hebt het heel goed gedaan voor boos!",
	},

	EmotionStories: "Emotion stories", //*** */
	howWouldYouFeelInThisStory: "How would you feel in this story?", //*** */
	emotionStoriesBubble: {
		intro: "Read an emotion story and tell us how you would feel if this were to happen to you.", //*** */
		movedAway: "Your friend, whom you really liked to play with, has moved away. You can't play with this friend anymore.", //*** */
		breaksToy: "When someone breaks your favorite toy on purpose.", //*** */
		getToy: "When you get a toy you really wanted.", //*** */
		nightmare: "When you have a nightmare about a monster.", //*** */
		drivingTest: "You have just passed your driving test and you have to drive on the fast motorway for the first time by yourself", //*** */
		concertParty: "You have won a ticket to see your favourite band in concert, but it means missing your best friend's birthday party", //*** */
		notInvited: "You find out that you are the only one out of your friends who isn't invited to a party", //*** */
		missedTheBus: "You just watched a horror movie in the cinema. You have to walk home by yourself because your friend made you miss the last bus. ", //*** */
	},
	emotionStoriesForReview: {
		concert :"- If you won a ticket to see your favourite band in concert", //*** */
		driving: "- When you have to drive on the fast motorway for the first time by yourself.", //*** */
		missedTheBus: "- If your friend made you miss the last bus home", //*** */
		notInvited: "- If you were the only one of your friends not invited to a party", //*** */

	},
	WellDoneYouCouldFeel: {
		sad: "Well done, you could feel sad in this scenario!", //*** */
		angry: "Well done, you could feel angry in this scenario!", //*** */
		happy: "Well done, you could feel happy in this scenario!", //*** */
		scared: "Well done, you could feel scared in this scenario!", //*** */
	},
	youMightFeelThisWay: "You might feel this way, but it's likely you will also feel another emotion. How else might you feel?", //*** */

	talkingToYourFriend: "Talking to your friend", //*** */
	talkingToYourFriendIntroBubble: "What should you do if your friend has one of these emotions?", //*** */
	talkingToYourFriendIntroBubbleAdolescent: "Describe how you would respond to someone displaying an emotion.\nThen choose the correct response from 3 options", //*** */
	
	whatElseCouldYouDo: "What else could you do?", //*** */
	nameIsEmotionWhatShouldYouDo: {
		angry: "{0} is angry here, what should you do?", //*** */
		sad: "{0} is sad here, what should you do?", //*** */
		scared: "{0} is scared here, what should you do?", //*** */
		happy: "{0} is happy here, what should you do?", //*** */
	},
	talkingToFriendAnswers: {
		laughAtHim: "Laugh at him", //*** */
		laughAtHer: "Laugh at her", //*** */
		tellHimToHitSomeone: "Tell him to hit someone", //*** */
		talkToHimAskIfHeOk: "Talk to him and ask if he's OK", //*** */
		talkToHerAskIfHeOk: "Talk to her and ask if he's OK", //*** */
		teaseHim: "Tease Him", //*** */
		teaseHer: "Tease Her", //*** */
		beHappyToo: "Be happy too", //*** */
		makeHerSad: "make her sad" //*** */
	},
	talkingToFriendCorrectFeedback: {
		angry: "Well done, that is the right thing to do when your friend is feeling angry. It would be nice to talk to them and ask if they are OK.", //*** */
		scared: "Well done, that is the right thing to do when your friend is feeling scared. It would be nice to talk to them and ask if they are OK.", //*** */
		sad: "Well done, that is the right thing to do when your friend is feeling sad. It would be nice to talk to them and ask if they are OK.", //*** */
		happy: "Well done, that is the right thing to do when your friend is feeling happy. It would be nice to be happy too.", //*** */
	},
	talkingToFriendIncorrectFeedback: {
		angry: "No, that's not the right thing to do when your friend is feeling angry. Try again.", //*** */
		scared: "No, that's not the right thing to do when your friend is feeling scared. Try again.", //*** */
		happy: "No, that's not the right thing to do when your friend is feeling happy. Try again.", //*** */
		sad: "No, that's not the right thing to do when your friend is feeling sad. Try again.", //*** */
	},
	moreTalkingToFriendIncorrectFeedback: {
		angry: "{0} is angry. It wouldn't be very nice to laugh at him. It wouldn't be very nice to tell him to hit someone because they will get hurt. It would be nice to talk to him and ask if he's OK.", //*** */
		scared: "{0} is scared. It wouldn't be very nice to laugh at him or tease him. It would be nice to talk to him and ask if he's OK.", //*** */
		happy: "{0} is happy. It wouldn't be very nice to make her sad or tease her. Feeling happy is really nice so it's good to be happy with her", //*** */
		sad: "{0} is sad. It wouldn't be very nice to call her a wimp or laugh at her. It would be nice to talk to her and ask if she's OK.", //*** */
	},

	pleaseSelectASession: "Please select a session or the help module to start:", //*** */
	sessionMenuHeader: "Sessie {0} menu",
	sessionId: "Sessie {0}",
	pretest: "Pretest",
	posttest: "Posttest",
	home: "Home", //*** */
    help: "Help",

	pleaseCompletePrevious: "Rond alle voorgaande taken af vóór de terugblik alsjeblieft. Druk op OK om terug te keren naar het menu.",
	printReport: "Print uitslag",
	printHeader: "CERT Sessie 1 Uitslag",
	print_text: "Vul je naam in als je deze op de af te drukken uitslag wil hebben. We slaan je naam niet op:",//"Enter your name if you would like it on the printable report. We will not keep a record of your name:",
	hereAreYourQuizScores: "Hier zijn je quiz scores:",
	webcamMessage: "Je moet een webcam hebben om dit spel te kunnen spelen. Als je Internet Explorer gebruikt, schakel dan over naar een andere webbrowser. Als je een andere webbrowser gebruikt, probeer dan te updaten naar de nieuwste versie. Druk op OK om terug te keren naar het menu.",
	capture: "Maak foto",
	retake: "Herkansing",
	
	settings: "Settings", //*** */
	language: "Language", //*** */

	testHeader: "Emotion recognition test",
	testBubble: "In this task, you will be presented with lots of different photos of people. I would like you tell me what emotion you think this person is showing out of 5 options: happy, sad, scared, angry or no emotion. You should choose 'no emotion' when you think the person isn't showing any emotion. It might be quite easy for some faces but for other faces it might be quite difficult. The task will start with 5 practice tries." //*** */
};
