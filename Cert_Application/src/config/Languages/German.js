export const German = {
	name: "German",
	nameNative: "Deutsche",

    taskNames: {
        introduction: "Einleitung",
        howDoTheyFeel: "Wie fühlen sie sich?",
        chooseTheEmotion: "Welche Emotion beschreibt das Gesicht am besten?",
        whenHaveYouFeltThisWay: "Wann hast du dich so gefühlt?",
        emotionVideos: "Emotionsvideos",
        copyTheFace: "Mache den Gesichtsausdruck nach", 
		makeAFace: "Mach ein Gesicht", 
        partsOfTheFace: "Teile des Gesichts",
        importantFeatures: "Teile des Gesichts",
        emotionalStories: "Emotionsgeschichten", 
		talkingToYourFriend: "Mit einem Freund sprechen", 
        respondingToEmotions: "Mit einem Freund sprechen",
        review: "Rückmeldung",
        quiz: "Quiz",
    },
	emotions: {
		happy: "glücklich",
		sad: "traurig",
		angry: "wütend",
		scared: "verängstigt",
		noEmotion: "keine Emotion"
	},
	featureDescriptions: {
		mouth: {
			curvedUp: "Nach oben gebogen", 
			curvedDown: "Nach unten gekrümmt", 
			staightAccross: "genau gegenüber",
			strechedAcrossAndOpen: "gestreckt und offen",
			closedInALine: "Geschlossen, in einer geraden Linie",
			closed: "Geschlossen",
			open: "Offen",
            tensed: "Geschlossen, in einer geraden Linie", // this is just closed in a straight line
		},
		eyebrows: {
			slopingUp: "schräg nach oben", 
			pulledUp: "angehoben",
			pulledTogether: "Zusammengezogen",
			lowered: "Gesenkt",
            raised: "angehoben", 
			scrunchedTogether: "Zusammengezogen", //this is just pulled together
		},
		eyes: {
			closed: "Geschlossen",
			narrowed: "Verengt",
			wideOpen: "Weit geöffnet",
		}
	},
	whatEmotionLooksLikeThis: "Welche Emotion wird durch folgende Gesichtsmerkmale erkannt?",
    incorrect_alert: "Das ist nicht richtig. Versuche es nochmals!",
	correct_alert: "Gut gemacht, das ist richtig!",
	correctStrings: {
    	child: {
    		angry_male: {
    			opener: "\n>Wir wissen, dass er wütend ist, weil .. ",
    			eyes : "\n - seine Augen zusammengekniffen sind",
    			eyebrows : "\n - seine Augenbrauen zusammengezogen sind",
    			mouth : "\n - sein Mund geschlossen ist und wie eine gerade Linie aussehen kann",
    		},
    		angry_female: {
    			opener: "\nWir wissen, dass sie wütend ist, weil ..",
    			eyes : "\n - ihre Augen zusammengekniffen sind",
    			eyebrows : "\n - ihre Augenbrauen zusammengezogen sind",
    			mouth : "\n - ihr Mund geschlossen ist und wie eine gerade Linie aussehen kann",
    		},
    		angry_both: {
    			opener: "\nWir wissen, dass sie wütend sind, weil .. ",
    			eyes : "\n - ihre Augen zusammengekniffen sind",
    			eyebrows : "\n - ihre Augenbrauen zusammengezogen sind",
    			mouth : "\n - ihre Münder geschlossen sind und wie eine gerade Linie aussehen können<br><br> - Drücke auf 'Weiter' um fortzufahren",
    		},
    		happy_male: {
    			opener: "\nWir wissen, dass er glücklich ist, weil ..",
    			eyes : "",
    			eyebrows : "",
                mouth : "\n - seine Mundwinkel nach oben gebogen sind",
    		},
    		happy_female: {
                opener: "\nWir wissen, dass sie glücklich ist, weil ..",
    			eyes : "",
    			eyebrows : "",
                mouth : "\n - ihre Mundwinkel nach oben gebogen sind",
    		},
    		happy_both: {
    			opener: "\nWir wissen, dass sie glücklich sind, weil .. ",
    			eyes : "",
    			eyebrows : "",
    			mouth : "\n - ihre Mundwinkel nach oben gebogen sind",
    		},
    		sad_male: {
    			opener: "\nWir wissen, dass er traurig ist, weil ..",
    			eyes : "",
    			eyebrows : "\n - seine Augenbrauen geneigt sein könnten und nach oben zeigen",
    			mouth : "\n - seine Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		sad_female: {
    			opener: "\nWir wissen, dass sie traurig ist, weil .. ",
    			eyes : "",
    			eyebrows : "\n - ihre Augenbrauen geneigt sein könnten und nach oben zeigen",
    			mouth : "\n - ihre Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		sad_both: {
    			opener: "\nWir wissen, dass sie traurig sind, weil .. ",
    			eyes : "",
    			eyebrows : "\n - ihre Augenbrauen geneigt sein können und nach oben zeigen",
    			mouth : "\n - ihre Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		scared_male: {
    			opener: "\Wir wissen, dass er angst hat, weil .. ",
    			eyes : "\n - seine Augen weit geöffnet sind",
    			eyebrows : "", // should have a translation
    			mouth : "\n - sein Mund gestreckt und leicht geöffnet ist",
    		},
    		scared_female: {
    			opener: "\nWir wissen, dass sie angst hat, weil .. ",
    			eyes : "\n ihre Augen weit geöffnet sind",
    			eyebrows : "", // should have a traslation
    			mouth : "\n - ihr Mund gestreckt und leicht geöffnet ist",
    		},
    		scared_both: {
    			opener: "\nWir wissen, dass sie angst haben, weil .. ",
    			eyes : "\n - ihre Augen weit geöffnet sind",
    			eyebrows : "", // should have a translation
    			mouth : "\n - ihre Münder gestreckt und leicht geöffnet sind",
    		},
        },
        adolescent: { //**
    		angry_male: {
    			opener: "\n>Wir wissen, dass er wütend ist, weil .. ",
    			eyes : "\n - seine Augen zusammengekniffen sind",
    			eyebrows : "\n - seine Augenbrauen zusammengezogen sind",
    			mouth : "\n - sein Mund geschlossen ist und wie eine gerade Linie aussehen kann",
    		},
    		angry_female: {
    			opener: "\nWir wissen, dass sie wütend ist, weil ..",
    			eyes : "\n - ihre Augen zusammengekniffen sind",
    			eyebrows : "\n - ihre Augenbrauen zusammengezogen sind",
    			mouth : "\n - ihr Mund geschlossen ist und wie eine gerade Linie aussehen kann",
    		},
    		angry_both: {
    			opener: "\nWir wissen, dass sie wütend sind, weil .. ",
    			eyes : "\n - ihre Augen zusammengekniffen sind",
    			eyebrows : "\n - ihre Augenbrauen zusammengezogen sind",
    			mouth : "\n - ihre Münder geschlossen sind und wie eine gerade Linie aussehen können<br><br> - Drücke auf 'Weiter' um fortzufahren",
    		},
    		happy_male: {
    			opener: "\nWir wissen, dass er glücklich ist, weil ..",
    			eyes : "",
    			eyebrows : "",
                mouth : "\n - seine Mundwinkel nach oben gebogen sind",
    		},
    		happy_female: {
                opener: "\nWir wissen, dass sie glücklich ist, weil ..",
    			eyes : "",
    			eyebrows : "",
                mouth : "\n - ihre Mundwinkel nach oben gebogen sind",
    		},
    		happy_both: {
    			opener: "\nWir wissen, dass sie glücklich sind, weil .. ",
    			eyes : "",
    			eyebrows : "",
    			mouth : "\n - ihre Mundwinkel nach oben gebogen sind",
    		},
    		sad_male: {
    			opener: "\nWir wissen, dass er traurig ist, weil ..",
    			eyes : "",
    			eyebrows : "\n - seine Augenbrauen geneigt sein könnten und nach oben zeigen",
    			mouth : "\n - seine Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		sad_female: {
    			opener: "\nWir wissen, dass sie traurig ist, weil .. ",
    			eyes : "",
    			eyebrows : "\n - ihre Augenbrauen geneigt sein könnten und nach oben zeigen",
    			mouth : "\n - ihre Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		sad_both: {
    			opener: "\nWir wissen, dass sie traurig sind, weil .. ",
    			eyes : "",
    			eyebrows : "\n - ihre Augenbrauen geneigt sein können und nach oben zeigen",
    			mouth : "\n - ihre Mundwinkel entweder nach unten gekrümmt sind oder diese beginnen nach unten zu hängen",
    		},
    		scared_male: {
    			opener: "\Wir wissen, dass er angst hat, weil .. ",
    			eyes : "\n - seine Augen weit geöffnet sind",
    			eyebrows : "", // should have a translation
    			mouth : "\n - sein Mund gestreckt und leicht geöffnet ist",
    		},
    		scared_female: {
    			opener: "\nWir wissen, dass sie angst hat, weil .. ",
    			eyes : "\n ihre Augen weit geöffnet sind",
    			eyebrows : "", // should have a traslation
    			mouth : "\n - ihr Mund gestreckt und leicht geöffnet ist",
    		},
    		scared_both: {
    			opener: "\nWir wissen, dass sie angst haben, weil .. ",
    			eyes : "\n - ihre Augen weit geöffnet sind",
    			eyebrows : "", // should have a translation
    			mouth : "\n - ihre Münder gestreckt und leicht geöffnet sind",
    		},
        },
	},
	incorrectStrings: {
        child: {
    		angry: "\nEin wütendes Gesicht sieht so aus: <br><br> - Die Augen sind zusammengekniffen<br><br> - Die Augenbrauen sind zusammengezogen<br><br> - Der Mund ist geschlossen und kann wie eine gerade Linie aussehen",
    		sad: "\nEin trauriges Gesicht sieht so aus: <br><br> - Die Mundwinkel sind entweder nach unten gekrümmt oder beginnen nach unten zu hängen <br><br> - Die Augenbrauen könnten geneigt sein und nach oben zeigen",
    		scared: "\nin verängstigtes Gesicht sieht so aus: <br><br> - Die Augen sind weit geöffnet<br><br> - Die Augenbrauen sind hochgezogen <br><br> - Der Mund ist gestreckt und leicht geöffnet",
    		happy: "\nEin glückliches Gesicht sieht so aus: <br><br> - Die Mundwinkel sind nach oben gebogen",
        },
        child: {
			angry: {
				opener: "Ein wütendes Gesicht sieht so aus: ",
				eyes: "- Die Augen sind zusammengekniffen",
				eyebrows: "- Die Augenbrauen sind zusammengezogen",
				mouth: "- Der Mund ist geschlossen und kann wie eine gerade Linie aussehen",
			},
			sad: {
				opener: "Ein trauriges Gesicht sieht so aus:",
				eyes: "",
				mouth: "- Die Mundwinkel sind entweder nach unten gekrümmt oder beginnen nach unten zu hängen",
				eyebrows: "- Die Augenbrauen könnten geneigt sein und nach oben zeigen",
			},
			scared: {
				opener: "Ein verängstigtes Gesicht sieht so aus:",
				mouth: "- Der Mund ist gestreckt und leicht geöffnet",
				eyes: "- Die Augen sind weit geöffnet",
				eyebrows: "- Die Augenbrauen sind hochgezogen",
			},
			happy: {
				opener: "Ein glückliches Gesicht sieht so aus:",
				mouth: "- Die Mundwinkel sind nach oben gebogen",
				eyebrows: "",
				eyes: "",
			},
		},
       	adolescent: { // same as child
			angry: {
				opener: "Ein wütendes Gesicht sieht so aus: ",
				eyes: "- Die Augen sind zusammengekniffen",
				eyebrows: "- Die Augenbrauen sind zusammengezogen",
				mouth: "- Der Mund ist geschlossen und kann wie eine gerade Linie aussehen",
			},
			sad: {
				opener: "Ein trauriges Gesicht sieht so aus:",
				eyes: "",
				mouth: "- Die Mundwinkel sind entweder nach unten gekrümmt oder beginnen nach unten zu hängen",
				eyebrows: "- Die Augenbrauen könnten geneigt sein und nach oben zeigen",
			},
			scared: {
				opener: "Ein verängstigtes Gesicht sieht so aus:",
				mouth: "- Der Mund ist gestreckt und leicht geöffnet",
				eyes: "- Die Augen sind weit geöffnet",
				eyebrows: "- Die Augenbrauen sind hochgezogen",
			},
			happy: {
				opener: "Ein glückliches Gesicht sieht so aus:",
				mouth: "- Die Mundwinkel sind nach oben gebogen",
				eyebrows: "",
				eyes: "",
			},
		}
	},
	peronIsEmotion: {
		happy: "{0} ist glücklich",
		sad: "{0} ist traurig",
		scared: "{0} hat angst",
		angry: "{0} ist wütend",
    },
	HowDoTheyFeel: {
		HowDoTheyFeel: "How do they feel?",//**
        HowDoTheyFeelHint: "Schau dir die Augen an\nSchau dir den Mund an",
		KnowingHowSomeoneFeels: "Wissen wie jemand sich fühlt",
        youWillSeeFacesShowingDifferentEmotions: "You will see faces showing different emotions.\nChoose how you think they feel",//**
	},
	howDoesNameFeelString: "Wie fühlt sich {0} gerade?",
	whoIs: {
		happy: "Wer ist glücklich?",
		angry: "Wer ist wütend?",
		sad: "Wer ist traurig?",
		scared: "Wer hat angst?",
	},
    whichFaceIs: {
		happy: "Wer ist glücklich?",
		angry: "Wer ist wütend?",
		sad: "Wer ist traurig?",
		scared: "Wer hat angst?",
	},

	IntroFirstHeader: "Heute werden wir dir etwas über Emotionen beibringen. <br> Wir haben einen Freund, der uns dabei hilft. Er heisst Alex.",
	IntroFirstHeaderAdolescent: "NEEDS TRANSLATING: Today, we are going to talk through how to identify different emotions on different faces",//**
    whatAreEmotions: "Was sind Emotionen?",
	letsLookAtWhoIsHelpingUs: "Vielen Dank für deine Hilfe, Alex! Lass uns sehen, wer uns heute zusätzlich noch unterstützen wird",
	IntroSecondHeader: "Alex ist zurück um uns zu helfen!\nLass uns nochmals repetieren was wir letztes Mal gelernt haben. Doch zuerst möchte Alex dich noch wissen lassen, \ndass die Bilder diesmal etwas schwieriger zu interpretieren sein werden.",
    IntroSecondHeaderAdolescent: "NEEDS TRANSLATING: Let's go over what we learned last time. The pictures will be a bit more difficult this time. \nWhat are emotions?",//**
	letsLookAtAlexWhenHeIs: {
		happy:  "Lass uns anschauen wie Alex aussieht wenn er glücklich ist",
		sad:    "Lass uns anschauen wie Alex aussieht wenn er traurig ist",
		angry:  "Lass uns anschauen wie Alex aussieht wenn er wütend ist",
		scared: "Lass uns anschauen wie Alex aussieht wenn er angst hat",
	},
	letsLookAtSomeoneElseWhenTheyAre: {
		happy:  "Lass uns anschauen wie jemand aussieht wenn er glücklich ist",
		sad:    "Lass uns anschauen wie jemand aussieht wenn er traurig ist",
		angry:  "Lass uns anschauen wie jemand aussieht wenn er wütend ist",
		scared: "Lass uns anschauen wie jemand aussieht wenn er angst hat",
	},
	session1AlexBubbles: {
		greeting: "Hallo, ich bin Alex. Ich werde dich heute begleiten bzw. unterstützen.",
		emotionsExplenations: "Emotionen sind Gefühle. Glücklich, traurig, verängstigt oder wütend zu sein sind alles unterschiedliche Emotionen.\nWir fühlen diese Emotionen in unterschiedlichen Momenten. Du bist vielleicht glücklich wenn du mit deine Freunden spielst.",
		whatWeAreDoingToday: "Heute werden wir dir erklären wie man erahnen kann, ob jemand glücklich, traurig, ängstlich oder wütend ist indem man das Gefühl vom Gesicht abliest.",
		whatWeAreDoingToday2: "Wir wissen wie sich Leute fühlen, weil wir alle ähnliche Gesichter machen wenn wir Emotionen fühlen.\nWir werden dir zeigen wie Gesichter von Leuten aussehen wenn sie eine jeweilige Emotion fühlen.",
		whatWeAreDoingToday3: "Manchmal das Ablesen einer Emotion ziemlich offensichtlich, aber teilweise kann es auch schwieriger sein. <br>Es ist wirklich wichtig das ganze Gesicht zu betrachten um zu wissen wie sich jemand fühlt.",
		letsLookAtSomeExamples: "Schauen wir uns die Gesichter an, die Menschen machen, wenn sie diese unterschiedlichen Emotionen haben.",
		letsStartOurFirstGame: "Grossartig! Lass uns das erste Spiel starten.",
//**
        emotionsExplenationsAdolescent: "NEEDS TRANSLATING: Emotions are feelings, such as being happy or sad. We feel these emotions at different times. \n\nWe can tell what emotion someone is feeling from their facial expression.",
		emotionsExplenationsAdolescent2: "NEEDS TRANSLATING: Emotions are feelings, such as being happy or sad. You might feel an emotion for a short time or you might feel it for a long time.\n\nWe can tell what emotion someone is feeling from their facial expression.",
	},
	iAm: {
		happy: "Ich bin glücklich.\nWenn ich glücklich bin:\n - Meine Mundwinkel sind nach oben gebogen",
		sad: "Ich bin traurig.\nWenn ich traurig bin:\n - Meine Mundwinkel sind nach unten gekrümmt\n - Die Augenbrauen könnten geneigt sein und nach oben zeigen",
		angry: "Ich bin wütend.\n Wenn ich wütend bin\n - Meine Augen sind zusammengekniffen\n - Meine Augenbrauen sind zusammengezogen\n - Mein Mund ist geschlossen und kann wie eine gerade Linie aussehen",
		scared: "Ich habe angst.\nWenn ich angst habe:\n - Meine Augen sind weit offen\n - Meine Augenbrauen sind hochgezogen\n - Mein Mund ist gestreckt und kann leicht geöffnet sein",
	},
	thisPersonIsWithReasoning: {
		happy: "Diese Person ist glücklich.\n - Seine Mundwinkel sind nach oben gebogen",
		sad: "Diese Person ist traurig.\n - Die Mundwinkel sind entweder nach unten gekrümmt oder beginnen nach unten zu hängen\n - Die Augenbrauen können geneigt sein und nach oben zeigen",
		angry: "Diese Person ist wütend.\n - Seine Augen sind zusammengekniffen\n - Seine Augenbrauen sind zusammengezogen\n - Sein Mund ist geschlossen und kann wie eine Linie aussehen",
		scared: "Diese Person hat angst.\n -  Ihre Augen sind weit geöffnet\n - Ihre Augenbrauen sind hochgezogen\n - Ihr Mund ist ausserdem gestreckt und kann leicht geöffnet sein",
	},
    thisPersonIs: { 
		happy: "Diese Person ist glücklich.",
		sad: "Diese Person ist traurig.",
		angry: "Diese Person ist wütend.",
		scared: "Diese Person hat angst.",
	},
	hiImString: "Hallo, ich bin {0}",


	makeAFace: "Mach ein Gesicht",
	makeAFaceBubble: "Kombiniere die so Fotos, dass diese ein Gesicht ergeben.",
    makeAFaceBubbleAdolescent: "You will see different features of the face. <br> You have to match the facial features to create a face displaying a certain emotion",//**
	makeAFaceInstructionString: "Verwende die Augenbrauen, Augen und den Mund um ein Gesicht zu machen welches eine Emotion zeigt",

	makeAFaceInstructionWithEmotionString: {
		happy : "Verwende die Augenbrauen, Augen und den Mund um ein glückliches Gesicht zu machen. Fahre fort bis du es korrekt machst.",
		sad : "Verwende die Augenbrauen, Augen und den Mund um ein trauriges Gesicht zu machen. Fahre fort bis du es korrekt machst.",
		scared : "Verwende die Augenbrauen, Augen und den Mund um ein erschrockenes Gesicht zu machen. Fahre fort bis du es korrekt machst.",
		angry : "Verwende die Augenbrauen, Augen und den Mund um ein wütendes Gesicht zu machen. Fahre fort bis du es korrekt machst.",
	},

	copyTheFace: "Mache den Gesichtsausdruck nach",
	copyThePhotoOnScreen: "Kopiere das Foto auf dem Bildschirm",
    copyThePhotoOnScreenAdolescent: "Identify each emotion then you will see your picture on the screen. Try to copy the face on the screen",//**
    letsSeeHowYourPhotoLooks: "  Lass uns anschauen wie dein Foto aussieht und lass es uns mit dem von {0} vergleichen. Du kannst auch ein anderes Foto machen wenn du willst.",
	tryToCopyTheFace: "Versuche dein Bestes beim nachstellen des Gesichtsausdrucks.",

	emotionalExperianceHeaderString: {
		happy: "Erzähl uns von einem Moment als du glücklich warst ..",
		sad: "Erzähl uns von einem Moment als du traurig warst ..",
		scared: "Erzähl uns von einem Moment als du angst hattest ..",
		angry: "Erzähl uns von einem Moment als du wütend warst ..",
	},
	anotherEmotionalExperianceHeaderString: {
		happy: "Erzähle uns von einem weiteren Moment als du glücklich warst ..",
		sad: "Erzähle uns von einem weiteren Moment als du traurig warst ..",
		scared: "Erzähle uns von einem weiteren Moment als du angst hattest ..",
		angry: "Erzähle uns von einem weiteren Moment als du wütend warst ..",
	},

	emotionVideoTopHeader: "Emotion videos",
    emotionalVideoFirstHeader: 'Sag "Stopp", wenn du denkst dass du weist wie sie sich fühlen. Lass es uns zusammen versuchen.',
    emotionalVideoFirstHeaderAdolescent: 'Press ‘stop’ when you think you can recognise an emotion on the person’s face then choose which emotion is correct',//**
	emotionVideoHeader: "Lass uns nochmals dasselbe tun",
    emotionalVideoEndHeader: "Grossartig! Jetzt lass uns sehen wie sie ausschauen würden, wenn du das Video nicht gestoppt hättest",
    videoPlayer: {
        play: "Play",
        pause: "Pause",
        reset: "Zurücksetzen",
    },


	partsOfTheFaceIntroHeader: "Teile des Gesichts",
	partsOfTheFaceIntroBubble: "Schau dir verschiedene Teile des Gesichts an um herauszufinden wie sich jemand fühlt",
    partsOfTheFaceIntroBubbleAdolescent: "Identify what are the important features for each emotion",//**
    partsOfTheFace: {
        happy: {
            mouth: "{0} und {1} sind gerade glücklich. Wie sehen ihre Münder aus?",
        },
        sad: {
            mouth: "{0} und {1} sind gerade traurig. Wie sehen ihre Münder aus?",
            eyebrows: "{0} und {1} sind gerade traurig. Wie sehen ihre Augenbrauen aus?"
        },
        angry: {
            mouth: "{0} und {1} sind gerade wütend. Wie sehen ihre Münder aus?",
            eyebrows: "{0} und {1} sind gerade wütend. Wie sehen ihre Augenbrauen aus?",
        },
        scared: {
            mouth: "{0} und {1} sind gerade traurig. Wie sehen ihre Münder aus?",
            eyebrows: "{0} und {1} sind gerade traurig. Wie sehen ihre Augenbrauen aus?",
            eyes: "{0} und {1} haben gerade angst. Wie sehen ihre Augen aus?", 
        },
	},

	reviewHeader: "Lass uns anschauen was wir heute gelernt haben",
	youToldUsAboutTheTimeYouWere: {
		happy: "Du hast uns von einem Moment erzählt als du glücklich warst:",
		sad: "Du hast uns von einem Moment erzählt als du traurig warst:",
		angry: "Du hast uns von einem Moment erzählt als du wütend warst:",
		scared: "Du hast uns von einem Moment erzählt als du erschrocken bist:",
	},
	weLearnedHowEachPartOfTheFaceLooksWhen: {
		scared: "Wir haben gelernt wie jeder Teil des Gesichts aussieht wenn jemand angst hat.",
		sad: "Wir haben gelernt wie jeder Teil des Gesichts aussieht wenn jemand traurig ist. ",
		happy: "Wir haben gelernt wie jeder Teil des Gesichts aussieht wenn jemand glücklich ist.",
		angry: "Wir haben gelernt wie jeder Teil des Gesichts aussieht wenn jemand wütend ist. ",
	},
	theTopHalfOfTheirFaceLooksLikeThis:{
		male: "Die obere Hälfte seines Gesichts sieht so aus:",
		female: "Die obere Hälfte ihres Gesichts sieht so aus:",
	},
	theBottomHalfOfTheirFaceLooksLikeThis: {
		male: "Die untere Hälfte seines Gesichts sieht so aus:",
		female: "Die untere Hälfte ihres Gesichts sieht so aus:",
	},
	youHaveLearnedThatYouMightFeel: {
		happy: "Du hast herausgefunden, dass du vielleicht glücklich werden würdest:",
		sad: "Du hast herausgefunden, dass du dich vielleicht traurig fühlen würdest:",
		angry: "Du hast herausgefunden, dass du vielleicht wütend werden würdest:",
		scared: "  Du hast herausgefunden, dass du vielleicht angst haben würdest:",
	},

	endGameMessage: "Bravo, du hast das Spiel beendet. Das hast du gut gemacht! Schliesse diese Meldung und kehre zum Menü zurück.",

	chooseTheEmotionHeader: "Choose the emotion",
    chooseTheEmotionBubble: "Wähle die Person aus welche in diesem Moment eine bestimme Emotion erlebt",

	whenHaveYouFeltThisWay: "Wann hast du dich so gefühlt?",
	whenHaveYouFeltThisWayBubble: "Erzähl uns von einem Moment als du eines dieser Emotionen gefühlt hast.",
    whenHaveYouFeltThisWayAdolescentBubble: "Choose the correct emotion then write about a time that you have felt that way.",

	quiz: "Quiz",
    howWellCanYouTellHowSomeoneFeels: "Wie kannst du erkennen wie sich jemand fühlt?",
    quizStartAdolescent : "NEEDS TRANSLATING: You will be presented with some photos focused on just people’s faces. \n You have to choose what emotion you think the person is displaying. This time there is a ‘neutral’ option – you should choose this option if you think the person isn’t displaying any emotion at all. \n You won’t be given any feedback.",//**
	quizEnd: "Gut gemacht! Du hast alle Spiele dieser Sitzung erfolgreich beendet. Lass uns anschauen was wir nächstes Mal etwas detaillierter behandeln werden:",
	weWillWorkOn: {
		angry : 'Wir werden an der Emotion "wütend" noch detaillierter arbeiten.',
		happy : 'Wir werden an der Emotion "glücklich" noch detaillierter arbeiten.',
		sad : 'Wir werden an der Emotion "traurig" noch detaillierter arbeiten.',
		scared : 'Wir werden an der Emotion "angst" noch detaillierter arbeiten.',
	},
	youDidReallyWellAt: {
		happy : "Du hast die Emotion 'ich bin glücklich' richtig gut nachgemacht!",
		sad : "Du hast die Emotion 'ich bin traurig' richtig gut nachgemacht!",
		scared : "Du hast die Emotion 'ich habe angst' richtig gut nachgemacht!",
		angry : "Du hast die Emotion 'ich bin wütend' richtig gut nachgemacht!",
	},

	emotionStories: "Emotionsgeschichten",
	howWouldYouFeelInThisStory: "Wie würdest du dich in dieser Geschichte fühlen?",
	emotionStoriesBubble: {
		intro: "Lies eine Emotionsgeschichte und erzähle und wie du dich fühlen würdest, wenn dasselbe dir passieren würde.",
		movedAway: "Wenn ein guter Freund, mit welchem du wirklich gerne spielen warst, wegziehen würde. Du kannst nicht mehr mit diesem Freund spielen.",
		breaksToy: "Wenn jemand dein Spielzeug mit Absicht zerstört.",
		getToy: "Wenn du ein Spielzeug geschenkt kriegst, welches du dir schon lange gewünscht hast.",
		nightmare: "Wenn du einen Albtraum über Monster hättest.",
	    //**
        drivingTest: "NEED TRANSLATING: You have just passed your driving test and you have to drive on the fast motorway for the first time by yourself",
		concertParty: "NEED TRANSLATING: You have won a ticket to see your favourite band in concert, but it means missing your best friend's birthday party",
		notInvited: "NEED TRANSLATING: You find out that you are the only one out of your friends who isn't invited to a party",
		missedTheBus: "NEED TRANSLATING: You just watched a horror movie in the cinema. You have to walk home by yourself because your friend made you miss the last bus. ",
	},
	emotionStoriesForReview: {//**
		concert :"NEED TRANSLATING: - If you won a ticket to see your favourite band in concert",
		driving: "NEED TRANSLATING: - When you have to drive on the fast motorway for the first time by yourself.",
		missedTheBus: "NEED TRANSLATING: - If your friend made you miss the last bus home",
		notInvited: "NEED TRANSLATING: - If you were the only one of your friends not invited to a party",
	},
	WellDoneYouCouldFeel: {
		sad: "Gut gemacht, in diesem Szenario könntest du traurig sein!",
		angry: "Gut gemacht, in diesem Szenario könntest du wütend sein!",
		happy: "Gut gemacht, in diesem Szenario könnest du glücklich sein!",
		scared: "Gut gemacht, in diesem Szenario könntest du angst haben!",
	},
	youMightFeelThisWay: "Du kannst dich so fühlen, aber es ist auch möglich dass du eine andere Emotion fühlst. Wie kannst du dich sonst noch fühlen?",

	talkingToYourFriend: "Mit einem Freund sprechen",
    talkingToYourFriendIntroBubble: "Was solltest du tun wenn ein Freund eine dieser Emotionen hat?",
    talkingToYourFriendIntroBubbleAdolescent: "NEEDS TRANSLATING: Describe how you would respond to someone displaying an emotion.\nThen choose the correct response from 3 options",//**

    whatElseCouldYouDo: "Was könntest du sonst noch tun?",
	nameIsEmotionWhatShouldYouDo: {
		angry: "{0} ist gerade wütend, was sollst du tun?",
		sad: "{0} ist gerade traurig, was sollst du tun?",
		scared: "{0} hat angst, was sollst du tun?",
		happy: "{0} ist gerade glücklich, was sollst du tun?",
	},
	talkingToFriendAnswers: {
		laughAtHim: "Ihn auslachen",
		laughAtHer: "Sie auslachen",
		tellHimToHitSomeone: "Sag ihm er soll jemanden schlagen",
		talkToHimAskIfHeOk: "Rede mit ihm und frag ihn wie es ihm geht",
		talkToHerAskIfHeOk: "Rede mit ihr und frag sie wie es ihr geht",
		teaseHim: "ärgere ihn",
		teaseHer: "ärgere sie",
		beHappyToo: "Sei auch glücklich",
		makeHerSad: "Mach sie traurig"
	},
	talkingToFriendCorrectFeedback: {
		angry: "Gut gemacht, so verhält man sich wenn ein Freund wütend ist. Es wäre nett, wenn man mit ihm spricht und ihn fragen würde, ob es ihm gut geht.",
		scared: "Gut gemacht, so verhält man sich wenn ein Freund angst hat. Es wäre nett, wenn man mit ihm spricht und ihn fragen würde, ob es ihm gut geht.",
		sad: "Gut gemacht, so verhält man sich wenn ein Freund traurig ist. Es wäre nett, wenn man mit ihm spricht und ihn fragen würde, ob es ihm gut geht.",
		happy: "Gut gemacht, so verhält man sich wenn ein Freund glücklich ist. Es wäre nett, wenn man sich für ihn freuen würde und auch glücklich ist.",
	},
	talkingToFriendIncorrectFeedback: {
		angry: "Nein, das ist nicht die richtige Art sich zu verhalten wenn ein Freund wütend ist. Versuche es nochmals.",
		scared: "Nein, das ist nicht die richtige Art sich zu verhalten wenn ein Freund angst hat. Versuche es nochmals.",
		happy: "Nein, das ist nicht die richtige Art sich zu verhalten wenn ein Freund glücklich ist. Versuche es nochmals.",
		sad: "Nein, das ist nicht die richtige Art sich zu verhalten wenn ein Freund traurig ist. Versuche es nochmals.",
    },
    moreTalkingToFriendIncorrectFeedback: {
		angry: "{0} ist wütend. Es wäre nicht sehr nett ihn auszulachen. Es wäre auch nicht nett ihm zu sagen, dass er jemand schlagen soll, da die geschlagene Person und {0} sich verletzen könnten. Es wäre nett mit ihm zu sprechen und ihn zu fragen, ob es ihm gut geht.",
		scared: "{0} hat angst. Es wäre nicht sehr nett ihn auszulachen oder ihn zu ärgern. Es wäre nett mit ihm zu sprechen und ihn zu fragen, ob es ihm gut geht.",
		happy: "{0} ist glücklich. Es wäre nicht freundlich sie traurig zu machen oder sie zu ärgern. Glücklich zu sein ist sehr schön, folglich ist es toll mit ihr glücklich zu sein",
		sad: '{0} ist traurig. Es wäre nicht sehr nett wenn du sie ein "Weichei" nennen oder sie auslachen würdest. Es wäre nett wenn du mit ihr sprechen würdest und sie fragen würdest, wie es ihr geht.',
	},

	pleaseSelectASession: "Bitte wähle eine Sitzung oder das Hilfe-Modul aus um zu Starten.",
	sessionMenuHeader: "Menu der Sitzung {0}",
	sessionId: "Sitzung {0}",
    home: "Home",
	help: "Hilfe",
	
    pleaseCompletePrevious: "Bitte beende alle vorherigen Aufgaben bevor du mit der Rückmeldung startest.",
    printReport: "Bericht ausdrucken",
    printHeader: "CERT Sitzung 1 - Bericht",
    hereAreYourQuizScores: "Hier sind deine Ergebnisse des Quiz:",
    webcamMessage: "Du musst eine Webcam anschliessen um dieses Spiel zu spielen. Wenn du Internet Explorer benutzt, wechsle bitte zu einem anderen Web Browser. Wenn du einen anderen Web Browser benutzt, versuche ihn auf die neuste Version zu upzudaten. Drücke auf OK um zum Menu zurückzukehren.",
    capture: "Erfassen",
    retake: "Wiederholen",
	
	settings: "Einstellungen",
	language: "Sprache",
};
