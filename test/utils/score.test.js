const { calculateScore } = require('../../utils/score')

describe('calculateScore', () => {
	it('should calculate score correctly', () => {
		const input1 = {
			advertiserId: true,
			androidId: true,
			deviceSerialNumber: true,
			googleServicesId: true,
			imei: true,
			macAddress: true,
			cellId: true,
			simSerialNumber: true,
			imsi: true,
			localAreaCode: true,
			phoneNumber: true,
			age: true,
			audioRecording: true,
			calendar: true,
			contactBook: true,
			country: true,
			ccv: true,
			dob: true,
			email: true,
			gender: true,
			name: true,
			password: true,
			photo: true,
			physicalAddress: true,
			relationshipStatus: true,
			sms: true,
			ssn: true,
			timezone: true,
			username: true,
			video: true,
			webBrowsingLog: true,
			gps: true,
		}
		expect(calculateScore(input1)).toBe(100)
	})
})
