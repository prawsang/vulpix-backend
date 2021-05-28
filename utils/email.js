const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'vulpix.project.chula@gmail.com',
		pass: process.env.GMAIL_PASSWORD,
	},
})

const ERROR_MESSAGE = {
	UNKNOWN_ERROR:
		'An unknown error has occurred while testing your requested application.',
	DEVICE_OFFLINE:
		'Technical issues were experienced during the testing of your requested application.',
	DYNAMIC_TEST_ERROR:
		'Technical issues were experienced during the testing of your requested application.',
	TIMEOUT_ERROR: 'Your requested application took too long to test.',
	PAID_APP_ERROR: 'We currently do not support testing of paid applications.',
	NOT_SUPPORTED_ERROR:
		'Your requested application is not supported by our testing scripts',
	GAMES_CAT_ERROR: 'We currently do not support testing of games.',
	APP_NOT_FOUND_ERROR: 'Your requested application is not found.',
	ANALYZER_ERROR:
		'Technical issues were experienced during the testing of your requested application.',
	EXTERNAL_INTERFACE_ERROR:
		'Technical issues were experienced during the testing of your requested application.',
	BAD_INPUT_ERROR:
		'Technical issues were experienced during the testing of your requested application.',
	ALREADY_TESTED_ERROR:
		'The application you requested had already been tested.',
}

const getErrorMessage = (error, applicationId) => {
	if (error !== 'ALREADY_TESTED_ERROR') {
		return `${
			ERROR_MESSAGE[error] ||
			'Technical issues were experienced during the testing of your requested application.'
		} \n \nApplication ID: ${applicationId} \n \nWe are sorry for your inconvinience. \n\n- Vulpix Team`
	} else {
		return `${ERROR_MESSAGE[error]} The result are available at \n${process.env.FRONTEND_URL}/browse/application/${applicationId} \n \nApplication Id: ${applicationId} \n \nThank you for using VULPIX. \n\n- VULPIX Team`
	}
}

const sendEmail = ({ email, error, applicationId }) => {
	const messageOptions = {
		subject: error
			? 'An Error has Occurred While Testing Your Requested Application'
			: 'Test Result for Your Requested Application is Ready',
		text: error
			? getErrorMessage(error, applicationId)
			: `The testing results for your application is ready to be viewed at \n${process.env.FRONTEND_URL}/browse/application/${applicationId} \n \nApplication Id: ${applicationId} \n \nThank you for using VULPIX. \n\n- VULPIX Team`,
		to: email,
		from: 'vulpix.project.chula@gmail.com',
	}

	transporter.sendMail(messageOptions)
}

module.exports = {
	sendEmail,
}
