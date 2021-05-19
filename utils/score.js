const PI_GROUP = {
	DEVICE: 'device',
	SIMCARD: 'simcard',
	USER: 'user',
	LOCATION: 'location',
}

const PII_TYPE = {
	advertiserId: { group: PI_GROUP.DEVICE },
	androidId: { group: PI_GROUP.DEVICE },
	deviceSerialNumber: { group: PI_GROUP.DEVICE },
	googleServicesId: { group: PI_GROUP.DEVICE },
	imei: { group: PI_GROUP.DEVICE },
	macAddress: { group: PI_GROUP.DEVICE },
	cellId: { group: PI_GROUP.SIMCARD },
	simSerialNumber: { group: PI_GROUP.SIMCARD },
	imsi: { group: PI_GROUP.SIMCARD },
	localAreaCode: { group: PI_GROUP.SIMCARD },
	phoneNumber: { group: PI_GROUP.SIMCARD },
	age: { group: PI_GROUP.USER },
	audioRecording: { group: PI_GROUP.USER },
	calendar: { group: PI_GROUP.USER },
	contactBook: { group: PI_GROUP.USER },
	country: { group: PI_GROUP.USER },
	ccv: { group: PI_GROUP.USER },
	dob: { group: PI_GROUP.USER },
	email: { group: PI_GROUP.USER },
	gender: { group: PI_GROUP.USER },
	name: { group: PI_GROUP.USER },
	password: { group: PI_GROUP.USER },
	photo: { group: PI_GROUP.USER },
	physicalAddress: { group: PI_GROUP.USER },
	relationshipStatus: { group: PI_GROUP.USER },
	sms: { group: PI_GROUP.USER },
	ssn: { group: PI_GROUP.USER },
	timezone: { group: PI_GROUP.USER },
	username: { group: PI_GROUP.USER },
	video: { group: PI_GROUP.USER },
	webBrowsingLog: { group: PI_GROUP.USER },
	gps: { group: PI_GROUP.LOCATION },
}

const calculateScore = (piResult) => {
	const leaksByGroup = {
		[PI_GROUP.DEVICE]: 0,
		[PI_GROUP.SIMCARD]: 0,
		[PI_GROUP.USER]: 0,
		[PI_GROUP.LOCATION]: 0,
	}
	Object.keys(PII_TYPE).forEach((piElement) => {
		const piGroup = PII_TYPE[piElement].group
		leaksByGroup[piGroup] += piResult[piElement]
	})

	let vulpixScore = 0

	Object.keys(leaksByGroup).forEach((group) => {
		if (leaksByGroup[group] > 4) {
			vulpixScore += 25
		} else {
			vulpixScore += (leaksByGroup[group] / 4) * 25
		}
	})

	console.log(Math.floor(vulpixScore))

	return Math.floor(vulpixScore)
}

module.exports = {
	calculateScore,
}
