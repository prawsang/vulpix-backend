const PI_GROUP = {
	DEVICE: 'device',
	SIMCARD: 'simcard',
	USER: 'user',
	LOCATION: 'location',
}

const PII_TYPE = {
	advertiserId: { group: PI_GROUP.DEVICE, impact: true },
	androidId: { group: PI_GROUP.DEVICE, impact: true },
	deviceSerialNumber: { group: PI_GROUP.DEVICE, impact: true },
	googleServicesId: { group: PI_GROUP.DEVICE, impact: true },
	imei: { group: PI_GROUP.DEVICE, impact: true },
	macAddress: { group: PI_GROUP.DEVICE, impact: true },
	cellId: { group: PI_GROUP.SIMCARD, impact: true },
	simSerialNumber: { group: PI_GROUP.SIMCARD, impact: true },
	imsi: { group: PI_GROUP.SIMCARD, impact: true },
	localAreaCode: { group: PI_GROUP.SIMCARD, impact: true },
	phoneNumber: { group: PI_GROUP.SIMCARD, impact: true },
	age: { group: PI_GROUP.USER, impact: false },
	audioRecording: { group: PI_GROUP.USER, impact: false },
	calendar: { group: PI_GROUP.USER, impact: false },
	contactBook: { group: PI_GROUP.USER, impact: false },
	country: { group: PI_GROUP.USER, impact: false },
	ccv: { group: PI_GROUP.USER, impact: true },
	dob: { group: PI_GROUP.USER, impact: false },
	email: { group: PI_GROUP.USER, impact: true },
	gender: { group: PI_GROUP.USER, impact: false },
	name: { group: PI_GROUP.USER, impact: true },
	password: { group: PI_GROUP.USER, impact: false },
	photo: { group: PI_GROUP.USER, impact: false },
	physicalAddress: { group: PI_GROUP.USER, impact: true },
	relationshipStatus: { group: PI_GROUP.USER, impact: false },
	sms: { group: PI_GROUP.USER, impact: false },
	ssn: { group: PI_GROUP.USER, impact: true },
	timezone: { group: PI_GROUP.USER, impact: false },
	username: { group: PI_GROUP.USER, impact: false },
	video: { group: PI_GROUP.USER, impact: false },
	webBrowsingLog: { group: PI_GROUP.USER, impact: false },
	gps: { group: PI_GROUP.LOCATION, impact: false },
}

const calculateScore = (piResult) => {
	const leaksByGroup = {
		[PI_GROUP.DEVICE]: 0,
		[PI_GROUP.SIMCARD]: 0,
		[PI_GROUP.USER]: 0,
		[PI_GROUP.LOCATION]: 0,
	}
	Object.keys(PII_TYPE).forEach((piElement) => {
		piGroup = PII_TYPE[piElement].group

		highImpact = PII_TYPE[piElement].impact
		if (highImpact && piResult[piElement]) {
			leaksByGroup[piGroup] += 5
		} else {
			leaksByGroup[piGroup] += piResult[piElement] ? 1 : 0
		}
	})

	let vulpixScore = 0

	Object.keys(leaksByGroup).forEach((group) => {
		if (leaksByGroup[group] > 4) {
			vulpixScore += 25
		} else {
			vulpixScore += (leaksByGroup[group] / 4) * 25
		}
	})

	return Math.floor(vulpixScore)
}

module.exports = {
	calculateScore,
}
