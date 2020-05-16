export const people = {
	laura: {
		gender: "female",
	},
	emily: {
		gender: "female",
	},
	tom: {
		gender: "male",
	},
	jack: {
		gender: "male",
	},
	sophie: {
		gender: "female"
	},
	matt: {
		gender: "male",
	},
	emma: {
		gender: "female",
	},
	amy: {
		gender: "female",
	},
	daniel: {
		gender: "male",
	},
	connor: {
		gender: "male",
	},
	jacob: {
		gender: "male",
	},
	matt: {
		gender: "male",	
	},
	ryan: {
		gender: "male",
	},
	sarah: {
		gender: "female",
	},
	will: {
		gender: "male",
	},
	ella: {
		gender: "female",
	},
	ben: {
		gender: "male",
	},
	alison: {
		gender: "female",
	},
	alex: {
		gender: "male",
	},
	james: {
		gender: "male",
	},
	lily: {
		gender: "female",
	},
	sally: {
		gender: "female",
	},
	sian: {
		gender: "female",
	},
	aron: {
		gender: "male",
	}
}

export function getGender(name){
	return people[name].gender;
}
